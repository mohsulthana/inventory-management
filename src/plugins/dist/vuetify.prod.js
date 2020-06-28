Object.defineProperty(exports, '__esModule', { value: !0 }), exports.default = void 0; const _vue = _interopRequireDefault(require('vue')); const _lib = _interopRequireDefault(require('vuetify/lib'));

function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }_vue.default.use(_lib.default); const _default = new _lib.default({
  theme: {
    themes: {
      primary: '#800000', secondary: '#424242', accent: '#82B1FF', error: '#FF5252', info: '#2196F3', success: '#4CAF50', warning: '#FFC107',
    },
  },
}); exports.default = _default;
