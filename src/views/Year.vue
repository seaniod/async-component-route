<template>
  <component :is="secondaryContent"  />
</template>

<script>
  // https://stackoverflow.com/questions/68485237/dynamically-import-vue-component-based-on-url-params
  import { defineComponent, defineAsyncComponent } from 'vue';
  import Skeleton from '@/components/skeleton.vue';
  export default defineComponent({
    name: "Year",
    data() {
      return { componentPath: '@/components/2021/About.vue' };
    },
    computed: {
      secondaryContent() {
        console.log('computed:' + this.componentPath);
        return defineAsyncComponent(() => require(`${this.componentPath}`));
      }
    },
    created() {
      console.log('page:' + this.$route.params.page);
      this.componentPath = '@/components' + this.$route.path + '.vue';
      console.log('created:' + this.componentPath);
    }
  });
</script>
