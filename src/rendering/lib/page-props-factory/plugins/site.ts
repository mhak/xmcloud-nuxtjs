import { SitecorePageProps } from 'lib/page-props';
//import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { getSiteRewriteData } from '@sitecore-jss/sitecore-jss/site';
import { Plugin } from '..';
import { siteResolver } from '../../site-resolver';
import config from '../../../temp/config';

class SitePlugin implements Plugin {
  order = 0;

  async exec(props: SitecorePageProps, path: string) {
    //f (context.preview) return props;

    // const path =
    //   context.params === undefined
    //     ? '/'
    //     : Array.isArray(context.params.path)
    //     ? context.params.path.join('/')
    //     : context.params.path ?? '/';

    // Get site name (from path)
    const siteData = getSiteRewriteData(path, config.jssAppName);

    // Resolve site by name
    props.site = siteResolver.getByName(siteData.siteName);

    return props;
  }
}

export const sitePlugin = new SitePlugin();
