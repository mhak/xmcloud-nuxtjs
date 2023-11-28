<script setup lang="ts">
import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-vue';

export interface TestFields {
    Text?: Field<string>
}

const props = defineProps<{
  fields?: Object
  params?: Object
  rendering?: any
}>();

var testFields = props.rendering?.fields as TestFields;
</script>

<template>
    <section>
        <h2>Test</h2>
        <RichText class="contentDescription" :field="testFields.Text" />
    </section>
</template>