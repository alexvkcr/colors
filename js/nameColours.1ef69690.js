(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nameColours"],{"350d":function(o,t,e){"use strict";var r=e("9332"),n=e.n(r);t["default"]=n.a},"558e":function(o,t,e){"use strict";e("be70")},"7d0b":function(o,t,e){},"91b4":function(o,t,e){"use strict";e("7d0b")},9332:function(o,t){o.exports=function(o){o.options.__i18n=o.options.__i18n||[],o.options.__i18n.push('{"es":{"clue":"Dame pista"},"en":{"clue":"Gimme clue"}}'),delete o.options._Ctor}},b46a:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"NameColours"}},[e("p",{staticClass:"game-title"},[o._v("1 "+o._s(o.$t("colourName"))+" -> 4 "+o._s(o.$t("options")))]),e("p",{staticClass:"mob-set name",attrs:{id:"name","attr-id":"id"+o.randomColour.codes[0]}},[o._v(o._s(o.randomColour[o.$i18n.locale]))]),e("show-clue",{staticClass:"show-clue",attrs:{"prop-clue":o.randomColour[o.$i18n.locale+"_tip"]}}),e("p",{staticClass:"mob-set color-display",style:{backgroundColor:"#"+o.randomColours[0].codes[0]},attrs:{"attr-id":"id"+o.randomColours[0].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),e("p",{staticClass:"mob-set color-display",style:{backgroundColor:"#"+o.randomColours[1].codes[0]},attrs:{"attr-id":"id"+o.randomColours[1].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),e("p",{staticClass:"mob-set color-display",style:{backgroundColor:"#"+o.randomColours[2].codes[0]},attrs:{"attr-id":"id"+o.randomColours[2].codes[0]},on:{click:function(t){return o.isCorrect(t)}}}),e("p",{staticClass:"mob-set color-display",style:{backgroundColor:"#"+o.randomColours[3].codes[0]},attrs:{"attr-id":"id"+o.randomColours[3].codes[0]},on:{click:function(t){return o.isCorrect(t)}}})],1)},n=[],s=(e("b64b"),e("ba54")),a={name:"NameColours",props:{propColourList:Object},computed:{randomColour:function(){return this.methRandomColour()},randomColours:function(){var o=[this.randomColour];return o.push(this.methRandomColour()),o.push(this.methRandomColour()),o.push(this.methRandomColour()),this.shuffle(o)}},methods:{methRandomColour:function(){var o=function(o){var t=Object.keys(o);return o[t[Math.floor(t.length*Math.random())]]},t=o(this.propColourList);return t["available_in_"+this.$i18n.locale]?t:this.methRandomColour()},shuffle:function(o){for(var t=o.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),r=[o[e],o[t]];o[t]=r[0],o[e]=r[1]}return o},isCorrect:function(){var o=document.querySelector("#name").attributes["attr-id"],t=event.target.attributes["attr-id"];return this.showPopUp(o,t)},showPopUp:function(o,t){o.value==t.value?this.$emit("correct",t.value):this.$emit("fail",{correct:o.value,fail:t.value})}},components:{ShowClue:s["a"]}},i=a,u=(e("558e"),e("2877")),l=e("ed5e"),c=Object(u["a"])(i,r,n,!1,null,"5354a529",null);"function"===typeof l["default"]&&Object(l["default"])(c);t["default"]=c.exports},ba54:function(o,t,e){"use strict";var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"ShowClue"}},[e("button",{staticClass:"myButton",on:{click:o.triggerClue}},[o._v(o._s(o.$t("clue")))]),e("transition",{attrs:{name:"fade",mode:"out-in"}},[o.showClue?e("p",{staticClass:"clue"},[o._v(o._s(o.propClue))]):o._e()])],1)},n=[],s={name:"ShowClue",props:{propClue:String},methods:{triggerClue:function(){var o=this;this.showClue=!0,setTimeout((function(){return o.showClue=!1}),1500)}},data:function(){return{showClue:!1}}},a=s,i=(e("91b4"),e("2877")),u=e("350d"),l=Object(i["a"])(a,r,n,!1,null,"3720186c",null);"function"===typeof u["default"]&&Object(u["default"])(l);t["a"]=l.exports},be70:function(o,t,e){},c6a8:function(o,t){o.exports=function(o){o.options.__i18n=o.options.__i18n||[],o.options.__i18n.push('{"es":{"colourName":"Nombre del color","options":"Opciones"},"en":{"colourName":"Colour name","options":"Options"}}'),delete o.options._Ctor}},ed5e:function(o,t,e){"use strict";var r=e("c6a8"),n=e.n(r);t["default"]=n.a}}]);
//# sourceMappingURL=nameColours.1ef69690.js.map