import { SitecoreJssPlaceholderPlugin } from '@sitecore-jss/sitecore-jss-vue';
import componentFactory from '../temp/componentFactory';

export default defineNuxtPlugin(nuxtApp => {
  const app = useNuxtApp().vueApp;
  app.use(SitecoreJssPlaceholderPlugin, { componentFactory });
})