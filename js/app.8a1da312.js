(function(e){function a(a){for(var o,n,t=a[0],l=a[1],c=a[2],u=0,_=[];u<t.length;u++)n=t[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&_.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(a);while(_.length)_.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,a=0;a<s.length;a++){for(var i=s[a],o=!0,n=1;n<i.length;n++){var t=i[n];0!==r[t]&&(o=!1)}o&&(s.splice(a--,1),e=l(l.s=i[0]))}return e}var o={},n={app:0},r={app:0},s=[];function t(e){return l.p+"js/"+({about:"about",colours:"colours",presentation:"presentation",play:"play",colourNames:"colourNames",nameColours:"nameColours"}[e]||e)+"."+{about:"96429c1c",colours:"ec017f63",presentation:"c11745ee",play:"fb55e243",colourNames:"e71594b8",nameColours:"1ef69690"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var a=[],i={about:1,colours:1,presentation:1,play:1,colourNames:1,nameColours:1};n[e]?a.push(n[e]):0!==n[e]&&i[e]&&a.push(n[e]=new Promise((function(a,i){for(var o="css/"+({about:"about",colours:"colours",presentation:"presentation",play:"play",colourNames:"colourNames",nameColours:"nameColours"}[e]||e)+"."+{about:"04815307",colours:"71ef05aa",presentation:"6549a063",play:"515c501a",colourNames:"e43b0407",nameColours:"fd3b7db1"}[e]+".css",r=l.p+o,s=document.getElementsByTagName("link"),t=0;t<s.length;t++){var c=s[t],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return a()}var _=document.getElementsByTagName("style");for(t=0;t<_.length;t++){c=_[t],u=c.getAttribute("data-href");if(u===o||u===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[e],p.parentNode.removeChild(p),i(s)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(a,i){o=r[e]=[a,i]}));a.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=t(e);var _=new Error;c=function(a){u.onerror=u.onload=null,clearTimeout(p);var i=r[e];if(0!==i){if(i){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;_.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",_.name="ChunkLoadError",_.type=o,_.request=n,i[1](_)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,i){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(i,o,function(a){return e[a]}.bind(null,o));return i},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/colors/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var _=0;_<c.length;_++)a(c[_]);var p=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"034f":function(e,a,i){"use strict";i("85ec")},"1a8b":function(e,a,i){"use strict";var o=i("6e02"),n=i.n(o);a["default"]=n.a},"3e36":function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"learnColors":"¡Todos los colores!"},"en":{"learnColors":"Learn all the colors!"}}'),delete e.options._Ctor}},"47b0":function(e,a,i){"use strict";i("d2c9")},5259:function(e,a,i){"use strict";var o=i("3e36"),n=i.n(o);a["default"]=n.a},"55e7":function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"presentation":"presentación","colours":"Colores","play":"Juega","about":"Acerca"},"en":{"presentation":"presentation","colours":"Colours","play":"play","about":"About"}}'),delete e.options._Ctor}},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("d3b7"),i("3ca3"),i("ddb0");var o=i("2b0e"),n=i("8c4f"),r=i("a925"),s=i("f309");o["a"].use(s["a"]);var t=new s["a"]({}),l=i("119b"),c=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"App"}},[i("app-header"),i("tabs")],1)},u=[],_=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"AppHeader"}},[i("h1",[e._v(e._s(e.$t("learnColors")))])])},p=[],d={name:"AppHeader"},b=d,v=(i("de1f"),i("2877")),h=i("5259"),f=Object(v["a"])(b,_,p,!1,null,null,null);"function"===typeof h["default"]&&Object(h["default"])(f);var m=f.exports,g=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"Tabs"}},[i("v-tabs",{attrs:{color:"#2E6C61","background-color":"#aae0bc"}},[i("v-tab",{attrs:{to:"/colors/"}},[e._v(" "+e._s(e.$t("presentation"))+" ")]),i("v-tab",{attrs:{to:"colours"}},[e._v(" "+e._s(e.$t("colours"))+" ")]),i("v-tab",{attrs:{to:"about"}},[e._v(" "+e._s(e.$t("about"))+" ")])],1),i("router-view")],1)},w=[],k={name:"Tabs"},C=k,y=(i("47b0"),i("f061")),A=i("6544"),j=i.n(A),z=i("71a3"),B=i("fe57"),D=Object(v["a"])(C,g,w,!1,null,null,null);"function"===typeof y["default"]&&Object(y["default"])(D);var E=D.exports;j()(D,{VTab:z["a"],VTabs:B["a"]});var F={name:"App",components:{AppHeader:m,Tabs:E}},P=F,O=(i("034f"),i("1a8b")),V=Object(v["a"])(P,c,u,!1,null,null,null);"function"===typeof O["default"]&&Object(O["default"])(V);var M=V.exports,H={sable:{codes:["000000"],es:"Sable",en:"Sable",es_tip:"Negro heráldico",en_tip:"Heraldic black",available_in_es:!0,available_in_en:!0,source:"https://en.wikipedia.org/wiki/Sable_(heraldry)"},cordoban:{codes:["42352d"],es:"Cordobán",en:"Cordovan",es_tip:"Negro pardo cuero",en_tip:"Leather dark brown",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Cordob%C3%A1n_(color)"},umbra:{codes:["635147"],es:"Umbra",en:"Umber",es_tip:"Marrón rojizo",en_tip:"Reddish-brown ",available_in_es:!0,available_in_en:!0,source:"https://en.wikipedia.org/wiki/Umber"},bistre:{codes:["967117"],es:"Bistre",en:"Bistre",es_tip:"Marrón amarillento",en_tip:"Yellowish brown",available_in_es:!0,available_in_en:!0,source:"https://en.wikipedia.org/wiki/Bistre"},ocre:{codes:["B9935A"],es:"Ocre",en:"Ochre",es_tip:"Marrón anaranjado o rojizo",en_tip:"Reddish brown",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Ocre"},grisPayne:{codes:["536878"],es:"Gris Payne",en:"Payne's grey",es_tip:"Gris azulado",en_tip:"Bluish grey",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/536878"},grisPayneOscuro:{codes:["36454F"],es:"Payne oscuro",en:"Dark Payne's",es_tip:"Gris oscuro azulado",en_tip:"Dark bluish grey",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Gris_de_Payne"},grisFeldgrau:{codes:["59646A"],es:"Feldgrau",en:"Feldgrau",es_tip:"Gris campaña",en_tip:"Field Grey",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Feldgrau"},"turquí":{codes:["122562"],es:"Turquí",en:"Navy blue",es_tip:"Azul oscuro profundo",en_tip:"Dark shade of blue",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/122562"},"añil":{codes:["264796"],es:"Añil",en:"Indigo",es_tip:"Azul oscuro y profundo. Índigo ó Glasto",en_tip:"Deep dark blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/A%C3%B1il"},indigo:{codes:["264796"],es:"Índigo",en:"Indigo",es_tip:"Azul oscuro y profundo. Añil ó Glasto",en_tip:"Deep dark blue",available_in_es:!0,available_in_en:!1,source:"https://es.wikipedia.org/wiki/A%C3%B1il"},glasto:{codes:["264796"],es:"Glasto",en:"Indigo",es_tip:"Azul oscuro y profundo. Índigo ó Añil",en_tip:"Deep dark blue",available_in_es:!0,available_in_en:!1,source:"https://es.wikipedia.org/wiki/A%C3%B1il"},cobalto:{codes:["0047AB"],es:"Cobalto",en:"Cobalt",es_tip:"Azul Cobalto",en_tip:"Cobalt blue",available_in_es:!0,available_in_en:!0,source:"https://en.wikipedia.org/wiki/Cobalt_blue"},cobaltoClaro:{codes:["091F92"],es:"Cobalto Claro",en:"Light Cobalt",es_tip:"Azul Cobalto claro",en_tip:"Light Cobalt blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Azul_cobalto"},cobaltoOscuro:{codes:["004F79"],es:"Cobalto Oscuro",en:"Dark Cobalt",es_tip:"Azul Cobalto Oscuro",en_tip:"Dark Cobalt blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Azul_cobalto"},lapislazuli:{codes:["4273B8"],es:"Lapislázuli",en:"Lapis laculi",es_tip:"Azul marino templado",en_tip:"Mild navy blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Lapisl%C3%A1zuli"},"cerúleoOscuro":{codes:["08457E"],es:"Cerúleo oscuro",en:"Dark Cerulean",es_tip:"Azul oscuro poco saturado",en_tip:"Dark less saturation blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Cer%C3%BAleo"},azur:{codes:["0066FF"],es:"Azur",en:"Azure",es_tip:"Azul heráldico",en_tip:"Heraldic blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Azur"},"cerúleo":{codes:["0098D5"],es:"Cerúleo",en:"Cerulean",es_tip:"Azul medio poco saturado",en_tip:"Mild less saturation blue",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Cer%C3%BAleo"},cerceta:{codes:["009B94"],es:"Cerceta",en:"Teal",es_tip:"Azul verde",en_tip:"Blue-green",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Azul_verde"},verdeMalaquita:{codes:["12774f"],es:"Malaquita",en:"Malachite",es_tip:"Verde malaquita",en_tip:"Malachite green",available_in_es:!0,available_in_en:!0,source:"https://mineralesdelmundo.com/malaquita/"},sinople:{codes:["008f4c"],es:"Sinople",en:"Sinople",es_tip:"Verde heráldico",en_tip:"Heraldic green",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/008f4c"},jade:{codes:["00a86b"],es:"Jade",en:"Jade",es_tip:"Verde jade",en_tip:"Jade green",available_in_es:!0,available_in_en:!0,source:"https://jades.work/blog/color-jade/"},esmeralda:{codes:["009975"],es:"Esmeralda",en:"Emerald",es_tip:"Verde esmeralda",en_tip:"Emerald green",available_in_es:!0,available_in_en:!0,source:"https://www.ecured.cu/Esmeralda_%28color%29"},viridian:{codes:["007F66"],es:"Viridián",en:"Viridian",es_tip:"Verde viridián",en_tip:"Viridián green",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.com/007f66"},veronese:{codes:["009D7A"],es:"Veronés",en:"Paolo Veronese",es_tip:"Verde Paolo Veronese",en_tip:"Paolo Veronese green",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Verde_Veronese"},cartujo:{codes:["BEB72D"],es:"Cartujo",en:"Chartreuse ",es_tip:"Verde cartujo",en_tip:"Chartreuse green",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Chartreuse_%28color%29"},gualda:{codes:["FABD00"],es:"Gualdo",en:"Goldtone",es_tip:"Amarillo heráldico (bandera de españa)",en_tip:"Heraldic yellow (Spanish flag)",available_in_es:!0,available_in_en:!0,source:"http://www.jccanalda.es/jccanalda_doc/jccanalda_otrosarticulos/varia/gualda.htm"},hansa:{codes:["FFDD00"],es:"Hansa",en:"Arylide",es_tip:"Amarillo Hansa o monoazo",en_tip:"Arylide or Hansa yellow",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Amarillo_Hansa#Pintura_artística"},hansaMedio:{codes:["FFCD00"],es:"Hansa medio",en:"Medium arylide",es_tip:"Amarillo Hansa",en_tip:"Medium hansa yellow",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Amarillo_Hansa#Pintura_artística"},hansaOscuro:{codes:["FFB000"],es:"Hansa oscuro",en:"Dark arylide",es_tip:"Amarillo Hansa oscuro",en_tip:"Dark hansa yellow",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Amarillo_Hansa#Pintura_artística"},ambar:{codes:["E49E43"],es:"Ámbar",en:"Amber",es_tip:"Amarillo ámbar",en_tip:"Amber yellow",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/%C3%81mbar_%28color%29"},durazno:{codes:["FFCBA4"],es:"Durazno",en:"Peach",es_tip:"Color melocotón",en_tip:"Peach color",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Durazno_%28color%29#Variaciones_del_color_durazno"},"ambrosía":{codes:["f8eadd"],es:"Ambrosía",en:"Ambrosía",es_tip:"Color piel blanca",en_tip:"White skin color",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/f8eadd"},gamuza:{codes:["E8BD85"],es:"Gamuza",en:"Chamois",es_tip:"Naranja claro, saturación moderada",en_tip:"Light orange, light saturation",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Gamuza_%28color%29"},terracota:{codes:["C89C7D"],es:"Terracota",en:"Terra cotta",es_tip:"Naranja rojizo",en_tip:"Reddish orange",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/c89c7d"},ante:{codes:["BF8F4E"],es:"Ante",en:"Buff",es_tip:"Marrón textil",en_tip:"Textil brown",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Ante_%28color%29"},cobrizo:{codes:["CB6D51"],es:"Cobre",en:"Copper",es_tip:"Gama colores cobrizos",en_tip:'Range of "copperish" colours',available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Cobre_(color)"},herrumbre:{codes:["A2522B"],es:"Herrumbre",en:"Rust",es_tip:"Hierro oxidado",en_tip:"Iron oxide, orange-red-brown",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Herrumbre_%28color%29"},siena:{codes:["882D17"],es:"Siena",en:"Sienna",es_tip:"Marrón rojizo pintura rupestre",en_tip:"Cave paintings reddish brown",available_in_es:!0,available_in_en:!0,source:"https://en.wikipedia.org/wiki/Sienna"},"borgoña":{codes:["673147"],es:"Borgoña",en:"Burgundy",es_tip:"Color del vino",en_tip:"Wine color",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Borgo%C3%B1a_%28color%29"},violin:{codes:["A10684"],es:"Violín",en:"Violine",es_tip:"Violeta purpureo",en_tip:"Purple violet",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/a10684"},"bígaro":{codes:["CCCCFF"],es:"Bígaro",en:"Periwinkle",es_tip:"Violeta azulado claro",en_tip:"Light bluish violet",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/B%C3%ADgaro_(color)"},malva:{codes:["E0B0FF"],es:"Malva",en:"Mauve",es_tip:"Purpura brillante",en_tip:"Brilliant purple",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Malva_(color)"},coral:{codes:["E4717A"],es:"Coral",en:"Coral",es_tip:"Rojo claro vivo",en_tip:"Alive light red",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Coral_%28color%29"},amaranto:{codes:["FF355E"],es:"Amaranto",en:"Amaranth",es_tip:"Rosa rojizo",en_tip:"Reddish pink",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Amaranto_%28color%29#cite_note-1"},"rubí":{codes:["E0115F"],es:"Rubí",en:"Ruby",es_tip:"Rojo oscuro rosaceo",en_tip:"Pinkish dark red",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.com/e0115f"},escarlata:{codes:["ff0040"],es:"Escarlata",en:"Scarlet",es_tip:"Rojo brillante",en_tip:"Bright red",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/ff0040"},gules:{codes:["ed1c24"],es:"Gulés",en:"Gules",es_tip:"Rojo heráldico, intenso",en_tip:"Heraldic red, intense",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/ed1c24"},bermellon:{codes:["E62E00"],es:"Bermellón",en:"Vermilion",es_tip:"Rojo con toque naranja",en_tip:"Orange-coloured red",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Bermell%C3%B3n"},"carmesí":{codes:["A51C30"],es:"Carmesí",en:"Crimson",es_tip:"Rojo fuerte purpureo ",en_tip:"Strong purplish red",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Carmes%C3%AD"},"carmín":{codes:["960018"],es:"Carmin",en:"Carmine",es_tip:"Rojo oscuro levemente purpureo",en_tip:"Slightly purplish dark red",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Carm%C3%ADn"},caoba:{codes:["C04000"],es:"Caoba",en:"Mahogany ",es_tip:"Rojo madera",en_tip:"Wooden red",available_in_es:!0,available_in_en:!0,source:"https://es.wikipedia.org/wiki/Caoba_%28color%29"},cardenal:{codes:["C41E3A"],es:"Cardenal",en:"Cardinal",es_tip:"Rojo vivo, toque rosa",en_tip:"Alive red, a touch of pink",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/c41e3a"},granate:{codes:["ab2a3e"],es:"Granate",en:"Maroon",es_tip:"Rojo oscuro de la granada",en_tip:"Dark red from pomegranate",available_in_es:!0,available_in_en:!0,source:"https://encycolorpedia.es/ab2a3e"}};i("b089");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].use(n["a"]),o["a"].use(i("395c")),o["a"].use(l["a"].AutoAdsense,{adClient:"ca-pub-6657050088245428"});var S=new r["a"]({locale:"en"}),R=[{name:"Index",path:"/colors",component:function(){return i.e("presentation").then(i.bind(null,"3599"))},props:{propColourList:H}},{name:"Colors",path:"/colors/colours",component:function(){return i.e("colours").then(i.bind(null,"618d"))},props:{propColourList:H}},{name:"About",path:"/colors/about",component:function(){return i.e("about").then(i.bind(null,"84ba"))},props:{propColourList:H}}],T=new n["a"]({mode:"hash",base:"/colors/",routes:R});new o["a"]({i18n:S,router:T,vuetify:t,render:function(e){return e(M)}}).$mount("#app")},"6e02":function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"presentation":"presentación","learnColors":"¡Aprende todos los colores!"},"en":{"presentation":"presentation","learnColors":"Learn all the colors!"}}'),delete e.options._Ctor}},"85ec":function(e,a,i){},"915e":function(e,a,i){},b089:function(e,a,i){},d2c9:function(e,a,i){},de1f:function(e,a,i){"use strict";i("915e")},f061:function(e,a,i){"use strict";var o=i("55e7"),n=i.n(o);a["default"]=n.a}});
//# sourceMappingURL=app.8a1da312.js.map