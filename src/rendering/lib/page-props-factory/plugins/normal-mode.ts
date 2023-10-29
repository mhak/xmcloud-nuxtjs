import { layoutServiceFactory } from '../../../lib/layout-service-factory';
import { SitecorePageProps } from 'lib/page-props';
import { DictionaryService, LayoutService } from '@sitecore-jss/sitecore-jss-vue';
import { pathExtractor } from 'lib/extract-path';
import { Plugin } from '..';

class NormalModePlugin implements Plugin {
  // private dictionaryServices: Map<string, DictionaryService>;
  private layoutServices: Map<string, LayoutService>;

  order = 1;

  constructor() {
    // this.dictionaryServices = new Map<string, DictionaryService>();
    this.layoutServices = new Map<string, LayoutService>();
  }
  //async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
  async exec(props: SitecorePageProps, path: string) {
    // if (context.preview) return props;

    //Get normalized Sitecore item path
    //const path = pathExtractor.extract(context.params);

    // Use context locale if Next.js i18n is configured, otherwise use default site language
    // props.locale = context.locale ?? props.site.language;

    // Fetch layout data, passing on req/res for SSR
    console.log('[normal-mode.ts] props',props);
    //const layoutService = this.getLayoutService(props.site.name);
    const layoutService = this.getLayoutService('sxastarter'); // todo: remove hardcode
    console.log('[normal-mode.ts] layoutservice', layoutService);
    
    // props.layoutData = await layoutService.fetchLayoutData(
    //   path,
    //   props.locale,
    //   // eslint-disable-next-line prettier/prettier
    //   isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).req : undefined,
    //   isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).res : undefined
    // );
    props.layoutData = await layoutService.fetchLayoutData(
      path,
      'en',
      //props.locale,
    );

    console.log('[normal-mode.ts] props', props);
    if (!props.layoutData.sitecore.route) {
      // A missing route value signifies an invalid path, so set notFound.
      // Our page routes will return this in getStatic/ServerSideProps,
      // which will trigger our custom 404 page with proper 404 status code.
      // You could perform additional logging here to track these if desired.
      props.notFound = true;
    }

    // Fetch dictionary data
    // const dictionaryService = this.getDictionaryService(props.site.name);
    // props.dictionary = await dictionaryService.fetchDictionaryData(props.locale);

    // Initialize links to be inserted on the page
   // props.headLinks = [];
    console.log('normal mode, not found', props.notFound);
    return props;
  }

  // private getDictionaryService(siteName: string): DictionaryService {
  //   if (this.dictionaryServices.has(siteName)) {
  //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //     return this.dictionaryServices.get(siteName)!;
  //   }

  //   const dictionaryService = dictionaryServiceFactory.create(siteName);
  //   this.dictionaryServices.set(siteName, dictionaryService);

  //   return dictionaryService;
  // }

  private getLayoutService(siteName: string): LayoutService {
    if (this.layoutServices.has(siteName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.layoutServices.get(siteName)!;
    }

    const layoutService = layoutServiceFactory.create(siteName);
    this.layoutServices.set(siteName, layoutService);

    return layoutService;
  }
}

export const normalModePlugin = new NormalModePlugin();
