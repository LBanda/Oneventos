import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { FormFilePlugin } from "bootstrap-vue";
import { BFormFile } from "bootstrap-vue";
import { BCalendar } from "bootstrap-vue";
import { CalendarPlugin } from "bootstrap-vue";
import { TablePlugin } from "bootstrap-vue";
import { BTable } from "bootstrap-vue";
import { BFormDatepicker } from 'bootstrap-vue'
import { FormDatepickerPlugin } from 'bootstrap-vue'
import Vuex from 'vuex'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex)
Vue.use(FormDatepickerPlugin)
Vue.component('b-form-datepicker', BFormDatepicker)
Vue.component('b-table', BTable)
Vue.use(TablePlugin)
Vue.use(CalendarPlugin)
Vue.component('b-calendar', BCalendar)
Vue.component('b-form-file', BFormFile)

Vue.config.productionTip = false;

Vue.use(FormFilePlugin)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
