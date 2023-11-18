import { SitecorePageProps } from '@/lib/page-props';
import { getSiteRewriteData } from '@sitecore-jss/sitecore-jss/site';
import { Plugin } from '..';
import { siteResolver } from '@/lib/site-resolver';
import config from '@/temp/config';

class SitePlugin implements Plugin {
  order = 0;

  async exec(props: SitecorePageProps, path: string) {
    // Get site name (from path)
    const siteData = getSiteRewriteData(path, config.jssAppName);

    // Resolve site by name
    props.site = siteResolver.getByName(siteData.siteName);
    return props;
  }
}

export const sitePlugin = new SitePlugin();
