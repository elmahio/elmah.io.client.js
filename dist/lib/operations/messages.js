"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const msRest = require("ms-rest-js");
const Mappers = require("../models/mappers");
const WebResource = msRest.WebResource;
/** Class representing a Messages. */
class Messages {
    /**
     * Create a Messages.
     * @param {ElmahioAPIContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @summary Fetch messages from a log.
     *
     * @param {string} logId The ID of the log containing the messages.
     *
     * @param {MessagesGetAllOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getAllWithHttpOperationResponse(logId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let pageIndex = (options && options.pageIndex !== undefined) ? options.pageIndex : undefined;
            let pageSize = (options && options.pageSize !== undefined) ? options.pageSize : undefined;
            let query = (options && options.query !== undefined) ? options.query : undefined;
            let from = (options && options.from !== undefined) ? options.from : undefined;
            let to = (options && options.to !== undefined) ? options.to : undefined;
            let includeHeaders = (options && options.includeHeaders !== undefined) ? options.includeHeaders : undefined;
            // Validate
            try {
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
                if (pageIndex !== null && pageIndex !== undefined && typeof pageIndex !== 'number') {
                    throw new Error('pageIndex must be of type number.');
                }
                if (pageSize !== null && pageSize !== undefined && typeof pageSize !== 'number') {
                    throw new Error('pageSize must be of type number.');
                }
                if (query !== null && query !== undefined && typeof query.valueOf() !== 'string') {
                    throw new Error('query must be of type string.');
                }
                if (from && !(from instanceof Date ||
                    (typeof from.valueOf() === 'string' && !isNaN(Date.parse(from))))) {
                    throw new Error('from must be of type date.');
                }
                if (to && !(to instanceof Date ||
                    (typeof to.valueOf() === 'string' && !isNaN(Date.parse(to))))) {
                    throw new Error('to must be of type date.');
                }
                if (includeHeaders !== null && includeHeaders !== undefined && typeof includeHeaders !== 'boolean') {
                    throw new Error('includeHeaders must be of type boolean.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    logId,
                    pageIndex,
                    pageSize,
                    query,
                    from,
                    to,
                    includeHeaders
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "GET",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}",
                    urlParameters: [
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ],
                    queryParameters: [
                        {
                            parameterName: "pageIndex",
                            mapper: {
                                serializedName: "pageIndex",
                                type: {
                                    name: "Number"
                                }
                            }
                        },
                        {
                            parameterName: "pageSize",
                            mapper: {
                                serializedName: "pageSize",
                                type: {
                                    name: "Number"
                                }
                            }
                        },
                        {
                            parameterName: "query",
                            mapper: {
                                serializedName: "query",
                                type: {
                                    name: "String"
                                }
                            }
                        },
                        {
                            parameterName: "from",
                            mapper: {
                                serializedName: "from",
                                type: {
                                    name: "DateTime"
                                }
                            }
                        },
                        {
                            parameterName: "to",
                            mapper: {
                                serializedName: "to",
                                type: {
                                    name: "DateTime"
                                }
                            }
                        },
                        {
                            parameterName: "includeHeaders",
                            mapper: {
                                serializedName: "includeHeaders",
                                type: {
                                    name: "Boolean"
                                }
                            }
                        }
                    ]
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.parsedBody;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            const resultMapper = Mappers.MessagesResult;
                            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(operationRes);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Create a new message.
     *
     * @param {string} logId The ID of the log which should contain the new
     * message.
     *
     * @param {CreateMessage} message The message object to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(logId, message, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
                if (message === null || message === undefined) {
                    throw new Error('message cannot be null or undefined.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    logId,
                    message
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "POST",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}",
                    urlParameters: [
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ],
                    requestBodyMapper: Mappers.CreateMessage,
                    requestBodyName: "message",
                    contentType: "application/json; charset=utf-8"
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 201 && statusCode !== 400 && statusCode !== 401 && statusCode !== 403 && statusCode !== 404 && statusCode !== 413 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Deletes a list of messages by logid and query.
     *
     * @param {string} logId The ID of the log containing the message.
     *
     * @param {Search} search A search object containing query, time filters etc.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteAllWithHttpOperationResponse(logId, search, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
                if (search === null || search === undefined) {
                    throw new Error('search cannot be null or undefined.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    logId,
                    search
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "DELETE",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}",
                    urlParameters: [
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ],
                    requestBodyMapper: Mappers.Search,
                    requestBodyName: "search",
                    contentType: "application/json; charset=utf-8"
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Fetch a message by its ID.
     *
     * @param {string} id The ID of the message to fetch.
     *
     * @param {string} logId The ID of the log containing the message.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(id, logId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (id === null || id === undefined || typeof id.valueOf() !== 'string') {
                    throw new Error('id cannot be null or undefined and it must be of type string.');
                }
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    id,
                    logId
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "GET",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}/{id}",
                    urlParameters: [
                        {
                            parameterName: "id",
                            mapper: {
                                required: true,
                                serializedName: "id",
                                type: {
                                    name: "String"
                                }
                            }
                        },
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ]
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.parsedBody;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            const resultMapper = Mappers.Message;
                            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(operationRes);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Delete a message by its ID.
     *
     * @param {string} id The ID of the message to delete.
     *
     * @param {string} logId The ID of the log containing the message.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(id, logId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (id === null || id === undefined || typeof id.valueOf() !== 'string') {
                    throw new Error('id cannot be null or undefined and it must be of type string.');
                }
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    id,
                    logId
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "DELETE",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}/{id}",
                    urlParameters: [
                        {
                            parameterName: "id",
                            mapper: {
                                required: true,
                                serializedName: "id",
                                type: {
                                    name: "String"
                                }
                            }
                        },
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ]
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Hide a message by its ID.
     *
     * @param {string} id The ID of the message to hide.
     *
     * @param {string} logId The ID of the log containing the message.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    hideWithHttpOperationResponse(id, logId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (id === null || id === undefined || typeof id.valueOf() !== 'string') {
                    throw new Error('id cannot be null or undefined and it must be of type string.');
                }
                if (logId === null || logId === undefined || typeof logId.valueOf() !== 'string') {
                    throw new Error('logId cannot be null or undefined and it must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Create HTTP transport objects
            const httpRequest = new WebResource();
            let operationRes;
            try {
                const operationArguments = msRest.createOperationArguments({
                    id,
                    logId
                }, options);
                operationRes = yield client.sendOperationRequest(httpRequest, operationArguments, {
                    httpMethod: "POST",
                    baseUrl: this.client.baseUri,
                    path: "v3/messages/{logId}/{id}/_hide",
                    urlParameters: [
                        {
                            parameterName: "id",
                            mapper: {
                                required: true,
                                serializedName: "id",
                                type: {
                                    name: "String"
                                }
                            }
                        },
                        {
                            parameterName: "logId",
                            mapper: {
                                required: true,
                                serializedName: "logId",
                                type: {
                                    name: "String"
                                }
                            }
                        }
                    ]
                });
                let statusCode = operationRes.status;
                if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 429) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = operationRes.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(operationRes);
                    let parsedErrorResponse = operationRes.parsedBody;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    getAll(logId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getAllWithHttpOperationResponse(logId, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getAllWithHttpOperationResponse(logId, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
    create(logId, message, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.createWithHttpOperationResponse(logId, message, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.createWithHttpOperationResponse(logId, message, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
    deleteAll(logId, search, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.deleteAllWithHttpOperationResponse(logId, search, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.deleteAllWithHttpOperationResponse(logId, search, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
    get(id, logId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(id, logId, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getWithHttpOperationResponse(id, logId, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
    deleteMethod(id, logId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.deleteMethodWithHttpOperationResponse(id, logId, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.deleteMethodWithHttpOperationResponse(id, logId, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
    hide(id, logId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.hideWithHttpOperationResponse(id, logId, options).then((operationRes) => {
                return Promise.resolve(operationRes.parsedBody);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.hideWithHttpOperationResponse(id, logId, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    }
}
exports.Messages = Messages;
//# sourceMappingURL=messages.js.map