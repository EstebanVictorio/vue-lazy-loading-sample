import Vue from "vue";

const withLazyLoading = component =>
  Vue.component("withLazyLoading", {
    data() {
      return {
        isLoading: false
      };
    },
    create() {
      console.log("Created");
    },
    mounted() {
      console.log("Mounted");
      this.isLoading = true;
      setTimeout(() => (this.isLoading = false), 5000);
    },
    render(h) {
      return h(component, {
        props: {
          loading: this.isLoading
        }
      });
    }
  });

export default withLazyLoading;
