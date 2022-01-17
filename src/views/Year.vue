<template>
  <h1>Year page for {{ $route.params.year }}</h1>
  <div id="secondary-nav">
    <router-link :to="'/' + $route.params.year + '/About'">About</router-link> |
    <router-link :to="'/' + $route.params.year + '/People'">People</router-link> |
    <router-link :to="'/' + $route.params.year + '/Program'">Program</router-link>
  </div>
  <h2>Secondary nav selection: {{ $route.name }}</h2>
  <component :is="secondaryContent"  />
  <!--v-if="$route.name !== 'Year'"-->
</template>

<script>
  // https://stackoverflow.com/questions/68485237/dynamically-import-vue-component-based-on-url-params
  import { defineComponent, defineAsyncComponent } from 'vue';
  import Skeleton from '@/components/skeleton.vue';
  export default defineComponent({
    name: "Year1",
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
      this.componentPath = '@/components/' + this.$route.params.year + '/' + this.$route.name + '.vue';
      console.log('created:' + this.componentPath);
    }
  });
</script>
