<template>
  <div>
    <component :is="componentFile" />
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "BaseObject",
  data() {
    return {
      componentPath: "",
      address: "",
    };
  },
  methods: {},
  computed: {
    componentFile() {
      console.log(this.componentPath);
      return defineAsyncComponent(() =>
        import(`../components/${this.componentPath}.vue`)
      );
    },
  },
  created() {
    this.componentPath = this.$route.name;
    console.log(this.componentPath);
  },
  watch: {
    $route() {
      this.componentPath = this.$route.name;
      console.log(this.componentPath);
    }
  }
});
</script>
