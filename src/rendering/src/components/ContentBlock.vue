<script setup lang="ts">
import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-vue';

export interface ContentBlockProps {
  Title?: Field<string>,
  Content?: Field<string>,
}

defineProps<{
  fields?: ContentBlockProps
  params?: Object
  rendering?: Object
}>();
</script>

<template>
  <div class="contentBlock">
    <h2>ContentBlock</h2>
    <Text tag="h2" class="contentTitle" :field="fields?.Title" />
    <RichText class="contentDescription" :field="fields?.Content" />
  </div>
</template>
