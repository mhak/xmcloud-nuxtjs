<script setup lang="ts">
const props = defineProps({
  rendering: { type: Object, required: true },
  name: { type: String, required: true},
})
console.log("[Placeholder.vue] placeholders", props.rendering?.placeholders);
const components = props.rendering?.placeholders[props.name].map((c:any) => {
    console.log(`resolveComponent('${c.componentName}')`);
    //todo: resolveComponent only works with string literal
    return resolveComponent('Article');
});
// console.log("[Placeholder.vue] components", components);
// var test = "Article";
// const Article = resolveComponent(test);
// console.log("[Placeholder.vue] article", Article);
</script>

<template>
    <component 
        v-for="(component, index) in components" 
        :is="component"
        :key="index"
    />
    <!-- <component 
        :is="'Article'"
    /> -->
</template>