const store = {
  // default state
  state: {
    sitecoreContext: {
      pageEditing: false,
    },
    routeData: null,
  },
  setSitecoreData(sitecoreData:any) {
    const route = sitecoreData.sitecore && sitecoreData.sitecore.route;
    const context = (sitecoreData.sitecore && sitecoreData.sitecore.context) || {};

    // Do not replace the original state object - the store and any components that use the store
    // need to share a reference to the same object in order for mutations to be observed.
    this.state.routeData = route;
    this.state.sitecoreContext = {
      ...context,
      routeName: route && route.name,
      itemId: route && route.itemId,
    };
  },
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nuxtJss: {
        store,
        sitecoreContext() {
          // this is intended only as a convenience function for easier access to the current context.
          return store.state.sitecoreContext;
        },
        routeData() {
          // this is intended only as a convenience function for easier access to the current routeData.
          return store.state.routeData;
        },
      }
    }
  }
});