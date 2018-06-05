/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { ElmahioAPIContext } from "../elmahioAPIContext";

const WebResource = msRest.WebResource;

/** Class representing a Logs. */
export class Logs {
  private readonly client: ElmahioAPIContext;
  /**
   * Create a Logs.
   * @param {ElmahioAPIContext} client Reference to the service client.
   */
  constructor(client: ElmahioAPIContext) {
    this.client = client;
  }

  /**
   * @summary Fetch a list of logs.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Log[]>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments({}, options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "v3/logs"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200 && statusCode !== 401 && statusCode !== 402) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = {
              serializedName: "parsedResponse",
              type: {
                name: "Sequence",
                element: {
                  serializedName: "LogElementType",
                  type: {
                    name: "Composite",
                    className: "Log"
                  }
                }
              }
            };
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @summary Create a new log.
   *
   * @param {CreateLog} log The log object to create.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async createWithHttpOperationResponse(log: Models.CreateLog, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (log === null || log === undefined) {
        throw new Error('log cannot be null or undefined.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          log
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "v3/logs",
          requestBodyMapper: Mappers.CreateLog,
          requestBodyName: "log",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 201 && statusCode !== 401 && statusCode !== 402) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @summary Fetch a log by its ID.
   *
   * @param {string} id The ID of the log to fetch.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getWithHttpOperationResponse(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Log>> {
    let client = this.client;
    // Validate
    try {
      if (id === null || id === undefined || typeof id.valueOf() !== 'string') {
        throw new Error('id cannot be null or undefined and it must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          id
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "v3/logs/{id}",
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
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200 && statusCode !== 401 && statusCode !== 402 && statusCode !== 404) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.Log;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @summary Fetch a list of logs.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Log[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getAll(): Promise<Models.Log[]>;
  getAll(options: msRest.RequestOptionsBase): Promise<Models.Log[]>;
  getAll(callback: msRest.ServiceCallback<Models.Log[]>): void;
  getAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Log[]>): void;
  getAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Log[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Log[]>;
    if (!callback) {
      return this.getAllWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Log[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getAllWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Log[];
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Create a new log.
   *
   * @param {CreateLog} log The log object to create.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  create(log: Models.CreateLog): Promise<void>;
  create(log: Models.CreateLog, options: msRest.RequestOptionsBase): Promise<void>;
  create(log: Models.CreateLog, callback: msRest.ServiceCallback<void>): void;
  create(log: Models.CreateLog, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  create(log: Models.CreateLog, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.createWithHttpOperationResponse(log, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.createWithHttpOperationResponse(log, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Fetch a log by its ID.
   *
   * @param {string} id The ID of the log to fetch.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Log} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Log} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(id: string): Promise<Models.Log>;
  get(id: string, options: msRest.RequestOptionsBase): Promise<Models.Log>;
  get(id: string, callback: msRest.ServiceCallback<Models.Log>): void;
  get(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Log>): void;
  get(id: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Log>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Log>;
    if (!callback) {
      return this.getWithHttpOperationResponse(id, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Log);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(id, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Log;
        return cb(err, result, data.request, data);
      });
    }
  }

}
