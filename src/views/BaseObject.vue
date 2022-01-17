<template>
  <div>
    <component :is="componentFile" />
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";

// https://stackoverflow.com/questions/68485237/dynamically-import-vue-component-based-on-url-params
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
    // this.address = params.pop();
    //this.componentPath = params.join("/");
    this.componentPath = '@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue';
  },
  watch: {
    '$route': function(to, from) {
      console.log(this.$route.params.year);
      console.log(this.$route.name);
      //this.componentPath = '@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue';
      //this.componentFile = () =>
        //require(`../components/${this.componentPath}.vue`);
    }
  }
});
</script>
