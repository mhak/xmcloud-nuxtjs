<script setup lang="ts">
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';
</script>
<template>
    <section>
        <h2>Nested</h2>
        <div><Placeholder name="nested" :rendering="route" /></div>
    </section>
</template>