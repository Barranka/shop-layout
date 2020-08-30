import Vue from 'vue'
import App from './App.vue'

import router from './routers'
import store from './store';


// plugins
import VueMask from 'v-mask'
Vue.use(VueMask)

import elementUI from './element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  elementUI,
  render: h => h(App),
}).$mount('#app')

import './assets/scss/main.scss'