(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["play"],{"14d0":function(e,t,o){"use strict";var r=o("9ff5"),c=o.n(r);c.a},"26b9":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"exclamationStart":"¡","youHave":"Racha de","correctAnswers":"aciertos | acierto | aciertos"},"en":{"exclamationStart":" ","youHave":" ","correctAnswers":"Correct answers streak | Correct answer streak | Correct answers streak"}}'),delete e.options._Ctor}},3555:function(e,t,o){"use strict";var r=o("26b9"),c=o.n(r);t["default"]=c.a},4630:function(e,t,o){"use strict";var r=o("5fcf"),c=o.n(r);c.a},"5fcf":function(e,t,o){},"6f0c":function(e,t,o){"use strict";var r=o("b725"),c=o.n(r);t["default"]=c.a},"6f29":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Play"}},[o("change-game",{on:{change:e.changeComp}}),o("counter",{staticClass:"counter",attrs:{"prop-correct-answers":e.correctAnswers}}),e.compName?o("name-colours",{staticClass:"game-itself",attrs:{"prop-colour-list":e.propColourList},on:{correct:e.correctNC,fail:e.failNC}}):e._e(),e.compColour?o("colour-names",{staticClass:"game-itself",attrs:{"prop-colour-list":e.propColourList},on:{correct:e.correctCN,fail:e.failCN}}):e._e()],1)},c=[],n=(o("d3b7"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Counter"}},[e._v(" "+e._s(e.$t("exclamationStart"))+e._s(e.$t("youHave"))+" "+e._s(e.$tc("correctAnswers",e.propCorrectAnswers))+" "+e._s(e.propCorrectAnswers)+"! ")])}),a=[],s=(o("a9e3"),{name:"Counter",props:{propCorrectAnswers:Number}}),i=s,u=(o("4630"),o("2877")),l=o("3555"),m=Object(u["a"])(i,n,a,!1,null,"186f49c7",null);"function"===typeof l["default"]&&Object(l["default"])(m);var f=m.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"ChangeGame"}},[o("span",[e._v(e._s(e.$t("exclamationStart"))+e._s(e.$t("changeGame")))]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.gameSelected,expression:"gameSelected"}],staticClass:"select-game",on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.gameSelected=t.target.multiple?o:o[0]},function(t){return e.changeComp(t)}]}},[o("option",{attrs:{value:"NameCs"}},[e._v(e._s(e.$t("NameCs")))]),o("option",{attrs:{value:"ColourNs"}},[e._v(e._s(e.$t("ColourNs")))])])])},d=[],C={name:"ChangeGame",methods:{changeComp:function(e){this.$emit("change",e.target.value)}},data:function(){return{gameSelected:"ColourNs"}}},h=C,N=(o("eb56"),o("6f0c")),v=Object(u["a"])(h,p,d,!1,null,"340aa519",null);"function"===typeof N["default"]&&Object(N["default"])(v);var _=v.exports,g={name:"Play",props:{propColourList:Object},data:function(){return{gameSelected:"ColourNs",compName:!1,compColour:!0,componentKeyNC:0,componentKeyCN:0,correctAnswers:0}},methods:{changeComp:function(e){"NameCs"==e?(this.gameSelected,this.compColour=!1,this.compName=!0):(this.gameSelected,this.compName=!1,this.compColour=!0)},forceRerenderNC:function(){var e=this;this.compName=!1,this.$nextTick((function(){e.compName=!0}))},forceRerenderCN:function(){var e=this;this.compColour=!1,this.$nextTick((function(){e.compColour=!0}))},correctNC:function(e){var t=this;this.correctAnswers=this.correctAnswers+1;var o=document.querySelectorAll("#NameColours p[attr-id=".concat(e,"]"))[1];o.classList.add("correct"),setTimeout((function(){return t.forceRerenderNC()}),1500)},correctCN:function(e){var t=this;this.correctAnswers=this.correctAnswers+1;var o=document.querySelectorAll("#ColourNames p[attr-id=".concat(e,"]"))[1];o.classList.add("correct"),setTimeout((function(){return t.forceRerenderCN()}),1500)},failNC:function(e){var t=this,o=e.correct,r=e.fail,c=document.querySelectorAll("#NameColours p[attr-id=".concat(o,"]"))[1],n=document.querySelector("#NameColours p[attr-id=".concat(r,"]"));c.classList.add("correct"),n.classList.add("fail"),this.correctAnswers=0,setTimeout((function(){return t.forceRerenderNC()}),1500)},failCN:function(e){var t=this,o=e.correct,r=e.fail,c=document.querySelectorAll("#ColourNames p[attr-id=".concat(o,"]"))[1],n=document.querySelector("#ColourNames p[attr-id=".concat(r,"]"));c.classList.add("correct"),n.classList.add("fail"),this.correctAnswers=0,setTimeout((function(){return t.forceRerenderCN()}),1500)}},components:{Counter:f,ChangeGame:_,colourNames:function(){return o.e("colourNames").then(o.bind(null,"15cb"))},nameColours:function(){return o.e("nameColours").then(o.bind(null,"b46a"))}}},w=g,b=(o("14d0"),Object(u["a"])(w,r,c,!1,null,"cc3da016",null));t["default"]=b.exports},"9ff5":function(e,t,o){},b725:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"es":{"exclamationStart":"¡","changeGame":"Cambia de juego!","NameCs":"Escoge el color","ColourNs":"Escoge nombre del color"},"en":{"exclamationStart":" ","changeGame":"Change the game!","NameCs":"Pick the color","ColourNs":"Pick colour\'s name"}}'),delete e.options._Ctor}},c826:function(e,t,o){},eb56:function(e,t,o){"use strict";var r=o("c826"),c=o.n(r);c.a}}]);
//# sourceMappingURL=play.2f4f502e.js.map