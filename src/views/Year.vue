<template>
    <h1>Year page for {{ $route.params.year }}</h1>
    <div id="secondary-nav">
      <router-link :to="'/' + $route.params.year + '/About'">About</router-link> |
      <router-link :to="'/' + $route.params.year + '/People'">People</router-link> |
      <router-link :to="'/' + $route.params.year + '/Program'">Program</router-link>
    </div>
    <h2>Secondary nav selection: {{ $route.name }}</h2>
    <secondary-content v-if="$route.name !== 'Year'" />
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import Skeleton from '@/components/skeleton.vue';

  let thisRoute;
  export default {
    created: function () {
        //self = this;
        thisRoute = this.$route;
    },
    components: {
      secondaryContent: defineAsyncComponent({
        loader: async () => {
          await new Promise(r => setTimeout(r, 1000));
          return import('@/components/' + thisRoute.params.year + '/' + thisRoute.name + '.vue');
        },
        loadingComponent: Skeleton
      }),
    }
  };
</script>
