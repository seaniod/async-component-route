<template>
    <h1>Year page: {{ $route.params.year }}</h1>
    <div id="secondary-nav">
      <router-link :to="'/' + $route.params.year + '/About'">About</router-link> |
      <router-link :to="'/' + $route.params.year + '/People'">People</router-link>
    </div>
    <h2>Secondary nav selection: {{ $route.name }}</h2>
    <secondary-content v-if="$route.name !== 'Year'" />
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import Skeleton from '@/components/skeleton.vue';

  // ANSWER MAY BE: https://github.com/vuejs/vue/issues/9788

  // BO SUGGESTS: TRY SWITCHING TO SYNNC/not-ASYNC component

  // https://stackoverflow.com/questions/49417410/how-to-save-reference-to-this-in-vue-component
  let thisRoute;
  export default {
    created: function () {
        //self = this;
        thisRoute = this.$route;
    },
    components: {
      secondaryContent: defineAsyncComponent({
        loader: async () => {
          await new Promise(r => setTimeout(r, 1000)); // artificial delay to demonstrate loading component
          //alert(window.location.pathname); // = '/about/'
          //return require('@/components/' + this.$route.name + '.vue');
          // THIS IS THE FIX:
          //alert(window.location.pathname);
          try {
            alert('name: ' + thisRoute.name + ', year: ' + thisRoute.params.year);
            //return require('@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue');
          } catch(error) {
            alert('nope! ' + error);
          }
          //return require('@/components' + window.location.pathname + '.vue');
          //return require('@/components/' + self.$route.params.year + '/' + self.$route.name + '.vue');
          //let path = '@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue';
          //alert('path: ' + path);
          //return require('@/components' + window.location.pathname + '.vue');
          return import('@/components/' + thisRoute.params.year + '/' + thisRoute.name + '.vue');
          //return require('@/components/' + thisRoute.params.year + '/' + thisRoute.name + '.vue');
          //return require('@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue');
        },
        loadingComponent: Skeleton
      }),
    }
  };
</script>
