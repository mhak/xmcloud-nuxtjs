<script setup>
    
    //import { SitecorePageProps } from '../lib/page-props';
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

    const { data } = await useAsyncData('layoutData', () => sitecorePagePropsFactory.create(sitecoreRoutePath));
    const pageProps = data.value;
    const notFound = pageProps?.notFound;
    const layoutData = pageProps?.layoutData;
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
    <NotFound
        v-if="notFound"
    />
    <Layout v-else :layoutData="layoutData"/>
</template>