<script setup lang="ts">
const { $nuxtJss } = useNuxtApp();
</script>

<template>
  <!-- For debugging -->
  <section class="sitecore-context">
    <hr/>
    <strong>Sitecore Context:</strong>
      <pre>{{
        JSON.stringify($nuxtJss.sitecoreContext(), null, 2)
      }}</pre>
      <strong>Route data:</strong>
      <pre>{{
        JSON.stringify($nuxtJss.routeData(), null, 2)
      }}</pre>
    </section>
</template>

<style scoped>
.sitecore-context {
  font-size:.8em;
  color: gray;
}
</style>