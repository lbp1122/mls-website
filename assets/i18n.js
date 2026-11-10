(() => {
const LANGS={
 en:{name:"English",locale:"en"},
 ms:{name:"Bahasa Melayu",locale:"ms"},
 "zh-CN":{name:"简体中文",locale:"zh-CN"},
 "zh-TW":{name:"繁體中文",locale:"zh-TW"},
 th:{name:"ไทย",locale:"th"},
 ja:{name:"日本語",locale:"ja"},
 ko:{name:"한국어",locale:"ko"},
 vi:{name:"Tiếng Việt",locale:"vi"}
};

const T={
 ms:{
"How it works":"Cara ia berfungsi","Four Squares":"Empat Square","Methodology":"Metodologi","Privacy":"Privasi","Support":"Sokongan","Home":"Laman utama","Terms":"Terma",
"Life Points • personal ledger":"Life Points • lejar peribadi","Your life,":"Hidup anda,","at a glance.":"sekilas pandang.","My Life Square turns everyday actions into a clear personal ledger: what builds your life, what erodes it, and how the balance changes over time.":"My Life Square menukar tindakan harian kepada lejar peribadi yang jelas: apa yang membina hidup anda, apa yang menghakisnya, dan bagaimana bakinya berubah dari semasa ke semasa.",
"Explore MLS":"Terokai MLS","Privacy & Legal":"Privasi & Undang-undang","Android testing in progress • iOS planned • Global version":"Ujian Android sedang berjalan • iOS dirancang • Versi global",
"A life ledger, not another score.":"Lejar kehidupan, bukan sekadar satu skor.","MLS uses Asset Life Points (ALP) and Liability Life Points (LLP) to show how actions accumulate across four important areas of life. The difference is your Life Equity.":"MLS menggunakan Asset Life Points (ALP) dan Liability Life Points (LLP) untuk menunjukkan bagaimana tindakan terkumpul dalam empat bidang penting kehidupan. Perbezaannya ialah Life Equity anda.",
"Asset Life Points":"Asset Life Points","Life-building actions such as movement, learning, meaningful connection, reflection and service.":"Tindakan yang membina kehidupan seperti pergerakan, pembelajaran, hubungan bermakna, refleksi dan khidmat.",
"Liability Life Points":"Liability Life Points","Actions that erode health, time, relationships, knowledge or personal values.":"Tindakan yang menghakis kesihatan, masa, hubungan, pengetahuan atau nilai peribadi.",
"Equity":"Ekuiti","Life Equity":"Life Equity","Your accumulated Life Assets minus Life Liabilities — shown over time, not as a fixed ceiling.":"Life Assets terkumpul ditolak Life Liabilities — dipaparkan mengikut masa, bukan sebagai had tetap.",
"Journey":"Perjalanan","Progress over time":"Kemajuan dari semasa ke semasa","Review changes by day, month and year while preserving the underlying activity history.":"Semak perubahan mengikut hari, bulan dan tahun sambil mengekalkan sejarah aktiviti asal.",
"One Life Square.":"Satu Life Square.","Four dimensions.":"Empat dimensi.","Life Total consolidates Health, Knowledge, Relationship and Belief. Each Square has its own Assets, Liabilities and Equity. They do not need to be equal.":"Life Total menggabungkan Health, Knowledge, Relationship dan Belief. Setiap Square mempunyai Assets, Liabilities dan Equity sendiri. Ia tidak perlu sama rata.",
"Read the methodology":"Baca metodologi","Life Assets":"Life Assets","Life Liabilities":"Life Liabilities",
"Evidence-informed. Transparent about uncertainty.":"Berpandukan bukti. Telus tentang ketidakpastian.","Health coefficients are calibrated from published guidance and peer-reviewed evidence. MLS then converts those inputs into its own transparent Life Point framework.":"Pekali kesihatan ditentukur daripada garis panduan diterbitkan dan bukti semakan rakan sebaya. MLS kemudian menukar input itu kepada rangka kerja Life Pointnya sendiri yang telus.",
"Health evidence":"Bukti kesihatan","MLS references leading health authorities such as WHO, AHA and CDC together with peer-reviewed research. These organisations do not issue or endorse MLS points.":"MLS merujuk pihak berkuasa kesihatan terkemuka seperti WHO, AHA dan CDC bersama penyelidikan semakan rakan sebaya. Organisasi ini tidak mengeluarkan atau menyokong mata MLS.",
"Stress testing":"Ujian tekanan","The Health model has been stress-tested across 100,000+ simulated health scenarios to check consistency, plausibility and edge cases.":"Model Health telah diuji tekanan merentasi lebih 100,000 senario kesihatan simulasi untuk memeriksa konsistensi, kewajaran dan kes luar biasa.",
"No medical diagnosis":"Bukan diagnosis perubatan","MLS is a wellbeing and self-tracking tool. Life Points are not clinical scores, biological age or medical risk predictions.":"MLS ialah alat kesejahteraan dan penjejakan kendiri. Life Points bukan skor klinikal, umur biologi atau ramalan risiko perubatan.",
"Privacy first":"Privasi diutamakan","The current MLS test architecture keeps user-entered data on-device. MLS does not sell personal data or use health information for advertising.":"Seni bina ujian MLS semasa menyimpan data yang dimasukkan pengguna pada peranti. MLS tidak menjual data peribadi atau menggunakan maklumat kesihatan untuk pengiklanan.",
"Privacy and trust are part of the product.":"Privasi dan kepercayaan ialah sebahagian daripada produk.","Public legal pages are maintained here for app-store review and users worldwide.":"Halaman undang-undang awam diselenggara di sini untuk semakan gedung aplikasi dan pengguna di seluruh dunia.",
"Privacy Policy":"Dasar Privasi","How MLS handles personal and wellbeing information.":"Cara MLS mengendalikan maklumat peribadi dan kesejahteraan.","Terms of Use":"Terma Penggunaan","Use, limitations and medical disclaimer.":"Penggunaan, batasan dan penafian perubatan.","Contact, data deletion and app assistance.":"Hubungan, pemadaman data dan bantuan aplikasi.",
"Operator:":"Pengendali:","Contact:":"Hubungan:","All rights reserved.":"Hak cipta terpelihara.",
"Effective date:":"Tarikh berkuat kuasa:","Privacy contact:":"Hubungan privasi:","This policy covers the current My Life Square architecture. It will be updated before any future feature changes how personal data is collected, transmitted or shared.":"Dasar ini meliputi seni bina My Life Square semasa. Ia akan dikemas kini sebelum mana-mana ciri masa depan mengubah cara data peribadi dikumpul, dihantar atau dikongsi.",
"1. Scope":"1. Skop","This Privacy Policy explains how My Life Square (“MLS”) handles information when you use the app and related website.":"Dasar Privasi ini menerangkan cara My Life Square (“MLS”) mengendalikan maklumat apabila anda menggunakan aplikasi dan laman web berkaitan.",
"2. Current app data handling":"2. Pengendalian data aplikasi semasa","In the current MLS test build, Life Point entries, routines, language preferences and related app information are processed and stored locally on the user’s device. The current Android build does not request the Android INTERNET permission and does not transmit MLS app data to the operator, advertisers, analytics providers or data brokers.":"Dalam binaan ujian MLS semasa, entri Life Point, rutin, pilihan bahasa dan maklumat aplikasi berkaitan diproses dan disimpan secara tempatan pada peranti pengguna. Binaan Android semasa tidak meminta kebenaran INTERNET Android dan tidak menghantar data aplikasi MLS kepada pengendali, pengiklan, penyedia analitik atau broker data.",
"MLS does not sell personal information.":"MLS tidak menjual maklumat peribadi.","3. Health and wellbeing information":"3. Maklumat kesihatan dan kesejahteraan",
"MLS may process information users enter about activities, nutrition, movement, habits, relationships, learning, reflection and other wellbeing-related behaviours. In the current app build, that information remains on-device.":"MLS mungkin memproses maklumat yang dimasukkan pengguna tentang aktiviti, pemakanan, pergerakan, tabiat, hubungan, pembelajaran, refleksi dan tingkah laku kesejahteraan lain. Dalam binaan aplikasi semasa, maklumat itu kekal pada peranti.",

"4. Biometric authentication":"4. Pengesahan biometrik","MLS may use the operating system’s biometric or device-credential authentication to protect access to the app. MLS does not receive or store fingerprints, face templates or other biometric identifiers. Authentication is handled by the operating system.":"MLS mungkin menggunakan pengesahan biometrik atau kelayakan peranti sistem operasi untuk melindungi akses kepada aplikasi. MLS tidak menerima atau menyimpan cap jari, templat wajah atau pengecam biometrik lain. Pengesahan dikendalikan oleh sistem operasi.",
"5. Sharing":"5. Perkongsian","The current app build does not transmit or share MLS user data with third parties. If third-party services are introduced later, this policy will identify the service, data involved, purpose and applicable user choices.":"Binaan aplikasi semasa tidak menghantar atau berkongsi data pengguna MLS dengan pihak ketiga. Jika perkhidmatan pihak ketiga diperkenalkan kemudian, dasar ini akan mengenal pasti perkhidmatan, data terlibat, tujuan dan pilihan pengguna yang berkenaan.",
"6. Advertising and sale of data":"6. Pengiklanan dan penjualan data","MLS does not use personal or health information for targeted advertising and does not sell personal information. Health or fitness data obtained through platform health frameworks will not be used for advertising, marketing profiles or unrelated data mining.":"MLS tidak menggunakan maklumat peribadi atau kesihatan untuk pengiklanan tersasar dan tidak menjual maklumat peribadi. Data kesihatan atau kecergasan yang diperoleh melalui rangka kerja kesihatan platform tidak akan digunakan untuk pengiklanan, profil pemasaran atau perlombongan data yang tidak berkaitan.",
"7. Data retention and deletion":"7. Penyimpanan dan pemadaman data","Current MLS data is stored locally until you delete it using available app controls, choose “Delete all local MLS data”, clear the app’s storage, or uninstall the app. The current app build does not create a remote MLS account.":"Data MLS semasa disimpan secara tempatan sehingga anda memadamkannya menggunakan kawalan aplikasi yang tersedia, memilih “Delete all local MLS data”, mengosongkan storan aplikasi, atau menyahpasang aplikasi. Binaan aplikasi semasa tidak mencipta akaun MLS jauh.",
"If account creation is introduced later, MLS will add an in-app account-deletion path, an external web deletion mechanism where required, and a documented retention policy before release.":"Jika penciptaan akaun diperkenalkan kemudian, MLS akan menambah laluan pemadaman akaun dalam aplikasi, mekanisme pemadaman web luaran apabila diperlukan, dan dasar penyimpanan yang didokumenkan sebelum keluaran.",
"8. Security":"8. Keselamatan","MLS uses operating-system security controls and may use biometric or device-credential access protection where supported. No storage method is completely risk-free, so users should maintain device security and current operating-system protections.":"MLS menggunakan kawalan keselamatan sistem operasi dan mungkin menggunakan perlindungan akses biometrik atau kelayakan peranti jika disokong. Tiada kaedah penyimpanan yang bebas risiko sepenuhnya, jadi pengguna perlu mengekalkan keselamatan peranti dan perlindungan sistem operasi terkini.",
"9. Children":"9. Kanak-kanak","MLS is not designed as a child-directed service. Distribution settings, target audience and age ratings will be configured according to the actual shipping feature set in each app store.":"MLS tidak direka sebagai perkhidmatan yang ditujukan kepada kanak-kanak. Tetapan pengedaran, khalayak sasaran dan penarafan umur akan dikonfigurasi mengikut set ciri sebenar yang dihantar di setiap gedung aplikasi.",
"10. Health and medical disclaimer":"10. Penafian kesihatan dan perubatan","MLS is a wellbeing and personal-tracking tool. It is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition.":"MLS ialah alat kesejahteraan dan penjejakan peribadi. Ia bukan peranti perubatan dan tidak mendiagnosis, merawat, menyembuhkan atau mencegah sebarang penyakit atau keadaan perubatan.",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are educational and self-tracking constructs. They are not clinical scores, biological age, medical risk predictions or guarantees of health outcomes.":"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity dan pandangan berkaitan ialah konstruk pendidikan dan penjejakan kendiri. Ia bukan skor klinikal, umur biologi, ramalan risiko perubatan atau jaminan hasil kesihatan.",
"Health-related coefficients are informed by published guidance and peer-reviewed research, but the MLS Life Point conversion is an MLS model and is not issued or endorsed by WHO, AHA, CDC or another health authority. For medical advice, diagnosis or treatment, consult a qualified healthcare professional.":"Pekali berkaitan kesihatan dipandu oleh garis panduan diterbitkan dan penyelidikan semakan rakan sebaya, tetapi penukaran MLS Life Point ialah model MLS dan tidak dikeluarkan atau disokong oleh WHO, AHA, CDC atau pihak berkuasa kesihatan lain. Untuk nasihat, diagnosis atau rawatan perubatan, rujuk profesional penjagaan kesihatan yang berkelayakan.",
"11. International users":"11. Pengguna antarabangsa","MLS is intended for a global audience. Privacy and data-protection rights vary by jurisdiction. MLS will comply with applicable laws in the regions where the service is offered.":"MLS ditujukan kepada khalayak global. Hak privasi dan perlindungan data berbeza mengikut bidang kuasa. MLS akan mematuhi undang-undang yang terpakai di rantau tempat perkhidmatan ditawarkan.",
"12. Changes":"12. Perubahan","This policy may be updated when MLS changes features or data practices. The effective date will be revised when material changes are made.":"Dasar ini mungkin dikemas kini apabila MLS mengubah ciri atau amalan data. Tarikh berkuat kuasa akan disemak apabila perubahan material dibuat.",
"13. Contact":"13. Hubungan","Privacy enquiries:":"Pertanyaan privasi:",
"Purpose":"Tujuan","My Life Square (“MLS”) is provided for personal informational, educational and wellbeing-tracking purposes.":"My Life Square (“MLS”) disediakan untuk tujuan maklumat peribadi, pendidikan dan penjejakan kesejahteraan.",
"Not professional advice":"Bukan nasihat profesional","MLS is not a substitute for medical, psychological, legal, financial or other regulated professional advice. MLS is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition. Consult qualified professionals where appropriate.":"MLS bukan pengganti kepada nasihat profesional perubatan, psikologi, undang-undang, kewangan atau profesional terkawal lain. MLS bukan peranti perubatan dan tidak mendiagnosis, merawat, menyembuhkan atau mencegah sebarang penyakit atau keadaan perubatan. Rujuk profesional berkelayakan apabila sesuai.",
"Life Point methodology":"Metodologi Life Point","Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are MLS-designed constructs. They are not clinical scores, verified measures of longevity, biological age, disease probability or guaranteed outcomes. The methodology and coefficients may evolve as evidence, validation and product design develop.":"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity dan pandangan berkaitan ialah konstruk yang direka oleh MLS. Ia bukan skor klinikal, ukuran jangka hayat yang disahkan, umur biologi, kebarangkalian penyakit atau hasil terjamin. Metodologi dan pekali mungkin berkembang apabila bukti, pengesahan dan reka bentuk produk berkembang.",
"User responsibility":"Tanggungjawab pengguna","You are responsible for the accuracy of information you enter, reviewing entries and corrections, decisions you make using app information, and maintaining device security and backups where applicable.":"Anda bertanggungjawab atas ketepatan maklumat yang anda masukkan, semakan entri dan pembetulan, keputusan yang anda buat menggunakan maklumat aplikasi, serta mengekalkan keselamatan peranti dan sandaran jika berkenaan.",
"Availability and changes":"Ketersediaan dan perubahan","Features may be changed, improved, suspended or removed as MLS develops. Test and pre-release builds may contain incomplete functionality.":"Ciri mungkin diubah, ditambah baik, digantung atau dialih keluar apabila MLS berkembang. Binaan ujian dan pra-keluaran mungkin mengandungi fungsi yang belum lengkap.",
"Acceptable use":"Penggunaan yang boleh diterima","Do not use MLS for unlawful activity, to harm others, to misrepresent clinical or professional advice, or to interfere with the app, website or security systems.":"Jangan gunakan MLS untuk aktiviti menyalahi undang-undang, mencederakan orang lain, menyalahgambarkan nasihat klinikal atau profesional, atau mengganggu aplikasi, laman web atau sistem keselamatan.",
"Use of MLS is also subject to the":"Penggunaan MLS juga tertakluk kepada","For My Life Square support, privacy enquiries, feedback or store-review contact, email us.":"Untuk sokongan My Life Square, pertanyaan privasi, maklum balas atau hubungan semakan gedung, e-mel kami.",
"Support & privacy":"Sokongan & privasi","Data deletion":"Pemadaman data","The current MLS app does not create a remote MLS account. User-entered MLS data is designed to remain on-device. You can delete local MLS data from the app’s Privacy & Legal screen, clear app storage through your device settings, or uninstall the app.":"Aplikasi MLS semasa tidak mencipta akaun MLS jauh. Data MLS yang dimasukkan pengguna direka untuk kekal pada peranti. Anda boleh memadam data MLS tempatan daripada skrin Privacy & Legal aplikasi, mengosongkan storan aplikasi melalui tetapan peranti, atau menyahpasang aplikasi.",
"If account or cloud functionality is introduced later, this page will be updated with the required online account/data-deletion process.":"Jika fungsi akaun atau awan diperkenalkan kemudian, halaman ini akan dikemas kini dengan proses pemadaman akaun/data dalam talian yang diperlukan.",
"Before contacting support":"Sebelum menghubungi sokongan","Include your app version and test number.":"Sertakan versi aplikasi dan nombor ujian anda.","Describe what you expected and what happened.":"Terangkan apa yang anda jangkakan dan apa yang berlaku.","Do not email passwords, device unlock codes or sensitive medical records.":"Jangan e-mel kata laluan, kod buka kunci peranti atau rekod perubatan sensitif.",
"Medical issues":"Isu perubatan","MLS does not provide medical advice or emergency services. If you have a medical concern, contact a qualified healthcare professional or local emergency service.":"MLS tidak menyediakan nasihat perubatan atau perkhidmatan kecemasan. Jika anda mempunyai kebimbangan perubatan, hubungi profesional penjagaan kesihatan yang berkelayakan atau perkhidmatan kecemasan tempatan.",
"Delete My Life Square Data":"Padam Data My Life Square","The current MLS app does not create a remote MLS account or remote data profile.":"Aplikasi MLS semasa tidak mencipta akaun MLS jauh atau profil data jauh.","Delete local app data":"Padam data aplikasi tempatan","Open MLS.":"Buka MLS.","Go to":"Pergi ke","Choose":"Pilih","Confirm deletion.":"Sahkan pemadaman.","You can also clear MLS app storage or uninstall the app using your device settings.":"Anda juga boleh mengosongkan storan aplikasi MLS atau menyahpasang aplikasi menggunakan tetapan peranti.","Need help?":"Perlukan bantuan?","Do not send passwords, biometric credentials or sensitive medical records.":"Jangan hantar kata laluan, kelayakan biometrik atau rekod perubatan sensitif.","If MLS introduces remote accounts or cloud storage in the future, this page will be updated with a web-based deletion request process before those features are released.":"Jika MLS memperkenalkan akaun jauh atau storan awan pada masa depan, halaman ini akan dikemas kini dengan proses permintaan pemadaman berasaskan web sebelum ciri tersebut dikeluarkan.",
"Life Point Methodology":"Metodologi Life Point","MLS is an educational and self-tracking framework, not a clinical score or medical device.":"MLS ialah rangka kerja pendidikan dan penjejakan kendiri, bukan skor klinikal atau peranti perubatan.",
"ALP records life-building activities and behaviours. Examples may include physical activity, learning, meaningful connection, reflection and service. Activity inputs can be measured in minutes, frequency, quantity or other suitable units depending on the behaviour.":"ALP merekod aktiviti dan tingkah laku yang membina kehidupan. Contohnya termasuk aktiviti fizikal, pembelajaran, hubungan bermakna, refleksi dan khidmat. Input aktiviti boleh diukur dalam minit, kekerapan, kuantiti atau unit sesuai lain bergantung pada tingkah laku.",
"LLP records activities or behaviours that may erode health, time, relationships, knowledge or personal values. Liability weighting may be stronger than the matching asset rate when the evidence or product logic supports a greater adverse effect.":"LLP merekod aktiviti atau tingkah laku yang mungkin menghakis kesihatan, masa, hubungan, pengetahuan atau nilai peribadi. Pemberat liabiliti mungkin lebih kuat daripada kadar aset sepadan apabila bukti atau logik produk menyokong kesan buruk yang lebih besar.",
"Life Equity is the difference between accumulated Life Assets and Life Liabilities. Health, Knowledge, Relationship and Belief each maintain their own Assets, Liabilities and Equity. Life Total consolidates all four Squares without assuming they should each be 25%.":"Life Equity ialah perbezaan antara Life Assets dan Life Liabilities terkumpul. Health, Knowledge, Relationship dan Belief masing-masing mengekalkan Assets, Liabilities dan Equity sendiri. Life Total menggabungkan keempat-empat Square tanpa menganggap setiap satu perlu 25%.",
"Health coefficients are informed by published guidance from leading health authorities such as WHO, AHA and CDC together with relevant peer-reviewed research. MLS converts these evidence inputs into its own Life Point model; the health authorities do not issue or endorse MLS points.":"Pekali kesihatan dipandu oleh panduan diterbitkan daripada pihak berkuasa kesihatan terkemuka seperti WHO, AHA dan CDC bersama penyelidikan semakan rakan sebaya yang berkaitan. MLS menukar input bukti ini kepada model Life Point sendiri; pihak berkuasa kesihatan tidak mengeluarkan atau menyokong mata MLS.",
"Diminishing returns and severity":"Pulangan berkurangan dan keterukan","More time or quantity does not necessarily produce points linearly. Where appropriate, MLS uses diminishing-return curves, caps, thresholds or severity-weighted liabilities. Repeated entries should be aggregated into the relevant daily or weekly exposure before points are calculated.":"Lebih banyak masa atau kuantiti tidak semestinya menghasilkan mata secara linear. Jika sesuai, MLS menggunakan lengkung pulangan berkurangan, had, ambang atau liabiliti berwajaran keterukan. Entri berulang perlu digabungkan ke dalam pendedahan harian atau mingguan yang berkaitan sebelum mata dikira.",
"Simulation":"Simulasi","The Health model has been stress-tested across more than 100,000 simulated health scenarios to evaluate consistency, edge cases and plausibility. Simulation is not clinical validation and does not make MLS a medical risk model.":"Model Health telah diuji tekanan merentasi lebih 100,000 senario kesihatan simulasi untuk menilai konsistensi, kes luar biasa dan kewajaran. Simulasi bukan pengesahan klinikal dan tidak menjadikan MLS model risiko perubatan.",
"Transparency":"Ketelusan","MLS aims to make the input, unit, coefficient direction and reason for each ALP/LLP contribution inspectable. The methodology will continue to be refined as the evidence base and validation work evolve.":"MLS bertujuan menjadikan input, unit, arah pekali dan sebab setiap sumbangan ALP/LLP boleh diperiksa. Metodologi akan terus diperhalusi apabila asas bukti dan kerja pengesahan berkembang.",
"Page not found":"Halaman tidak ditemui","The page you requested does not exist.":"Halaman yang anda minta tidak wujud.","Return home":"Kembali ke laman utama",
"Language":"Bahasa","Translations are provided for convenience. The English version is the reference text for interpretation.":"Terjemahan disediakan untuk kemudahan. Versi bahasa Inggeris ialah teks rujukan untuk tafsiran."
 },
 "zh-CN":{
"How it works":"运作方式","Four Squares":"四大方格","Methodology":"方法论","Privacy":"隐私","Support":"支持","Home":"首页","Terms":"条款","Life Points • personal ledger":"Life Points • 个人生命账本","Your life,":"你的人生，","at a glance.":"一目了然。","My Life Square turns everyday actions into a clear personal ledger: what builds your life, what erodes it, and how the balance changes over time.":"My Life Square 把日常行为转化为清晰的个人生命账本：什么在累积你的人生资产，什么在形成负债，以及净值如何随时间变化。","Explore MLS":"探索 MLS","Privacy & Legal":"隐私与法律","Android testing in progress • iOS planned • Global version":"Android 测试中 • iOS 计划中 • 全球版本","A life ledger, not another score.":"这是生命账本，不只是另一个分数。","MLS uses Asset Life Points (ALP) and Liability Life Points (LLP) to show how actions accumulate across four important areas of life. The difference is your Life Equity.":"MLS 使用资产生命点数（ALP）和负债生命点数（LLP），显示行为如何在四个重要人生领域中累积。两者之差就是你的生命净值。","Asset Life Points":"资产生命点数","Life-building actions such as movement, learning, meaningful connection, reflection and service.":"有助于构建人生的行为，例如运动、学习、有意义的交流、反思和帮助他人。","Liability Life Points":"负债生命点数","Actions that erode health, time, relationships, knowledge or personal values.":"会消耗健康、时间、关系、知识或个人价值的行为。","Equity":"净值","Life Equity":"生命净值","Your accumulated Life Assets minus Life Liabilities — shown over time, not as a fixed ceiling.":"累积生命资产减去生命负债——随时间展示，而不是固定上限。","Journey":"历程","Progress over time":"随时间的进展","Review changes by day, month and year while preserving the underlying activity history.":"按日、月和年查看变化，同时保留原始行为记录。","One Life Square.":"一个 Life Square。","Four dimensions.":"四个维度。","Life Total consolidates Health, Knowledge, Relationship and Belief. Each Square has its own Assets, Liabilities and Equity. They do not need to be equal.":"Life Total 汇总健康、知识、关系和信念。每个方格都有自己的资产、负债和净值，它们不需要各占相同比例。","Read the methodology":"阅读方法论","Life Assets":"生命资产","Life Liabilities":"生命负债","Evidence-informed. Transparent about uncertainty.":"以证据为基础，对不确定性保持透明。","Health coefficients are calibrated from published guidance and peer-reviewed evidence. MLS then converts those inputs into its own transparent Life Point framework.":"健康系数依据公开指南和同行评审证据进行校准，MLS 再把这些输入转换为自身透明的 Life Point 框架。","Health evidence":"健康证据","MLS references leading health authorities such as WHO, AHA and CDC together with peer-reviewed research. These organisations do not issue or endorse MLS points.":"MLS 参考 WHO、AHA、CDC 等主要健康机构以及同行评审研究。这些机构并不制定或认可 MLS 点数。","Stress testing":"压力测试","The Health model has been stress-tested across 100,000+ simulated health scenarios to check consistency, plausibility and edge cases.":"健康模型已在超过 100,000 个模拟健康情境中进行压力测试，以检查一致性、合理性和边界情况。","No medical diagnosis":"不是医疗诊断","MLS is a wellbeing and self-tracking tool. Life Points are not clinical scores, biological age or medical risk predictions.":"MLS 是健康生活与自我追踪工具。Life Points 不是临床评分、生物年龄或医疗风险预测。","Privacy first":"隐私优先","The current MLS test architecture keeps user-entered data on-device. MLS does not sell personal data or use health information for advertising.":"当前 MLS 测试架构把用户输入数据保存在设备本地。MLS 不出售个人数据，也不把健康信息用于广告。","Privacy and trust are part of the product.":"隐私与信任是产品的一部分。","Public legal pages are maintained here for app-store review and users worldwide.":"这里提供公开法律页面，供应用商店审核和全球用户查阅。","Privacy Policy":"隐私政策","How MLS handles personal and wellbeing information.":"MLS 如何处理个人及健康生活信息。","Terms of Use":"使用条款","Use, limitations and medical disclaimer.":"使用规则、限制与医疗免责声明。","Contact, data deletion and app assistance.":"联系、数据删除与应用协助。","Operator:":"运营者：","Contact:":"联系：","All rights reserved.":"保留所有权利。","Effective date:":"生效日期：","Privacy contact:":"隐私联系：","This policy covers the current My Life Square architecture. It will be updated before any future feature changes how personal data is collected, transmitted or shared.":"本政策适用于当前 My Life Square 架构。任何未来功能若改变个人数据的收集、传输或共享方式，我们会在发布前更新本政策。","1. Scope":"1. 适用范围","This Privacy Policy explains how My Life Square (“MLS”) handles information when you use the app and related website.":"本隐私政策说明您使用 My Life Square（“MLS”）应用及相关网站时，MLS 如何处理信息。","2. Current app data handling":"2. 当前应用数据处理","In the current MLS test build, Life Point entries, routines, language preferences and related app information are processed and stored locally on the user’s device. The current Android build does not request the Android INTERNET permission and does not transmit MLS app data to the operator, advertisers, analytics providers or data brokers.":"在当前 MLS 测试版本中，Life Point 记录、日常习惯、语言偏好及相关应用信息都在用户设备本地处理和存储。当前 Android 版本不申请 INTERNET 权限，也不会把 MLS 应用数据传送给运营者、广告商、分析服务商或数据经纪商。","MLS does not sell personal information.":"MLS 不出售个人信息。","3. Health and wellbeing information":"3. 健康与生活信息","MLS may process information users enter about activities, nutrition, movement, habits, relationships, learning, reflection and other wellbeing-related behaviours. In the current app build, that information remains on-device.":"MLS 可能处理用户输入的活动、营养、运动、习惯、关系、学习、反思及其他与健康生活相关的信息。在当前应用版本中，这些信息保留在设备本地。","4. Biometric authentication":"4. 生物识别验证","MLS may use the operating system’s biometric or device-credential authentication to protect access to the app. MLS does not receive or store fingerprints, face templates or other biometric identifiers. Authentication is handled by the operating system.":"MLS 可能使用操作系统的生物识别或设备凭据验证来保护应用访问。MLS 不接收或存储指纹、面部模板或其他生物识别标识，验证由操作系统处理。","5. Sharing":"5. 共享","The current app build does not transmit or share MLS user data with third parties. If third-party services are introduced later, this policy will identify the service, data involved, purpose and applicable user choices.":"当前应用版本不会把 MLS 用户数据传输或共享给第三方。如果以后引入第三方服务，本政策会说明服务、涉及数据、用途及用户选择。","6. Advertising and sale of data":"6. 广告与数据出售","MLS does not use personal or health information for targeted advertising and does not sell personal information. Health or fitness data obtained through platform health frameworks will not be used for advertising, marketing profiles or unrelated data mining.":"MLS 不使用个人或健康信息进行定向广告，也不出售个人信息。通过平台健康框架获得的健康或健身数据不会用于广告、营销画像或无关的数据挖掘。","7. Data retention and deletion":"7. 数据保留与删除","Current MLS data is stored locally until you delete it using available app controls, choose “Delete all local MLS data”, clear the app’s storage, or uninstall the app. The current app build does not create a remote MLS account.":"当前 MLS 数据保存在本地，直到您使用应用内控制删除数据、选择“Delete all local MLS data”、清除应用存储或卸载应用。当前版本不会创建远程 MLS 账号。","If account creation is introduced later, MLS will add an in-app account-deletion path, an external web deletion mechanism where required, and a documented retention policy before release.":"如果以后加入账号功能，MLS 会在发布前提供应用内账号删除入口、必要时提供外部网页删除机制，并制定数据保留政策。","8. Security":"8. 安全","MLS uses operating-system security controls and may use biometric or device-credential access protection where supported. No storage method is completely risk-free, so users should maintain device security and current operating-system protections.":"MLS 使用操作系统安全控制，并可能在支持的设备上使用生物识别或设备凭据保护。任何存储方式都无法完全无风险，因此用户应维护设备安全和最新系统保护。","9. Children":"9. 儿童","MLS is not designed as a child-directed service. Distribution settings, target audience and age ratings will be configured according to the actual shipping feature set in each app store.":"MLS 并非面向儿童设计的服务。我们会根据各应用商店实际发布功能设置发行范围、目标受众和年龄分级。","10. Health and medical disclaimer":"10. 健康与医疗免责声明","MLS is a wellbeing and personal-tracking tool. It is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition.":"MLS 是健康生活与个人追踪工具，不是医疗器械，也不用于诊断、治疗、治愈或预防任何疾病或医疗状况。","Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are educational and self-tracking constructs. They are not clinical scores, biological age, medical risk predictions or guarantees of health outcomes.":"Life Points、资产生命点数（ALP）、负债生命点数（LLP）、生命净值及相关洞察属于教育与自我追踪概念，不是临床评分、生物年龄、医疗风险预测，也不保证健康结果。","Health-related coefficients are informed by published guidance and peer-reviewed research, but the MLS Life Point conversion is an MLS model and is not issued or endorsed by WHO, AHA, CDC or another health authority. For medical advice, diagnosis or treatment, consult a qualified healthcare professional.":"健康相关系数参考公开指南和同行评审研究，但 MLS 的 Life Point 转换属于 MLS 自身模型，并非由 WHO、AHA、CDC 或其他健康机构制定或认可。如需医疗建议、诊断或治疗，请咨询合格医疗专业人员。","11. International users":"11. 国际用户","MLS is intended for a global audience. Privacy and data-protection rights vary by jurisdiction. MLS will comply with applicable laws in the regions where the service is offered.":"MLS 面向全球用户。隐私与数据保护权利因司法管辖区而异，MLS 将遵守提供服务地区适用的法律。","12. Changes":"12. 变更","This policy may be updated when MLS changes features or data practices. The effective date will be revised when material changes are made.":"当 MLS 更改功能或数据实践时，本政策可能更新。发生重大变更时，生效日期也会更新。","13. Contact":"13. 联系","Privacy enquiries:":"隐私咨询：","Purpose":"用途","My Life Square (“MLS”) is provided for personal informational, educational and wellbeing-tracking purposes.":"My Life Square（“MLS”）用于个人信息、教育和健康生活追踪。","Not professional advice":"非专业建议","MLS is not a substitute for medical, psychological, legal, financial or other regulated professional advice. MLS is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition. Consult qualified professionals where appropriate.":"MLS 不能替代医疗、心理、法律、金融或其他受监管的专业建议。MLS 不是医疗器械，不用于诊断、治疗、治愈或预防任何疾病或医疗状况。需要时请咨询合格专业人士。","Life Point methodology":"Life Point 方法论","Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are MLS-designed constructs. They are not clinical scores, verified measures of longevity, biological age, disease probability or guaranteed outcomes. The methodology and coefficients may evolve as evidence, validation and product design develop.":"Life Points、资产生命点数（ALP）、负债生命点数（LLP）、生命净值及相关洞察均为 MLS 设计的概念。它们不是临床评分、经验证的寿命指标、生物年龄、疾病概率或结果保证。随着证据、验证和产品设计的发展，方法和系数可能调整。","User responsibility":"用户责任","You are responsible for the accuracy of information you enter, reviewing entries and corrections, decisions you make using app information, and maintaining device security and backups where applicable.":"您负责所输入信息的准确性、检查记录与更正、基于应用信息作出的决定，以及在适用情况下维护设备安全和备份。","Availability and changes":"可用性与变更","Features may be changed, improved, suspended or removed as MLS develops. Test and pre-release builds may contain incomplete functionality.":"随着 MLS 发展，功能可能被更改、改进、暂停或移除。测试版和预发布版本可能包含未完成功能。","Acceptable use":"可接受使用","Do not use MLS for unlawful activity, to harm others, to misrepresent clinical or professional advice, or to interfere with the app, website or security systems.":"不得将 MLS 用于违法活动、伤害他人、歪曲临床或专业建议，或干扰应用、网站或安全系统。","Use of MLS is also subject to the":"使用 MLS 同时受以下文件约束：","For My Life Square support, privacy enquiries, feedback or store-review contact, email us.":"如需 My Life Square 支持、隐私咨询、反馈或应用商店审核联系，请发送电子邮件。","Support & privacy":"支持与隐私","Data deletion":"数据删除","The current MLS app does not create a remote MLS account. User-entered MLS data is designed to remain on-device. You can delete local MLS data from the app’s Privacy & Legal screen, clear app storage through your device settings, or uninstall the app.":"当前 MLS 应用不会创建远程账号。用户输入的 MLS 数据设计为保留在设备本地。您可以在应用的“隐私与法律”页面删除本地 MLS 数据，也可以通过设备设置清除应用存储或卸载应用。","If account or cloud functionality is introduced later, this page will be updated with the required online account/data-deletion process.":"如果以后加入账号或云功能，本页面将更新所需的在线账号/数据删除流程。","Before contacting support":"联系支持前","Include your app version and test number.":"请提供应用版本和测试编号。","Describe what you expected and what happened.":"请说明您的预期以及实际发生的情况。","Do not email passwords, device unlock codes or sensitive medical records.":"请勿通过电子邮件发送密码、设备解锁码或敏感医疗记录。","Medical issues":"医疗问题","MLS does not provide medical advice or emergency services. If you have a medical concern, contact a qualified healthcare professional or local emergency service.":"MLS 不提供医疗建议或紧急服务。如有医疗问题，请联系合格医疗专业人员或当地紧急服务。","Delete My Life Square Data":"删除 My Life Square 数据","The current MLS app does not create a remote MLS account or remote data profile.":"当前 MLS 应用不会创建远程 MLS 账号或远程数据档案。","Delete local app data":"删除本地应用数据","Open MLS.":"打开 MLS。","Go to":"前往","Choose":"选择","Confirm deletion.":"确认删除。","You can also clear MLS app storage or uninstall the app using your device settings.":"您也可以通过设备设置清除 MLS 应用存储或卸载应用。","Need help?":"需要帮助？","Do not send passwords, biometric credentials or sensitive medical records.":"请勿发送密码、生物识别凭据或敏感医疗记录。","If MLS introduces remote accounts or cloud storage in the future, this page will be updated with a web-based deletion request process before those features are released.":"如果 MLS 将来引入远程账号或云存储，本页面会在这些功能发布前更新网页数据删除申请流程。","Life Point Methodology":"Life Point 方法论","MLS is an educational and self-tracking framework, not a clinical score or medical device.":"MLS 是教育与自我追踪框架，不是临床评分或医疗器械。","ALP records life-building activities and behaviours. Examples may include physical activity, learning, meaningful connection, reflection and service. Activity inputs can be measured in minutes, frequency, quantity or other suitable units depending on the behaviour.":"ALP 记录有助于构建人生的活动和行为，例如运动、学习、有意义的连接、反思和服务。根据行为类型，活动输入可以用分钟、频率、数量或其他适当单位衡量。","LLP records activities or behaviours that may erode health, time, relationships, knowledge or personal values. Liability weighting may be stronger than the matching asset rate when the evidence or product logic supports a greater adverse effect.":"LLP 记录可能消耗健康、时间、关系、知识或个人价值的活动或行为。当证据或产品逻辑显示负面影响更大时，负债权重可能高于对应资产权重。","Life Equity is the difference between accumulated Life Assets and Life Liabilities. Health, Knowledge, Relationship and Belief each maintain their own Assets, Liabilities and Equity. Life Total consolidates all four Squares without assuming they should each be 25%.":"生命净值是累积生命资产与生命负债的差额。健康、知识、关系和信念各自维护自己的资产、负债和净值。Life Total 汇总四个方格，并不假设每个方格都应占 25%。","Health coefficients are informed by published guidance from leading health authorities such as WHO, AHA and CDC together with relevant peer-reviewed research. MLS converts these evidence inputs into its own Life Point model; the health authorities do not issue or endorse MLS points.":"健康系数参考 WHO、AHA、CDC 等主要健康机构发布的指南及相关同行评审研究。MLS 将这些证据输入转换为自身 Life Point 模型；这些健康机构并不制定或认可 MLS 点数。","Diminishing returns and severity":"边际递减与严重程度","More time or quantity does not necessarily produce points linearly. Where appropriate, MLS uses diminishing-return curves, caps, thresholds or severity-weighted liabilities. Repeated entries should be aggregated into the relevant daily or weekly exposure before points are calculated.":"更多时间或数量并不一定线性地产生更多点数。适当情况下，MLS 会使用边际递减曲线、上限、阈值或按严重程度加权的负债。重复记录应先汇总为相应的每日或每周暴露量，再计算点数。","Simulation":"模拟","The Health model has been stress-tested across more than 100,000 simulated health scenarios to evaluate consistency, edge cases and plausibility. Simulation is not clinical validation and does not make MLS a medical risk model.":"健康模型已在超过 100,000 个模拟健康情境中进行压力测试，以评估一致性、边界情况和合理性。模拟不等于临床验证，也不会使 MLS 成为医疗风险模型。","Transparency":"透明度","MLS aims to make the input, unit, coefficient direction and reason for each ALP/LLP contribution inspectable. The methodology will continue to be refined as the evidence base and validation work evolve.":"MLS 旨在让每项 ALP/LLP 贡献的输入、单位、系数方向和理由都可检查。随着证据基础和验证工作的进展，方法论会继续完善。","Page not found":"找不到页面","The page you requested does not exist.":"您请求的页面不存在。","Return home":"返回首页","Language":"语言","Translations are provided for convenience. The English version is the reference text for interpretation.":"翻译版本仅为方便阅读。涉及解释时，以英文版本为参考文本。"
 },
 "zh-TW":{},
 th:{},
 ja:{},
 ko:{}
};

// For Traditional Chinese, use Simplified dictionary plus conversion for the site's vocabulary.
T["zh-TW"]={...T["zh-CN"]};
const TW={"运作方式":"運作方式","四大方格":"四大方格","方法论":"方法論","隐私":"隱私","支持":"支援","首页":"首頁","条款":"條款","个人生命账本":"個人生命帳本","你的人生，":"你的人生，","一目了然。":"一目了然。","资产":"資產","负债":"負債","净值":"淨值","健康":"健康","知识":"知識","关系":"關係","信念":"信念","证据":"證據","压力测试":"壓力測試","医疗":"醫療","数据":"資料","用户":"使用者","应用":"應用程式","设备":"裝置","删除":"刪除","隐私政策":"隱私政策","使用条款":"使用條款","联系":"聯絡","运营者":"營運者","生效日期":"生效日期","信息":"資訊","行为":"行為","积累":"累積","学习":"學習","连接":"連結","时间":"時間","进展":"進展","显示":"顯示","公开":"公開","机构":"機構","研究":"研究","模拟":"模擬","场景":"情境","临床":"臨床","评分":"評分","年龄":"年齡","风险":"風險","预测":"預測","广告":"廣告","处理":"處理","存储":"儲存","传输":"傳輸","共享":"分享","当前":"目前","未来":"未來","服务":"服務","权限":"權限","外部":"外部","安全":"安全","儿童":"兒童","国际":"國際","变化":"變更","责任":"責任","可用性":"可用性","接受":"接受","帮助":"協助","记录":"紀錄","页面":"頁面","请求":"要求","方法":"方法","边际递减":"邊際遞減","严重程度":"嚴重程度","透明度":"透明度","返回":"返回","语言":"語言","翻译":"翻譯","英文":"英文"};
for(const [k,v] of Object.entries(T["zh-TW"])) {
 let x=v;
 for(const [a,b] of Object.entries(TW)) x=x.split(a).join(b);
 T["zh-TW"][k]=x;
}

const BASIC={
 th:{
"How it works":"วิธีการทำงาน","Four Squares":"สี่สแควร์","Methodology":"ระเบียบวิธี","Privacy":"ความเป็นส่วนตัว","Support":"ช่วยเหลือ","Home":"หน้าแรก","Terms":"ข้อกำหนด","Life Points • personal ledger":"Life Points • บัญชีชีวิตส่วนบุคคล","Your life,":"ชีวิตของคุณ","at a glance.":"มองเห็นได้ในภาพเดียว","Explore MLS":"สำรวจ MLS","Privacy & Legal":"ความเป็นส่วนตัวและกฎหมาย","A life ledger, not another score.":"บัญชีชีวิต ไม่ใช่แค่คะแนนอีกตัวหนึ่ง","Asset Life Points":"Asset Life Points","Liability Life Points":"Liability Life Points","Life Equity":"Life Equity","Journey":"เส้นทาง","Progress over time":"ความก้าวหน้าตามเวลา","One Life Square.":"หนึ่ง Life Square","Four dimensions.":"สี่มิติ","Read the methodology":"อ่านระเบียบวิธี","Life Assets":"Life Assets","Life Liabilities":"Life Liabilities","Health evidence":"หลักฐานด้านสุขภาพ","Stress testing":"การทดสอบความทนทาน","No medical diagnosis":"ไม่ใช่การวินิจฉัยทางการแพทย์","Privacy first":"ให้ความสำคัญกับความเป็นส่วนตัว","Privacy Policy":"นโยบายความเป็นส่วนตัว","Terms of Use":"ข้อกำหนดการใช้งาน","Effective date:":"วันที่มีผล:","Operator:":"ผู้ดำเนินการ:","Privacy contact:":"ติดต่อด้านความเป็นส่วนตัว:","Purpose":"วัตถุประสงค์","Not professional advice":"ไม่ใช่คำแนะนำจากผู้เชี่ยวชาญ","User responsibility":"ความรับผิดชอบของผู้ใช้","Availability and changes":"การให้บริการและการเปลี่ยนแปลง","Acceptable use":"การใช้งานที่ยอมรับได้","Support & privacy":"การช่วยเหลือและความเป็นส่วนตัว","Data deletion":"การลบข้อมูล","Before contacting support":"ก่อนติดต่อฝ่ายช่วยเหลือ","Medical issues":"ประเด็นทางการแพทย์","Delete My Life Square Data":"ลบข้อมูล My Life Square","Delete local app data":"ลบข้อมูลแอปในเครื่อง","Open MLS.":"เปิด MLS","Go to":"ไปที่","Choose":"เลือก","Confirm deletion.":"ยืนยันการลบ","Need help?":"ต้องการความช่วยเหลือ?","Life Point Methodology":"ระเบียบวิธี Life Point","Diminishing returns and severity":"ผลตอบแทนที่ลดลงและระดับความรุนแรง","Simulation":"การจำลอง","Transparency":"ความโปร่งใส","Page not found":"ไม่พบหน้า","The page you requested does not exist.":"ไม่มีหน้าที่คุณร้องขอ","Return home":"กลับหน้าแรก","Language":"ภาษา","Translations are provided for convenience. The English version is the reference text for interpretation.":"คำแปลจัดทำเพื่อความสะดวก โดยฉบับภาษาอังกฤษเป็นข้อความอ้างอิงในการตีความ."
 },
 ja:{
"How it works":"仕組み","Four Squares":"4つのスクエア","Methodology":"方法論","Privacy":"プライバシー","Support":"サポート","Home":"ホーム","Terms":"利用規約","Life Points • personal ledger":"Life Points • 個人ライフ台帳","Your life,":"あなたの人生を、","at a glance.":"ひと目で。","Explore MLS":"MLSを見る","Privacy & Legal":"プライバシー・法務","A life ledger, not another score.":"ただのスコアではなく、人生の台帳。","Asset Life Points":"Asset Life Points","Liability Life Points":"Liability Life Points","Life Equity":"Life Equity","Journey":"推移","Progress over time":"時間とともに見る変化","One Life Square.":"ひとつの Life Square。","Four dimensions.":"4つの側面。","Read the methodology":"方法論を読む","Life Assets":"Life Assets","Life Liabilities":"Life Liabilities","Health evidence":"健康エビデンス","Stress testing":"ストレステスト","No medical diagnosis":"医療診断ではありません","Privacy first":"プライバシーを優先","Privacy Policy":"プライバシーポリシー","Terms of Use":"利用規約","Effective date:":"発効日:","Operator:":"運営者:","Privacy contact:":"プライバシー窓口:","Purpose":"目的","Not professional advice":"専門家の助言ではありません","User responsibility":"利用者の責任","Availability and changes":"提供・変更","Acceptable use":"適正利用","Support & privacy":"サポート・プライバシー","Data deletion":"データ削除","Before contacting support":"サポートへ連絡する前に","Medical issues":"医療に関する事項","Delete My Life Square Data":"My Life Square のデータを削除","Delete local app data":"端末内データを削除","Open MLS.":"MLSを開きます。","Go to":"移動","Choose":"選択","Confirm deletion.":"削除を確認します。","Need help?":"お困りですか？","Life Point Methodology":"Life Point 方法論","Diminishing returns and severity":"逓減効果と影響度","Simulation":"シミュレーション","Transparency":"透明性","Page not found":"ページが見つかりません","The page you requested does not exist.":"指定されたページは存在しません。","Return home":"ホームへ戻る","Language":"言語","Translations are provided for convenience. The English version is the reference text for interpretation.":"翻訳は便宜のために提供されています。解釈上は英語版を基準文書とします。"
 },
 ko:{
"How it works":"작동 방식","Four Squares":"4개 스퀘어","Methodology":"방법론","Privacy":"개인정보","Support":"지원","Home":"홈","Terms":"이용약관","Life Points • personal ledger":"Life Points • 개인 라이프 원장","Your life,":"당신의 삶을","at a glance.":"한눈에.","Explore MLS":"MLS 살펴보기","Privacy & Legal":"개인정보 및 법률","A life ledger, not another score.":"또 하나의 점수가 아닌, 삶의 원장.","Asset Life Points":"Asset Life Points","Liability Life Points":"Liability Life Points","Life Equity":"Life Equity","Journey":"여정","Progress over time":"시간에 따른 변화","One Life Square.":"하나의 Life Square.","Four dimensions.":"네 가지 영역.","Read the methodology":"방법론 읽기","Life Assets":"Life Assets","Life Liabilities":"Life Liabilities","Health evidence":"건강 근거","Stress testing":"스트레스 테스트","No medical diagnosis":"의학적 진단이 아님","Privacy first":"개인정보 우선","Privacy Policy":"개인정보 처리방침","Terms of Use":"이용약관","Effective date:":"시행일:","Operator:":"운영자:","Privacy contact:":"개인정보 문의:","Purpose":"목적","Not professional advice":"전문가 조언이 아님","User responsibility":"사용자 책임","Availability and changes":"제공 및 변경","Acceptable use":"허용되는 사용","Support & privacy":"지원 및 개인정보","Data deletion":"데이터 삭제","Before contacting support":"지원 문의 전","Medical issues":"의료 관련 사항","Delete My Life Square Data":"My Life Square 데이터 삭제","Delete local app data":"로컬 앱 데이터 삭제","Open MLS.":"MLS를 엽니다.","Go to":"이동","Choose":"선택","Confirm deletion.":"삭제를 확인합니다.","Need help?":"도움이 필요하신가요?","Life Point Methodology":"Life Point 방법론","Diminishing returns and severity":"한계효과 감소와 심각도","Simulation":"시뮬레이션","Transparency":"투명성","Page not found":"페이지를 찾을 수 없습니다","The page you requested does not exist.":"요청한 페이지가 없습니다.","Return home":"홈으로","Language":"언어","Translations are provided for convenience. The English version is the reference text for interpretation.":"번역은 편의를 위해 제공됩니다. 해석 기준은 영어본입니다."
 }
};
for(const lang of ["th","ja","ko"]) T[lang]={...BASIC[lang]};

// Fill unmapped long text in TH/JA/KO with concise, accurate translations.
const LONG={
 th:{
"My Life Square turns everyday actions into a clear personal ledger: what builds your life, what erodes it, and how the balance changes over time.":"My Life Square เปลี่ยนกิจกรรมในแต่ละวันให้เป็นบัญชีชีวิตที่เข้าใจง่าย แสดงสิ่งที่เสริมสร้างชีวิต สิ่งที่บั่นทอน และดุลที่เปลี่ยนไปตามเวลา",
"MLS uses Asset Life Points (ALP) and Liability Life Points (LLP) to show how actions accumulate across four important areas of life. The difference is your Life Equity.":"MLS ใช้ Asset Life Points (ALP) และ Liability Life Points (LLP) เพื่อแสดงการสะสมของพฤติกรรมในสี่ด้านสำคัญของชีวิต ผลต่างคือ Life Equity ของคุณ",
"Life-building actions such as movement, learning, meaningful connection, reflection and service.":"กิจกรรมที่เสริมสร้างชีวิต เช่น การเคลื่อนไหว การเรียนรู้ ความสัมพันธ์ที่มีความหมาย การทบทวนตนเอง และการช่วยเหลือ",
"Actions that erode health, time, relationships, knowledge or personal values.":"กิจกรรมที่บั่นทอนสุขภาพ เวลา ความสัมพันธ์ ความรู้ หรือคุณค่าส่วนบุคคล",
"Your accumulated Life Assets minus Life Liabilities — shown over time, not as a fixed ceiling.":"Life Assets ที่สะสมลบด้วย Life Liabilities แสดงตามเวลา ไม่ใช่เพดานคงที่",
"Review changes by day, month and year while preserving the underlying activity history.":"ดูการเปลี่ยนแปลงรายวัน รายเดือน และรายปี โดยยังคงประวัติกิจกรรมเดิมไว้",
"Life Total consolidates Health, Knowledge, Relationship and Belief. Each Square has its own Assets, Liabilities and Equity. They do not need to be equal.":"Life Total รวม Health, Knowledge, Relationship และ Belief แต่ละ Square มี Assets, Liabilities และ Equity ของตนเอง และไม่จำเป็นต้องเท่ากัน",
"Evidence-informed. Transparent about uncertainty.":"อิงหลักฐาน และโปร่งใสต่อความไม่แน่นอน",
"Health coefficients are calibrated from published guidance and peer-reviewed evidence. MLS then converts those inputs into its own transparent Life Point framework.":"ค่าสัมประสิทธิ์ด้านสุขภาพปรับเทียบจากแนวทางที่เผยแพร่และงานวิจัยที่ผ่านการทบทวนโดยผู้ทรงคุณวุฒิ จากนั้น MLS จึงแปลงเป็นกรอบ Life Point ของตนเองอย่างโปร่งใส",
"MLS references leading health authorities such as WHO, AHA and CDC together with peer-reviewed research. These organisations do not issue or endorse MLS points.":"MLS อ้างอิง WHO, AHA, CDC และงานวิจัยที่ผ่านการทบทวน องค์กรเหล่านี้ไม่ได้เป็นผู้ออกหรือรับรองคะแนน MLS",
"The Health model has been stress-tested across 100,000+ simulated health scenarios to check consistency, plausibility and edge cases.":"โมเดล Health ผ่านการทดสอบกับสถานการณ์สุขภาพจำลองมากกว่า 100,000 แบบ เพื่อตรวจสอบความสอดคล้อง ความสมเหตุสมผล และกรณีขอบเขต",
"MLS is a wellbeing and self-tracking tool. Life Points are not clinical scores, biological age or medical risk predictions.":"MLS เป็นเครื่องมือด้านความเป็นอยู่และการติดตามตนเอง Life Points ไม่ใช่คะแนนทางคลินิก อายุชีวภาพ หรือการคาดการณ์ความเสี่ยงทางการแพทย์",
"The current MLS test architecture keeps user-entered data on-device. MLS does not sell personal data or use health information for advertising.":"สถาปัตยกรรมทดสอบปัจจุบันเก็บข้อมูลที่ผู้ใช้ป้อนไว้บนอุปกรณ์ MLS ไม่ขายข้อมูลส่วนบุคคลและไม่ใช้ข้อมูลสุขภาพเพื่อการโฆษณา",
"Privacy and trust are part of the product.":"ความเป็นส่วนตัวและความไว้วางใจเป็นส่วนหนึ่งของผลิตภัณฑ์",
"Public legal pages are maintained here for app-store review and users worldwide.":"หน้าเอกสารทางกฎหมายสาธารณะจัดไว้สำหรับการตรวจสอบของร้านแอปและผู้ใช้ทั่วโลก",
"How MLS handles personal and wellbeing information.":"วิธีที่ MLS จัดการข้อมูลส่วนบุคคลและข้อมูลด้านความเป็นอยู่","Use, limitations and medical disclaimer.":"การใช้งาน ข้อจำกัด และข้อจำกัดความรับผิดทางการแพทย์","Contact, data deletion and app assistance.":"การติดต่อ การลบข้อมูล และความช่วยเหลือเกี่ยวกับแอป"
 },
 ja:{
"My Life Square turns everyday actions into a clear personal ledger: what builds your life, what erodes it, and how the balance changes over time.":"My Life Square は日々の行動を、人生を築くもの・損なうもの・その差の変化が分かる個人ライフ台帳に整理します。",
"MLS uses Asset Life Points (ALP) and Liability Life Points (LLP) to show how actions accumulate across four important areas of life. The difference is your Life Equity.":"MLS は Asset Life Points（ALP）と Liability Life Points（LLP）で、人生の4領域における行動の積み重なりを表します。その差が Life Equity です。",
"Life-building actions such as movement, learning, meaningful connection, reflection and service.":"運動、学習、意味のある交流、振り返り、支援など、人生を築く行動です。",
"Actions that erode health, time, relationships, knowledge or personal values.":"健康、時間、人間関係、知識、個人の価値を損なう行動です。",
"Your accumulated Life Assets minus Life Liabilities — shown over time, not as a fixed ceiling.":"累積した Life Assets から Life Liabilities を差し引いたものを、固定上限ではなく時間経過で示します。",
"Review changes by day, month and year while preserving the underlying activity history.":"元の活動履歴を保持しながら、日・月・年単位で変化を確認できます。",
"Life Total consolidates Health, Knowledge, Relationship and Belief. Each Square has its own Assets, Liabilities and Equity. They do not need to be equal.":"Life Total は Health、Knowledge、Relationship、Belief を統合します。各 Square には独自の Assets、Liabilities、Equity があり、均等である必要はありません。",
"Evidence-informed. Transparent about uncertainty.":"エビデンスを参考にし、不確実性も明示します。",
"Health coefficients are calibrated from published guidance and peer-reviewed evidence. MLS then converts those inputs into its own transparent Life Point framework.":"健康係数は公開ガイドラインと査読済み研究をもとに調整し、MLS 独自の透明な Life Point 枠組みに変換します。",
"MLS references leading health authorities such as WHO, AHA and CDC together with peer-reviewed research. These organisations do not issue or endorse MLS points.":"MLS は WHO、AHA、CDC などの主要機関と査読済み研究を参照します。これらの機関が MLS ポイントを発行・推奨しているわけではありません。",
"The Health model has been stress-tested across 100,000+ simulated health scenarios to check consistency, plausibility and edge cases.":"Health モデルは10万件以上の健康シナリオでストレステストを行い、一貫性、妥当性、境界事例を確認しています。",
"MLS is a wellbeing and self-tracking tool. Life Points are not clinical scores, biological age or medical risk predictions.":"MLS はウェルビーイングと自己記録のためのツールです。Life Points は臨床スコア、生物学的年齢、医療リスク予測ではありません。",
"The current MLS test architecture keeps user-entered data on-device. MLS does not sell personal data or use health information for advertising.":"現在の MLS テスト構成では、入力データは端末内に保持されます。MLS は個人データを販売せず、健康情報を広告に利用しません。",
"Privacy and trust are part of the product.":"プライバシーと信頼も製品の一部です。","Public legal pages are maintained here for app-store review and users worldwide.":"アプリストア審査と世界中の利用者向けに、公開法務ページをここで提供しています。","How MLS handles personal and wellbeing information.":"MLS による個人情報・ウェルビーイング情報の取り扱い。","Use, limitations and medical disclaimer.":"利用条件、制限、医療免責事項。","Contact, data deletion and app assistance.":"お問い合わせ、データ削除、アプリ支援。"
 },
 ko:{
"My Life Square turns everyday actions into a clear personal ledger: what builds your life, what erodes it, and how the balance changes over time.":"My Life Square는 일상의 행동을 명확한 개인 라이프 원장으로 바꿔, 무엇이 삶을 쌓고 무엇이 소모하며 그 균형이 시간에 따라 어떻게 변하는지 보여줍니다.",
"MLS uses Asset Life Points (ALP) and Liability Life Points (LLP) to show how actions accumulate across four important areas of life. The difference is your Life Equity.":"MLS는 Asset Life Points(ALP)와 Liability Life Points(LLP)를 사용해 네 가지 중요한 삶의 영역에서 행동이 어떻게 누적되는지 보여줍니다. 그 차이가 Life Equity입니다.",
"Life-building actions such as movement, learning, meaningful connection, reflection and service.":"운동, 학습, 의미 있는 연결, 성찰, 봉사처럼 삶을 쌓는 행동입니다.",
"Actions that erode health, time, relationships, knowledge or personal values.":"건강, 시간, 관계, 지식 또는 개인의 가치를 소모하는 행동입니다.",
"Your accumulated Life Assets minus Life Liabilities — shown over time, not as a fixed ceiling.":"누적 Life Assets에서 Life Liabilities를 뺀 값으로, 고정 상한이 아니라 시간에 따른 변화로 표시됩니다.",
"Review changes by day, month and year while preserving the underlying activity history.":"기존 활동 기록을 유지하면서 일·월·연 단위 변화를 확인합니다.",
"Life Total consolidates Health, Knowledge, Relationship and Belief. Each Square has its own Assets, Liabilities and Equity. They do not need to be equal.":"Life Total은 Health, Knowledge, Relationship, Belief를 통합합니다. 각 Square는 자체 Assets, Liabilities, Equity를 가지며 서로 같을 필요가 없습니다.",
"Evidence-informed. Transparent about uncertainty.":"근거를 참고하고 불확실성은 투명하게 표시합니다.",
"Health coefficients are calibrated from published guidance and peer-reviewed evidence. MLS then converts those inputs into its own transparent Life Point framework.":"건강 계수는 공개 지침과 동료평가 연구를 바탕으로 보정하며, MLS는 이를 자체의 투명한 Life Point 체계로 변환합니다.",
"MLS references leading health authorities such as WHO, AHA and CDC together with peer-reviewed research. These organisations do not issue or endorse MLS points.":"MLS는 WHO, AHA, CDC 등 주요 보건기관과 동료평가 연구를 참고합니다. 이 기관들이 MLS 포인트를 발행하거나 보증하는 것은 아닙니다.",
"The Health model has been stress-tested across 100,000+ simulated health scenarios to check consistency, plausibility and edge cases.":"Health 모델은 100,000개 이상의 시뮬레이션 건강 시나리오에서 일관성, 타당성 및 경계 사례를 확인하는 스트레스 테스트를 거쳤습니다.",
"MLS is a wellbeing and self-tracking tool. Life Points are not clinical scores, biological age or medical risk predictions.":"MLS는 웰빙 및 자기추적 도구입니다. Life Points는 임상 점수, 생물학적 나이 또는 의료 위험 예측이 아닙니다.",
"The current MLS test architecture keeps user-entered data on-device. MLS does not sell personal data or use health information for advertising.":"현재 MLS 테스트 구조에서는 사용자가 입력한 데이터가 기기에 보관됩니다. MLS는 개인정보를 판매하거나 건강 정보를 광고에 사용하지 않습니다.",
"Privacy and trust are part of the product.":"개인정보 보호와 신뢰도 제품의 일부입니다.","Public legal pages are maintained here for app-store review and users worldwide.":"앱스토어 심사와 전 세계 사용자를 위해 공개 법률 페이지를 제공합니다.","How MLS handles personal and wellbeing information.":"MLS의 개인정보 및 웰빙 정보 처리 방식입니다.","Use, limitations and medical disclaimer.":"이용, 제한 및 의료 면책사항입니다.","Contact, data deletion and app assistance.":"연락, 데이터 삭제 및 앱 지원입니다."
 }
};
for(const lang of ["th","ja","ko"]) Object.assign(T[lang],LONG[lang]);


const LEGAL={
 th:{
"This policy covers the current My Life Square architecture. It will be updated before any future feature changes how personal data is collected, transmitted or shared.":"นโยบายนี้ครอบคลุมสถาปัตยกรรมปัจจุบันของ My Life Square และจะได้รับการปรับปรุงก่อนที่ฟีเจอร์ในอนาคตจะเปลี่ยนวิธีการเก็บ ส่ง หรือแบ่งปันข้อมูลส่วนบุคคล",
"1. Scope":"1. ขอบเขต","This Privacy Policy explains how My Life Square (“MLS”) handles information when you use the app and related website.":"นโยบายความเป็นส่วนตัวนี้อธิบายว่า My Life Square (“MLS”) จัดการข้อมูลอย่างไรเมื่อคุณใช้แอปและเว็บไซต์ที่เกี่ยวข้อง",
"2. Current app data handling":"2. การจัดการข้อมูลของแอปในปัจจุบัน","In the current MLS test build, Life Point entries, routines, language preferences and related app information are processed and stored locally on the user’s device. The current Android build does not request the Android INTERNET permission and does not transmit MLS app data to the operator, advertisers, analytics providers or data brokers.":"ในรุ่นทดสอบ MLS ปัจจุบัน รายการ Life Point กิจวัตร การตั้งค่าภาษา และข้อมูลแอปที่เกี่ยวข้องจะถูกประมวลผลและเก็บไว้ในอุปกรณ์ของผู้ใช้ รุ่น Android ปัจจุบันไม่ขอสิทธิ์ INTERNET และไม่ส่งข้อมูล MLS ไปยังผู้ดำเนินการ ผู้ลงโฆษณา ผู้ให้บริการวิเคราะห์ หรือผู้ค้าข้อมูล",
"MLS does not sell personal information.":"MLS ไม่ขายข้อมูลส่วนบุคคล",
"3. Health and wellbeing information":"3. ข้อมูลสุขภาพและความเป็นอยู่","MLS may process information users enter about activities, nutrition, movement, habits, relationships, learning, reflection and other wellbeing-related behaviours. In the current app build, that information remains on-device.":"MLS อาจประมวลผลข้อมูลที่ผู้ใช้ป้อนเกี่ยวกับกิจกรรม โภชนาการ การเคลื่อนไหว นิสัย ความสัมพันธ์ การเรียนรู้ การทบทวนตนเอง และพฤติกรรมด้านความเป็นอยู่อื่น ๆ ในรุ่นปัจจุบัน ข้อมูลนี้ยังคงอยู่ในอุปกรณ์",

"4. Biometric authentication":"4. การยืนยันตัวตนด้วยชีวมิติ","MLS may use the operating system’s biometric or device-credential authentication to protect access to the app. MLS does not receive or store fingerprints, face templates or other biometric identifiers. Authentication is handled by the operating system.":"MLS อาจใช้การยืนยันตัวตนด้วยชีวมิติหรือข้อมูลรับรองอุปกรณ์ของระบบปฏิบัติการเพื่อป้องกันการเข้าถึงแอป MLS ไม่รับหรือจัดเก็บลายนิ้วมือ แม่แบบใบหน้า หรือรหัสชีวมิติอื่น การยืนยันตัวตนดำเนินการโดยระบบปฏิบัติการ",
"5. Sharing":"5. การแบ่งปัน","The current app build does not transmit or share MLS user data with third parties. If third-party services are introduced later, this policy will identify the service, data involved, purpose and applicable user choices.":"รุ่นแอปปัจจุบันไม่ส่งหรือแบ่งปันข้อมูลผู้ใช้ MLS กับบุคคลที่สาม หากมีการใช้บริการบุคคลที่สามในอนาคต นโยบายนี้จะระบุบริการ ข้อมูลที่เกี่ยวข้อง วัตถุประสงค์ และทางเลือกของผู้ใช้",
"6. Advertising and sale of data":"6. การโฆษณาและการขายข้อมูล","MLS does not use personal or health information for targeted advertising and does not sell personal information. Health or fitness data obtained through platform health frameworks will not be used for advertising, marketing profiles or unrelated data mining.":"MLS ไม่ใช้ข้อมูลส่วนบุคคลหรือข้อมูลสุขภาพเพื่อการโฆษณาแบบกำหนดเป้าหมาย และไม่ขายข้อมูลส่วนบุคคล ข้อมูลสุขภาพหรือฟิตเนสที่ได้จากกรอบงานสุขภาพของแพลตฟอร์มจะไม่ถูกใช้เพื่อโฆษณา สร้างโปรไฟล์การตลาด หรือทำเหมืองข้อมูลที่ไม่เกี่ยวข้อง",
"7. Data retention and deletion":"7. การเก็บรักษาและลบข้อมูล","Current MLS data is stored locally until you delete it using available app controls, choose “Delete all local MLS data”, clear the app’s storage, or uninstall the app. The current app build does not create a remote MLS account.":"ข้อมูล MLS ปัจจุบันถูกเก็บไว้ในอุปกรณ์จนกว่าคุณจะลบผ่านตัวควบคุมในแอป เลือก “Delete all local MLS data” ล้างพื้นที่จัดเก็บของแอป หรือถอนการติดตั้ง รุ่นปัจจุบันไม่สร้างบัญชี MLS ระยะไกล",
"If account creation is introduced later, MLS will add an in-app account-deletion path, an external web deletion mechanism where required, and a documented retention policy before release.":"หากเพิ่มการสร้างบัญชีในอนาคต MLS จะเพิ่มช่องทางลบบัญชีในแอป กลไกลบผ่านเว็บภายนอกเมื่อจำเป็น และนโยบายการเก็บรักษาข้อมูลที่เป็นลายลักษณ์อักษรก่อนเผยแพร่",
"8. Security":"8. ความปลอดภัย","MLS uses operating-system security controls and may use biometric or device-credential access protection where supported. No storage method is completely risk-free, so users should maintain device security and current operating-system protections.":"MLS ใช้มาตรการรักษาความปลอดภัยของระบบปฏิบัติการ และอาจใช้การป้องกันด้วยชีวมิติหรือข้อมูลรับรองอุปกรณ์เมื่อรองรับ ไม่มีวิธีจัดเก็บใดปราศจากความเสี่ยงทั้งหมด ผู้ใช้จึงควรรักษาความปลอดภัยของอุปกรณ์และระบบปฏิบัติการให้เป็นปัจจุบัน",
"9. Children":"9. เด็ก","MLS is not designed as a child-directed service. Distribution settings, target audience and age ratings will be configured according to the actual shipping feature set in each app store.":"MLS ไม่ได้ออกแบบเป็นบริการที่มุ่งเน้นเด็ก การตั้งค่าการเผยแพร่ กลุ่มเป้าหมาย และการจัดระดับอายุจะกำหนดตามฟีเจอร์จริงที่เผยแพร่ในแต่ละร้านแอป",
"10. Health and medical disclaimer":"10. ข้อจำกัดความรับผิดด้านสุขภาพและการแพทย์","MLS is a wellbeing and personal-tracking tool. It is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition.":"MLS เป็นเครื่องมือด้านความเป็นอยู่และการติดตามส่วนบุคคล ไม่ใช่อุปกรณ์การแพทย์ และไม่ใช้เพื่อวินิจฉัย รักษา บำบัด หรือป้องกันโรคหรือภาวะทางการแพทย์ใด ๆ",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are educational and self-tracking constructs. They are not clinical scores, biological age, medical risk predictions or guarantees of health outcomes.":"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity และข้อมูลเชิงลึกที่เกี่ยวข้องเป็นกรอบเพื่อการเรียนรู้และการติดตามตนเอง ไม่ใช่คะแนนทางคลินิก อายุชีวภาพ การคาดการณ์ความเสี่ยงทางการแพทย์ หรือการรับประกันผลลัพธ์ด้านสุขภาพ",
"Health-related coefficients are informed by published guidance and peer-reviewed research, but the MLS Life Point conversion is an MLS model and is not issued or endorsed by WHO, AHA, CDC or another health authority. For medical advice, diagnosis or treatment, consult a qualified healthcare professional.":"ค่าสัมประสิทธิ์ด้านสุขภาพอ้างอิงแนวทางที่เผยแพร่และงานวิจัยที่ผ่านการทบทวน แต่การแปลง Life Point เป็นโมเดลของ MLS เอง และไม่ได้ออกหรือรับรองโดย WHO, AHA, CDC หรือหน่วยงานสาธารณสุขอื่น สำหรับคำแนะนำ การวินิจฉัย หรือการรักษาทางการแพทย์ โปรดปรึกษาผู้เชี่ยวชาญด้านสุขภาพที่มีคุณสมบัติ",
"11. International users":"11. ผู้ใช้ต่างประเทศ","MLS is intended for a global audience. Privacy and data-protection rights vary by jurisdiction. MLS will comply with applicable laws in the regions where the service is offered.":"MLS มีไว้สำหรับผู้ใช้ทั่วโลก สิทธิด้านความเป็นส่วนตัวและการคุ้มครองข้อมูลแตกต่างกันตามเขตอำนาจ MLS จะปฏิบัติตามกฎหมายที่ใช้บังคับในภูมิภาคที่ให้บริการ",
"12. Changes":"12. การเปลี่ยนแปลง","This policy may be updated when MLS changes features or data practices. The effective date will be revised when material changes are made.":"นโยบายนี้อาจได้รับการปรับปรุงเมื่อ MLS เปลี่ยนฟีเจอร์หรือแนวปฏิบัติด้านข้อมูล และจะปรับวันที่มีผลเมื่อมีการเปลี่ยนแปลงสาระสำคัญ",
"13. Contact":"13. ติดต่อ","Privacy enquiries:":"สอบถามเรื่องความเป็นส่วนตัว:",
"My Life Square (“MLS”) is provided for personal informational, educational and wellbeing-tracking purposes.":"My Life Square (“MLS”) จัดทำขึ้นเพื่อข้อมูลส่วนบุคคล การเรียนรู้ และการติดตามความเป็นอยู่",
"MLS is not a substitute for medical, psychological, legal, financial or other regulated professional advice. MLS is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition. Consult qualified professionals where appropriate.":"MLS ไม่ใช่สิ่งทดแทนคำแนะนำด้านการแพทย์ จิตวิทยา กฎหมาย การเงิน หรือวิชาชีพที่มีการกำกับอื่น ๆ MLS ไม่ใช่อุปกรณ์การแพทย์และไม่ใช้เพื่อวินิจฉัย รักษา บำบัด หรือป้องกันโรคหรือภาวะทางการแพทย์ โปรดปรึกษาผู้เชี่ยวชาญที่มีคุณสมบัติเมื่อเหมาะสม",
"Life Point methodology":"ระเบียบวิธี Life Point","Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are MLS-designed constructs. They are not clinical scores, verified measures of longevity, biological age, disease probability or guaranteed outcomes. The methodology and coefficients may evolve as evidence, validation and product design develop.":"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity และข้อมูลเชิงลึกที่เกี่ยวข้องเป็นกรอบที่ MLS ออกแบบ ไม่ใช่คะแนนทางคลินิก ตัวชี้วัดอายุยืนที่ผ่านการยืนยัน อายุชีวภาพ ความน่าจะเป็นของโรค หรือผลลัพธ์ที่รับประกัน วิธีการและค่าสัมประสิทธิ์อาจพัฒนาไปตามหลักฐาน การตรวจสอบ และการออกแบบผลิตภัณฑ์",
"You are responsible for the accuracy of information you enter, reviewing entries and corrections, decisions you make using app information, and maintaining device security and backups where applicable.":"คุณรับผิดชอบต่อความถูกต้องของข้อมูลที่ป้อน การตรวจสอบและแก้ไขรายการ การตัดสินใจที่ทำจากข้อมูลในแอป และการรักษาความปลอดภัยของอุปกรณ์และการสำรองข้อมูลเมื่อเกี่ยวข้อง",
"Features may be changed, improved, suspended or removed as MLS develops. Test and pre-release builds may contain incomplete functionality.":"ฟีเจอร์อาจถูกเปลี่ยน ปรับปรุง ระงับ หรือนำออกเมื่อ MLS พัฒนา รุ่นทดสอบและรุ่นก่อนเผยแพร่อาจมีฟังก์ชันไม่สมบูรณ์",
"Do not use MLS for unlawful activity, to harm others, to misrepresent clinical or professional advice, or to interfere with the app, website or security systems.":"ห้ามใช้ MLS สำหรับกิจกรรมที่ผิดกฎหมาย ทำร้ายผู้อื่น บิดเบือนคำแนะนำทางคลินิกหรือวิชาชีพ หรือรบกวนแอป เว็บไซต์ หรือระบบรักษาความปลอดภัย",
"Use of MLS is also subject to the":"การใช้ MLS อยู่ภายใต้",
"For My Life Square support, privacy enquiries, feedback or store-review contact, email us.":"สำหรับการช่วยเหลือ My Life Square คำถามด้านความเป็นส่วนตัว ข้อเสนอแนะ หรือการติดต่อเพื่อการตรวจสอบร้านแอป โปรดส่งอีเมลหาเรา",
"The current MLS app does not create a remote MLS account. User-entered MLS data is designed to remain on-device. You can delete local MLS data from the app’s Privacy & Legal screen, clear app storage through your device settings, or uninstall the app.":"แอป MLS ปัจจุบันไม่สร้างบัญชี MLS ระยะไกล ข้อมูลที่ผู้ใช้ป้อนถูกออกแบบให้อยู่ในอุปกรณ์ คุณสามารถลบข้อมูล MLS ในเครื่องจากหน้า Privacy & Legal ล้างพื้นที่จัดเก็บแอปผ่านการตั้งค่าอุปกรณ์ หรือถอนการติดตั้งแอป",
"If account or cloud functionality is introduced later, this page will be updated with the required online account/data-deletion process.":"หากเพิ่มฟังก์ชันบัญชีหรือคลาวด์ในอนาคต หน้านี้จะได้รับการอัปเดตด้วยขั้นตอนการลบบัญชี/ข้อมูลออนไลน์ที่จำเป็น",
"Include your app version and test number.":"ระบุเวอร์ชันแอปและหมายเลขการทดสอบ","Describe what you expected and what happened.":"อธิบายสิ่งที่คุณคาดหวังและสิ่งที่เกิดขึ้น","Do not email passwords, device unlock codes or sensitive medical records.":"อย่าส่งรหัสผ่าน รหัสปลดล็อกอุปกรณ์ หรือเวชระเบียนที่อ่อนไหวทางอีเมล",
"MLS does not provide medical advice or emergency services. If you have a medical concern, contact a qualified healthcare professional or local emergency service.":"MLS ไม่ให้คำแนะนำทางการแพทย์หรือบริการฉุกเฉิน หากมีข้อกังวลทางการแพทย์ โปรดติดต่อผู้เชี่ยวชาญด้านสุขภาพที่มีคุณสมบัติหรือบริการฉุกเฉินในพื้นที่",
"The current MLS app does not create a remote MLS account or remote data profile.":"แอป MLS ปัจจุบันไม่สร้างบัญชี MLS ระยะไกลหรือโปรไฟล์ข้อมูลระยะไกล",
"You can also clear MLS app storage or uninstall the app using your device settings.":"คุณยังสามารถล้างพื้นที่จัดเก็บของแอป MLS หรือถอนการติดตั้งผ่านการตั้งค่าอุปกรณ์",
"Do not send passwords, biometric credentials or sensitive medical records.":"อย่าส่งรหัสผ่าน ข้อมูลรับรองชีวมิติ หรือเวชระเบียนที่อ่อนไหว",
"If MLS introduces remote accounts or cloud storage in the future, this page will be updated with a web-based deletion request process before those features are released.":"หาก MLS เพิ่มบัญชีระยะไกลหรือที่เก็บข้อมูลบนคลาวด์ในอนาคต หน้านี้จะได้รับการอัปเดตด้วยกระบวนการขอลบข้อมูลผ่านเว็บก่อนฟีเจอร์เหล่านั้นเผยแพร่",
"MLS is an educational and self-tracking framework, not a clinical score or medical device.":"MLS เป็นกรอบเพื่อการเรียนรู้และการติดตามตนเอง ไม่ใช่คะแนนทางคลินิกหรืออุปกรณ์การแพทย์",
"ALP records life-building activities and behaviours. Examples may include physical activity, learning, meaningful connection, reflection and service. Activity inputs can be measured in minutes, frequency, quantity or other suitable units depending on the behaviour.":"ALP บันทึกกิจกรรมและพฤติกรรมที่เสริมสร้างชีวิต เช่น กิจกรรมทางกาย การเรียนรู้ ความสัมพันธ์ที่มีความหมาย การทบทวนตนเอง และการช่วยเหลือ ข้อมูลกิจกรรมอาจวัดเป็นนาที ความถี่ ปริมาณ หรือหน่วยอื่นที่เหมาะสม",
"LLP records activities or behaviours that may erode health, time, relationships, knowledge or personal values. Liability weighting may be stronger than the matching asset rate when the evidence or product logic supports a greater adverse effect.":"LLP บันทึกกิจกรรมหรือพฤติกรรมที่อาจบั่นทอนสุขภาพ เวลา ความสัมพันธ์ ความรู้ หรือคุณค่าส่วนบุคคล น้ำหนักของ Liability อาจสูงกว่า Asset ที่เกี่ยวข้องเมื่อหลักฐานหรือเหตุผลของผลิตภัณฑ์สนับสนุนว่ามีผลเสียมากกว่า",
"Life Equity is the difference between accumulated Life Assets and Life Liabilities. Health, Knowledge, Relationship and Belief each maintain their own Assets, Liabilities and Equity. Life Total consolidates all four Squares without assuming they should each be 25%.":"Life Equity คือผลต่างระหว่าง Life Assets และ Life Liabilities ที่สะสมไว้ Health, Knowledge, Relationship และ Belief แต่ละส่วนมี Assets, Liabilities และ Equity ของตนเอง Life Total รวมทั้งสี่ Square โดยไม่สมมติว่าแต่ละส่วนต้องเท่ากับ 25%",
"Health coefficients are informed by published guidance from leading health authorities such as WHO, AHA and CDC together with relevant peer-reviewed research. MLS converts these evidence inputs into its own Life Point model; the health authorities do not issue or endorse MLS points.":"ค่าสัมประสิทธิ์ด้านสุขภาพอ้างอิงแนวทางจากหน่วยงานชั้นนำ เช่น WHO, AHA และ CDC รวมถึงงานวิจัยที่ผ่านการทบทวน MLS นำหลักฐานเหล่านี้มาแปลงเป็นโมเดล Life Point ของตนเอง หน่วยงานเหล่านี้ไม่ได้ออกหรือรับรองคะแนน MLS",
"More time or quantity does not necessarily produce points linearly. Where appropriate, MLS uses diminishing-return curves, caps, thresholds or severity-weighted liabilities. Repeated entries should be aggregated into the relevant daily or weekly exposure before points are calculated.":"เวลาหรือปริมาณที่มากขึ้นไม่ได้เพิ่มคะแนนแบบเส้นตรงเสมอไป MLS อาจใช้เส้นโค้งผลตอบแทนที่ลดลง เพดาน เกณฑ์ หรือ Liability ที่ถ่วงน้ำหนักตามความรุนแรง รายการซ้ำควรรวมเป็นปริมาณรายวันหรือรายสัปดาห์ที่เกี่ยวข้องก่อนคำนวณคะแนน",
"The Health model has been stress-tested across more than 100,000 simulated health scenarios to evaluate consistency, edge cases and plausibility. Simulation is not clinical validation and does not make MLS a medical risk model.":"โมเดล Health ผ่านการทดสอบกับสถานการณ์สุขภาพจำลองมากกว่า 100,000 แบบเพื่อประเมินความสอดคล้อง กรณีขอบเขต และความสมเหตุสมผล การจำลองไม่ใช่การตรวจสอบทางคลินิกและไม่ได้ทำให้ MLS เป็นโมเดลความเสี่ยงทางการแพทย์",
"MLS aims to make the input, unit, coefficient direction and reason for each ALP/LLP contribution inspectable. The methodology will continue to be refined as the evidence base and validation work evolve.":"MLS มุ่งให้สามารถตรวจสอบอินพุต หน่วย ทิศทางค่าสัมประสิทธิ์ และเหตุผลของการเปลี่ยนแปลง ALP/LLP แต่ละรายการได้ วิธีการจะได้รับการปรับปรุงต่อเนื่องตามหลักฐานและงานตรวจสอบ"
 },
 ja:{
"This policy covers the current My Life Square architecture. It will be updated before any future feature changes how personal data is collected, transmitted or shared.":"本ポリシーは現在の My Life Square の構成を対象とします。将来の機能により個人データの収集・送信・共有方法が変わる場合は、その機能公開前に更新します。",
"1. Scope":"1. 適用範囲","This Privacy Policy explains how My Life Square (“MLS”) handles information when you use the app and related website.":"本プライバシーポリシーは、My Life Square（「MLS」）のアプリおよび関連ウェブサイト利用時の情報取扱いを説明します。",
"2. Current app data handling":"2. 現在のアプリ内データ処理","In the current MLS test build, Life Point entries, routines, language preferences and related app information are processed and stored locally on the user’s device. The current Android build does not request the Android INTERNET permission and does not transmit MLS app data to the operator, advertisers, analytics providers or data brokers.":"現在の MLS テスト版では、Life Point の記録、ルーティン、言語設定、関連アプリ情報は利用者の端末内で処理・保存されます。現在の Android 版は INTERNET 権限を要求せず、MLS データを運営者、広告事業者、分析事業者、データブローカーへ送信しません。",
"MLS does not sell personal information.":"MLS は個人情報を販売しません。",
"3. Health and wellbeing information":"3. 健康・ウェルビーイング情報","MLS may process information users enter about activities, nutrition, movement, habits, relationships, learning, reflection and other wellbeing-related behaviours. In the current app build, that information remains on-device.":"MLS は、活動、栄養、運動、習慣、人間関係、学習、振り返りなど、利用者が入力するウェルビーイング関連情報を処理する場合があります。現在のアプリ版では、これらの情報は端末内に保持されます。",

"4. Biometric authentication":"4. 生体認証","MLS may use the operating system’s biometric or device-credential authentication to protect access to the app. MLS does not receive or store fingerprints, face templates or other biometric identifiers. Authentication is handled by the operating system.":"MLS はアプリへのアクセス保護のため、OS の生体認証または端末認証情報を利用する場合があります。MLS は指紋、顔テンプレート、その他の生体識別情報を受信・保存しません。認証処理は OS が行います。",
"5. Sharing":"5. 共有","The current app build does not transmit or share MLS user data with third parties. If third-party services are introduced later, this policy will identify the service, data involved, purpose and applicable user choices.":"現在のアプリ版は MLS 利用者データを第三者へ送信・共有しません。将来第三者サービスを導入する場合、本ポリシーでサービス、対象データ、目的、利用者の選択肢を明示します。",
"6. Advertising and sale of data":"6. 広告およびデータ販売","MLS does not use personal or health information for targeted advertising and does not sell personal information. Health or fitness data obtained through platform health frameworks will not be used for advertising, marketing profiles or unrelated data mining.":"MLS は個人情報や健康情報をターゲティング広告に利用せず、個人情報を販売しません。プラットフォームの健康フレームワークから得た健康・フィットネスデータを、広告、マーケティングプロファイル、無関係なデータマイニングに利用しません。",
"7. Data retention and deletion":"7. データ保持・削除","Current MLS data is stored locally until you delete it using available app controls, choose “Delete all local MLS data”, clear the app’s storage, or uninstall the app. The current app build does not create a remote MLS account.":"現在の MLS データは、アプリ内の削除機能、「Delete all local MLS data」、アプリストレージの消去、またはアンインストールを行うまで端末内に保存されます。現在のアプリ版はリモート MLS アカウントを作成しません。",
"If account creation is introduced later, MLS will add an in-app account-deletion path, an external web deletion mechanism where required, and a documented retention policy before release.":"将来アカウント機能を導入する場合、公開前にアプリ内アカウント削除、必要に応じたウェブ上の削除手段、文書化した保持方針を追加します。",
"8. Security":"8. セキュリティ","MLS uses operating-system security controls and may use biometric or device-credential access protection where supported. No storage method is completely risk-free, so users should maintain device security and current operating-system protections.":"MLS は OS のセキュリティ機能を利用し、対応端末では生体認証または端末認証によるアクセス保護を利用する場合があります。完全に無リスクの保存方法はないため、利用者は端末および OS のセキュリティを維持してください。",
"9. Children":"9. 子ども","MLS is not designed as a child-directed service. Distribution settings, target audience and age ratings will be configured according to the actual shipping feature set in each app store.":"MLS は子ども向けサービスとして設計されていません。配信設定、対象年齢、年齢レーティングは、各アプリストアで実際に提供する機能に応じて設定します。",
"10. Health and medical disclaimer":"10. 健康・医療に関する免責","MLS is a wellbeing and personal-tracking tool. It is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition.":"MLS はウェルビーイングと個人記録のためのツールです。医療機器ではなく、疾病や医療状態の診断、治療、治癒、予防を行うものではありません。",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are educational and self-tracking constructs. They are not clinical scores, biological age, medical risk predictions or guarantees of health outcomes.":"Life Points、Asset Life Points（ALP）、Liability Life Points（LLP）、Life Equity および関連する示唆は、教育・自己記録のための概念です。臨床スコア、生物学的年齢、医療リスク予測、健康結果の保証ではありません。",
"Health-related coefficients are informed by published guidance and peer-reviewed research, but the MLS Life Point conversion is an MLS model and is not issued or endorsed by WHO, AHA, CDC or another health authority. For medical advice, diagnosis or treatment, consult a qualified healthcare professional.":"健康関連係数は公開ガイドラインや査読済み研究を参考にしていますが、MLS の Life Point 変換は MLS 独自モデルであり、WHO、AHA、CDC その他の保健機関が発行・推奨するものではありません。医療上の助言、診断、治療については有資格の医療専門家に相談してください。",
"11. International users":"11. 国際利用者","MLS is intended for a global audience. Privacy and data-protection rights vary by jurisdiction. MLS will comply with applicable laws in the regions where the service is offered.":"MLS は世界中の利用者を想定しています。プライバシーおよびデータ保護の権利は法域により異なり、MLS はサービス提供地域で適用される法令を遵守します。",
"12. Changes":"12. 変更","This policy may be updated when MLS changes features or data practices. The effective date will be revised when material changes are made.":"MLS の機能やデータ取扱いが変更された場合、本ポリシーを更新することがあります。重要な変更時には発効日も更新します。",
"13. Contact":"13. お問い合わせ","Privacy enquiries:":"プライバシーに関するお問い合わせ:",
"My Life Square (“MLS”) is provided for personal informational, educational and wellbeing-tracking purposes.":"My Life Square（「MLS」）は、個人向け情報、教育、ウェルビーイング記録を目的として提供されます。",
"MLS is not a substitute for medical, psychological, legal, financial or other regulated professional advice. MLS is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition. Consult qualified professionals where appropriate.":"MLS は医療、心理、法律、金融その他の規制対象専門家の助言に代わるものではありません。MLS は医療機器ではなく、疾病や医療状態の診断、治療、治癒、予防を行いません。必要に応じて有資格の専門家に相談してください。",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are MLS-designed constructs. They are not clinical scores, verified measures of longevity, biological age, disease probability or guaranteed outcomes. The methodology and coefficients may evolve as evidence, validation and product design develop.":"Life Points、Asset Life Points（ALP）、Liability Life Points（LLP）、Life Equity および関連する示唆は MLS が設計した概念です。臨床スコア、検証済みの寿命指標、生物学的年齢、疾病確率、結果の保証ではありません。方法論と係数は、エビデンス、検証、製品設計の進展に応じて変更される場合があります。",
"You are responsible for the accuracy of information you enter, reviewing entries and corrections, decisions you make using app information, and maintaining device security and backups where applicable.":"入力情報の正確性、記録や修正の確認、アプリ情報に基づく判断、必要に応じた端末セキュリティとバックアップの維持は利用者の責任です。",
"Features may be changed, improved, suspended or removed as MLS develops. Test and pre-release builds may contain incomplete functionality.":"MLS の開発に伴い、機能は変更、改善、停止、削除される場合があります。テスト版・プレリリース版には未完成の機能が含まれる場合があります。",
"Do not use MLS for unlawful activity, to harm others, to misrepresent clinical or professional advice, or to interfere with the app, website or security systems.":"MLS を違法行為、他者への危害、臨床・専門家の助言の偽装、アプリ・ウェブサイト・セキュリティシステムへの妨害に使用しないでください。",
"Use of MLS is also subject to the":"MLS の利用には以下も適用されます:",
"For My Life Square support, privacy enquiries, feedback or store-review contact, email us.":"My Life Square のサポート、プライバシーに関する質問、フィードバック、ストア審査連絡はメールでお問い合わせください。",
"The current MLS app does not create a remote MLS account. User-entered MLS data is designed to remain on-device. You can delete local MLS data from the app’s Privacy & Legal screen, clear app storage through your device settings, or uninstall the app.":"現在の MLS アプリはリモートアカウントを作成しません。入力された MLS データは端末内に保持される設計です。アプリの Privacy & Legal 画面からローカルデータを削除するか、端末設定でストレージを消去、またはアプリをアンインストールできます。",
"If account or cloud functionality is introduced later, this page will be updated with the required online account/data-deletion process.":"将来アカウントやクラウド機能を導入する場合、必要なオンラインのアカウント／データ削除手順を本ページに追加します。",
"Include your app version and test number.":"アプリのバージョンとテスト番号を記載してください。","Describe what you expected and what happened.":"期待した動作と実際に起きたことを説明してください。","Do not email passwords, device unlock codes or sensitive medical records.":"パスワード、端末の解除コード、機微な医療記録をメールで送信しないでください。",
"MLS does not provide medical advice or emergency services. If you have a medical concern, contact a qualified healthcare professional or local emergency service.":"MLS は医療助言や緊急サービスを提供しません。医療上の懸念がある場合は、有資格の医療専門家または地域の緊急サービスへ連絡してください。",
"The current MLS app does not create a remote MLS account or remote data profile.":"現在の MLS アプリはリモート MLS アカウントやリモートデータプロファイルを作成しません。",
"You can also clear MLS app storage or uninstall the app using your device settings.":"端末設定から MLS のアプリストレージを消去したり、アプリをアンインストールすることもできます。",
"Do not send passwords, biometric credentials or sensitive medical records.":"パスワード、生体認証情報、機微な医療記録を送信しないでください。",
"If MLS introduces remote accounts or cloud storage in the future, this page will be updated with a web-based deletion request process before those features are released.":"将来 MLS がリモートアカウントやクラウド保存を導入する場合、それらの機能公開前にウェブ上の削除申請手順を本ページに追加します。",
"MLS is an educational and self-tracking framework, not a clinical score or medical device.":"MLS は教育・自己記録のための枠組みであり、臨床スコアや医療機器ではありません。",
"ALP records life-building activities and behaviours. Examples may include physical activity, learning, meaningful connection, reflection and service. Activity inputs can be measured in minutes, frequency, quantity or other suitable units depending on the behaviour.":"ALP は人生を築く活動や行動を記録します。例として運動、学習、意味のある交流、振り返り、支援などがあります。行動に応じて、分、頻度、量、その他の適切な単位で入力します。",
"LLP records activities or behaviours that may erode health, time, relationships, knowledge or personal values. Liability weighting may be stronger than the matching asset rate when the evidence or product logic supports a greater adverse effect.":"LLP は健康、時間、人間関係、知識、個人の価値を損なう可能性のある活動・行動を記録します。エビデンスや製品ロジックがより大きな悪影響を示す場合、Liability の重みは対応する Asset より強くなることがあります。",
"Life Equity is the difference between accumulated Life Assets and Life Liabilities. Health, Knowledge, Relationship and Belief each maintain their own Assets, Liabilities and Equity. Life Total consolidates all four Squares without assuming they should each be 25%.":"Life Equity は累積 Life Assets と Life Liabilities の差です。Health、Knowledge、Relationship、Belief はそれぞれ独自の Assets、Liabilities、Equity を持ちます。Life Total は各 Square が25%であると仮定せず4つを統合します。",
"Health coefficients are informed by published guidance from leading health authorities such as WHO, AHA and CDC together with relevant peer-reviewed research. MLS converts these evidence inputs into its own Life Point model; the health authorities do not issue or endorse MLS points.":"健康係数は WHO、AHA、CDC など主要保健機関の公開ガイドラインと関連する査読済み研究を参考にします。MLS はこれらを独自の Life Point モデルへ変換します。各保健機関が MLS ポイントを発行・推奨しているわけではありません。",
"More time or quantity does not necessarily produce points linearly. Where appropriate, MLS uses diminishing-return curves, caps, thresholds or severity-weighted liabilities. Repeated entries should be aggregated into the relevant daily or weekly exposure before points are calculated.":"時間や量が増えてもポイントが直線的に増えるとは限りません。必要に応じて、逓減曲線、上限、しきい値、影響度で重み付けした Liability を使用します。重複入力はポイント計算前に該当する日・週の量として集計します。",
"The Health model has been stress-tested across more than 100,000 simulated health scenarios to evaluate consistency, edge cases and plausibility. Simulation is not clinical validation and does not make MLS a medical risk model.":"Health モデルは10万件を超える模擬健康シナリオで、一貫性、境界事例、妥当性を評価するストレステストを行っています。シミュレーションは臨床検証ではなく、MLS を医療リスクモデルにするものでもありません。",
"MLS aims to make the input, unit, coefficient direction and reason for each ALP/LLP contribution inspectable. The methodology will continue to be refined as the evidence base and validation work evolve.":"MLS は各 ALP/LLP の入力、単位、係数の方向、理由を確認できることを目指します。方法論はエビデンスと検証作業の進展に応じて継続的に改善します。"
 },
 ko:{
"This policy covers the current My Life Square architecture. It will be updated before any future feature changes how personal data is collected, transmitted or shared.":"이 정책은 현재 My Life Square 구조에 적용됩니다. 향후 기능이 개인정보의 수집, 전송 또는 공유 방식을 변경하기 전에 이 정책을 업데이트합니다.",
"1. Scope":"1. 범위","This Privacy Policy explains how My Life Square (“MLS”) handles information when you use the app and related website.":"이 개인정보 처리방침은 My Life Square(“MLS”) 앱과 관련 웹사이트를 사용할 때 정보를 어떻게 처리하는지 설명합니다.",
"2. Current app data handling":"2. 현재 앱 데이터 처리","In the current MLS test build, Life Point entries, routines, language preferences and related app information are processed and stored locally on the user’s device. The current Android build does not request the Android INTERNET permission and does not transmit MLS app data to the operator, advertisers, analytics providers or data brokers.":"현재 MLS 테스트 빌드에서는 Life Point 기록, 루틴, 언어 설정 및 관련 앱 정보가 사용자의 기기에서 처리되고 로컬에 저장됩니다. 현재 Android 빌드는 INTERNET 권한을 요청하지 않으며 MLS 앱 데이터를 운영자, 광고주, 분석 제공업체 또는 데이터 브로커에게 전송하지 않습니다.",
"MLS does not sell personal information.":"MLS는 개인정보를 판매하지 않습니다.",
"3. Health and wellbeing information":"3. 건강 및 웰빙 정보","MLS may process information users enter about activities, nutrition, movement, habits, relationships, learning, reflection and other wellbeing-related behaviours. In the current app build, that information remains on-device.":"MLS는 사용자가 입력한 활동, 영양, 움직임, 습관, 관계, 학습, 성찰 및 기타 웰빙 관련 정보를 처리할 수 있습니다. 현재 앱 빌드에서는 해당 정보가 기기에 남아 있습니다.",

"4. Biometric authentication":"4. 생체 인증","MLS may use the operating system’s biometric or device-credential authentication to protect access to the app. MLS does not receive or store fingerprints, face templates or other biometric identifiers. Authentication is handled by the operating system.":"MLS는 앱 접근을 보호하기 위해 운영체제의 생체 인증 또는 기기 자격 증명을 사용할 수 있습니다. MLS는 지문, 얼굴 템플릿 또는 기타 생체 식별자를 수신하거나 저장하지 않으며 인증은 운영체제가 처리합니다.",
"5. Sharing":"5. 공유","The current app build does not transmit or share MLS user data with third parties. If third-party services are introduced later, this policy will identify the service, data involved, purpose and applicable user choices.":"현재 앱 빌드는 MLS 사용자 데이터를 제3자에게 전송하거나 공유하지 않습니다. 향후 제3자 서비스가 도입되면 이 정책에서 서비스, 관련 데이터, 목적 및 사용자 선택권을 설명합니다.",
"6. Advertising and sale of data":"6. 광고 및 데이터 판매","MLS does not use personal or health information for targeted advertising and does not sell personal information. Health or fitness data obtained through platform health frameworks will not be used for advertising, marketing profiles or unrelated data mining.":"MLS는 개인정보나 건강정보를 타깃 광고에 사용하지 않고 개인정보를 판매하지 않습니다. 플랫폼 건강 프레임워크를 통해 얻은 건강 또는 피트니스 데이터는 광고, 마케팅 프로필 또는 관련 없는 데이터 마이닝에 사용하지 않습니다.",
"7. Data retention and deletion":"7. 데이터 보관 및 삭제","Current MLS data is stored locally until you delete it using available app controls, choose “Delete all local MLS data”, clear the app’s storage, or uninstall the app. The current app build does not create a remote MLS account.":"현재 MLS 데이터는 앱 내 제어 기능으로 삭제하거나 “Delete all local MLS data”를 선택하거나 앱 저장공간을 지우거나 앱을 제거할 때까지 로컬에 저장됩니다. 현재 앱 빌드는 원격 MLS 계정을 만들지 않습니다.",
"If account creation is introduced later, MLS will add an in-app account-deletion path, an external web deletion mechanism where required, and a documented retention policy before release.":"향후 계정 기능이 도입되면 MLS는 출시 전에 앱 내 계정 삭제 경로, 필요한 경우 외부 웹 삭제 절차, 문서화된 보관 정책을 추가합니다.",
"8. Security":"8. 보안","MLS uses operating-system security controls and may use biometric or device-credential access protection where supported. No storage method is completely risk-free, so users should maintain device security and current operating-system protections.":"MLS는 운영체제 보안 기능을 사용하며 지원되는 경우 생체 인증 또는 기기 자격 증명 보호를 사용할 수 있습니다. 완전히 위험이 없는 저장 방식은 없으므로 사용자는 기기와 운영체제 보안을 최신 상태로 유지해야 합니다.",
"9. Children":"9. 아동","MLS is not designed as a child-directed service. Distribution settings, target audience and age ratings will be configured according to the actual shipping feature set in each app store.":"MLS는 아동 대상 서비스로 설계되지 않았습니다. 배포 설정, 대상 사용자 및 연령 등급은 각 앱스토어에 실제 출시되는 기능을 기준으로 설정됩니다.",
"10. Health and medical disclaimer":"10. 건강 및 의료 면책","MLS is a wellbeing and personal-tracking tool. It is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition.":"MLS는 웰빙 및 개인 추적 도구입니다. 의료기기가 아니며 질병이나 의학적 상태를 진단, 치료, 치유 또는 예방하지 않습니다.",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are educational and self-tracking constructs. They are not clinical scores, biological age, medical risk predictions or guarantees of health outcomes.":"Life Points, Asset Life Points(ALP), Liability Life Points(LLP), Life Equity 및 관련 인사이트는 교육 및 자기추적을 위한 개념입니다. 임상 점수, 생물학적 나이, 의료 위험 예측 또는 건강 결과 보장이 아닙니다.",
"Health-related coefficients are informed by published guidance and peer-reviewed research, but the MLS Life Point conversion is an MLS model and is not issued or endorsed by WHO, AHA, CDC or another health authority. For medical advice, diagnosis or treatment, consult a qualified healthcare professional.":"건강 관련 계수는 공개 지침과 동료평가 연구를 참고하지만 MLS Life Point 변환은 MLS 자체 모델이며 WHO, AHA, CDC 또는 기타 보건기관이 발행하거나 보증하지 않습니다. 의료 조언, 진단 또는 치료는 자격 있는 의료 전문가와 상담하십시오.",
"11. International users":"11. 국제 사용자","MLS is intended for a global audience. Privacy and data-protection rights vary by jurisdiction. MLS will comply with applicable laws in the regions where the service is offered.":"MLS는 전 세계 사용자를 대상으로 합니다. 개인정보 및 데이터 보호 권리는 관할지역에 따라 다르며 MLS는 서비스 제공 지역의 적용 법률을 준수합니다.",
"12. Changes":"12. 변경","This policy may be updated when MLS changes features or data practices. The effective date will be revised when material changes are made.":"MLS의 기능 또는 데이터 관행이 변경되면 이 정책이 업데이트될 수 있으며 중요한 변경이 있을 경우 시행일도 수정됩니다.",
"13. Contact":"13. 연락처","Privacy enquiries:":"개인정보 문의:",
"My Life Square (“MLS”) is provided for personal informational, educational and wellbeing-tracking purposes.":"My Life Square(“MLS”)는 개인 정보, 교육 및 웰빙 추적 목적으로 제공됩니다.",
"MLS is not a substitute for medical, psychological, legal, financial or other regulated professional advice. MLS is not a medical device and does not diagnose, treat, cure or prevent any disease or medical condition. Consult qualified professionals where appropriate.":"MLS는 의료, 심리, 법률, 금융 또는 기타 규제 전문 조언을 대신하지 않습니다. MLS는 의료기기가 아니며 질병이나 의학적 상태를 진단, 치료, 치유 또는 예방하지 않습니다. 필요한 경우 자격 있는 전문가와 상담하십시오.",
"Life Points, Asset Life Points (ALP), Liability Life Points (LLP), Life Equity and related insights are MLS-designed constructs. They are not clinical scores, verified measures of longevity, biological age, disease probability or guaranteed outcomes. The methodology and coefficients may evolve as evidence, validation and product design develop.":"Life Points, Asset Life Points(ALP), Liability Life Points(LLP), Life Equity 및 관련 인사이트는 MLS가 설계한 개념입니다. 임상 점수, 검증된 수명 지표, 생물학적 나이, 질병 확률 또는 결과 보장이 아닙니다. 방법론과 계수는 근거, 검증 및 제품 설계가 발전함에 따라 변경될 수 있습니다.",
"You are responsible for the accuracy of information you enter, reviewing entries and corrections, decisions you make using app information, and maintaining device security and backups where applicable.":"입력 정보의 정확성, 기록 및 수정 검토, 앱 정보를 사용해 내리는 결정, 필요한 경우 기기 보안과 백업 유지에 대한 책임은 사용자에게 있습니다.",
"Features may be changed, improved, suspended or removed as MLS develops. Test and pre-release builds may contain incomplete functionality.":"MLS가 발전함에 따라 기능이 변경, 개선, 중단 또는 제거될 수 있습니다. 테스트 및 사전 출시 빌드에는 미완성 기능이 포함될 수 있습니다.",
"Do not use MLS for unlawful activity, to harm others, to misrepresent clinical or professional advice, or to interfere with the app, website or security systems.":"MLS를 불법 활동, 타인에게 해를 가하는 행위, 임상 또는 전문 조언을 왜곡하는 행위, 앱·웹사이트·보안 시스템을 방해하는 행위에 사용하지 마십시오.",
"Use of MLS is also subject to the":"MLS 사용에는 다음도 적용됩니다:",
"For My Life Square support, privacy enquiries, feedback or store-review contact, email us.":"My Life Square 지원, 개인정보 문의, 피드백 또는 스토어 심사 연락은 이메일로 문의하십시오.",
"The current MLS app does not create a remote MLS account. User-entered MLS data is designed to remain on-device. You can delete local MLS data from the app’s Privacy & Legal screen, clear app storage through your device settings, or uninstall the app.":"현재 MLS 앱은 원격 MLS 계정을 만들지 않습니다. 사용자가 입력한 MLS 데이터는 기기에 유지되도록 설계되었습니다. 앱의 Privacy & Legal 화면에서 로컬 데이터를 삭제하거나 기기 설정에서 앱 저장공간을 지우거나 앱을 제거할 수 있습니다.",
"If account or cloud functionality is introduced later, this page will be updated with the required online account/data-deletion process.":"향후 계정 또는 클라우드 기능이 도입되면 필요한 온라인 계정/데이터 삭제 절차를 이 페이지에 업데이트합니다.",
"Include your app version and test number.":"앱 버전과 테스트 번호를 포함해 주십시오.","Describe what you expected and what happened.":"기대한 동작과 실제로 발생한 내용을 설명해 주십시오.","Do not email passwords, device unlock codes or sensitive medical records.":"비밀번호, 기기 잠금 해제 코드 또는 민감한 의료기록을 이메일로 보내지 마십시오.",
"MLS does not provide medical advice or emergency services. If you have a medical concern, contact a qualified healthcare professional or local emergency service.":"MLS는 의료 조언이나 응급 서비스를 제공하지 않습니다. 의료 우려가 있는 경우 자격 있는 의료 전문가 또는 지역 응급 서비스에 연락하십시오.",
"The current MLS app does not create a remote MLS account or remote data profile.":"현재 MLS 앱은 원격 MLS 계정이나 원격 데이터 프로필을 만들지 않습니다.",
"You can also clear MLS app storage or uninstall the app using your device settings.":"기기 설정에서 MLS 앱 저장공간을 지우거나 앱을 제거할 수도 있습니다.",
"Do not send passwords, biometric credentials or sensitive medical records.":"비밀번호, 생체 인증 정보 또는 민감한 의료기록을 보내지 마십시오.",
"If MLS introduces remote accounts or cloud storage in the future, this page will be updated with a web-based deletion request process before those features are released.":"향후 MLS가 원격 계정이나 클라우드 저장을 도입하면 해당 기능 출시 전에 웹 기반 삭제 요청 절차를 이 페이지에 업데이트합니다.",
"MLS is an educational and self-tracking framework, not a clinical score or medical device.":"MLS는 교육 및 자기추적 프레임워크이며 임상 점수나 의료기기가 아닙니다.",
"ALP records life-building activities and behaviours. Examples may include physical activity, learning, meaningful connection, reflection and service. Activity inputs can be measured in minutes, frequency, quantity or other suitable units depending on the behaviour.":"ALP는 삶을 쌓는 활동과 행동을 기록합니다. 신체활동, 학습, 의미 있는 연결, 성찰, 봉사 등이 포함될 수 있으며 행동에 따라 분, 빈도, 양 또는 적절한 다른 단위로 측정할 수 있습니다.",
"LLP records activities or behaviours that may erode health, time, relationships, knowledge or personal values. Liability weighting may be stronger than the matching asset rate when the evidence or product logic supports a greater adverse effect.":"LLP는 건강, 시간, 관계, 지식 또는 개인의 가치를 소모할 수 있는 활동이나 행동을 기록합니다. 근거 또는 제품 논리가 더 큰 부정적 영향을 뒷받침할 경우 Liability 가중치는 대응 Asset보다 강할 수 있습니다.",
"Life Equity is the difference between accumulated Life Assets and Life Liabilities. Health, Knowledge, Relationship and Belief each maintain their own Assets, Liabilities and Equity. Life Total consolidates all four Squares without assuming they should each be 25%.":"Life Equity는 누적 Life Assets와 Life Liabilities의 차이입니다. Health, Knowledge, Relationship, Belief는 각각 자체 Assets, Liabilities, Equity를 유지하며 Life Total은 각 Square가 25%여야 한다고 가정하지 않고 네 개를 통합합니다.",
"Health coefficients are informed by published guidance from leading health authorities such as WHO, AHA and CDC together with relevant peer-reviewed research. MLS converts these evidence inputs into its own Life Point model; the health authorities do not issue or endorse MLS points.":"건강 계수는 WHO, AHA, CDC 등 주요 보건기관의 공개 지침과 관련 동료평가 연구를 참고합니다. MLS는 이러한 근거를 자체 Life Point 모델로 변환하며 해당 보건기관이 MLS 포인트를 발행하거나 보증하지 않습니다.",
"More time or quantity does not necessarily produce points linearly. Where appropriate, MLS uses diminishing-return curves, caps, thresholds or severity-weighted liabilities. Repeated entries should be aggregated into the relevant daily or weekly exposure before points are calculated.":"시간이나 양이 늘어도 포인트가 항상 선형적으로 증가하지는 않습니다. 필요에 따라 MLS는 한계효과 감소 곡선, 상한, 임계값 또는 심각도 가중 Liability를 사용합니다. 반복 기록은 포인트 계산 전에 해당 일일 또는 주간 노출량으로 합산해야 합니다.",
"The Health model has been stress-tested across more than 100,000 simulated health scenarios to evaluate consistency, edge cases and plausibility. Simulation is not clinical validation and does not make MLS a medical risk model.":"Health 모델은 100,000개 이상의 모의 건강 시나리오에서 일관성, 경계 사례 및 타당성을 평가하는 스트레스 테스트를 거쳤습니다. 시뮬레이션은 임상 검증이 아니며 MLS를 의료 위험 모델로 만들지 않습니다.",
"MLS aims to make the input, unit, coefficient direction and reason for each ALP/LLP contribution inspectable. The methodology will continue to be refined as the evidence base and validation work evolve.":"MLS는 각 ALP/LLP 기여의 입력, 단위, 계수 방향 및 이유를 확인할 수 있도록 하는 것을 목표로 합니다. 근거와 검증 작업이 발전함에 따라 방법론을 계속 개선합니다."
 }
};
for(const lang of ["th","ja","ko"]) Object.assign(T[lang],LEGAL[lang]);

// October 2026 website copy, kept in all existing website languages.
const REFRESH={
 "ms": {
  "Measure. Reflect. Grow.": "Ukur. Renung. Berkembang.",
  "Android testing in progress • Google Play release in preparation": "Ujian Android sedang berjalan • Keluaran Google Play sedang disediakan",
  "minutes in every day": "minit setiap hari",
  "Your actions. Your record.": "Tindakan anda. Rekod anda.",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "Catat perkara yang membina dan menghakis kehidupan anda. Life Equity Points (LEP) ialah ALP ditolak LLP.",
  "Life Equity Points": "Life Equity Points",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "Bandingkan ALP dan LLP yang direkodkan mengikut minggu, bulan dan suku tahun. Sejarah anda sendiri ialah rujukannya.",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "Setiap Square menyimpan ALP, LLP dan LEP sendiri. MLS tidak menetapkan keseimbangan ideal antara Kesihatan, Kepercayaan, Pengetahuan dan Hubungan.",
  "Health": "Kesihatan",
  "Belief": "Kepercayaan",
  "Knowledge": "Pengetahuan",
  "Relationship": "Hubungan",
  "Movement, rest and everyday habits.": "Pergerakan, rehat dan tabiat harian.",
  "Values, reflection and actions that express them.": "Nilai, renungan dan tindakan yang mencerminkannya.",
  "Learning, practice and understanding.": "Pembelajaran, latihan dan pemahaman.",
  "Time, care and connection with others.": "Masa, perhatian dan hubungan dengan orang lain.",
  "Start with your story.": "Mulakan dengan kisah anda.",
  "A starting point, a daily update, a record to reflect on.": "Titik permulaan, kemas kini harian dan rekod untuk direnungkan.",
  "Starting Position": "Kedudukan Permulaan",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "Soalan khusus tentang tabiat lalu membentuk anggaran titik permulaan. Anda boleh berhenti seketika dan sambung semula sebelum pengesahan.",
  "Guided Update": "Kemas Kini Berpanduan",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "Jawab soalan bagi tempoh pelaporan yang jelas. Semak entri dan sahkan sebelum menyimpan.",
  "See changes in your own record. You decide what they mean for your life.": "Lihat perubahan dalam rekod anda sendiri. Anda menentukan maknanya dalam kehidupan anda.",
  "Model checks": "Semakan model",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "Semakan pengiraan dan konsistensi membantu kami menguji model. Ia bukan pengesahan klinikal.",
  "Skip to content": "Langkau ke kandungan",
  "Me → Privacy & Export": "Saya → Privasi & Eksport",
  "Reset local MLS data": "Tetapkan semula data MLS tempatan",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "Rekod MLS kekal pada peranti anda sehingga anda menetapkan semula data tempatan, mengosongkan storan aplikasi atau menyahpasang aplikasi. MLS tidak mencipta akaun jauh.",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "Untuk memadam data tempatan, buka Saya → Privasi & Eksport → Tetapkan semula data MLS tempatan, atau gunakan tetapan storan aplikasi peranti anda.",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "Aktiviti senaman, tidur dan kesejahteraan lain direkodkan secara manual oleh pengguna. Aplikasi Android semasa tidak bersambung kepada perkhidmatan data kesihatan luar, mengimport rekod jam pintar atau mengesan pergerakan telefon secara automatik. MLS menyimpan catatan ini secara setempat pada peranti.",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLS tidak menggunakan maklumat peribadi atau kesihatan untuk pengiklanan bersasar, profil pemasaran atau perlombongan data yang tidak berkaitan, dan tidak menjual maklumat peribadi."
 },
 "zh-CN": {
  "Measure. Reflect. Grow.": "衡量。反思。成长。",
  "Android testing in progress • Google Play release in preparation": "Android 测试进行中 · 正在准备 Google Play 发布",
  "minutes in every day": "每天的分钟数",
  "Your actions. Your record.": "你的行动，你的记录。",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "记录哪些行动积累人生资产，哪些行动带来损耗。人生净值点数（LEP）等于 ALP 减去 LLP。",
  "Life Equity Points": "人生净值点数",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "按周、月和季度比较已记录的 ALP 与 LLP，以自己的过往记录为参照。",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "每个方格分别记录 ALP、LLP 与 LEP。MLS 不规定健康、信念、知识与关系之间的理想比例。",
  "Health": "健康",
  "Belief": "信念",
  "Knowledge": "知识",
  "Relationship": "关系",
  "Movement, rest and everyday habits.": "运动、休息与日常习惯。",
  "Values, reflection and actions that express them.": "价值观、反思与付诸行动。",
  "Learning, practice and understanding.": "学习、实践与理解。",
  "Time, care and connection with others.": "与他人相处、关怀和建立联系。",
  "Start with your story.": "从你的人生经历开始。",
  "A starting point, a daily update, a record to reflect on.": "建立起点、日常更新、回顾记录。",
  "Starting Position": "初始状态",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "通过关于过往习惯的具体问题，估算初始状态。确认前可暂停并继续作答。",
  "Guided Update": "引导式更新",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "根据明确的记录时段回答问题，检查并确认后再保存。",
  "See changes in your own record. You decide what they mean for your life.": "查看自己的记录变化，由你决定这些变化对人生的意义。",
  "Model checks": "模型检查",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "通过计算与一致性检查测试模型。这些检查并非临床验证。",
  "Skip to content": "跳至内容",
  "Me → Privacy & Export": "我 → 隐私与导出",
  "Reset local MLS data": "重置本机 MLS 数据",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "MLS 记录保留在你的设备上，直至重置本机数据、清除应用存储空间或卸载应用。MLS 不创建远程账户。",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "要删除本机数据，请打开「我 → 隐私与导出 → 重置本机 MLS 数据」，或使用设备的应用存储设置。",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "运动、睡眠及其他健康生活活动均由用户手动记录。当前 Android 应用不会连接外部健康数据服务、导入智能手表记录或自动检测手机运动。MLS 将这些记录保存在设备本地。",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLS 不会将个人或健康信息用于定向广告、营销画像或无关的数据挖掘，也不会出售个人信息。"
 },
 "zh-TW": {
  "Measure. Reflect. Grow.": "衡量。反思。成長。",
  "Android testing in progress • Google Play release in preparation": "Android 測試進行中 · 正在準備 Google Play 發布",
  "minutes in every day": "每天的分鐘數",
  "Your actions. Your record.": "你的行動，你的紀錄。",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "記錄哪些行動累積人生資產，哪些行動帶來損耗。人生淨值點數（LEP）等於 ALP 減去 LLP。",
  "Life Equity Points": "人生淨值點數",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "按週、月和季度比較已記錄的 ALP 與 LLP，以自己的過往紀錄為參照。",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "每個方格分別記錄 ALP、LLP 與 LEP。MLS 不規定健康、信念、知識與關係之間的理想比例。",
  "Health": "健康",
  "Belief": "信念",
  "Knowledge": "知識",
  "Relationship": "關係",
  "Movement, rest and everyday habits.": "運動、休息與日常習慣。",
  "Values, reflection and actions that express them.": "價值觀、反思與付諸行動。",
  "Learning, practice and understanding.": "學習、實踐與理解。",
  "Time, care and connection with others.": "與他人相處、關懷和建立連結。",
  "Start with your story.": "從你的人生經歷開始。",
  "A starting point, a daily update, a record to reflect on.": "建立起點、日常更新、回顧紀錄。",
  "Starting Position": "初始狀態",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "透過關於過往習慣的具體問題，估算初始狀態。確認前可暫停並繼續作答。",
  "Guided Update": "引導式更新",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "根據明確的紀錄時段回答問題，檢查並確認後再儲存。",
  "See changes in your own record. You decide what they mean for your life.": "查看自己的紀錄變化，由你決定這些變化對人生的意義。",
  "Model checks": "模型檢查",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "透過計算與一致性檢查測試模型。這些檢查並非臨床驗證。",
  "Skip to content": "跳至內容",
  "Me → Privacy & Export": "我 → 隱私與匯出",
  "Reset local MLS data": "重設本機 MLS 資料",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "MLS 紀錄保留在你的裝置上，直至重設本機資料、清除應用程式儲存空間或解除安裝。MLS 不建立遠端帳戶。",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "若要刪除本機資料，請開啟「我 → 隱私與匯出 → 重設本機 MLS 資料」，或使用裝置的應用程式儲存設定。",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "運動、睡眠及其他健康生活活動均由使用者手動記錄。目前的 Android 應用程式不會連接外部健康資料服務、匯入智慧手錶紀錄，或自動偵測手機動作。MLS 將這些紀錄儲存在裝置本機。",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLS 不會將個人或健康資訊用於定向廣告、行銷分析或無關的資料探勘，也不會出售個人資訊。"
 },
 "th": {
  "Measure. Reflect. Grow.": "วัดผล ทบทวน เติบโต",
  "Android testing in progress • Google Play release in preparation": "อยู่ระหว่างทดสอบ Android • กำลังเตรียมเผยแพร่บน Google Play",
  "minutes in every day": "นาทีในแต่ละวัน",
  "Your actions. Your record.": "การกระทำของคุณ บันทึกของคุณ",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "บันทึกสิ่งที่เสริมสร้างและสิ่งที่บั่นทอนชีวิต คะแนนสุทธิชีวิต (LEP) เท่ากับ ALP ลบ LLP",
  "Life Equity Points": "คะแนนสุทธิชีวิต",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "เปรียบเทียบ ALP และ LLP ที่บันทึกไว้รายสัปดาห์ เดือน และไตรมาส โดยอ้างอิงประวัติของคุณเอง",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "แต่ละ Square มี ALP, LLP และ LEP ของตัวเอง MLS ไม่กำหนดสัดส่วนที่เหมาะสมระหว่างสุขภาพ ความเชื่อ ความรู้ และความสัมพันธ์",
  "Health": "สุขภาพ",
  "Belief": "ความเชื่อ",
  "Knowledge": "ความรู้",
  "Relationship": "ความสัมพันธ์",
  "Movement, rest and everyday habits.": "การเคลื่อนไหว การพักผ่อน และนิสัยประจำวัน",
  "Values, reflection and actions that express them.": "คุณค่า การทบทวน และการกระทำที่สะท้อนสิ่งเหล่านั้น",
  "Learning, practice and understanding.": "การเรียนรู้ การฝึกฝน และความเข้าใจ",
  "Time, care and connection with others.": "เวลา ความใส่ใจ และความผูกพันกับผู้อื่น",
  "Start with your story.": "เริ่มต้นจากเรื่องราวของคุณ",
  "A starting point, a daily update, a record to reflect on.": "จุดเริ่มต้น การอัปเดตประจำวัน และบันทึกสำหรับทบทวน",
  "Starting Position": "สถานะเริ่มต้น",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "คำถามที่ชัดเจนเกี่ยวกับนิสัยที่ผ่านมาใช้ประมาณสถานะเริ่มต้น คุณสามารถพักและกลับมาตอบต่อก่อนยืนยันได้",
  "Guided Update": "การอัปเดตแบบมีคำแนะนำ",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "ตอบคำถามสำหรับช่วงเวลาที่ระบุชัดเจน ตรวจสอบรายการและยืนยันก่อนบันทึก",
  "See changes in your own record. You decide what they mean for your life.": "ดูการเปลี่ยนแปลงในบันทึกของคุณ คุณเป็นผู้ตัดสินว่ามันมีความหมายต่อชีวิตอย่างไร",
  "Model checks": "การตรวจสอบโมเดล",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "การตรวจสอบการคำนวณและความสอดคล้องช่วยทดสอบโมเดล แต่ไม่ใช่การตรวจสอบความถูกต้องทางคลินิก",
  "Skip to content": "ข้ามไปยังเนื้อหา",
  "Me → Privacy & Export": "ฉัน → ความเป็นส่วนตัวและการส่งออก",
  "Reset local MLS data": "รีเซ็ตข้อมูล MLS ในเครื่อง",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "บันทึก MLS จะอยู่ในอุปกรณ์จนกว่าคุณจะรีเซ็ตข้อมูลในเครื่อง ล้างพื้นที่จัดเก็บของแอป หรือถอนการติดตั้ง MLS ไม่สร้างบัญชีบนเซิร์ฟเวอร์",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "หากต้องการลบข้อมูลในเครื่อง ให้เปิด ฉัน → ความเป็นส่วนตัวและการส่งออก → รีเซ็ตข้อมูล MLS ในเครื่อง หรือใช้การตั้งค่าพื้นที่จัดเก็บของแอปในอุปกรณ์",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "ผู้ใช้บันทึกข้อมูลการออกกำลังกาย การนอนหลับ และกิจกรรมด้านสุขภาวะอื่น ๆ ด้วยตนเอง แอป Android รุ่นปัจจุบันไม่เชื่อมต่อบริการข้อมูลสุขภาพภายนอก ไม่นำเข้าข้อมูลจากสมาร์ตวอตช์ และไม่ตรวจจับการเคลื่อนไหวของโทรศัพท์โดยอัตโนมัติ MLS จัดเก็บรายการเหล่านี้ไว้ในอุปกรณ์",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLS ไม่ใช้ข้อมูลส่วนบุคคลหรือข้อมูลสุขภาพเพื่อโฆษณาแบบเจาะจง สร้างโปรไฟล์การตลาด หรือวิเคราะห์ข้อมูลที่ไม่เกี่ยวข้อง และไม่ขายข้อมูลส่วนบุคคล"
 },
 "ja": {
  "Measure. Reflect. Grow.": "記録する。振り返る。成長する。",
  "Android testing in progress • Google Play release in preparation": "Android版をテスト中 • Google Playでの公開を準備中",
  "minutes in every day": "毎日の時間（分）",
  "Your actions. Your record.": "あなたの行動を、あなたの記録に。",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "人生を積み上げる行動と消耗させる行動を記録します。人生純資産ポイント（LEP）はALPからLLPを引いた値です。",
  "Life Equity Points": "人生純資産ポイント",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "週・月・四半期ごとに記録したALPとLLPを比較します。基準はあなた自身の過去の記録です。",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "各SquareがそれぞれALP・LLP・LEPを記録します。MLSは健康・信念・知識・人間関係の理想的な配分を決めません。",
  "Health": "健康",
  "Belief": "信念",
  "Knowledge": "知識",
  "Relationship": "人間関係",
  "Movement, rest and everyday habits.": "運動、休息、日々の習慣。",
  "Values, reflection and actions that express them.": "価値観、振り返り、それを表す行動。",
  "Learning, practice and understanding.": "学習、実践、理解。",
  "Time, care and connection with others.": "人と過ごす時間、思いやり、つながり。",
  "Start with your story.": "あなたの歩みから始める。",
  "A starting point, a daily update, a record to reflect on.": "出発点を設定し、日々更新し、記録を振り返る。",
  "Starting Position": "開始時点の状態",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "過去の習慣に関する具体的な質問から開始時点の状態を推定します。確定前なら中断して再開できます。",
  "Guided Update": "ガイド付き更新",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "明確な対象期間について回答し、内容を確認してから保存します。",
  "See changes in your own record. You decide what they mean for your life.": "自分の記録の変化を見ます。その意味を決めるのはあなた自身です。",
  "Model checks": "モデルの検証",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "計算と整合性の確認によりモデルを検証しています。これは臨床的な検証ではありません。",
  "Skip to content": "本文へ移動",
  "Me → Privacy & Export": "自分 → プライバシーとエクスポート",
  "Reset local MLS data": "端末内のMLSデータをリセット",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "MLSの記録は、ローカルデータのリセット、アプリのストレージ消去、またはアンインストールまで端末に保存されます。MLSはサーバー上のアカウントを作成しません。",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "ローカルデータを削除するには、自分 → プライバシーとエクスポート → 端末内のMLSデータをリセットを開くか、端末のアプリストレージ設定を使用してください。",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "運動、睡眠、その他のウェルビーイング活動は、利用者が手動で記録します。現在のAndroidアプリは外部の健康データサービスと連携せず、スマートウォッチの記録を取り込まず、スマートフォンの動きを自動検出しません。MLSはこれらの記録を端末内に保存します。",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLSは個人情報や健康情報をターゲティング広告、マーケティング用プロファイリング、無関係なデータ分析に利用せず、個人情報を販売しません。"
 },
 "ko": {
  "Measure. Reflect. Grow.": "측정하고, 돌아보고, 성장하세요.",
  "Android testing in progress • Google Play release in preparation": "Android 테스트 진행 중 • Google Play 출시 준비 중",
  "minutes in every day": "매일 주어지는 시간(분)",
  "Your actions. Your record.": "나의 행동, 나의 기록.",
  "Record what builds your life and what erodes it. Life Equity Points (LEP) are ALP minus LLP.": "삶을 쌓는 행동과 소모시키는 행동을 기록하세요. 삶의 순자산 포인트(LEP)는 ALP에서 LLP를 뺀 값입니다.",
  "Life Equity Points": "삶의 순자산 포인트",
  "Compare your recorded ALP and LLP across weeks, months and quarters. Your own history is the reference.": "기록한 ALP와 LLP를 주별, 월별, 분기별로 비교하세요. 기준은 자신의 과거 기록입니다.",
  "Each Square keeps its own ALP, LLP and LEP. MLS does not prescribe an ideal balance between Health, Belief, Knowledge and Relationship.": "각 Square는 ALP, LLP, LEP를 별도로 기록합니다. MLS는 건강, 신념, 지식, 관계 사이의 이상적인 비율을 정하지 않습니다.",
  "Health": "건강",
  "Belief": "신념",
  "Knowledge": "지식",
  "Relationship": "관계",
  "Movement, rest and everyday habits.": "움직임, 휴식, 일상 습관.",
  "Values, reflection and actions that express them.": "가치관, 성찰, 그리고 이를 실천하는 행동.",
  "Learning, practice and understanding.": "학습, 연습, 이해.",
  "Time, care and connection with others.": "다른 사람과 나누는 시간, 배려, 연결.",
  "Start with your story.": "나의 이야기에서 시작하세요.",
  "A starting point, a daily update, a record to reflect on.": "출발점을 정하고, 매일 갱신하고, 기록을 돌아보세요.",
  "Starting Position": "시작 상태",
  "Concrete questions about your past habits establish an estimated starting point. Pause and resume before confirmation.": "과거 습관에 관한 구체적인 질문으로 시작 상태를 추정합니다. 확정 전에는 중단했다가 이어서 답할 수 있습니다.",
  "Guided Update": "안내에 따른 업데이트",
  "Answer questions for a clear reporting period. Review your entries and confirm before saving.": "명확한 기록 기간에 맞춰 답하세요. 입력 내용을 검토하고 확인한 뒤 저장합니다.",
  "See changes in your own record. You decide what they mean for your life.": "자신의 기록에서 변화를 확인하세요. 그 변화의 의미는 스스로 결정합니다.",
  "Model checks": "모델 점검",
  "Calculation and consistency checks help us test the model. They are not clinical validation.": "계산과 일관성 점검으로 모델을 테스트합니다. 이는 임상적 검증이 아닙니다.",
  "Skip to content": "본문으로 이동",
  "Me → Privacy & Export": "내 정보 → 개인정보 및 내보내기",
  "Reset local MLS data": "기기의 MLS 데이터 초기화",
  "Your MLS records remain on your device until you reset local data, clear app storage or uninstall the app. MLS does not create a remote account.": "MLS 기록은 기기 내 데이터를 초기화하거나 앱 저장공간을 지우거나 앱을 삭제할 때까지 기기에 남습니다. MLS는 서버 계정을 만들지 않습니다.",
  "To delete local data, open Me → Privacy & Export → Reset local MLS data, or use your device’s app storage settings.": "기기 내 데이터를 삭제하려면 내 정보 → 개인정보 및 내보내기 → 기기의 MLS 데이터 초기화를 열거나 기기의 앱 저장공간 설정을 이용하세요.",
  "Exercise, sleep and other wellbeing activities are recorded manually by the user. The current Android app does not connect to external health-data services, import smartwatch records or automatically detect phone movement. MLS stores these entries locally on the device.": "운동, 수면 및 기타 웰빙 활동은 사용자가 직접 기록합니다. 현재 Android 앱은 외부 건강 데이터 서비스에 연결하거나 스마트워치 기록을 가져오거나 휴대전화 움직임을 자동으로 감지하지 않습니다. MLS는 이러한 기록을 기기에 저장합니다.",
  "MLS does not use personal or health information for targeted advertising, marketing profiles or unrelated data mining, and does not sell personal information.": "MLS는 개인 정보나 건강 정보를 맞춤형 광고, 마케팅 프로파일링 또는 관련 없는 데이터 분석에 사용하지 않으며 개인 정보를 판매하지 않습니다."
 }
};
for(const lang of Object.keys(REFRESH))Object.assign(T[lang],REFRESH[lang]);

// MLS_TERMS_2026_TRANSLATIONS
const MLS_TERMS_2026={
  "ms": {
    "5 November 2026": "5 November 2026",
    "Free educational app": "Aplikasi pendidikan percuma",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "MLS kini ditawarkan secara percuma. Versi semasa tidak mempunyai langganan berbayar atau pembelian Full Version sekali bayar. Sebarang tawaran berbayar pada masa depan akan diterangkan melalui gedung aplikasi berkaitan sebelum pembelian.",
    "Manual health and wellbeing records": "Rekod kesihatan dan kesejahteraan secara manual",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLS bergantung pada maklumat yang dimasukkan pengguna tentang senaman, tidur dan aktiviti kesejahteraan lain. Ia tidak mengimport data peranti boleh pakai atau mengesan pergerakan telefon secara automatik. Maklumat ini adalah untuk penjejakan kendiri, bukan diagnosis perubatan.",
    "Local data and deletion": "Data tempatan dan pemadaman",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "Rekod Life Point anda disimpan pada peranti, bukan dalam akaun awan MLS. Menetapkan semula data tempatan, mengosongkan storan aplikasi, menyahpasang aplikasi atau kehilangan peranti boleh memadamkan rekod secara kekal. Pengendali tidak dapat memulihkan rekod yang tidak pernah diterimanya.",
    "Availability and consumer rights": "Ketersediaan dan hak pengguna",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLS disediakan untuk tujuan pendidikan dan mungkin tidak sentiasa tersedia atau bebas ralat. Tiada apa-apa dalam Terma ini mengecualikan atau mengehadkan hak dan remedi yang tidak boleh dikecualikan di sisi undang-undang.",
    "Changes to these Terms": "Perubahan kepada Terma ini",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "Terma ini boleh dikemas kini atas sebab produk, keselamatan, gedung aplikasi atau undang-undang. Perubahan penting akan ditunjukkan melalui tarikh kuat kuasa yang baharu dan disertai notis yang diwajibkan oleh undang-undang."
  },
  "zh-CN": {
    "5 November 2026": "2026年11月5日",
    "Free educational app": "免费教育应用",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "MLS 目前免费提供。当前版本没有付费订阅或一次性购买的 Full Version。如未来推出收费项目，将在购买前通过相应应用商店说明。",
    "Manual health and wellbeing records": "手动健康与生活记录",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLS 使用用户手动输入的运动、睡眠及其他健康生活活动信息。应用不会自动导入可穿戴设备数据或检测手机运动。这些信息仅供个人自我记录，不用于医疗诊断。",
    "Local data and deletion": "本地数据与删除",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "您的 Life Point 记录保存在设备上，而非 MLS 云端账户。重置本地数据、清除应用存储、卸载应用或遗失设备都可能永久删除记录。运营者无法恢复从未收到的记录。",
    "Availability and consumer rights": "服务可用性与消费者权利",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLS 用于教育目的，无法保证始终可用或完全无误。本条款不排除或限制依法不得排除的权利和救济措施。",
    "Changes to these Terms": "条款变更",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "我们可能因产品、安全、应用商店或法律原因更新本条款。重大变更将通过新的生效日期体现，并按法律要求提供通知。"
  },
  "zh-TW": {
    "5 November 2026": "2026年11月5日",
    "Free educational app": "免費教育應用程式",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "MLS 目前免費提供。現行版本沒有付費訂閱或一次性購買的 Full Version。如日後推出付費項目，會在購買前透過相關應用程式商店說明。",
    "Manual health and wellbeing records": "手動健康與生活紀錄",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLS 使用使用者手動輸入的運動、睡眠及其他健康生活活動資訊。應用程式不會自動匯入穿戴式裝置資料或偵測手機動作。這些資訊僅供個人自我記錄，並非用於醫療診斷。",
    "Local data and deletion": "本機資料與刪除",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "您的 Life Point 記錄儲存在裝置上，而非 MLS 雲端帳戶。重設本機資料、清除應用程式儲存空間、解除安裝或遺失裝置，都可能永久刪除記錄。營運者無法還原從未收到的記錄。",
    "Availability and consumer rights": "服務可用性與消費者權利",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLS 僅供教育用途，無法保證隨時可用或完全沒有錯誤。本條款不排除或限制法律規定不得排除的權利和救濟。",
    "Changes to these Terms": "條款變更",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "我們可能因產品、安全、應用程式商店或法律原因更新本條款。重大變更會以新的生效日期標示，並依法提供必要通知。"
  },
  "th": {
    "5 November 2026": "5 พฤศจิกายน 2026",
    "Free educational app": "แอปเพื่อการศึกษาฟรี",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "ปัจจุบัน MLS ให้ใช้งานฟรี รุ่นปัจจุบันไม่มีการสมัครสมาชิกแบบชำระเงินหรือการซื้อ Full Version แบบครั้งเดียว หากมีบริการแบบชำระเงินในอนาคต จะมีการแจ้งรายละเอียดผ่านร้านค้าแอปที่เกี่ยวข้องก่อนซื้อ",
    "Manual health and wellbeing records": "การบันทึกสุขภาพและสุขภาวะด้วยตนเอง",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLS ใช้ข้อมูลที่ผู้ใช้กรอกเองเกี่ยวกับการออกกำลังกาย การนอนหลับ และกิจกรรมด้านสุขภาวะอื่น ๆ โดยไม่นำเข้าข้อมูลจากอุปกรณ์สวมใส่หรือตรวจจับการเคลื่อนไหวของโทรศัพท์โดยอัตโนมัติ ข้อมูลนี้ใช้สำหรับการติดตามตนเอง ไม่ใช่เพื่อการวินิจฉัยทางการแพทย์",
    "Local data and deletion": "ข้อมูลในอุปกรณ์และการลบ",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "บันทึก Life Point ของคุณจัดเก็บในอุปกรณ์ ไม่ใช่บัญชีคลาวด์ของ MLS การรีเซ็ตข้อมูล การล้างพื้นที่เก็บข้อมูล การถอนการติดตั้ง หรือการทำอุปกรณ์สูญหายอาจทำให้บันทึกถูกลบถาวร ผู้ให้บริการไม่สามารถกู้คืนบันทึกที่ไม่เคยได้รับ",
    "Availability and consumer rights": "ความพร้อมให้บริการและสิทธิของผู้บริโภค",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLS จัดให้ใช้เพื่อการศึกษาและอาจไม่พร้อมใช้งานหรือปราศจากข้อผิดพลาดเสมอไป ข้อกำหนดเหล่านี้ไม่ตัดหรือจำกัดสิทธิและการเยียวยาที่กฎหมายไม่อนุญาตให้ตัดออก",
    "Changes to these Terms": "การเปลี่ยนแปลงข้อกำหนดเหล่านี้",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "ข้อกำหนดอาจได้รับการปรับปรุงตามเหตุผลด้านผลิตภัณฑ์ ความปลอดภัย ร้านค้าแอป หรือกฎหมาย การเปลี่ยนแปลงสำคัญจะแสดงด้วยวันที่มีผลบังคับใช้ใหม่และแจ้งตามที่กฎหมายกำหนด"
  },
  "ja": {
    "5 November 2026": "2026年11月5日",
    "Free educational app": "無料の教育アプリ",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "MLSは現在無料で提供されています。現行版に有料サブスクリプションや買い切りのFull Versionはありません。将来有料サービスを導入する場合は、購入前に該当するアプリストアで案内します。",
    "Manual health and wellbeing records": "健康・ウェルビーイングの手動記録",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLSは、運動、睡眠、その他のウェルビーイング活動について利用者が手動で入力した情報を使用します。ウェアラブル端末のデータを自動で取り込んだり、スマートフォンの動きを検出したりすることはありません。これらの情報は個人の自己記録用であり、医療診断には使用しません。",
    "Local data and deletion": "端末内のデータと削除",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "Life Pointの記録はMLSのクラウドアカウントではなく端末内に保存されます。データのリセット、アプリ保存領域の消去、アンインストール、端末の紛失により記録が永久に失われる場合があります。運営者が受け取っていない記録は復元できません。",
    "Availability and consumer rights": "サービスの提供と消費者の権利",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLSは教育目的で提供され、常時利用可能であることや無誤りを保証するものではありません。本規約は、法律上排除または制限できない権利や救済を排除・制限しません。",
    "Changes to these Terms": "本規約の変更",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "製品、安全性、アプリストア、法令上の理由により本規約を変更する場合があります。重要な変更は施行日の更新に反映し、法令で必要な通知を行います。"
  },
  "ko": {
    "5 November 2026": "2026년 11월 5일",
    "Free educational app": "무료 교육 앱",
    "MLS is currently offered free of charge. The current version has no paid subscription or one-time Full Version purchase. Any future paid offer will be disclosed through the relevant app store before purchase.": "MLS는 현재 무료로 제공됩니다. 현 버전에는 유료 구독이나 일회성 Full Version 구매가 없습니다. 향후 유료 서비스가 도입되면 구매 전에 해당 앱 스토어에서 안내합니다.",
    "Manual health and wellbeing records": "건강 및 웰빙 수동 기록",
    "MLS relies on information entered by the user for exercise, sleep and other wellbeing activities. It does not automatically import wearable data or detect phone movement. This information supports personal self-tracking and is not used for medical diagnosis.": "MLS는 사용자가 직접 입력한 운동, 수면 및 기타 웰빙 활동 정보를 사용합니다. 웨어러블 기기 데이터를 자동으로 가져오거나 휴대전화 움직임을 감지하지 않습니다. 이 정보는 개인 기록을 위한 것이며 의학적 진단에 사용되지 않습니다.",
    "Local data and deletion": "기기 내 데이터 및 삭제",
    "Your Life Point records are stored on your device, not in an MLS cloud account. Resetting local data, clearing app storage, uninstalling the app or losing your device may permanently erase records. The operator cannot recover records it has not received.": "Life Point 기록은 MLS 클라우드 계정이 아니라 기기에 저장됩니다. 로컬 데이터 초기화, 앱 저장공간 삭제, 앱 제거 또는 기기 분실 시 기록이 영구적으로 삭제될 수 있습니다. 운영자는 전달받지 않은 기록을 복구할 수 없습니다.",
    "Availability and consumer rights": "서비스 가용성과 소비자 권리",
    "MLS is provided for educational use and may not always be available or error-free. Nothing in these Terms excludes or limits rights and remedies that cannot legally be excluded.": "MLS는 교육 목적으로 제공되며 항상 이용 가능하거나 오류가 없다고 보장하지 않습니다. 본 약관은 법률상 배제하거나 제한할 수 없는 권리와 구제 수단을 제한하지 않습니다.",
    "Changes to these Terms": "약관 변경",
    "These Terms may be updated for product, security, store or legal reasons. Material changes will be reflected in the effective date and accompanied by any notice required by law.": "제품, 보안, 앱 스토어 또는 법률상의 이유로 본 약관을 변경할 수 있습니다. 중요한 변경은 새 시행일에 반영되며 법률상 필요한 고지를 제공합니다."
  }
};
for(const lang of Object.keys(MLS_TERMS_2026))Object.assign(T[lang],MLS_TERMS_2026[lang]);

// Vietnamese public-site copy is kept separately for editorial review.
T.vi=window.MLSWebsiteVI||{};

/* November 2026: release and cross-platform copy in all eight site languages. */
const MLS_RELEASE_COPY_20261110 = {
  "ms": {
    "Download on the App Store": "Muat turun di App Store",
    "Android: Google Play testing in progress": "Android: Ujian Google Play sedang berjalan",
    "iOS available now • Android public release pending": "iOS sudah tersedia • Keluaran umum Android belum tersedia",
    "Starting Balance": "Baki Permulaan",
    "Update Today": "Kemas Kini Hari Ini",
    "Progress": "Kemajuan",
    "Choose a reporting period, record activities and confirm before saving.": "Pilih tempoh laporan, rekod aktiviti dan sahkan sebelum menyimpan.",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS menyimpan rekod Life Point pada peranti anda. MLS tidak menjual data peribadi atau menggunakan catatan kesihatan untuk pengiklanan.",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "Versi Android dan iOS semasa menyimpan catatan Life Point, rutin serta pilihan bahasa pada peranti. MLS tidak menyediakan akaun atau penyegerakan awan bagi rekod ini.",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "Aktiviti senaman, tidur dan kesejahteraan lain dimasukkan secara manual. Aplikasi semasa tidak mengimport data jam pintar atau mengesan pergerakan telefon secara automatik.",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "MLS tidak menghantar rekod Life Point yang dimasukkan secara tempatan kepada pengendali atau berkongsinya dengan pihak ketiga. Jika amalan ini berubah, dasar ini akan dikemas kini.",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "Dalam MLS, buka Me → Privacy & Export dan pilih pilihan tetapan semula data setempat jika tersedia. Nama menu mungkin berbeza mengikut versi.",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Di Android, anda juga boleh mengosongkan storan MLS melalui tetapan peranti. Di iPhone atau iPad, buka Settings → General → iPhone/iPad Storage → My Life Square → Delete App (bukan Offload App).",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "Sandaran peranti mungkin menyimpan salinan data lama; uruskan sandaran secara berasingan dalam tetapan sistem.",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "Nyatakan versi dan nombor binaan aplikasi serta sama ada anda menggunakan Android atau iOS.",
    "Choose the local-data reset option, if your version provides one.": "Pilih pilihan tetapan semula data setempat, jika tersedia dalam versi anda.",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Sebagai alternatif, kosongkan storan MLS di Android. Di iPhone atau iPad, buka Settings → General → iPhone/iPad Storage → My Life Square → Delete App (bukan Offload App).",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "Sandaran peranti mungkin menyimpan salinan lama; uruskan secara berasingan dalam tetapan sistem."
  },
  "zh-CN": {
    "Download on the App Store": "在 App Store 下载",
    "Android: Google Play testing in progress": "Android：Google Play 测试进行中",
    "iOS available now • Android public release pending": "iOS 现已上架 • Android 公开发布待定",
    "Starting Balance": "起始余额",
    "Update Today": "今日更新",
    "Progress": "进度",
    "Choose a reporting period, record activities and confirm before saving.": "选择记录时段，填写活动并确认后保存。",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS 将 Life Point 记录保存在您的设备上，不出售个人资料，也不将健康记录用于广告。",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "目前的 Android 和 iOS 版本会将 Life Point 记录、日常活动和语言偏好保存在设备本地。MLS 不为这些记录提供账户或云端同步服务。",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "运动、睡眠及其他身心活动由用户手动输入；当前应用不会自动导入智能手表数据或检测手机运动。",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "MLS 不会将本地输入的 Life Point 记录传送给运营者或分享给第三方。如相关做法改变，将更新本政策。",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "在 MLS 中打开「我的」→「隐私与导出」，如有本地数据重置选项，可选择该项。菜单名称可能因版本而异。",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Android 用户也可在系统设置中清除 MLS 应用数据。iPhone 或 iPad 用户可进入「设置」→「通用」→「iPhone/iPad 储存空间」→「My Life Square」→「删除 App」（不要选「卸载 App」）。",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "设备备份可能保留旧版应用数据，请在系统设置中另行管理备份。",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "请提供应用版本、构建编号，并说明使用 Android 还是 iOS。",
    "Choose the local-data reset option, if your version provides one.": "如当前版本提供本地数据重置选项，请选择该项。",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "或者，在 Android 上清除 MLS 应用数据；在 iPhone 或 iPad 上进入「设置」→「通用」→「储存空间」→「My Life Square」→「删除 App」（不要选择「卸载 App」）。",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "设备备份可能保留旧副本，请在系统设置中另行管理。"
  },
  "zh-TW": {
    "Download on the App Store": "在 App Store 下載",
    "Android: Google Play testing in progress": "Android：Google Play 測試進行中",
    "iOS available now • Android public release pending": "iOS 現已上架 • Android 公開發布待定",
    "Starting Balance": "起始餘額",
    "Update Today": "今日更新",
    "Progress": "進度",
    "Choose a reporting period, record activities and confirm before saving.": "選擇記錄時段，填寫活動並確認後儲存。",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS 將 Life Point 記錄保存在您的裝置上，不出售個人資料，也不會將健康記錄用於廣告。",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "目前 Android 和 iOS 版本將 Life Point 記錄、日常活動和語言偏好保存在裝置本機。MLS 不為這些記錄提供帳號或雲端同步服務。",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "運動、睡眠及其他身心活動由使用者手動輸入；目前應用程式不會自動匯入智慧手錶資料或偵測手機活動。",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "MLS 不會將本機輸入的 Life Point 記錄傳送給營運者或與第三方分享。如相關做法改變，將更新本政策。",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "在 MLS 開啟「我的」→「隱私與匯出」，如有本機資料重設選項，請選擇該項。選單名稱可能因版本而異。",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Android 使用者也可在系統設定中清除 MLS 應用程式資料。iPhone 或 iPad 使用者可前往「設定」→「一般」→「儲存空間」→「My Life Square」→「刪除 App」（勿選「卸載 App」）。",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "裝置備份可能保留舊版應用程式資料，請於系統設定另行管理備份。",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "請提供應用程式版本、建置編號，並告知使用 Android 或 iOS。",
    "Choose the local-data reset option, if your version provides one.": "若目前版本提供本機資料重設選項，請選擇該項。",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "或者，在 Android 上清除 MLS 應用程式資料；在 iPhone 或 iPad 上前往「設定」→「一般」→「儲存空間」→「My Life Square」→「刪除 App」（勿選「卸載 App」）。",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "裝置備份可能保留舊副本，請於系統設定另行管理。"
  },
  "th": {
    "Download on the App Store": "ดาวน์โหลดบน App Store",
    "Android: Google Play testing in progress": "Android: กำลังทดสอบบน Google Play",
    "iOS available now • Android public release pending": "iOS เปิดให้ดาวน์โหลดแล้ว • Android ยังไม่เปิดให้บริการสาธารณะ",
    "Starting Balance": "ยอดเริ่มต้น",
    "Update Today": "อัปเดตวันนี้",
    "Progress": "ความคืบหน้า",
    "Choose a reporting period, record activities and confirm before saving.": "เลือกช่วงเวลาที่ต้องการบันทึก กรอกกิจกรรมและยืนยันก่อนบันทึก",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS เก็บบันทึก Life Point ไว้ในอุปกรณ์ของคุณ ไม่ขายข้อมูลส่วนบุคคลหรือใช้ข้อมูลสุขภาพเพื่อโฆษณา",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "แอป Android และ iOS รุ่นปัจจุบันเก็บบันทึก Life Point กิจวัตร และภาษาที่เลือกไว้ในอุปกรณ์ MLS ไม่มีบัญชีหรือบริการซิงค์คลาวด์สำหรับข้อมูลดังกล่าว",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "ผู้ใช้กรอกข้อมูลการออกกำลังกาย การนอน และกิจกรรมสุขภาวะด้วยตนเอง แอปไม่ดึงข้อมูลสมาร์ตวอทช์หรือตรวจจับการเคลื่อนไหวของโทรศัพท์โดยอัตโนมัติ",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "MLS ไม่ส่งบันทึก Life Point ที่กรอกในเครื่องให้ผู้ดำเนินการหรือบุคคลที่สาม หากแนวทางนี้เปลี่ยนแปลง จะมีการปรับปรุงนโยบาย",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "ใน MLS เปิด Me → Privacy & Export แล้วเลือกรีเซ็ตข้อมูลในเครื่องหากมี ชื่อเมนูอาจต่างกันตามรุ่น",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Android สามารถล้างข้อมูลแอป MLS ในการตั้งค่าอุปกรณ์ ส่วน iPhone หรือ iPad ไปที่ Settings → General → iPhone/iPad Storage → My Life Square → Delete App (ไม่ใช่ Offload App)",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "ข้อมูลสำรองของอุปกรณ์อาจเก็บสำเนาเก่าไว้ โปรดจัดการข้อมูลสำรองแยกต่างหากในการตั้งค่าระบบ",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "ระบุเวอร์ชันและหมายเลขบิลด์ของแอป พร้อมแจ้งว่าใช้ Android หรือ iOS",
    "Choose the local-data reset option, if your version provides one.": "เลือกรีเซ็ตข้อมูลในเครื่อง หากรุ่นที่ใช้อยู่มีตัวเลือกนี้",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "หรือใน Android ให้ล้างข้อมูลแอป MLS ส่วน iPhone หรือ iPad ไปที่ Settings → General → iPhone/iPad Storage → My Life Square → Delete App (ไม่ใช่ Offload App)",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "ข้อมูลสำรองอาจมีสำเนาเก่า โปรดจัดการแยกต่างหากในการตั้งค่าระบบ"
  },
  "ja": {
    "Download on the App Store": "App Store からダウンロード",
    "Android: Google Play testing in progress": "Android：Google Play でテスト中",
    "iOS available now • Android public release pending": "iOS 版は公開中 • Android 版は一般公開前",
    "Starting Balance": "開始時点の残高",
    "Update Today": "今日の更新",
    "Progress": "進捗",
    "Choose a reporting period, record activities and confirm before saving.": "記録期間を選択し、活動を入力して確認してから保存してください。",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS は Life Point の記録を端末内に保存します。個人データを販売したり、健康記録を広告に利用したりしません。",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "現在の Android 版と iOS 版は、Life Point の記録、日々の習慣、言語設定を端末内に保存します。これらの記録についてアカウントやクラウド同期サービスは提供していません。",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "運動、睡眠などの健康習慣は手動で入力します。現在のアプリはスマートウォッチのデータを自動取得したり、スマートフォンの動きを自動検出したりしません。",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "端末に入力された Life Point の記録を運営者に送信したり、第三者と共有したりしません。取扱方法が変わる場合は本ポリシーを更新します。",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "MLS の Me → Privacy & Export を開き、利用可能なら端末内データのリセットを選択してください。メニュー名はバージョンによって異なります。",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Android では端末設定から MLS のアプリデータを消去できます。iPhone または iPad では「設定」→「一般」→「ストレージ」→「My Life Square」→「App を削除」を選び、「App を取り除く」は選ばないでください。",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "端末のバックアップに古いデータが残る場合があります。バックアップは OS の設定から別途管理してください。",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "アプリのバージョンとビルド番号、および Android か iOS かをお知らせください。",
    "Choose the local-data reset option, if your version provides one.": "お使いのバージョンにある場合、端末内データのリセットを選択してください。",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "別の方法として、Android では MLS のアプリデータを消去します。iPhone または iPad では「設定」→「一般」→「ストレージ」→「My Life Square」→「App を削除」を選び、「App を取り除く」は選ばないでください。",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "バックアップに古いコピーが残る場合があります。OS の設定で別途管理してください。"
  },
  "ko": {
    "Download on the App Store": "App Store에서 다운로드",
    "Android: Google Play testing in progress": "Android: Google Play 테스트 진행 중",
    "iOS available now • Android public release pending": "iOS 출시 완료 • Android 정식 출시 전",
    "Starting Balance": "시작 잔액",
    "Update Today": "오늘 업데이트",
    "Progress": "진행 상황",
    "Choose a reporting period, record activities and confirm before saving.": "기록 기간을 선택하고 활동을 입력한 뒤 확인 후 저장하세요.",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS는 Life Point 기록을 기기에 저장합니다. 개인정보를 판매하거나 건강 기록을 광고에 사용하지 않습니다.",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "현재 Android 및 iOS 버전은 Life Point 기록, 일상 활동, 언어 설정을 기기에 저장합니다. 해당 기록을 위한 계정이나 클라우드 동기화 서비스는 제공하지 않습니다.",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "운동, 수면 및 기타 웰빙 활동은 직접 입력합니다. 현재 앱은 스마트워치 데이터를 자동으로 가져오거나 휴대전화 움직임을 감지하지 않습니다.",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "기기에 입력한 Life Point 기록은 운영자에게 전송하거나 제3자에게 공유하지 않습니다. 이러한 관행이 바뀌면 본 정책을 갱신합니다.",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "MLS에서 Me → Privacy & Export를 열고 제공되는 경우 기기 내 데이터 초기화를 선택하세요. 메뉴 이름은 버전에 따라 다를 수 있습니다.",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Android에서는 기기 설정에서 MLS 앱 데이터를 삭제할 수 있습니다. iPhone 또는 iPad에서는 설정 → 일반 → 저장 공간 → My Life Square → 앱 삭제를 선택하세요(앱 정리하기 아님).",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "기기 백업에 이전 데이터가 남을 수 있으니 운영체제 설정에서 별도로 관리하세요.",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "앱 버전과 빌드 번호, Android 또는 iOS 사용 여부를 알려주세요.",
    "Choose the local-data reset option, if your version provides one.": "현재 버전에서 제공하는 경우 기기 내 데이터 초기화를 선택하세요.",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "또는 Android에서 MLS 앱 데이터를 삭제하고, iPhone 또는 iPad에서는 설정 → 일반 → 저장 공간 → My Life Square → 앱 삭제를 선택하세요(앱 정리하기 아님).",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "백업에 이전 데이터가 남을 수 있으니 운영체제 설정에서 별도로 관리하세요."
  },
  "vi": {
    "Download on the App Store": "Tải trên App Store",
    "Android: Google Play testing in progress": "Android: Đang thử nghiệm trên Google Play",
    "iOS available now • Android public release pending": "iOS đã phát hành • Android chưa phát hành công khai",
    "Starting Balance": "Số dư khởi đầu",
    "Update Today": "Cập nhật hôm nay",
    "Progress": "Tiến trình",
    "Choose a reporting period, record activities and confirm before saving.": "Chọn khoảng thời gian, ghi nhận hoạt động và xác nhận trước khi lưu.",
    "MLS keeps Life Point records on your device. It does not sell personal data or use health entries for advertising.": "MLS lưu các ghi chép Life Point trên thiết bị của bạn. Ứng dụng không bán dữ liệu cá nhân hoặc dùng thông tin sức khỏe cho quảng cáo.",
    "The current Android and iOS versions store Life Point entries, routines and language preferences on the device. MLS does not operate an account or cloud sync service for these records.": "Các phiên bản Android và iOS hiện tại lưu thông tin Life Point, thói quen và ngôn ngữ trên thiết bị. MLS không cung cấp tài khoản hoặc đồng bộ đám mây cho những dữ liệu này.",
    "Exercise, sleep and other wellbeing activities are entered manually. The current apps do not automatically import smartwatch data or detect phone movement.": "Người dùng tự nhập thông tin vận động, giấc ngủ và các hoạt động chăm sóc sức khỏe. Ứng dụng hiện tại không tự động nhập dữ liệu đồng hồ thông minh hoặc phát hiện chuyển động của điện thoại.",
    "MLS does not transmit locally entered Life Point records to the operator or share them with third parties. If these practices change, this policy will be updated.": "MLS không chuyển các ghi chép Life Point được nhập trên thiết bị cho người vận hành hoặc bên thứ ba. Nếu cách xử lý này thay đổi, chính sách sẽ được cập nhật.",
    "In MLS, open Me → Privacy & Export and choose the local-data reset option if available. The menu wording can vary by version.": "Trong MLS, mở Tôi → Quyền riêng tư & Xuất dữ liệu và chọn đặt lại dữ liệu cục bộ nếu có. Tên mục có thể khác theo phiên bản.",
    "On Android, you can also clear MLS app storage in device settings. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Trên Android, bạn cũng có thể xóa dữ liệu MLS trong cài đặt thiết bị. Trên iPhone hoặc iPad, mở Cài đặt → Cài đặt chung → Dung lượng → My Life Square → Xóa ứng dụng (không chọn Gỡ bỏ ứng dụng).",
    "Device backups may retain older copies of app data; manage backups separately in your operating-system settings.": "Bản sao lưu của thiết bị có thể còn lưu dữ liệu cũ; hãy quản lý chúng riêng trong cài đặt hệ thống.",
    "Include your app version and build number, and tell us whether you use Android or iOS.": "Cho biết phiên bản, số bản dựng của ứng dụng và bạn đang sử dụng Android hay iOS.",
    "Choose the local-data reset option, if your version provides one.": "Chọn đặt lại dữ liệu cục bộ nếu phiên bản của bạn có tùy chọn đó.",
    "Alternatively, on Android clear MLS app storage. On iPhone or iPad, open Settings → General → iPhone/iPad Storage → My Life Square → Delete App (not Offload App).": "Hoặc trên Android hãy xóa dữ liệu MLS; trên iPhone hoặc iPad mở Cài đặt → Cài đặt chung → Dung lượng → My Life Square → Xóa ứng dụng (không chọn Gỡ bỏ ứng dụng).",
    "Device backups may retain older copies; manage them separately in your operating-system settings.": "Bản sao lưu có thể còn dữ liệu cũ; hãy quản lý riêng trong cài đặt hệ thống."
  }
};
for(const [code,dict] of Object.entries(MLS_RELEASE_COPY_20261110))Object.assign(T[code]||{},dict);

// Compact Android testing label in all non-English site languages.
const MLS_STORE_TESTING_20261110={
 ms:"Sedang diuji","zh-CN":"测试中","zh-TW":"測試中",th:"กำลังทดสอบ",ja:"テスト中",ko:"테스트 중",vi:"Đang thử nghiệm"
};
for(const [locale,translation] of Object.entries(MLS_STORE_TESTING_20261110)) T[locale]["Testing"]=translation;

const legalFallback={
 vi:"Bản dịch tiếng Việt được cung cấp để thuận tiện. Nếu bản dịch có khác biệt so với bản tiếng Anh, hãy tham khảo bản tiếng Anh để giải thích nội dung.",
 th:"เอกสารฉบับแปลนี้จัดทำเพื่อความสะดวก หากข้อความแปลแตกต่างจากฉบับภาษาอังกฤษ ให้ใช้ฉบับภาษาอังกฤษเป็นข้อความอ้างอิง",
 ja:"この翻訳は便宜のために提供されています。翻訳と英語版に相違がある場合、英語版を基準文書とします。",
 ko:"이 번역은 편의를 위해 제공됩니다. 번역본과 영어본이 다른 경우 영어본을 기준 문서로 합니다.",
 ms:"Terjemahan ini disediakan untuk kemudahan. Jika terdapat perbezaan antara terjemahan dan versi bahasa Inggeris, versi bahasa Inggeris ialah teks rujukan.",
 "zh-CN":"本翻译仅为方便阅读。如译文与英文版本存在差异，以英文版本作为解释参考文本。",
 "zh-TW":"本翻譯僅為方便閱讀。如譯文與英文版本存在差異，以英文版本作為解釋參考文本。"
};

function canonicalLang(raw){
 if(!raw)return null;
 const aliases={"zh":"zh-CN","zh-Hans":"zh-CN","zh-Hant":"zh-TW","zh-hans":"zh-CN","zh-hant":"zh-TW"};
 const value=aliases[raw]||raw;
 return LANGS[value]?value:null;
}
function guess(){
 // Explicit app handoff always wins over an old website choice or browser language.
 const requested=canonicalLang(new URLSearchParams(window.location.search).get("lang"));
 if(requested)return requested;
 const saved=canonicalLang(localStorage.getItem("mls_web_lang"));
 if(saved)return saved;
 const raw=(navigator.language||"en").toLowerCase();
 if(raw.startsWith("ms"))return"ms";
 if(raw.startsWith("zh-tw")||raw.startsWith("zh-hk")||raw.startsWith("zh-hant"))return"zh-TW";
 if(raw.startsWith("zh"))return"zh-CN";
 if(raw.startsWith("th"))return"th";
 if(raw.startsWith("ja"))return"ja";
 if(raw.startsWith("ko"))return"ko";
 if(raw.startsWith("vi"))return"vi";
 return"en";
}
function mapText(root,dict){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
 for(const n of nodes){
  if(n.parentElement && (["SCRIPT","STYLE","OPTION"].includes(n.parentElement.tagName) || n.parentElement.closest("[data-mls-literal]")))continue;
  const raw=n.nodeValue, trimmed=raw.trim();
  if(!trimmed)continue;
  const translated=dict[trimmed];
  if(translated!==undefined){
   const lead=raw.match(/^\s*/)?.[0]||"", tail=raw.match(/\s*$/)?.[0]||"";
   n.nodeValue=lead+translated+tail;
  }
 }
}
function addLegalNote(lang){
 const article=document.querySelector(".legal-page article");
 if(!article)return;
 let note=document.querySelector(".translation-note");
 if(lang==="en"){if(note)note.remove();return;}
 if(!note){
   note=document.createElement("div");note.className="notice translation-note";
   const h1=article.querySelector("h1"); if(h1)h1.insertAdjacentElement("afterend",note); else article.prepend(note);
 }
 note.textContent=legalFallback[lang]||T[lang]?.["Translations are provided for convenience. The English version is the reference text for interpretation."]||"";
}
function stampLanguageLinks(lang){
 // Same strategy as MWS: carry the chosen locale into every internal page.
 for(const a of document.querySelectorAll('a[href]')){
  const href=a.getAttribute("href");
  if(!href || href.startsWith("#"))continue;
  let url;
  try{url=new URL(href,window.location.href)}catch(_){continue}
  if(url.origin!==window.location.origin || !/\.html$/.test(url.pathname))continue;
  url.searchParams.set("lang",lang);
  a.href=url.href;
 }
}
function apply(lang){
 if(!LANGS[lang])lang="en";
 // Restore original English snapshot before translating.
 document.querySelectorAll("[data-i18n-origin]").forEach(el=>{el.innerHTML=el.dataset.i18nOrigin});
 if(!window.__mlsOriginal){
   window.__mlsOriginal=document.body.innerHTML;
 } else {
   const keep=document.querySelector(".lang-switch");
   const value=keep?.value||lang;
   document.body.innerHTML=window.__mlsOriginal;
   initSelector(value,true);
 }
 document.documentElement.lang=LANGS[lang].locale;
 if(lang!=="en")mapText(document.body,T[lang]||{});
 addLegalNote(lang);
 const sel=document.querySelector(".lang-switch");if(sel)sel.value=lang;
 localStorage.setItem("mls_web_lang",lang);
 // Keep the visible URL consistent with a manual choice; do not let an older
 // app-provided ?lang parameter undo that choice on refresh.
 const url=new URL(window.location.href);
 url.searchParams.set("lang",lang);
 window.history.replaceState(null,"",url.pathname+url.search+url.hash);
 stampLanguageLinks(lang);
}
function initSelector(selected,bind=true){
 let slot=document.querySelector(".language-slot");
 if(!slot){
  const nav=document.querySelector(".nav-inner");
  if(!nav)return;
  slot=document.createElement("div");slot.className="language-slot";nav.appendChild(slot);
 }
 slot.innerHTML='<label class="sr-only" for="mls-language">'+(selected==='vi'?'Ngôn ngữ':'Language')+'</label><select id="mls-language" class="lang-switch" aria-label="'+(selected==='vi'?'Ngôn ngữ':'Language')+'"></select>';
 const sel=slot.querySelector("select");
 for(const [code,x] of Object.entries(LANGS)){const o=document.createElement("option");o.value=code;o.textContent=x.name;sel.appendChild(o)}
 sel.value=selected;
 if(bind)sel.addEventListener("change",e=>apply(e.target.value));
}
document.addEventListener("DOMContentLoaded",()=>{
 window.__mlsOriginal=document.body.innerHTML;
 const lang=guess();
 // Persist the app-provided language, including English, for internal page navigation.
 localStorage.setItem("mls_web_lang",lang);
 initSelector(lang);
 if(lang!=="en"){mapText(document.body,T[lang]||{});addLegalNote(lang);document.documentElement.lang=LANGS[lang].locale}
 stampLanguageLinks(lang);
});
})();