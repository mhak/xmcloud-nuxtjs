<script setup>
    import { sitecorePagePropsFactory } from '../lib/page-props-factory';
    const route = useRoute();
    const store = useSitecore();

    console.log('[[...path].vue] route', route.params);

    let sitecoreRoutePath = route.params.path
        ? route.params.path.join('/')
        : '/';
    if (!sitecoreRoutePath.startsWith('/')) {
        sitecoreRoutePath = `/${sitecoreRoutePath}`;
    }

    console.log('[[...path].vue]sitecoreRoutePath',sitecoreRoutePath);

    const { data } = await useAsyncData('layoutData', () => sitecorePagePropsFactory.create(sitecoreRoutePath));
    const layoutData = data.value.layoutData;
    console.log('[[...path].vue] layoutData', layoutData);
    
    store.setSitecoreData(layoutData);
    
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
    <Layout :layoutData="layoutData"/>
</template>