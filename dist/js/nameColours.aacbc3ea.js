(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nameColours"],{"5b30":function(o,t,r){},b46a:function(o,t,r){"use strict";r.r(t);var e=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{attrs:{id:"NameColours"}},[r("p",{staticClass:"game-title"},[o._v("1 "+o._s(o.$t("colourName"))+" -> 4 "+o._s(o.$t("options")))]),r("p",{staticClass:"mob-set name",attrs:{id:"name","attr-id":"id"+o.randomColour.codes[0]}},[o._v(o._s(o.randomColour[o.$i18n.locale]))]),r("p",{staticClass:"mob-set colorDisplay",style:{backgroundColor:"#"+o.randomColours[0].codes[0]},attrs:{"attr-id":"id"+o.randomColours[0].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),r("p",{staticClass:"mob-set colorDisplay",style:{backgroundColor:"#"+o.randomColours[1].codes[0]},attrs:{"attr-id":"id"+o.randomColours[1].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),r("p",{staticClass:"mob-set colorDisplay",style:{backgroundColor:"#"+o.randomColours[2].codes[0]},attrs:{"attr-id":"id"+o.randomColours[2].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),r("p",{staticClass:"mob-set colorDisplay",style:{backgroundColor:"#"+o.randomColours[3].codes[0]},attrs:{"attr-id":"id"+o.randomColours[3].codes[0]},on:{click:function(t){return o.isCorrect(t)}}})])},s=[],n=(r("b64b"),{name:"NameColours",props:{propColourList:Object},computed:{randomColour:function(){return this.methRandomColour()},randomColours:function(){var o=[this.randomColour];return o.push(this.methRandomColour()),o.push(this.methRandomColour()),o.push(this.methRandomColour()),this.shuffle(o)}},methods:{methRandomColour:function(){var o=function(o){var t=Object.keys(o);return o[t[Math.floor(t.length*Math.random())]]},t=o(this.propColourList);return t["available_in_"+this.$i18n.locale]?t:this.methRandomColour()},shuffle:function(o){for(var t=o.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),e=[o[r],o[t]];o[t]=e[0],o[r]=e[1]}return o},isCorrect:function(){var o=document.querySelector("#name").attributes["attr-id"],t=event.target.attributes["attr-id"];return this.showPopUp(o,t)},showPopUp:function(o,t){o.value==t.value?this.$emit("correct",t.value):this.$emit("fail",{correct:o.value,fail:t.value})}}}),a=n,i=(r("c391"),r("2877")),l=r("ed5e"),u=Object(i["a"])(a,e,s,!1,null,"aeee2f46",null);"function"===typeof l["default"]&&Object(l["default"])(u);t["default"]=u.exports},c391:function(o,t,r){"use strict";var e=r("5b30"),s=r.n(e);s.a},e2bb:function(o,t){o.exports=function(o){o.options.__i18n=o.options.__i18n||[],o.options.__i18n.push('{"es":{"colourName":"Nombre del color","options":"Opciones"},"en":{"colourName":"Colour name","options":"Options"}}'),delete o.options._Ctor}},ed5e:function(o,t,r){"use strict";var e=r("e2bb"),s=r.n(e);t["default"]=s.a}}]);
//# sourceMappingURL=nameColours.aacbc3ea.js.map