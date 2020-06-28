const _vue = _interopRequireDefault(require('vue')); const _App = _interopRequireDefault(require('./App.vue')); require('./registerServiceWorker'); const _router = _interopRequireDefault(require('./router')); const _store = _interopRequireDefault(require('./store')); const _vuetify = _interopRequireDefault(require('./plugins/vuetify'));

function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }_vue.default.config.productionTip = !1, new _vue.default({
  router: _router.default, store: _store.default, vuetify: _vuetify.default, render(e) { return e(_App.default); },
}).$mount('#app');
