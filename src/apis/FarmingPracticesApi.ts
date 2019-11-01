// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.2.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    FarmingPractices,
    FarmingPracticesFromJSON,
    FarmingPracticesToJSON,
} from '../models';

export interface FarmingpracticessGetRequest {
    username?: string;
    label?: string;
}

export interface FarmingpracticessIdDeleteRequest {
    id: string;
    user: string;
}

export interface FarmingpracticessIdGetRequest {
    id: string;
    username?: string;
}

export interface FarmingpracticessIdPutRequest {
    id: string;
    user: string;
    farmingPractices?: FarmingPractices;
}

export interface FarmingpracticessPostRequest {
    user: string;
    farmingPractices?: FarmingPractices;
}

/**
 * no description
 */
export class FarmingPracticesApi extends runtime.BaseAPI {

    /**
     * Gets a list of all FarmingPractices entities
     * List all FarmingPractices entities
     */
    async farmingpracticessGetRaw(requestParameters: FarmingpracticessGetRequest): Promise<runtime.ApiResponse<Array<FarmingPractices>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/farmingpracticess`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FarmingPracticesFromJSON));
    }

   /**
    * Gets a list of all FarmingPractices entities
    * List all FarmingPractices entities
    */
    async farmingpracticessGet(requestParameters: FarmingpracticessGetRequest): Promise<Array<FarmingPractices>> {
        const response = await this.farmingpracticessGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing FarmingPractices
     * Delete a FarmingPractices
     */
    async farmingpracticessIdDeleteRaw(requestParameters: FarmingpracticessIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling farmingpracticessIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling farmingpracticessIdDelete.');
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
            path: `/farmingpracticess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing FarmingPractices
    * Delete a FarmingPractices
    */
    async farmingpracticessIdDelete(requestParameters: FarmingpracticessIdDeleteRequest): Promise<void> {
        await this.farmingpracticessIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a FarmingPractices
     * Get a FarmingPractices
     */
    async farmingpracticessIdGetRaw(requestParameters: FarmingpracticessIdGetRequest): Promise<runtime.ApiResponse<FarmingPractices>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling farmingpracticessIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/farmingpracticess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmingPracticesFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a FarmingPractices
    * Get a FarmingPractices
    */
    async farmingpracticessIdGet(requestParameters: FarmingpracticessIdGetRequest): Promise<FarmingPractices> {
        const response = await this.farmingpracticessIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing FarmingPractices
     * Update a FarmingPractices
     */
    async farmingpracticessIdPutRaw(requestParameters: FarmingpracticessIdPutRequest): Promise<runtime.ApiResponse<FarmingPractices>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling farmingpracticessIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling farmingpracticessIdPut.');
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
            path: `/farmingpracticess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FarmingPracticesToJSON(requestParameters.farmingPractices),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmingPracticesFromJSON(jsonValue));
    }

   /**
    * Updates an existing FarmingPractices
    * Update a FarmingPractices
    */
    async farmingpracticessIdPut(requestParameters: FarmingpracticessIdPutRequest): Promise<FarmingPractices> {
        const response = await this.farmingpracticessIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a FarmingPractices
     * Create a FarmingPractices
     */
    async farmingpracticessPostRaw(requestParameters: FarmingpracticessPostRequest): Promise<runtime.ApiResponse<FarmingPractices>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling farmingpracticessPost.');
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
            path: `/farmingpracticess`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FarmingPracticesToJSON(requestParameters.farmingPractices),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmingPracticesFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a FarmingPractices
    * Create a FarmingPractices
    */
    async farmingpracticessPost(requestParameters: FarmingpracticessPostRequest): Promise<FarmingPractices> {
        const response = await this.farmingpracticessPostRaw(requestParameters);
        return await response.value();
    }

}