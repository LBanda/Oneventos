import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { FormFilePlugin } from 'bootstrap-vue';
import { BFormFile } from 'bootstrap-vue';
import VCalendar from 'v-calendar';
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import { setupCalendar } from 'v-calendar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Register components in your 'main.js'
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
setupCalendar({
  componentPrefix: 'vc',
});


Vue.component('b-form-file', BFormFile)
Vue.config.productionTip = false;
Vue.use(FormFilePlugin)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
