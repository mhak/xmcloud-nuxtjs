<script setup lang="ts">
    import { SitecorePageProps } from '../lib/page-props';
    import { sitecorePagePropsFactory } from '../lib/page-props-factory';
    
    const route = useRoute();
    const { $nuxtJss } = useNuxtApp();
    console.log('[[...path].vue] route', route.params);

    let sitecoreRoutePath = route.params.path
        ? route.params.path.join('/')
        : '/';
    if (!sitecoreRoutePath.startsWith('/')) {
        sitecoreRoutePath = `/${sitecoreRoutePath}`;
    }

    const { data } = await useAsyncData<SitecorePageProps>('layoutData', () =>
        sitecorePagePropsFactory.create(sitecoreRoutePath)
    );
    const pageProps = data?.value;
    const notFound = pageProps?.notFound;
    const layoutData = pageProps?.layoutData;
    console.log('[[...path].vue] layoutData', layoutData);
    
    if (layoutData) {
        $nuxtJss.store.setSitecoreData(layoutData);
    }
</script>

<template>
    <NotFound
        v-if="notFound"
    />
    <Layout v-else />
</template>