/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "./models/mappers";

const packageName = "elmah.io.client.js";
const packageVersion = "3.0.0";

export class ElmahioAPIContext extends msRest.ServiceClient {
  credentials: msRest.ServiceClientCredentials;
  baseUri: string;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the ElmahioAPIContext class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRest.ServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if (!options.serializer) {
      options = {
        ...options,
        serializer: new msRest.Serializer(Mappers, false)
      };
    }

    super(credentials, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = "https://api.elmah.io";
    }
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.serializer = new msRest.Serializer(Mappers, false);
  }
}
