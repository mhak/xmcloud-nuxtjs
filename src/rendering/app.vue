<script setup lang="ts">
import { SitecoreJssPlaceholderPlugin } from '@sitecore-jss/sitecore-jss-vue';
import componentFactory from './temp/componentFactory';
import { layoutServiceFactory } from './lib/layout-service-factory';
const app = useNuxtApp().vueApp;
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

app.use(SitecoreJssPlaceholderPlugin, { componentFactory });
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>