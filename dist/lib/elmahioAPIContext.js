"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Mappers = require("./models/mappers");
const packageName = "elmah.io.client.js";
const packageVersion = "3.0.0";
class ElmahioAPIContext extends msRest.ServiceClient {
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
    constructor(credentials, baseUri, options) {
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (!options) {
            options = {};
        }
        if (!options.serializer) {
            options = Object.assign({}, options, { serializer: new msRest.Serializer(Mappers, false) });
        }
        super(credentials, options);
        this.baseUri = baseUri;
        if (!this.baseUri) {
            this.baseUri = "https://api.elmah.io";
        }
        this.credentials = credentials;
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        this.serializer = new msRest.Serializer(Mappers, false);
    }
}
exports.ElmahioAPIContext = ElmahioAPIContext;
//# sourceMappingURL=elmahioAPIContext.js.map