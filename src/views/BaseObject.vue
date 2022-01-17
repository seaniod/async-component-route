<template>
  <div>
    <component :is="componentFile" />
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";

// Solution based on:
// https://stackoverflow.com/questions/68485237/
// https://codesandbox.io/s/dynamically-import-vue-component-based-on-url-params-3bzkn
export default defineComponent({
  name: "BaseObject",
  data() {
    return {componentPath: ""};
  },
  computed: {
    componentFile() {
      console.log(this.componentPath);
      return defineAsyncComponent(() =>
        import(`../components/${this.componentPath}.vue`)
      );
    }
  },
  watch: {
    $route() {
      this.componentPath = this.$route.name;
      console.log(this.componentPath);
    }
  },
  created() {
    this.componentPath = this.$route.name;
    console.log(this.componentPath);
  }
});
</script>
