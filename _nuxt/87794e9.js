(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("36804457",content,!0,{sourceMap:!1})},195:function(t,e,r){var content=r(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("1581da32",content,!0,{sourceMap:!1})},196:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){this.processInputs()},methods:{processInputs:function(){var t=this;this.$refs.author.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formAuthor)})),this.$refs.login.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formLogin)})),this.$refs.twitText.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formText)})),this.$refs.time.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formTime)})),this.$refs.date.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formDate)})),this.$refs.version.addEventListener("input",(function(e){return t.updateText(e,t.$parent.$refs.formVersion)})),this.$refs.userpic.addEventListener("input",(function(e){return t.updatePic(e)}))},updateText:function(t,e){e.textContent=t.target.value},updatePic:function(t){var e=t.target.value;this.$parent.$refs.formPic.src="".concat(e)}}},o=(r(199),r(32)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-data"},[r("form",[r("label",[t._v("Author")]),t._v(" "),r("input",{ref:"author",staticClass:"form-author",attrs:{type:"textarea"}}),t._v(" "),r("label",[t._v("Login")]),t._v(" "),r("input",{ref:"login",staticClass:"form-login",attrs:{type:"textarea"}}),t._v(" "),r("label",[t._v("Twit text")]),t._v(" "),r("textarea",{ref:"twitText",staticClass:"form-body",attrs:{maxlength:"280"}}),t._v(" "),r("label",[t._v("Userpic url")]),t._v(" "),r("input",{ref:"userpic",staticClass:"form-userpic",attrs:{type:"textarea"}}),t._v(" "),r("label",[t._v("Time")]),t._v(" "),r("input",{ref:"time",staticClass:"form-time",attrs:{type:"textarea"}}),t._v(" "),r("label",[t._v("Date")]),t._v(" "),r("input",{ref:"date",staticClass:"form-date",attrs:{type:"textarea"}}),t._v(" "),r("label",[t._v("Version")]),t._v(" "),r("input",{ref:"version",staticClass:"form-version",attrs:{type:"textarea"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:r(196).default})},197:function(t,e,r){"use strict";r(194)},198:function(t,e,r){(e=r(65)(!1)).push([t.i,".page-header[data-v-371affb0]{font-size:32px;text-align:center}.twit-wrapper[data-v-371affb0]{margin-top:30px;width:600px;justify-content:center;align-items:center}.twit[data-v-371affb0],.twit-wrapper[data-v-371affb0]{display:flex;flex-direction:column}.twit[data-v-371affb0]{margin:20px;padding:10px;width:100%;min-width:350px}@media(max-device-width:500px){.twit-wrapper[data-v-371affb0]{width:90%}}.twit__head[data-v-371affb0]{display:flex;flex-direction:row;align-items:center;justify-content:center}.userpic[data-v-371affb0]{display:flex;height:49px;width:49px;border-radius:50%}.nickname[data-v-371affb0]{margin-left:5px;width:100%;height:100%}.name[data-v-371affb0]{font-weight:700}.login[data-v-371affb0]{color:#657786}.twit-content[data-v-371affb0]{font-weight:400;font-size:23px}.twit-text[data-v-371affb0]{margin-top:10px}",""]),t.exports=e},199:function(t,e,r){"use strict";r(195)},200:function(t,e,r){(e=r(65)(!1)).push([t.i,".user-data{margin-top:15px;width:60%;max-width:600px;min-width:350px;display:flex;flex-direction:column;justify-content:center;align-items:center}label{margin-top:20px}input{height:36px}.form-body,input{width:100%;border-radius:10px}.form-body{height:60px}.twit-text{margin-top:20px}.time-date ul{display:flex;flex-direction:row;list-style:none;padding-left:0;border-bottom:0 solid #000}.time-date ul li{margin-right:4px}.date,.time{color:#657786}.version{color:#1b95e0}",""]),t.exports=e},201:function(t,e,r){"use strict";r.r(e);var n={},o=(r(197),r(32)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper"},[r("h2",{staticClass:"page-header"},[t._v("WRITE, TAKE A SCREENSHOT & CROP")]),t._v(" "),r("div",{staticClass:"twit-wrapper"},[r("div",{staticClass:"twit"},[r("div",{staticClass:"twit__head"},[r("div",{staticClass:"userpic"},[r("img",{ref:"formPic",staticClass:"userpic",attrs:{src:"https://icdn.lenta.ru/images/2019/12/06/10/20191206104306174/pwa_vertical_1280_4c9fd519bc66e04b4a6eb24307a025ad.jpg"}})]),t._v(" "),r("div",{staticClass:"nickname"},[r("div",{ref:"formAuthor",staticClass:"name"},[t._v("Elon Musk")]),t._v(" "),r("div",{ref:"formLogin",staticClass:"login"},[t._v("@elonmusk")])])]),t._v(" "),r("div",{staticClass:"twit-text"},[r("span",{ref:"formText",staticClass:"twit-content"},[t._v("Hehehe welcome to my twitter")])]),t._v(" "),r("div",{staticClass:"time-date"},[r("ul",[r("li",{ref:"formTime",staticClass:"time"},[t._v("12:01 AM")]),t._v(" "),r("li",[t._v("·")]),t._v(" "),r("li",{ref:"formDate",staticClass:"date"},[t._v("Jul 21, 2020")]),t._v(" "),r("li",[t._v("·")]),t._v(" "),r("li",{ref:"formVersion",staticClass:"version"},[t._v("Twitter for Android")])])])])]),t._v(" "),r("Form")],1)}),[],!1,null,"371affb0",null);e.default=component.exports;installComponents(component,{Form:r(196).default})}}]);