'use strict';
/* Regression: Vietnamese coverage for all current MLS public pages.
 * Run with: node tests/vietnamese-website.test.cjs
 */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const dictJs=read('assets/i18n-vi.js');
const sharedJs=read('assets/i18n.js');
new vm.Script(dictJs,{filename:'assets/i18n-vi.js'});
new vm.Script(sharedJs,{filename:'assets/i18n.js'});
const sandbox={window:{}};
vm.runInNewContext(dictJs,sandbox);
const dict=sandbox.window.MLSWebsiteVI;
assert.ok(dict&&Object.keys(dict).length>=150,'Full Vietnamese dictionary expected');
assert.ok(sharedJs.includes('vi:{name:"Tiếng Việt",locale:"vi"}'));
assert.ok(sharedJs.includes('T.vi=window.MLSWebsiteVI||{}'));
assert.ok(sharedJs.includes('if(raw.startsWith("vi"))return"vi";'));
assert.ok(sharedJs.includes('localStorage.setItem("mls_web_lang",lang)'));
assert.ok(sharedJs.includes('vi:"Bản dịch tiếng Việt'),'Vietnamese legal disclaimer required');
const exemptions=new Set([
 'My Life Square','Looi Boon Ping','mylifesquare22@gmail.com','1,440',
 'ALP','LLP','LEP','H','B','K','R','01','02','03',
 '+','−','=','↗','.'
]);
const pages=['index.html','privacy.html','terms.html','support.html','delete-data.html','methodology.html'];
let total=0,translated=0;
for(const page of pages){
 const html=read(page);
 assert.ok(html.includes('<html lang="en" translate="no" class="notranslate">'),'English source page kept: '+page);
 assert.ok(html.includes('<meta name="google" content="notranslate">'),'Chrome automatic translation disabled on '+page);
 assert.ok(html.includes('<script src="assets/i18n-vi.js?v=20261105-language"></script><script src="assets/i18n.js?v=20261105-language"></script>'),
  'Vietnamese script must load before shared translator: '+page);
 const body=html.replace(/<head[\s\S]*?<\/head>/i,'').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'');
 const strings=[...body.matchAll(/>([^<>]+)</g)]
  .map(x=>x[1].replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').trim()).filter(Boolean);
 for(const text of strings){
  total++;
  if(exemptions.has(text))continue;
  assert.ok(Object.hasOwn(dict,text),'Untranslated visible text on '+page+': '+text);
  assert.ok(typeof dict[text]==='string'&&dict[text].trim(),'Empty translation on '+page+': '+text);
  translated++;
 }
 console.log('PASS '+page+': '+strings.length+' text nodes');
}
console.log('PASS Vietnamese website: '+Object.keys(dict).length+' dictionary keys; '+translated+'/'+total+' text nodes translated (remaining tokens are names, numbers, identifiers or symbols).');
