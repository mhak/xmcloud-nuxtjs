<script setup lang="ts">
//import { Placeholder, LayoutServiceData } from '@sitecore-jss/sitecore-jss-vue';
import Placeholder from '../sitecore-jss-nuxtjs/Placeholder.vue';

const props = defineProps({
  layoutData: { type: Object, required: true }
})

const { route } = props.layoutData.sitecore;
console.log('[Layout.vue] route', route);
</script>

<template>
  <Head>
      <title>Page title</title>
  </Head>
  Layout
  <!--root placeholder for the app, which we add components to using route data -->
  <header>
      <div id="header"><placeholder name="headless-header" :rendering="route" /></div>
  </header>
  <main>
      <div id="content"><placeholder name="headless-main" :rendering="route" /></div>
  </main>
  <footer>
      <div id="footer"><placeholder name="headless-footer" :rendering="route" /></div>
  </footer>
  <SitecoreContext />
</template>