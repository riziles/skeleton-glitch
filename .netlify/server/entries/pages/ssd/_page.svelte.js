import { c as create_ssr_component, b as subscribe, k as each, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { w as writable, d as derived } from "../../../chunks/index.js";
const myData = [
  { "id": 1, "first_name": "Tobie", "last_name": "Vint", "email": "tvint0@fotki.com" },
  { "id": 2, "first_name": "Zacharias", "last_name": "Cerman", "email": "zcerman1@sciencedirect.com" },
  { "id": 3, "first_name": "Gérianna", "last_name": "Bunn", "email": "gbunn2@foxnews.com" },
  { "id": 4, "first_name": "Bee", "last_name": "Saurin", "email": "bsaurin3@live.com" },
  { "id": 5, "first_name": "Méyère", "last_name": "Granulette", "email": "mgranul4@yellowbook.com" },
  { "id": 6, "first_name": "Frederich", "last_name": "Benley", "email": "fbenley5@ameblo.jp" },
  { "id": 7, "first_name": "Becki", "last_name": "Criag", "email": "bcriag6@washingtonpost.com" },
  { "id": 8, "first_name": "Nichols", "last_name": "Risom", "email": "nrisom7@google.com.br" },
  { "id": 9, "first_name": "Ron", "last_name": "Menendes", "email": "rmenendes8@prnewswire.com" },
  { "id": 10, "first_name": "Thane", "last_name": "Gammill", "email": "tgammill9@com.com" },
  { "id": 11, "first_name": "Ramonda", "last_name": "Yakobowitch", "email": "ryakobowitcha@hibu.com" },
  { "id": 12, "first_name": "Rosalynd", "last_name": "Connechie", "email": "rconnechieb@chicagotribune.com" },
  { "id": 13, "first_name": "Vinny", "last_name": "Hissett", "email": "vhissettc@4shared.com" },
  { "id": 14, "first_name": "Mylo", "last_name": "Tarbath", "email": "mtarbathd@behance.net" },
  { "id": 15, "first_name": "Pierson", "last_name": "Linny", "email": "plinnye@altervista.org" },
  { "id": 16, "first_name": "Adi", "last_name": "Bassano", "email": "abassanof@about.com" },
  { "id": 17, "first_name": "Paxon", "last_name": "Claypole", "email": "pclaypoleg@storify.com" },
  { "id": 18, "first_name": "Marcella", "last_name": "Mogey", "email": "mmogeyh@weebly.com" },
  { "id": 19, "first_name": "Fiann", "last_name": "Winsborrow", "email": "fwinsborrowi@icq.com" },
  { "id": 20, "first_name": "Moria", "last_name": "Druhan", "email": "mdruhanj@friendfeed.com" },
  { "id": 21, "first_name": "Ransom", "last_name": "Beidebeke", "email": "rbeidebekek@webnode.com" },
  { "id": 22, "first_name": "Ev", "last_name": "Scullion", "email": "escullionl@opensource.org" },
  { "id": 23, "first_name": "Etta", "last_name": "Rockwell", "email": "erockwellm@alexa.com" },
  { "id": 24, "first_name": "Rorke", "last_name": "Daft", "email": "rdaftn@list-manage.com" },
  { "id": 25, "first_name": "Waly", "last_name": "Kern", "email": "wkerno@wix.com" },
  { "id": 26, "first_name": "Wendell", "last_name": "McKyrrelly", "email": "wmckyrrellyp@nydailynews.com" },
  { "id": 27, "first_name": "Steward", "last_name": "Dillet", "email": "sdilletq@artisteer.com" },
  { "id": 28, "first_name": "Catherina", "last_name": "Cestard", "email": "ccestardr@msn.com" },
  { "id": 29, "first_name": "Colin", "last_name": "Large", "email": "clarges@posterous.com" },
  { "id": 30, "first_name": "Joann", "last_name": "Meineking", "email": "jmeinekingt@vkontakte.ru" },
  { "id": 31, "first_name": "Joachim", "last_name": "Riseborough", "email": "jriseboroughu@usatoday.com" },
  { "id": 32, "first_name": "Maurits", "last_name": "Ricciardo", "email": "mricciardov@weibo.com" },
  { "id": 33, "first_name": "Corrianne", "last_name": "Drewet", "email": "cdrewetw@cdc.gov" },
  { "id": 34, "first_name": "Sharon", "last_name": "Kuhle", "email": "skuhlex@apple.com" },
  { "id": 35, "first_name": "Guenna", "last_name": "Langtree", "email": "glangtreey@surveymonkey.com" },
  { "id": 36, "first_name": "Darcey", "last_name": "Pinnocke", "email": "dpinnockez@linkedin.com" },
  { "id": 37, "first_name": "Benedikt", "last_name": "Quested", "email": "bquested10@cnn.com" },
  { "id": 38, "first_name": "Othilia", "last_name": "Fackrell", "email": "ofackrell11@gizmodo.com" },
  { "id": 39, "first_name": "Kittie", "last_name": "Drejer", "email": "kdrejer12@networkadvertising.org" },
  { "id": 40, "first_name": "Travus", "last_name": "Caves", "email": "tcaves13@jiathis.com" },
  { "id": 41, "first_name": "Jodi", "last_name": "Kunneke", "email": "jkunneke14@ed.gov" },
  { "id": 42, "first_name": "Bunni", "last_name": "Cavalier", "email": "bcavalier15@hostgator.com" },
  { "id": 43, "first_name": "Elnore", "last_name": "Wager", "email": "ewager16@xrea.com" },
  { "id": 44, "first_name": "Lani", "last_name": "Giovannazzi", "email": "lgiovannazzi17@gravatar.com" },
  { "id": 45, "first_name": "Demeter", "last_name": "Sambals", "email": "dsambals18@guardian.co.uk" },
  { "id": 46, "first_name": "Dulcy", "last_name": "Klaaassen", "email": "dklaaassen19@phpbb.com" },
  { "id": 47, "first_name": "Hobie", "last_name": "Eeles", "email": "heeles1a@tripadvisor.com" },
  { "id": 48, "first_name": "Nickolai", "last_name": "Colecrough", "email": "ncolecrough1b@liveinternet.ru" },
  { "id": 49, "first_name": "Tiffy", "last_name": "Shard", "email": "tshard1c@imgur.com" },
  { "id": 50, "first_name": "Rustie", "last_name": "Roles", "email": "rroles1d@cdc.gov" },
  { "id": 51, "first_name": "Keefe", "last_name": "Kupke", "email": "kkupke1e@spotify.com" },
  { "id": 52, "first_name": "Gabriell", "last_name": "Mushawe", "email": "gmushawe1f@taobao.com" },
  { "id": 53, "first_name": "Libbi", "last_name": "Thornborrow", "email": "lthornborrow1g@intel.com" },
  { "id": 54, "first_name": "Corabella", "last_name": "Dowdall", "email": "cdowdall1h@google.ru" },
  { "id": 55, "first_name": "Mariel", "last_name": "Schoenleiter", "email": "mschoenleiter1i@umich.edu" },
  { "id": 56, "first_name": "Alma", "last_name": "Steinor", "email": "asteinor1j@google.com.au" },
  { "id": 57, "first_name": "Trudy", "last_name": "Schwant", "email": "tschwant1k@blogspot.com" },
  { "id": 58, "first_name": "Konstance", "last_name": "Cheson", "email": "kcheson1l@mlb.com" },
  { "id": 59, "first_name": "Larine", "last_name": "Fosdick", "email": "lfosdick1m@bizjournals.com" },
  { "id": 60, "first_name": "Gerome", "last_name": "Craighead", "email": "gcraighead1n@cdc.gov" },
  { "id": 61, "first_name": "Isaak", "last_name": "Vasyukov", "email": "ivasyukov1o@marketwatch.com" },
  { "id": 62, "first_name": "Jewell", "last_name": "Geertje", "email": "jgeertje1p@ovh.net" },
  { "id": 63, "first_name": "Carol", "last_name": "Hardcastle", "email": "chardcastle1q@newyorker.com" },
  { "id": 64, "first_name": "Jerad", "last_name": "Simmans", "email": "jsimmans1r@toplist.cz" },
  { "id": 65, "first_name": "Leonore", "last_name": "Laxton", "email": "llaxton1s@paginegialle.it" },
  { "id": 66, "first_name": "Willy", "last_name": "Romeo", "email": "wromeo1t@odnoklassniki.ru" },
  { "id": 67, "first_name": "Marc", "last_name": "Wasbey", "email": "mwasbey1u@telegraph.co.uk" },
  { "id": 68, "first_name": "Rochester", "last_name": "Woolaston", "email": "rwoolaston1v@columbia.edu" },
  { "id": 69, "first_name": "Derrick", "last_name": "Dampney", "email": "ddampney1w@hatena.ne.jp" },
  { "id": 70, "first_name": "Steven", "last_name": "Amsberger", "email": "samsberger1x@reuters.com" },
  { "id": 71, "first_name": "Kevan", "last_name": "Fibbens", "email": "kfibbens1y@indiatimes.com" },
  { "id": 72, "first_name": "Carlynn", "last_name": "Breheny", "email": "cbreheny1z@chronoengine.com" },
  { "id": 73, "first_name": "Purcell", "last_name": "Baile", "email": "pbaile20@washington.edu" },
  { "id": 74, "first_name": "Sherye", "last_name": "Beeho", "email": "sbeeho21@home.pl" },
  { "id": 75, "first_name": "Ario", "last_name": "Bixley", "email": "abixley22@vinaora.com" },
  { "id": 76, "first_name": "Inga", "last_name": "Jaukovic", "email": "ijaukovic23@yolasite.com" },
  { "id": 77, "first_name": "Katlin", "last_name": "Byrde", "email": "kbyrde24@rediff.com" },
  { "id": 78, "first_name": "Karee", "last_name": "Mougel", "email": "kmougel25@liveinternet.ru" },
  { "id": 79, "first_name": "Damaris", "last_name": "Cathesyed", "email": "dcathesyed26@amazon.de" },
  { "id": 80, "first_name": "Lavena", "last_name": "MacConchie", "email": "lmacconchie27@merriam-webster.com" },
  { "id": 81, "first_name": "Wenona", "last_name": "Cerro", "email": "wcerro28@tuttocitta.it" },
  { "id": 82, "first_name": "Arlyn", "last_name": "Olenikov", "email": "aolenikov29@sakura.ne.jp" },
  { "id": 83, "first_name": "Ertha", "last_name": "McGonnell", "email": "emcgonnell2a@springer.com" },
  { "id": 84, "first_name": "Timothy", "last_name": "Dobbie", "email": "tdobbie2b@google.fr" },
  { "id": 85, "first_name": "Alison", "last_name": "Jowers", "email": "ajowers2c@studiopress.com" },
  { "id": 86, "first_name": "Marline", "last_name": "Bento", "email": "mbento2d@ameblo.jp" },
  { "id": 87, "first_name": "Mason", "last_name": "Hillan", "email": "mhillan2e@noaa.gov" },
  { "id": 88, "first_name": "Stanton", "last_name": "McKellen", "email": "smckellen2f@cnn.com" },
  { "id": 89, "first_name": "Caty", "last_name": "Jenks", "email": "cjenks2g@usa.gov" },
  { "id": 90, "first_name": "Jordan", "last_name": "Jobern", "email": "jjobern2h@tripadvisor.com" },
  { "id": 91, "first_name": "Lezlie", "last_name": "Millions", "email": "lmillions2i@ovh.net" },
  { "id": 92, "first_name": "Chanda", "last_name": "Begent", "email": "cbegent2j@hubpages.com" },
  { "id": 93, "first_name": "Delphine", "last_name": "Rome", "email": "drome2k@yelp.com" },
  { "id": 94, "first_name": "Taylor", "last_name": "Cheetham", "email": "tcheetham2l@time.com" },
  { "id": 95, "first_name": "Mira", "last_name": "Bottrill", "email": "mbottrill2m@cyberchimps.com" },
  { "id": 96, "first_name": "L;urette", "last_name": "Mattaus", "email": "lmattaus2n@squidoo.com" },
  { "id": 97, "first_name": "Cacilie", "last_name": "Botright", "email": "cbotright2o@tripod.com" },
  { "id": 98, "first_name": "Earl", "last_name": "Place", "email": "eplace2p@ovh.net" },
  { "id": 99, "first_name": "Rand", "last_name": "Mendus", "email": "rmendus2q@1688.com" },
  { "id": 100, "first_name": "Wakefield", "last_name": "Tatchell", "email": "wtatchell2r@hexun.com" },
  { "id": 101, "first_name": "Claudine", "last_name": "Margrem", "email": "cmargrem2s@arstechnica.com" },
  { "id": 102, "first_name": "Merrie", "last_name": "Peer", "email": "mpeer2t@pinterest.com" },
  { "id": 103, "first_name": "Windham", "last_name": "Antosik", "email": "wantosik2u@sogou.com" },
  { "id": 104, "first_name": "Celie", "last_name": "Ellor", "email": "cellor2v@berkeley.edu" },
  { "id": 105, "first_name": "Livvy", "last_name": "Joost", "email": "ljoost2w@tiny.cc" },
  { "id": 106, "first_name": "Lana", "last_name": "Yesenin", "email": "lyesenin2x@twitter.com" },
  { "id": 107, "first_name": "Wylie", "last_name": "Grundon", "email": "wgrundon2y@clickbank.net" },
  { "id": 108, "first_name": "Hilary", "last_name": "Walkey", "email": "hwalkey2z@foxnews.com" },
  { "id": 109, "first_name": "Meade", "last_name": "Gerge", "email": "mgerge30@naver.com" },
  { "id": 110, "first_name": "Clair", "last_name": "Hulett", "email": "chulett31@vinaora.com" },
  { "id": 111, "first_name": "Tedman", "last_name": "Longmate", "email": "tlongmate32@hao123.com" },
  { "id": 112, "first_name": "Kass", "last_name": "Jerosch", "email": "kjerosch33@histats.com" },
  { "id": 113, "first_name": "Lynna", "last_name": "Pilfold", "email": "lpilfold34@bloomberg.com" },
  { "id": 114, "first_name": "Stephenie", "last_name": "Cambell", "email": "scambell35@desdev.cn" },
  { "id": 115, "first_name": "Vidovik", "last_name": "Dungey", "email": "vdungey36@shareasale.com" },
  { "id": 116, "first_name": "Cristine", "last_name": "Whitington", "email": "cwhitington37@house.gov" },
  { "id": 117, "first_name": "Emmy", "last_name": "Scade", "email": "escade38@blogspot.com" },
  { "id": 118, "first_name": "Pammi", "last_name": "Cumbers", "email": "pcumbers39@prnewswire.com" },
  { "id": 119, "first_name": "Toinette", "last_name": "Balchen", "email": "tbalchen3a@quantcast.com" },
  { "id": 120, "first_name": "Corine", "last_name": "Ridewood", "email": "cridewood3b@chron.com" },
  { "id": 121, "first_name": "Felipe", "last_name": "MacConneely", "email": "fmacconneely3c@tripadvisor.com" },
  { "id": 122, "first_name": "Bealle", "last_name": "Jopp", "email": "bjopp3d@patch.com" },
  { "id": 123, "first_name": "Baryram", "last_name": "Blackway", "email": "bblackway3e@cnbc.com" },
  { "id": 124, "first_name": "Huntley", "last_name": "Prichet", "email": "hprichet3f@deliciousdays.com" },
  { "id": 125, "first_name": "Chandler", "last_name": "Colton", "email": "ccolton3g@prnewswire.com" },
  { "id": 126, "first_name": "Devlen", "last_name": "Kimbrough", "email": "dkimbrough3h@cocolog-nifty.com" },
  { "id": 127, "first_name": "Barney", "last_name": "Oram", "email": "boram3i@1688.com" },
  { "id": 128, "first_name": "Kristien", "last_name": "Hammer", "email": "khammer3j@mail.ru" },
  { "id": 129, "first_name": "Piper", "last_name": "Ruler", "email": "pruler3k@over-blog.com" },
  { "id": 130, "first_name": "Gavra", "last_name": "Dorgon", "email": "gdorgon3l@mozilla.com" },
  { "id": 131, "first_name": "Cherin", "last_name": "Mozzini", "email": "cmozzini3m@163.com" },
  { "id": 132, "first_name": "Obediah", "last_name": "Noonan", "email": "onoonan3n@tamu.edu" },
  { "id": 133, "first_name": "Delbert", "last_name": "Zack", "email": "dzack3o@posterous.com" },
  { "id": 134, "first_name": "Leigh", "last_name": "Tregiddo", "email": "ltregiddo3p@admin.ch" },
  { "id": 135, "first_name": "Viviana", "last_name": "Noye", "email": "vnoye3q@mit.edu" },
  { "id": 136, "first_name": "Nobe", "last_name": "Elderfield", "email": "nelderfield3r@yale.edu" },
  { "id": 137, "first_name": "Fielding", "last_name": "Ackwood", "email": "fackwood3s@google.pl" },
  { "id": 138, "first_name": "Burlie", "last_name": "Ruger", "email": "bruger3t@slashdot.org" },
  { "id": 139, "first_name": "Raimondo", "last_name": "Brabyn", "email": "rbrabyn3u@ezinearticles.com" },
  { "id": 140, "first_name": "Thedric", "last_name": "Buckell", "email": "tbuckell3v@cmu.edu" },
  { "id": 141, "first_name": "Che", "last_name": "Haggidon", "email": "chaggidon3w@naver.com" },
  { "id": 142, "first_name": "Dwight", "last_name": "Ikringill", "email": "dikringill3x@hexun.com" },
  { "id": 143, "first_name": "Curry", "last_name": "Aloshkin", "email": "caloshkin3y@uiuc.edu" },
  { "id": 144, "first_name": "Evangelina", "last_name": "Liddyard", "email": "eliddyard3z@wikipedia.org" },
  { "id": 145, "first_name": "Livy", "last_name": "Acuna", "email": "lacuna40@youtube.com" },
  { "id": 146, "first_name": "Daffie", "last_name": "Rayworth", "email": "drayworth41@mail.ru" },
  { "id": 147, "first_name": "Gloriana", "last_name": "Balmer", "email": "gbalmer42@google.nl" },
  { "id": 148, "first_name": "Alister", "last_name": "Rabbe", "email": "arabbe43@tripod.com" },
  { "id": 149, "first_name": "Sheelagh", "last_name": "Briggs", "email": "sbriggs44@usda.gov" },
  { "id": 150, "first_name": "Clareta", "last_name": "Rollinson", "email": "crollinson45@newyorker.com" },
  { "id": 151, "first_name": "Jermaine", "last_name": "Petican", "email": "jpetican46@dion.ne.jp" },
  { "id": 152, "first_name": "Verge", "last_name": "Tomowicz", "email": "vtomowicz47@ed.gov" },
  { "id": 153, "first_name": "Cherianne", "last_name": "Cristou", "email": "ccristou48@cornell.edu" },
  { "id": 154, "first_name": "Berni", "last_name": "Smalley", "email": "bsmalley49@jugem.jp" },
  { "id": 155, "first_name": "Keeley", "last_name": "Castillo", "email": "kcastillo4a@chicagotribune.com" },
  { "id": 156, "first_name": "Genevra", "last_name": "Lapish", "email": "glapish4b@nhs.uk" },
  { "id": 157, "first_name": "Elita", "last_name": "Knifton", "email": "eknifton4c@businesswire.com" },
  { "id": 158, "first_name": "Amelita", "last_name": "Wingate", "email": "awingate4d@telegraph.co.uk" },
  { "id": 159, "first_name": "Keane", "last_name": "Ulyat", "email": "kulyat4e@usgs.gov" },
  { "id": 160, "first_name": "Paige", "last_name": "Husthwaite", "email": "phusthwaite4f@yandex.ru" },
  { "id": 161, "first_name": "Tine", "last_name": "Semon", "email": "tsemon4g@ebay.co.uk" },
  { "id": 162, "first_name": "Mair", "last_name": "Sarre", "email": "msarre4h@chronoengine.com" },
  { "id": 163, "first_name": "Muire", "last_name": "Kissack", "email": "mkissack4i@tamu.edu" },
  { "id": 164, "first_name": "Marcille", "last_name": "Youhill", "email": "myouhill4j@ft.com" },
  { "id": 165, "first_name": "Roseanna", "last_name": "Foulcher", "email": "rfoulcher4k@army.mil" },
  { "id": 166, "first_name": "Brig", "last_name": "Brattell", "email": "bbrattell4l@godaddy.com" },
  { "id": 167, "first_name": "Lucio", "last_name": "Gresly", "email": "lgresly4m@tinypic.com" },
  { "id": 168, "first_name": "Tybi", "last_name": "McCutcheon", "email": "tmccutcheon4n@epa.gov" },
  { "id": 169, "first_name": "Ulric", "last_name": "Calrow", "email": "ucalrow4o@wp.com" },
  { "id": 170, "first_name": "Sandie", "last_name": "Glossop", "email": "sglossop4p@twitpic.com" },
  { "id": 171, "first_name": "Amy", "last_name": "Bracegirdle", "email": "abracegirdle4q@princeton.edu" },
  { "id": 172, "first_name": "Dilly", "last_name": "Colton", "email": "dcolton4r@uol.com.br" },
  { "id": 173, "first_name": "Zack", "last_name": "Ketteman", "email": "zketteman4s@reverbnation.com" },
  { "id": 174, "first_name": "Clemence", "last_name": "Philpots", "email": "cphilpots4t@about.com" },
  { "id": 175, "first_name": "Yehudi", "last_name": "Bater", "email": "ybater4u@themeforest.net" }
];
class Context {
  rowsPerPage;
  pageNumber;
  triggerChange;
  globalSearch;
  filters;
  rawRows;
  filteredRows;
  rows;
  rowCount;
  pages;
  pagesWithEllipsis;
  pageCount;
  sorted;
  constructor(data, params) {
    this.rowsPerPage = writable(params.rowsPerPage);
    this.pageNumber = writable(1);
    this.triggerChange = writable(0);
    this.globalSearch = writable({ value: null, scope: null });
    this.filters = writable([]);
    this.rawRows = writable(data);
    this.filteredRows = this.createFilteredRows();
    this.rows = this.createPaginatedRows();
    this.rowCount = this.createRowCount();
    this.pages = this.createPages();
    this.pagesWithEllipsis = this.createPagesWithEllipsis();
    this.pageCount = this.createPageCount();
    this.sorted = writable({ identifier: null, direction: null });
  }
  createFilteredRows() {
    return derived([this.rawRows, this.globalSearch, this.filters], ([$rawRows, $globalSearch, $filters]) => {
      if ($globalSearch.value) {
        $rawRows = $rawRows.filter((row) => {
          const scope = $globalSearch.scope ?? Object.keys(row);
          return scope.some((key) => {
            if (row[key]) {
              return this.stringMatch(row[key], $globalSearch.value);
            }
            return "";
          });
        });
        this.pageNumber.set(1);
        this.triggerChange.update((store) => {
          return store + 1;
        });
      }
      if ($filters.length > 0) {
        $filters.forEach((localFilter) => {
          return $rawRows = $rawRows.filter((row) => {
            const entry = localFilter.filterBy(row);
            return this.stringMatch(entry, localFilter.value);
          });
        });
        this.pageNumber.set(1);
        this.triggerChange.update((store) => {
          return store + 1;
        });
      }
      return $rawRows;
    });
  }
  createPaginatedRows() {
    return derived([this.filteredRows, this.rowsPerPage, this.pageNumber], ([$filteredRows, $rowsPerPage, $pageNumber]) => {
      if (!$rowsPerPage) {
        return $filteredRows;
      }
      this.triggerChange.update((store) => {
        return store + 1;
      });
      return $filteredRows.slice(($pageNumber - 1) * $rowsPerPage, $pageNumber * $rowsPerPage);
    });
  }
  createRowCount() {
    return derived([this.filteredRows, this.pageNumber, this.rowsPerPage], ([$filteredRows, $pageNumber, $rowsPerPage]) => {
      const total = $filteredRows.length;
      if (!$rowsPerPage) {
        return { total, start: 1, end: total };
      }
      return {
        total,
        start: $pageNumber * $rowsPerPage - $rowsPerPage + 1,
        end: Math.min($pageNumber * $rowsPerPage, $filteredRows.length)
      };
    });
  }
  createPages() {
    return derived([this.rowsPerPage, this.filteredRows], ([$rowsPerPage, $filteredRows]) => {
      if (!$rowsPerPage) {
        return [1];
      }
      const pages = Array.from(Array(Math.ceil($filteredRows.length / $rowsPerPage)));
      return pages.map((row, i) => {
        return i + 1;
      });
    });
  }
  createPagesWithEllipsis() {
    return derived([this.pages, this.pageNumber], ([$pages, $pageNumber]) => {
      if ($pages.length <= 7) {
        return $pages;
      }
      const ellipse = null;
      const firstPage = 1;
      const lastPage = $pages.length;
      if ($pageNumber <= 4) {
        return [
          ...$pages.slice(0, 5),
          ellipse,
          lastPage
        ];
      } else if ($pageNumber < $pages.length - 3) {
        return [
          firstPage,
          ellipse,
          ...$pages.slice($pageNumber - 2, $pageNumber + 1),
          ellipse,
          lastPage
        ];
      } else {
        return [
          firstPage,
          ellipse,
          ...$pages.slice($pages.length - 5, $pages.length)
        ];
      }
    });
  }
  createPageCount() {
    return derived([this.pages], ([$pages]) => {
      return $pages.length;
    });
  }
  stringMatch(entry, value) {
    if (typeof entry === "string" || !entry) {
      return String(entry).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(value.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) > -1;
    } else if (typeof entry === "object") {
      return Object.keys(entry).some((k) => {
        return this.stringMatch(entry[k], value);
      });
    }
    return String(entry).indexOf(String(value)) > -1;
  }
}
class Rows {
  rawRows;
  triggerChange;
  sorted;
  constructor(context) {
    this.rawRows = context.rawRows;
    this.triggerChange = context.triggerChange;
    this.sorted = context.sorted;
  }
  sort(orderBy) {
    if (!orderBy)
      return;
    const sorted = this.getSorted();
    const parsed = this.parse(orderBy);
    if (sorted.identifier !== parsed.identifier) {
      this.sorted.update((store) => store.direction = null);
    }
    if (sorted.direction === null || sorted.direction === "desc") {
      this.sortAsc(orderBy);
    } else if (sorted.direction === "asc") {
      this.sortDesc(orderBy);
    }
  }
  sortAsc(orderBy) {
    const parsed = this.parse(orderBy);
    this.sorted.set({ identifier: parsed.identifier, direction: "asc" });
    this.rawRows.update((store) => {
      try {
        store.sort((a, b) => {
          if (typeof parsed.fn(b) === "boolean") {
            return parsed.fn(a) ? -1 : 1;
          } else if (!parsed.fn(b))
            return 1;
          else if (!parsed.fn(a))
            return -1;
          else {
            return parsed.fn(a).localeCompare(parsed.fn(b));
          }
        });
        return store;
      } catch (e) {
        return store.sort((a, b) => parseFloat(parsed.fn(a)) - parseFloat(parsed.fn(b)));
      }
    });
    this.triggerChange.update((store) => {
      return store + 1;
    });
  }
  sortDesc(orderBy) {
    const parsed = this.parse(orderBy);
    this.sorted.set({ identifier: parsed.identifier, direction: "desc" });
    this.rawRows.update((store) => {
      try {
        store.sort((a, b) => {
          if (typeof parsed.fn(b) === "boolean") {
            return parsed.fn(a) ? 1 : -1;
          } else if (!parsed.fn(a))
            return 1;
          else if (!parsed.fn(b))
            return -1;
          else {
            return parsed.fn(b).localeCompare(parsed.fn(a));
          }
        });
        return store;
      } catch (e) {
        return store.sort((a, b) => parseFloat(parsed.fn(b)) - parseFloat(parsed.fn(a)));
      }
    });
    this.triggerChange.update((store) => {
      return store + 1;
    });
  }
  parse(orderBy) {
    if (typeof orderBy === "string") {
      return {
        fn: (row) => row[orderBy],
        identifier: orderBy.toString()
      };
    }
    return {
      fn: orderBy,
      identifier: orderBy.toString()
    };
  }
  getSorted() {
    let $sorted = { identifier: null, direction: null };
    this.sorted.subscribe((store) => $sorted = store);
    return $sorted;
  }
}
class Pages {
  pageNumber;
  rowCount;
  rowsPerPage;
  triggerChange;
  pages;
  constructor(context) {
    this.pageNumber = context.pageNumber;
    this.rowCount = context.rowCount;
    this.rowsPerPage = context.rowsPerPage;
    this.triggerChange = context.triggerChange;
    this.pages = context.pages;
  }
  get() {
    return this.pages;
  }
  goTo(number) {
    this.pageNumber.update((store) => {
      const $rowsPerPage = this.getRowsPerPage();
      if ($rowsPerPage) {
        const $rowsTotal = this.getTotalRowCout();
        if (number >= 1 && number <= Math.ceil($rowsTotal / $rowsPerPage)) {
          store = number;
          this.triggerChange.update((store2) => {
            return store2 + 1;
          });
        }
      }
      return store;
    });
  }
  previous() {
    const number = this.getPageNumber() - 1;
    this.goTo(number);
  }
  next() {
    const number = this.getPageNumber() + 1;
    this.goTo(number);
  }
  getPageNumber() {
    let value = 1;
    this.pageNumber.subscribe((store) => value = store);
    return value;
  }
  getTotalRowCout() {
    let value = 0;
    this.rowCount.subscribe((store) => value = store.total);
    return value;
  }
  getRowsPerPage() {
    let value = null;
    this.rowsPerPage.subscribe((store) => value = store);
    return value;
  }
}
let Search$1 = class Search {
  globalSearch;
  constructor(context) {
    this.globalSearch = context.globalSearch;
  }
  set(value, scope = null) {
    this.globalSearch.update((store) => {
      store = {
        value: value ?? "",
        scope: scope ?? null
      };
      return store;
    });
  }
  remove() {
    this.globalSearch.set({ value: null, scope: null });
  }
};
class Filters {
  filters;
  constructor(context) {
    this.filters = context.filters;
  }
  set(value, filterBy) {
    const parsed = this.parse(filterBy);
    this.filters.update((store) => {
      const filter = { filterBy: parsed.fn, value, identifier: parsed.identifier };
      store = store.filter((item) => {
        return item.identifier !== parsed.identifier && item.value.length > 0;
      });
      store.push(filter);
      return store;
    });
  }
  remove() {
    this.filters.update((store) => []);
  }
  parse(filterBy) {
    if (typeof filterBy === "string") {
      return {
        fn: (row) => row[filterBy],
        identifier: filterBy.toString()
      };
    }
    return {
      fn: filterBy,
      identifier: filterBy.toString()
    };
  }
}
class DataHandler {
  context;
  rows;
  pages;
  globalSearch;
  filters;
  i18n;
  constructor(data = [], params = { rowsPerPage: null }) {
    this.i18n = this.translate(params.i18n);
    this.context = new Context(data, params);
    this.rows = new Rows(this.context);
    this.pages = new Pages(this.context);
    this.globalSearch = new Search$1(this.context);
    this.filters = new Filters(this.context);
  }
  setRows(data) {
    this.context.rawRows.set(data);
  }
  getRows() {
    return this.context.rows;
  }
  getRowCount() {
    return this.context.rowCount;
  }
  getRowsPerPage() {
    return this.context.rowsPerPage;
  }
  sort(orderBy) {
    this.setPage(1);
    this.rows.sort(orderBy);
  }
  sortAsc(orderBy) {
    this.setPage(1);
    this.rows.sortAsc(orderBy);
  }
  sortDesc(orderBy) {
    this.setPage(1);
    this.rows.sortDesc(orderBy);
  }
  getSorted() {
    return this.context.sorted;
  }
  search(value, scope = null) {
    this.globalSearch.set(value, scope);
  }
  clearSearch() {
    this.globalSearch.remove();
  }
  filter(value, filterBy) {
    return this.filters.set(value, filterBy);
  }
  getPages(params = { ellipsis: false }) {
    if (params.ellipsis) {
      return this.context.pagesWithEllipsis;
    }
    return this.context.pages;
  }
  getPageCount() {
    return this.context.pageCount;
  }
  getPageNumber() {
    return this.context.pageNumber;
  }
  setPage(value) {
    switch (value) {
      case "previous":
        return this.pages.previous();
      case "next":
        return this.pages.next();
      default:
        return this.pages.goTo(value);
    }
  }
  getTriggerChange() {
    return this.context.triggerChange;
  }
  translate(i18n) {
    return { ...{
      search: "Search...",
      show: "Show",
      entries: "entries",
      filter: "Filter",
      rowCount: "Showing {start} to {end} of {total} entries",
      noRows: "No entries to found",
      previous: "Previous",
      next: "Next"
    }, ...i18n };
  }
  /**
   * Deprecated
   * use setRows() instead
   */
  update(data) {
    console.log("%c%s", "color:#e65100;background:#fff3e0;font-size:12px;border-radius:4px;padding:4px;text-align:center;", `DataHandler.update(data) method is deprecated. Please use DataHandler.setRows(data) instead`);
    this.context.rawRows.set(data);
  }
}
const Pagination_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-zu7m3f{display:flex}button.svelte-zu7m3f{background:inherit;height:32px;width:32px;color:#616161;cursor:pointer;font-size:13px;margin:0;padding:0;transition:all, 0.2s;line-height:32px;border:1px solid #e0e0e0;border-right:none;border-radius:0;outline:none}button.svelte-zu7m3f:first-child{border-radius:4px 0 0 4px}button.svelte-zu7m3f:last-child{border-right:1px solid #e0e0e0;border-radius:0 4px 4px 0}button.svelte-zu7m3f:first-child:not(.small),button.svelte-zu7m3f:last-child:not(.small){min-width:72px}button.svelte-zu7m3f:not(.active):hover{background:#eee}button.ellipse.svelte-zu7m3f:hover{background:inherit;cursor:default}button.active.svelte-zu7m3f{background:#eee;font-weight:bold;cursor:default}button.disabled.svelte-zu7m3f:hover{background:inherit;cursor:default}",
  map: null
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageNumber, $$unsubscribe_pageNumber;
  let $pageCount, $$unsubscribe_pageCount;
  let $pages, $$unsubscribe_pages;
  let { handler } = $$props;
  let { small = false } = $$props;
  const pageNumber = handler.getPageNumber();
  $$unsubscribe_pageNumber = subscribe(pageNumber, (value) => $pageNumber = value);
  const pageCount = handler.getPageCount();
  $$unsubscribe_pageCount = subscribe(pageCount, (value) => $pageCount = value);
  const pages = handler.getPages({ ellipsis: true });
  $$unsubscribe_pages = subscribe(pages, (value) => $pages = value);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$6);
  $$unsubscribe_pageNumber();
  $$unsubscribe_pageCount();
  $$unsubscribe_pages();
  return `${small ? `<section class="${"svelte-zu7m3f"}"><button type="${"button"}" class="${["small svelte-zu7m3f", $pageNumber === 1 ? "disabled" : ""].join(" ").trim()}">❬❬
        </button>
        <button type="${"button"}" class="${["svelte-zu7m3f", $pageNumber === 1 ? "disabled" : ""].join(" ").trim()}">❮
        </button>
        <button class="${["svelte-zu7m3f", $pageNumber === $pageCount ? "disabled" : ""].join(" ").trim()}">❯
        </button>
        <button class="${["small svelte-zu7m3f", $pageNumber === $pageCount ? "disabled" : ""].join(" ").trim()}">❭❭
        </button></section>` : `<section class="${"svelte-zu7m3f"}"><button type="${"button"}" class="${["svelte-zu7m3f", $pageNumber === 1 ? "disabled" : ""].join(" ").trim()}"><!-- HTML_TAG_START -->${handler.i18n.previous}<!-- HTML_TAG_END --></button>
        ${each($pages, (page) => {
    return `<button type="${"button"}" class="${[
      "svelte-zu7m3f",
      ($pageNumber === page ? "active" : "") + " " + (page === null ? "ellipse" : "")
    ].join(" ").trim()}">${escape(page ?? "...")}
            </button>`;
  })}
        <button type="${"button"}" class="${["svelte-zu7m3f", $pageNumber === $pageCount ? "disabled" : ""].join(" ").trim()}"><!-- HTML_TAG_START -->${handler.i18n.next}<!-- HTML_TAG_END --></button></section>`}`;
});
const RowCount_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "aside.svelte-7ybz3u{color:#616161;line-height:32px;font-size:14px}",
  map: null
};
const RowCount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rowCount, $$unsubscribe_rowCount;
  let { handler } = $$props;
  let { small = false } = $$props;
  const rowCount = handler.getRowCount();
  $$unsubscribe_rowCount = subscribe(rowCount, (value) => $rowCount = value);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$5);
  $$unsubscribe_rowCount();
  return `${small ? `${$rowCount.total > 0 ? `<aside class="${"svelte-7ybz3u"}"><b>${escape($rowCount.start)}</b>-
            <b>${escape($rowCount.end)}</b>/
            <b>${escape($rowCount.total)}</b></aside>` : `${escape(handler.i18n.noRows)}`}` : `<aside class="${"svelte-7ybz3u"}">${$rowCount.total > 0 ? `<!-- HTML_TAG_START -->${handler.i18n.rowCount.replace("{start}", `<b>${$rowCount.start}</b>`).replace("{end}", `<b>${$rowCount.end}</b>`).replace("{total}", `<b>${$rowCount.total}</b>`)}<!-- HTML_TAG_END -->` : `${escape(handler.i18n.noRows)}`}</aside>`}`;
});
const RowsPerPage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "aside.svelte-g50cwe{display:flex;justify-content:flex-start;align-items:center;height:32px;color:#616161}select.svelte-g50cwe{margin:0 4px}",
  map: null
};
const RowsPerPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_rowsPerPage;
  let { handler } = $$props;
  const rowsPerPage = handler.getRowsPerPage();
  $$unsubscribe_rowsPerPage = subscribe(rowsPerPage, (value) => value);
  const options = [5, 10, 20, 50, 100];
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  $$result.css.add(css$4);
  $$unsubscribe_rowsPerPage();
  return `<aside class="${"svelte-g50cwe"}"><p>${escape(handler.i18n.show)}</p>
    <select class="${"svelte-g50cwe"}">${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}
            </option>`;
  })}</select>
    <p>${escape(handler.i18n.entries)}</p>
</aside>`;
});
const Search_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "input.svelte-b164y{border:1px solid #e0e0e0;border-radius:4px;outline:none;padding:0 8px;line-height:24px;margin:0;height:24px;background:transparent;width:176px;transition:all, 0.1s}input.svelte-b164y:focus{border:1px solid #bdbdbd}input.svelte-b164y::-moz-placeholder{color:#9e9e9e;line-height:24px}input.svelte-b164y::placeholder{color:#9e9e9e;line-height:24px}",
  map: null
};
const Search2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handler } = $$props;
  let value = "";
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  $$result.css.add(css$3);
  return `<input${add_attribute("placeholder", handler.i18n.search, 0)} spellcheck="${"false"}" class="${"svelte-b164y"}"${add_attribute("value", value, 0)}>`;
});
const Th_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "th.svelte-bfjqo4.svelte-bfjqo4{background:inherit;margin:0;white-space:nowrap;padding:0 4px;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-bottom:1px solid #e0e0e0}th.sortable.svelte-bfjqo4.svelte-bfjqo4{cursor:pointer}th.sortable.svelte-bfjqo4 div.flex.svelte-bfjqo4{padding:8px 0 8px 16px;display:flex;justify-content:center;align-items:center;height:100%}th.sortable.svelte-bfjqo4 span.svelte-bfjqo4{padding-left:8px}th.sortable.svelte-bfjqo4 span.svelte-bfjqo4:before,th.sortable.svelte-bfjqo4 span.svelte-bfjqo4:after{border:4px solid transparent;content:'';display:block;height:0;width:0}th.sortable.svelte-bfjqo4 span.svelte-bfjqo4:before{border-bottom-color:#e0e0e0;margin-top:2px}th.sortable.svelte-bfjqo4 span.svelte-bfjqo4:after{border-top-color:#e0e0e0;margin-top:2px}th.active.sortable.svelte-bfjqo4 span.asc.svelte-bfjqo4:before{border-bottom-color:#9e9e9e}th.active.sortable.svelte-bfjqo4 span.desc.svelte-bfjqo4:after{border-top-color:#9e9e9e}th.svelte-bfjqo4:not(.sortable) span.svelte-bfjqo4{visibility:hidden}",
  map: null
};
const Th = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sorted, $$unsubscribe_sorted;
  let { handler } = $$props;
  let { orderBy = null } = $$props;
  const identifier = orderBy ? orderBy.toString() : orderBy;
  const sorted = handler.getSorted();
  $$unsubscribe_sorted = subscribe(sorted, (value) => $sorted = value);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.orderBy === void 0 && $$bindings.orderBy && orderBy !== void 0)
    $$bindings.orderBy(orderBy);
  $$result.css.add(css$2);
  $$unsubscribe_sorted();
  return `<th class="${[
    "svelte-bfjqo4",
    (orderBy ? "sortable" : "") + " " + ($sorted.identifier === identifier ? "active" : "")
  ].join(" ").trim()}"><div class="${"flex svelte-bfjqo4"}"><strong>${slots.default ? slots.default({}) : ``}</strong>
        <span class="${[
    "svelte-bfjqo4",
    ($sorted.direction === "asc" ? "asc" : "") + " " + ($sorted.direction === "desc" ? "desc" : "")
  ].join(" ").trim()}"></span></div>
</th>`;
});
const ThFilter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "th.svelte-v9va0q{border-bottom:1px solid #e0e0e0}input.svelte-v9va0q{margin:-1px 0 0 0;padding:0;width:100%;height:24px;border:none;text-align:center;background:inherit;outline:none;font-size:14px}input.svelte-v9va0q::-moz-placeholder{color:#bdbdbd;font-style:italic;font-size:13px}input.svelte-v9va0q::placeholder{color:#bdbdbd;font-style:italic;font-size:13px}input.svelte-v9va0q:focus{outline:none;border:none}",
  map: null
};
const ThFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handler } = $$props;
  let { filterBy = null } = $$props;
  let value = "";
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.filterBy === void 0 && $$bindings.filterBy && filterBy !== void 0)
    $$bindings.filterBy(filterBy);
  $$result.css.add(css$1);
  return `<th class="${"svelte-v9va0q"}"><input type="${"text"}"${add_attribute("placeholder", handler.i18n.filter, 0)} spellcheck="${"false"}" class="${"svelte-v9va0q"}"${add_attribute("value", value, 0)}>
</th>`;
});
const Datatable_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1kzls7s{height:100%}section.svelte-1kzls7s table{text-align:center;border-collapse:separate;border-spacing:0;width:100%}section.svelte-1kzls7s thead{position:sticky;inset-block-start:0;z-index:1}header.svelte-1kzls7s,footer.svelte-1kzls7s{min-height:8px;padding:0 16px;display:flex;justify-content:space-between;align-items:center}header.container.svelte-1kzls7s{height:48px}footer.svelte-1kzls7s{border-top:1px solid #e0e0e0}footer.container.svelte-1kzls7s{height:48px}article.svelte-1kzls7s{position:relative;height:calc(100% - 96px);overflow:auto;scrollbar-width:thin}article.svelte-1kzls7s::-webkit-scrollbar{width:6px;height:6px}article.svelte-1kzls7s::-webkit-scrollbar-track{background:#f5f5f5}article.svelte-1kzls7s::-webkit-scrollbar-thumb{background:#c2c2c2}article.svelte-1kzls7s::-webkit-scrollbar-thumb:hover{background:#9e9e9e}",
  map: null
};
const Datatable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_triggerChange;
  let { handler } = $$props;
  let { search = true } = $$props;
  let { rowsPerPage = true } = $$props;
  let { rowCount = true } = $$props;
  let { pagination = true } = $$props;
  let element;
  let clientWidth = 1e3;
  const triggerChange = handler.getTriggerChange();
  $$unsubscribe_triggerChange = subscribe(triggerChange, (value) => value);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.rowsPerPage === void 0 && $$bindings.rowsPerPage && rowsPerPage !== void 0)
    $$bindings.rowsPerPage(rowsPerPage);
  if ($$props.rowCount === void 0 && $$bindings.rowCount && rowCount !== void 0)
    $$bindings.rowCount(rowCount);
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  $$result.css.add(css);
  $$unsubscribe_triggerChange();
  return `<section class="${"svelte-1kzls7s"}"><header class="${["svelte-1kzls7s", search || rowsPerPage ? "container" : ""].join(" ").trim()}">${search ? `${validate_component(Search2, "Search").$$render($$result, { handler }, {}, {})}` : ``}
        ${rowsPerPage ? `${validate_component(RowsPerPage, "RowsPerPage").$$render($$result, { handler }, {}, {})}` : ``}</header>

    <article class="${"svelte-1kzls7s"}"${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</article>

    <footer class="${["svelte-1kzls7s", rowCount || pagination ? "container" : ""].join(" ").trim()}">${rowCount ? `${validate_component(RowCount, "RowCount").$$render($$result, { handler, small: clientWidth < 600 }, {}, {})}` : ``}
        ${pagination ? `${validate_component(Pagination, "Pagination").$$render($$result, { handler, small: clientWidth < 600 }, {}, {})}` : ``}</footer>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rows, $$unsubscribe_rows;
  const handler = new DataHandler(myData, { rowsPerPage: 10 });
  const rows = handler.getRows();
  $$unsubscribe_rows = subscribe(rows, (value) => $rows = value);
  $$unsubscribe_rows();
  return `

<div class="${"flex items-center justify-center"}"><div class="${"table-container w-5/6"}">${validate_component(Datatable, "Datatable").$$render($$result, { handler }, {}, {
    default: () => {
      return `<table class="${"table table-compact table-hover"}"><thead><tr>${validate_component(Th, "Th").$$render($$result, { handler, orderBy: "first_name" }, {}, {
        default: () => {
          return `First Name`;
        }
      })}
						${validate_component(Th, "Th").$$render($$result, { handler, orderBy: "last_name" }, {}, {
        default: () => {
          return `Last Name`;
        }
      })}
						${validate_component(Th, "Th").$$render($$result, { handler, orderBy: "email" }, {}, {
        default: () => {
          return `Email`;
        }
      })}</tr>
					<tr>${validate_component(ThFilter, "ThFilter").$$render($$result, { handler, filterBy: "first_name" }, {}, {})}
						${validate_component(ThFilter, "ThFilter").$$render($$result, { handler, filterBy: "last_name" }, {}, {})}
						${validate_component(ThFilter, "ThFilter").$$render($$result, { handler, filterBy: "email" }, {}, {})}</tr></thead>
				<tbody>${each($rows, (row) => {
        return `<tr><td>${escape(row.first_name)}</td>
							<td>${escape(row.last_name)}</td>
							<td>${escape(row.email)}</td>
						</tr>`;
      })}</tbody></table>`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
