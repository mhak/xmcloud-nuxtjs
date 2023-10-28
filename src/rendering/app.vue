<script setup lang="ts">
import { layoutServiceFactory } from './lib/layout-service-factory';
// const route = useRoute();
// const store = useSitecore();

// console.log('route',route.params);

// let sitecoreRoutePath = route.params.path
//     ? route.params.path.join('/')
//     : '/';
// if (!sitecoreRoutePath.startsWith('/')) {
//   sitecoreRoutePath = `/${sitecoreRoutePath}`;
// }
// console.log('sitecoreRoutePath',sitecoreRoutePath);
// // instantiate layout service
// const layoutServiceInstance = layoutServiceFactory.create('sxastarter');
// console.log('layoutServiceInstance:',layoutServiceInstance);
// const { data }  = await useAsyncData('layoutData', () => layoutServiceInstance.fetchLayoutData(sitecoreRoutePath, "en"));
// console.log('layoutData', data.value);
// store.setSitecoreData(data.value);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>