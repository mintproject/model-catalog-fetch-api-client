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
    NumericalIndex,
    NumericalIndexFromJSON,
    NumericalIndexToJSON,
} from '../models';

export interface NumericalindexsGetRequest {
    username?: string;
    label?: string;
}

export interface NumericalindexsIdDeleteRequest {
    id: string;
    user: string;
}

export interface NumericalindexsIdGetRequest {
    id: string;
    username?: string;
}

export interface NumericalindexsIdPutRequest {
    id: string;
    user: string;
    numericalIndex?: NumericalIndex;
}

export interface NumericalindexsPostRequest {
    user: string;
    numericalIndex?: NumericalIndex;
}

/**
 * no description
 */
export class NumericalIndexApi extends runtime.BaseAPI {

    /**
     * Gets a list of all NumericalIndex entities
     * List all NumericalIndex entities
     */
    async numericalindexsGetRaw(requestParameters: NumericalindexsGetRequest): Promise<runtime.ApiResponse<Array<NumericalIndex>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/numericalindexs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NumericalIndexFromJSON));
    }

   /**
    * Gets a list of all NumericalIndex entities
    * List all NumericalIndex entities
    */
    async numericalindexsGet(requestParameters: NumericalindexsGetRequest): Promise<Array<NumericalIndex>> {
        const response = await this.numericalindexsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing NumericalIndex
     * Delete a NumericalIndex
     */
    async numericalindexsIdDeleteRaw(requestParameters: NumericalindexsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling numericalindexsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling numericalindexsIdDelete.');
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
            path: `/numericalindexs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing NumericalIndex
    * Delete a NumericalIndex
    */
    async numericalindexsIdDelete(requestParameters: NumericalindexsIdDeleteRequest): Promise<void> {
        await this.numericalindexsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a NumericalIndex
     * Get a NumericalIndex
     */
    async numericalindexsIdGetRaw(requestParameters: NumericalindexsIdGetRequest): Promise<runtime.ApiResponse<NumericalIndex>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling numericalindexsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/numericalindexs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NumericalIndexFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a NumericalIndex
    * Get a NumericalIndex
    */
    async numericalindexsIdGet(requestParameters: NumericalindexsIdGetRequest): Promise<NumericalIndex> {
        const response = await this.numericalindexsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing NumericalIndex
     * Update a NumericalIndex
     */
    async numericalindexsIdPutRaw(requestParameters: NumericalindexsIdPutRequest): Promise<runtime.ApiResponse<NumericalIndex>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling numericalindexsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling numericalindexsIdPut.');
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
            path: `/numericalindexs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NumericalIndexToJSON(requestParameters.numericalIndex),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NumericalIndexFromJSON(jsonValue));
    }

   /**
    * Updates an existing NumericalIndex
    * Update a NumericalIndex
    */
    async numericalindexsIdPut(requestParameters: NumericalindexsIdPutRequest): Promise<NumericalIndex> {
        const response = await this.numericalindexsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a NumericalIndex
     * Create a NumericalIndex
     */
    async numericalindexsPostRaw(requestParameters: NumericalindexsPostRequest): Promise<runtime.ApiResponse<NumericalIndex>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling numericalindexsPost.');
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
            path: `/numericalindexs`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NumericalIndexToJSON(requestParameters.numericalIndex),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NumericalIndexFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a NumericalIndex
    * Create a NumericalIndex
    */
    async numericalindexsPost(requestParameters: NumericalindexsPostRequest): Promise<NumericalIndex> {
        const response = await this.numericalindexsPostRaw(requestParameters);
        return await response.value();
    }

}
