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

/** Class representing a Deployments. */
export class Deployments {
  private readonly client: ElmahioAPIContext;
  /**
   * Create a Deployments.
   * @param {ElmahioAPIContext} client Reference to the service client.
   */
  constructor(client: ElmahioAPIContext) {
    this.client = client;
  }

  /**
   * @summary Fetch a list of deployments.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Deployment[]>> {
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
          path: "v3/deployments"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200 && statusCode !== 402) {
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
                  serializedName: "DeploymentElementType",
                  type: {
                    name: "Composite",
                    className: "Deployment"
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
   * @summary Create a new deployment.
   *
   * @param {CreateDeployment} deployment The deployment object to create.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async createWithHttpOperationResponse(deployment: Models.CreateDeployment, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (deployment === null || deployment === undefined) {
        throw new Error('deployment cannot be null or undefined.');
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
          deployment
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "v3/deployments",
          requestBodyMapper: Mappers.CreateDeployment,
          requestBodyName: "deployment",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 201 && statusCode !== 400 && statusCode !== 402 && statusCode !== 409) {
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
   * @summary Fetch a deployment by its ID.
   *
   * @param {string} id The ID of the deployment to fetch.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getWithHttpOperationResponse(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Deployment>> {
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
          path: "v3/deployments/{id}",
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
      if (statusCode !== 200 && statusCode !== 400 && statusCode !== 402 && statusCode !== 404) {
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
            const resultMapper = Mappers.Deployment;
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
   * @summary Delete a deployment by its ID.
   *
   * This endpoint doesn't clear the version number of messages already annotated
   * with this deployment version.
   *
   * @param {string} id The ID of the deployment to delete.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async deleteMethodWithHttpOperationResponse(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
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
          httpMethod: "DELETE",
          baseUrl: this.client.baseUri,
          path: "v3/deployments/{id}",
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
      if (statusCode !== 204 && statusCode !== 400 && statusCode !== 402 && statusCode !== 404) {
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
   * @summary Fetch a list of deployments.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Deployment[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getAll(): Promise<Models.Deployment[]>;
  getAll(options: msRest.RequestOptionsBase): Promise<Models.Deployment[]>;
  getAll(callback: msRest.ServiceCallback<Models.Deployment[]>): void;
  getAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Deployment[]>): void;
  getAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Deployment[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Deployment[]>;
    if (!callback) {
      return this.getAllWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Deployment[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getAllWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Deployment[];
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Create a new deployment.
   *
   * @param {CreateDeployment} deployment The deployment object to create.
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
  create(deployment: Models.CreateDeployment): Promise<void>;
  create(deployment: Models.CreateDeployment, options: msRest.RequestOptionsBase): Promise<void>;
  create(deployment: Models.CreateDeployment, callback: msRest.ServiceCallback<void>): void;
  create(deployment: Models.CreateDeployment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  create(deployment: Models.CreateDeployment, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.createWithHttpOperationResponse(deployment, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.createWithHttpOperationResponse(deployment, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Fetch a deployment by its ID.
   *
   * @param {string} id The ID of the deployment to fetch.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Deployment} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Deployment} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(id: string): Promise<Models.Deployment>;
  get(id: string, options: msRest.RequestOptionsBase): Promise<Models.Deployment>;
  get(id: string, callback: msRest.ServiceCallback<Models.Deployment>): void;
  get(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Deployment>): void;
  get(id: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Deployment>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Deployment>;
    if (!callback) {
      return this.getWithHttpOperationResponse(id, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Deployment);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(id, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Deployment;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Delete a deployment by its ID.
   *
   * This endpoint doesn't clear the version number of messages already annotated
   * with this deployment version.
   *
   * @param {string} id The ID of the deployment to delete.
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
  deleteMethod(id: string): Promise<void>;
  deleteMethod(id: string, options: msRest.RequestOptionsBase): Promise<void>;
  deleteMethod(id: string, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(id: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.deleteMethodWithHttpOperationResponse(id, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.deleteMethodWithHttpOperationResponse(id, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
