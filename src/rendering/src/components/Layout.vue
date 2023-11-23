<script setup lang="ts">
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';
const { $nuxtJss } = useNuxtApp();
const route  = $nuxtJss.routeData();
console.log('layout routeData', route);
const title = route?.fields?.Title?.value || '';
</script>

<template>
  <Head>
      <title>{{ title }}</title>
  </Head>
  <!--root placeholder for the app, which we add components to using route data -->
  <header>
    <Navigation />
    <div id="header"><Placeholder name="headless-header" :rendering="route" :fields="route.fields" /></div>
  </header>
  <main>
      <div id="content"><Placeholder name="headless-main" :rendering="route" :fields="route.fields"/></div>
  </main>
  <footer>
      <div id="footer"><Placeholder name="headless-footer" :rendering="route" :fields="route.fields" /></div>
  </footer>
  <SitecoreContext />
</template>