// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ModelConfigurationSetup,
    ModelConfigurationSetupFromJSON,
    ModelConfigurationSetupToJSON,
} from '../models';

export interface CustomModelconfigurationsetupsIdGetRequest {
    id: string;
    username?: string;
    customQueryName?: string;
}

export interface ModelconfigurationsetupsGetRequest {
    username?: string;
    label?: string;
}

export interface ModelconfigurationsetupsIdDeleteRequest {
    id: string;
    user: string;
}

export interface ModelconfigurationsetupsIdGetRequest {
    id: string;
    username?: string;
}

export interface ModelconfigurationsetupsIdPutRequest {
    id: string;
    user: string;
    modelConfigurationSetup?: ModelConfigurationSetup;
}

export interface ModelconfigurationsetupsPostRequest {
    user: string;
    modelConfigurationSetup?: ModelConfigurationSetup;
}

/**
 * no description
 */
export class ModelConfigurationSetupApi extends runtime.BaseAPI {

    /**
     * Gets the details of a single instance of a ModelConfigurationSetup
     * Get a ModelConfigurationSetup
     */
    async customModelconfigurationsetupsIdGetRaw(requestParameters: CustomModelconfigurationsetupsIdGetRequest): Promise<runtime.ApiResponse<ModelConfigurationSetup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customModelconfigurationsetupsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/modelconfigurationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelConfigurationSetupFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a ModelConfigurationSetup
    * Get a ModelConfigurationSetup
    */
    async customModelconfigurationsetupsIdGet(requestParameters: CustomModelconfigurationsetupsIdGetRequest): Promise<ModelConfigurationSetup> {
        const response = await this.customModelconfigurationsetupsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of all ModelConfigurationSetup entities
     * List all ModelConfigurationSetup entities
     */
    async modelconfigurationsetupsGetRaw(requestParameters: ModelconfigurationsetupsGetRequest): Promise<runtime.ApiResponse<Array<ModelConfigurationSetup>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/modelconfigurationsetups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelConfigurationSetupFromJSON));
    }

   /**
    * Gets a list of all ModelConfigurationSetup entities
    * List all ModelConfigurationSetup entities
    */
    async modelconfigurationsetupsGet(requestParameters: ModelconfigurationsetupsGetRequest): Promise<Array<ModelConfigurationSetup>> {
        const response = await this.modelconfigurationsetupsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing ModelConfigurationSetup
     * Delete a ModelConfigurationSetup
     */
    async modelconfigurationsetupsIdDeleteRaw(requestParameters: ModelconfigurationsetupsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelconfigurationsetupsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelconfigurationsetupsIdDelete.');
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
            path: `/modelconfigurationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing ModelConfigurationSetup
    * Delete a ModelConfigurationSetup
    */
    async modelconfigurationsetupsIdDelete(requestParameters: ModelconfigurationsetupsIdDeleteRequest): Promise<void> {
        await this.modelconfigurationsetupsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a ModelConfigurationSetup
     * Get a ModelConfigurationSetup
     */
    async modelconfigurationsetupsIdGetRaw(requestParameters: ModelconfigurationsetupsIdGetRequest): Promise<runtime.ApiResponse<ModelConfigurationSetup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelconfigurationsetupsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/modelconfigurationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelConfigurationSetupFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a ModelConfigurationSetup
    * Get a ModelConfigurationSetup
    */
    async modelconfigurationsetupsIdGet(requestParameters: ModelconfigurationsetupsIdGetRequest): Promise<ModelConfigurationSetup> {
        const response = await this.modelconfigurationsetupsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing ModelConfigurationSetup
     * Update a ModelConfigurationSetup
     */
    async modelconfigurationsetupsIdPutRaw(requestParameters: ModelconfigurationsetupsIdPutRequest): Promise<runtime.ApiResponse<ModelConfigurationSetup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelconfigurationsetupsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelconfigurationsetupsIdPut.');
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
            path: `/modelconfigurationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelConfigurationSetupToJSON(requestParameters.modelConfigurationSetup),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelConfigurationSetupFromJSON(jsonValue));
    }

   /**
    * Updates an existing ModelConfigurationSetup
    * Update a ModelConfigurationSetup
    */
    async modelconfigurationsetupsIdPut(requestParameters: ModelconfigurationsetupsIdPutRequest): Promise<ModelConfigurationSetup> {
        const response = await this.modelconfigurationsetupsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a ModelConfigurationSetup
     * Create a ModelConfigurationSetup
     */
    async modelconfigurationsetupsPostRaw(requestParameters: ModelconfigurationsetupsPostRequest): Promise<runtime.ApiResponse<ModelConfigurationSetup>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling modelconfigurationsetupsPost.');
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
            path: `/modelconfigurationsetups`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelConfigurationSetupToJSON(requestParameters.modelConfigurationSetup),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelConfigurationSetupFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a ModelConfigurationSetup
    * Create a ModelConfigurationSetup
    */
    async modelconfigurationsetupsPost(requestParameters: ModelconfigurationsetupsPostRequest): Promise<ModelConfigurationSetup> {
        const response = await this.modelconfigurationsetupsPostRaw(requestParameters);
        return await response.value();
    }

}
