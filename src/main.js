import Vue from 'vue'
import App from './App.vue'
import TopNavbar from "./layout/dashboard/TopNavbar"
import Sidebar from "./layout/dashboard/Sidebar"
import Content from "./layout/dashboard/Content"
import style from './components/style.css'
import Layout from "./layout/dashboard/Layout"

Vue.component(Content);
Vue.component(TopNavbar);
Vue.component(Sidebar);
Vue.component(style);
Vue.component(Layout);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
