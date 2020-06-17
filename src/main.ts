import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueApexCharts from "vue-apexcharts";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
