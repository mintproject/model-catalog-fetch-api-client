// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ModelCategory,
    ModelCategoryFromJSON,
    ModelCategoryToJSON,
} from '../models';

export interface ModelcategorysGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface ModelcategorysIdDeleteRequest {
    id: string;
    user?: string;
}

export interface ModelcategorysIdGetRequest {
    id: string;
    username?: string;
}

export interface ModelcategorysIdPutRequest {
    id: string;
    user?: string;
    modelCategory?: ModelCategory;
}

export interface ModelcategorysPostRequest {
    user?: string;
    modelCategory?: ModelCategory;
}

/**
 * no description
 */
export class ModelCategoryApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
     * List all instances of ModelCategory
     */
    async modelcategorysGetRaw(requestParameters: ModelcategorysGetRequest): Promise<runtime.ApiResponse<Array<ModelCategory>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/modelcategorys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelCategoryFromJSON));
    }

   /**
    * Gets a list of all instances of ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
    * List all instances of ModelCategory
    */
    async modelcategorysGet(requestParameters: ModelcategorysGetRequest): Promise<Array<ModelCategory>> {
        const response = await this.modelcategorysGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
     * Delete an existing ModelCategory
     */
    async modelcategorysIdDeleteRaw(requestParameters: ModelcategorysIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelcategorysIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/modelcategorys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
    * Delete an existing ModelCategory
    */
    async modelcategorysIdDelete(requestParameters: ModelcategorysIdDeleteRequest): Promise<void> {
        await this.modelcategorysIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
     * Get a single ModelCategory by its id
     */
    async modelcategorysIdGetRaw(requestParameters: ModelcategorysIdGetRequest): Promise<runtime.ApiResponse<ModelCategory>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelcategorysIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/modelcategorys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCategoryFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
    * Get a single ModelCategory by its id
    */
    async modelcategorysIdGet(requestParameters: ModelcategorysIdGetRequest): Promise<ModelCategory> {
        const response = await this.modelcategorysIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
     * Update an existing ModelCategory
     */
    async modelcategorysIdPutRaw(requestParameters: ModelcategorysIdPutRequest): Promise<runtime.ApiResponse<ModelCategory>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelcategorysIdPut.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

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
            path: `/modelcategorys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCategoryToJSON(requestParameters.modelCategory),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCategoryFromJSON(jsonValue));
    }

   /**
    * Updates an existing ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
    * Update an existing ModelCategory
    */
    async modelcategorysIdPut(requestParameters: ModelcategorysIdPutRequest): Promise<ModelCategory> {
        const response = await this.modelcategorysIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
     * Create one ModelCategory
     */
    async modelcategorysPostRaw(requestParameters: ModelcategorysPostRequest): Promise<runtime.ApiResponse<ModelCategory>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

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
            path: `/modelcategorys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCategoryToJSON(requestParameters.modelCategory),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCategoryFromJSON(jsonValue));
    }

   /**
    * Create a new instance of ModelCategory (more information in https://w3id.org/okn/o/sdm#ModelCategory)
    * Create one ModelCategory
    */
    async modelcategorysPost(requestParameters: ModelcategorysPostRequest): Promise<ModelCategory> {
        const response = await this.modelcategorysPostRaw(requestParameters);
        return await response.value();
    }

}
