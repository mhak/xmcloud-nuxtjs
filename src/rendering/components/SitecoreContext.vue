<script setup lang="ts">
const store = useSitecore();
const counter = useCounter();
</script>

<template>
  <pre>{{
      JSON.stringify(store.sitecoreContext, null, 2)
    }}</pre>
    <pre>{{
      JSON.stringify(store.routeData, null, 2)
    }}</pre>
</template>