// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import withLazyLoading from "./components/withLazyLoading";
Vue.config.productionTip = false;

/* eslint-disable no-new */
let withLazyLoadingApp = withLazyLoading(App);
new Vue({
  el: "#app",
  components: { withLazyLoadingApp },
  template: "<withLazyLoadingApp/>"
});
