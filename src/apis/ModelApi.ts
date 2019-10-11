// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Model,
    ModelFromJSON,
    ModelToJSON,
} from '../models';

export interface ModelsGetRequest {
    username?: string;
    label?: string;
}

export interface ModelsIdDeleteRequest {
    id: string;
    user: string;
}

export interface ModelsIdGetRequest {
    id: string;
    username?: string;
}

export interface ModelsIdPutRequest {
    id: string;
    user: string;
    model?: Model;
}

export interface ModelsPostRequest {
    user: string;
    model?: Model;
}

/**
 * no description
 */
export class ModelApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Model entities
     * List all Model entities
     */
    async modelsGetRaw(requestParameters: ModelsGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets a list of all Model entities
    * List all Model entities
    */
    async modelsGet(requestParameters: ModelsGetRequest): Promise<Array<Model>> {
        const response = await this.modelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Model
     * Delete a Model
     */
    async modelsIdDeleteRaw(requestParameters: ModelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelsIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Model
    * Delete a Model
    */
    async modelsIdDelete(requestParameters: ModelsIdDeleteRequest): Promise<void> {
        await this.modelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Model
     * Get a Model
     */
    async modelsIdGetRaw(requestParameters: ModelsIdGetRequest): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Model
    * Get a Model
    */
    async modelsIdGet(requestParameters: ModelsIdGetRequest): Promise<Model> {
        const response = await this.modelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Model
     * Update a Model
     */
    async modelsIdPutRaw(requestParameters: ModelsIdPutRequest): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelsIdPut.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelToJSON(requestParameters.model),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Updates an existing Model
    * Update a Model
    */
    async modelsIdPut(requestParameters: ModelsIdPutRequest): Promise<Model> {
        const response = await this.modelsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a Model
     * Create a Model
     */
    async modelsPostRaw(requestParameters: ModelsPostRequest): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelsPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/models`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelToJSON(requestParameters.model),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a Model
    * Create a Model
    */
    async modelsPost(requestParameters: ModelsPostRequest): Promise<Model> {
        const response = await this.modelsPostRaw(requestParameters);
        return await response.value();
    }

}
