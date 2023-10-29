import {
  DictionaryPhrases,
  LayoutServiceData,
  SiteInfo,
  HTMLLink,
} from '../packages/sitecore-jss-nuxtjs/src';

/**
 * Sitecore page props
 */
export type SitecorePageProps = {
  site: SiteInfo;
  locale: string;
  dictionary: DictionaryPhrases;
  //componentProps: ComponentPropsCollection;
  notFound: boolean;
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
};
