import {
  GraphQLLayoutService,
  LayoutService
} from '@sitecore-jss/sitecore-jss-vue';
import config from '../temp/config';

/**
 * Factory responsible for creating a LayoutService instance
 */
export class LayoutServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {LayoutService} service instance
   */
  create(siteName: string): LayoutService {
    return new GraphQLLayoutService({
      endpoint: config.graphQLEndpoint,
        apiKey: config.sitecoreApiKey,
        siteName,
    });
    // return process.env.FETCH_WITH === constants.FETCH_WITH.GRAPHQL
    //   ? new GraphQLLayoutService({
    //       endpoint: config.graphQLEndpoint,
    //       apiKey: config.sitecoreApiKey,
    //       siteName,
    //     })
    //   : new RestLayoutService({
    //       apiHost: config.sitecoreApiHost,
    //       apiKey: config.sitecoreApiKey,
    //       siteName,
    //       configurationName: 'default',
    //     });
  }
}

/** LayoutServiceFactory singleton */
export const layoutServiceFactory = new LayoutServiceFactory();


/** old **/
// import {
//   GraphQLLayoutService
// } from '@sitecore-jss/sitecore-jss-vue';
// //import config from '../temp/config';

// class LayoutServiceFactory {
//   create() {
//     return new GraphQLLayoutService({
//         endpoint: "http://cm/sitecore/api/graph/edge",//config.graphQLEndpoint,
//         apiKey: "{F5C56512-6A30-41A5-81E7-16AD22827F7D}",//config.sitecoreApiKey,
//         siteName: "sxastarter",//config.jssAppName,
//       });
//   }
// }

// export const layoutServiceFactory = new LayoutServiceFactory();
