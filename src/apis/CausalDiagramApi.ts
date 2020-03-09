// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CausalDiagram,
    CausalDiagramFromJSON,
    CausalDiagramToJSON,
} from '../models';

export interface CausaldiagramsGetRequest {
    username?: string;
    label?: string;
}

export interface CausaldiagramsIdDeleteRequest {
    id: string;
    user: string;
}

export interface CausaldiagramsIdGetRequest {
    id: string;
    username?: string;
}

export interface CausaldiagramsIdPutRequest {
    id: string;
    user: string;
    causalDiagram?: CausalDiagram;
}

export interface CausaldiagramsPostRequest {
    user: string;
    causalDiagram?: CausalDiagram;
}

/**
 * no description
 */
export class CausalDiagramApi extends runtime.BaseAPI {

    /**
     * Gets a list of all CausalDiagram entities
     * List all CausalDiagram entities
     */
    async causaldiagramsGetRaw(requestParameters: CausaldiagramsGetRequest): Promise<runtime.ApiResponse<Array<CausalDiagram>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/causaldiagrams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CausalDiagramFromJSON));
    }

   /**
    * Gets a list of all CausalDiagram entities
    * List all CausalDiagram entities
    */
    async causaldiagramsGet(requestParameters: CausaldiagramsGetRequest): Promise<Array<CausalDiagram>> {
        const response = await this.causaldiagramsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing CausalDiagram
     * Delete a CausalDiagram
     */
    async causaldiagramsIdDeleteRaw(requestParameters: CausaldiagramsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling causaldiagramsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling causaldiagramsIdDelete.');
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
            path: `/causaldiagrams/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing CausalDiagram
    * Delete a CausalDiagram
    */
    async causaldiagramsIdDelete(requestParameters: CausaldiagramsIdDeleteRequest): Promise<void> {
        await this.causaldiagramsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a CausalDiagram
     * Get a CausalDiagram
     */
    async causaldiagramsIdGetRaw(requestParameters: CausaldiagramsIdGetRequest): Promise<runtime.ApiResponse<CausalDiagram>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling causaldiagramsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/causaldiagrams/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CausalDiagramFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a CausalDiagram
    * Get a CausalDiagram
    */
    async causaldiagramsIdGet(requestParameters: CausaldiagramsIdGetRequest): Promise<CausalDiagram> {
        const response = await this.causaldiagramsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing CausalDiagram
     * Update a CausalDiagram
     */
    async causaldiagramsIdPutRaw(requestParameters: CausaldiagramsIdPutRequest): Promise<runtime.ApiResponse<CausalDiagram>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling causaldiagramsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling causaldiagramsIdPut.');
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
            path: `/causaldiagrams/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CausalDiagramToJSON(requestParameters.causalDiagram),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CausalDiagramFromJSON(jsonValue));
    }

   /**
    * Updates an existing CausalDiagram
    * Update a CausalDiagram
    */
    async causaldiagramsIdPut(requestParameters: CausaldiagramsIdPutRequest): Promise<CausalDiagram> {
        const response = await this.causaldiagramsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a CausalDiagram
     * Create a CausalDiagram
     */
    async causaldiagramsPostRaw(requestParameters: CausaldiagramsPostRequest): Promise<runtime.ApiResponse<CausalDiagram>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling causaldiagramsPost.');
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
            path: `/causaldiagrams`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CausalDiagramToJSON(requestParameters.causalDiagram),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CausalDiagramFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a CausalDiagram
    * Create a CausalDiagram
    */
    async causaldiagramsPost(requestParameters: CausaldiagramsPostRequest): Promise<CausalDiagram> {
        const response = await this.causaldiagramsPostRaw(requestParameters);
        return await response.value();
    }

}
