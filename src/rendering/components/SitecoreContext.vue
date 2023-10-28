<script setup lang="ts">
const store = useSitecore();
</script>

<template>
  <em>sitecore context</em>
  <pre>{{
      JSON.stringify(store.sitecoreContext, null, 2)
    }}</pre>
    <pre>{{
      JSON.stringify(store.routeData, null, 2)
    }}</pre>
</template>