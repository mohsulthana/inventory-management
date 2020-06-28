const _vue = _interopRequireDefault(require('vue'));

const _App = _interopRequireDefault(require('./App.vue'));

require('./registerServiceWorker');

const _router = _interopRequireDefault(require('./router'));

const _store = _interopRequireDefault(require('./store'));

const _vuetify = _interopRequireDefault(require('./plugins/vuetify'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.config.productionTip = false;
new _vue.default({
  router: _router.default,
  store: _store.default,
  vuetify: _vuetify.default,
  render: function render(h) {
    return h(_App.default);
  },
}).$mount('#app');
