import { defineStore } from 'pinia';

// Default state
interface SitecoreState {
  sitecoreContext: {
    pageEditing: boolean;
    routeName?: string;
    itemId?: string;
  };
  routeData: any | null; // Replace `any` with the actual type of route data if known
}

export const useSitecore = defineStore({
  id: 'sitecore',
  state: ():SitecoreState => ({
    sitecoreContext: {
      pageEditing: false,
    },
    routeData: null,
  }),
  actions: {
    setSitecoreData(sitecoreData: any) {
      const route = sitecoreData.sitecore && sitecoreData.sitecore.route;
      const context = (sitecoreData.sitecore && sitecoreData.sitecore.context) || {};

      this.routeData = route;
      this.sitecoreContext = {
        ...context,
        routeName: route && route.name,
        itemId: route && route.itemId,
      };
    },
  },
});

// todo: remove
export const useCounter = () => useState('counter', () => 0);