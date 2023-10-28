<script setup lang="ts">
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';

const props = defineProps({
  layoutData: { type: Object, required: true }
})

const { route } = props.layoutData.sitecore;
console.log('[Layout.vue] route', route);

const title = route?.fields?.Title?.value || '';
</script>

<template>
  <Head>
      <title>{{ title }}</title>
  </Head>
  <!--root placeholder for the app, which we add components to using route data -->
  <header>
      <div id="header"><Placeholder name="headless-header" :rendering="route" /></div>
  </header>
  <main>
      <div id="content"><Placeholder name="headless-main" :rendering="route" /></div>
  </main>
  <footer>
      <div id="footer"><Placeholder name="headless-footer" :rendering="route" /></div>
  </footer>
  <SitecoreContext />
</template>