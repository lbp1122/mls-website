'use strict';
// Regression for Android MLS -> website language handoff and Chrome translation.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const site=read('assets/i18n.js');
const match=site.match(/(function canonicalLang\(raw\)\{[\s\S]*?\n\}\nfunction guess\(\)\{[\s\S]*?\n\})\nfunction mapText/);
assert.ok(match,'Website language canonicalization and selection functions must exist');
function visit(search,saved,browser='en-US'){
 const sandbox={
  URLSearchParams,
  window:{location:{search}},
  localStorage:{getItem:key=>key==='mls_web_lang'?saved:null},
  navigator:{language:browser},
  LANGS:{en:{},ms:{},'zh-CN':{},'zh-TW':{},th:{},ja:{},ko:{},vi:{}}
 };
 vm.runInNewContext(match[1]+'\nresult=guess();',sandbox);
 return sandbox.result;
}
assert.equal(visit('?lang=en','zh-CN','zh-CN'),'App English wins over saved Chinese');
assert.equal(visit('?lang=zh','en'),'zh-CN');
assert.equal(visit('?lang=zh-Hant','en'),'zh-TW');
assert.equal(visit('?lang=zh-CN','en'),'zh-CN');
assert.equal(visit('?lang=zh-TW','en'),'zh-TW');
for(const lang of ['en','ms','th','ja','ko','vi'])assert.equal(visit('?lang='+lang,'zh-CN'),lang);
assert.equal(visit('?lang=unknown','ms'),'ms','Unknown app value cannot replace saved website choice');
assert.equal(visit('','zh-TW'),'zh-TW','Normal browser navigation retains website selection');
assert.equal(visit('',null,'vi-VN'),'vi','Browser language remains last-resort default');
assert.equal(visit('',null,'zh-HK'),'zh-TW');
assert.match(site,/n\.parentElement\.closest\("\[data-mls-literal\]"\)/,'Name protection skipped by manual translation');
assert.match(site,/window\.history\.replaceState\(null,"",url\.pathname\+url\.search\+url\.hash\)/,'Manual language selection persists in URL');
assert.match(site,/function stampLanguageLinks\(lang\)/,'Website passes locale into internal page links');
assert.match(site,/const lang=guess\(\);\s*\/\/ Persist the app-provided language,[\s\S]*?localStorage\.setItem\("mls_web_lang",lang\);/,'App website language persists when navigating to Terms or Support');
const pages=['index.html','privacy.html','terms.html','support.html','delete-data.html','methodology.html'];
for(const name of pages){
 const html=read(name);
 assert.match(html,/<html lang="en" translate="no" class="notranslate">/,'Stop third-party browser auto-translation: '+name);
 assert.match(html,/<meta name="google" content="notranslate">/,'Google Translate opt-out: '+name);
 assert.match(html,/assets\/i18n\.js\?v=20261105-language/,'Updated website JS: '+name);
 assert.match(html,/data-mls-literal="true">My Life Square<\/span>/,'Protect brand name: '+name);
 if(html.includes('Looi Boon Ping')&&name!=='index.html')
   assert.match(html,/Looi Boon Ping/,'Original legal name preserved: '+name);
}
assert.match(read('support.html'),/data-mls-literal="true">Looi Boon Ping<\/span>/,'Operator name never translated on support page');
console.log('PASS MLS website language handoff, eight languages, English over saved Chinese, automatic translation disabled and proper-name protection.');