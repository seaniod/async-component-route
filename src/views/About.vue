<template>
  <div class="about">
    <h1>This is an about page</h1>
    <async-article />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import Skeleton from '@/components/skeleton.vue';

  export default {
    components: {
      asyncArticle: defineAsyncComponent({
        loader: async () => {
          await new Promise(r => setTimeout(r, 1000)); // artificial delay to demonstrate loading component
          //alert(window.location.pathname); // = '/about/'
          //return require('@/components/' + this.$route.name + '.vue');
          return require('@/components' + window.location.pathname + '.vue');
        },
        loadingComponent: Skeleton
      })
    }
  };
</script>
