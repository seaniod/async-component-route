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
      return defineAsyncComponent(() =>
        import(`../components/${this.componentPath}.vue`)
      );
    },
  },
  created() {
    console.log(this.$route.params);
    console.log(this.$route.params);
    // this.address = params.pop();
    //this.componentPath = params.join("/");
    this.componentPath = '@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue';
  },
});
</script>
