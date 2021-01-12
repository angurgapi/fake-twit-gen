exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1fde8e9a", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1581da32", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Form.vue?vue&type=template&id=3bbaa86c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-data"},[_vm._ssrNode("<form><label>Author</label> <input type=\"textarea\" class=\"form-author\"> <label>Login</label> <input type=\"textarea\" class=\"form-login\"> <label>Twit text</label> <input type=\"textarea\" maxlength=\"280\" class=\"form-body\"> <label>Userpic url</label> <input type=\"textarea\" class=\"form-userpic\"> <div class=\"form-timedate\"><label>Time</label> <input type=\"textarea\" class=\"form-time\"> <label>Date</label> <input type=\"textarea\" class=\"form-date\"></div> <label>Version</label> <input type=\"textarea\" class=\"form-version\"></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Form.vue?vue&type=template&id=3bbaa86c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Formvue_type_script_lang_js_ = ({
  mounted() {
    this.processInputs();
  },

  methods: {
    processInputs() {
      this.$refs.author.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formAuthor));
      this.$refs.login.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formLogin));
      this.$refs.twitText.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formText));
      this.$refs.time.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formTime));
      this.$refs.date.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formDate));
      this.$refs.version.addEventListener('input', e => this.updateText(e, this.$parent.$refs.formVersion));
      this.$refs.userpic.addEventListener('input', e => this.updatePic(e));
    },

    updateText(e, domchild) {
      domchild.textContent = e.target.value;
    },

    updatePic(e) {
      let inputUrl = e.target.value;
      this.$parent.$refs.formPic.src = `${inputUrl}`;
    }

  }
});
// CONCATENATED MODULE: ./components/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Form.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "60107154"
  
)

/* harmony default export */ var Form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(26).default})


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_98b9399c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_98b9399c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_98b9399c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_98b9399c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_98b9399c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-header[data-v-98b9399c]{font-size:32px;text-align:center}.twit-wrapper[data-v-98b9399c]{margin-top:30px;width:600px;justify-content:center;align-items:center;border:5px dashed rgba(0,0,0,.2)}.twit[data-v-98b9399c],.twit-wrapper[data-v-98b9399c]{display:flex;flex-direction:column}.twit[data-v-98b9399c]{margin:20px;padding:10px;width:100%;min-width:350px}@media(max-device-width:500px){.twit-wrapper[data-v-98b9399c]{width:90%}}.twit__head[data-v-98b9399c]{display:flex;flex-direction:row;align-items:center;justify-content:center}.userpic[data-v-98b9399c]{display:flex;height:49px;width:49px;border-radius:50%}.nickname[data-v-98b9399c]{margin-left:5px;width:100%;height:100%}.name[data-v-98b9399c]{font-weight:700}.login[data-v-98b9399c]{color:#657786}.twit-content[data-v-98b9399c]{font-weight:400;font-size:23px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-data{margin-top:15px;width:60%;max-width:600px;min-width:350px;display:flex;flex-direction:column;justify-content:center;align-items:center}input{width:100%;height:36px;border-radius:10px}.form-timedate{width:100%;display:flex;flex-direction:row;align-items:center}.form-timedate,.twit-text{margin-top:20px}.time-date ul{display:flex;flex-direction:row;list-style:none;padding-left:0;border-bottom:0 solid #000}.time-date ul li{margin-right:4px}.date,.time{color:#657786}.version{color:#1b95e0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=98b9399c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_vm._ssrNode("<h2 class=\"page-header\" data-v-98b9399c>WRITE, TAKE A SCREENSHOT &amp; CROP</h2> <div class=\"twit-wrapper\" data-v-98b9399c><div class=\"twit\" data-v-98b9399c><div class=\"twit__head\" data-v-98b9399c><div class=\"userpic\" data-v-98b9399c><img src=\"https://icdn.lenta.ru/images/2019/12/06/10/20191206104306174/pwa_vertical_1280_4c9fd519bc66e04b4a6eb24307a025ad.jpg\" class=\"userpic\" data-v-98b9399c></div> <div class=\"nickname\" data-v-98b9399c><div class=\"name\" data-v-98b9399c>Elon Musk</div> <div class=\"login\" data-v-98b9399c>@elonmusk</div></div></div> <div class=\"twit-text\" data-v-98b9399c><span class=\"twit-content\" data-v-98b9399c>Hehehe welcome to my twitter</span></div> <div class=\"time-date\" data-v-98b9399c><ul data-v-98b9399c><li class=\"time\" data-v-98b9399c>12:01 AM</li> <li data-v-98b9399c>·</li> <li class=\"date\" data-v-98b9399c>Jul 21, 2020</li> <li data-v-98b9399c>·</li> <li class=\"version\" data-v-98b9399c>Twitter for Android</li></ul></div></div></div> "),_c('Form')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=98b9399c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "98b9399c",
  "ad6f6d40"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map