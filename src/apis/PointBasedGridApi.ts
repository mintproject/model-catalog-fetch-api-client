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
    PointBasedGrid,
    PointBasedGridFromJSON,
    PointBasedGridToJSON,
} from '../models';

export interface PointbasedgridsGetRequest {
    username?: string;
    label?: string;
}

export interface PointbasedgridsIdDeleteRequest {
    id: string;
    user: string;
}

export interface PointbasedgridsIdGetRequest {
    id: string;
    username?: string;
}

export interface PointbasedgridsIdPutRequest {
    id: string;
    user: string;
    pointBasedGrid?: PointBasedGrid;
}

export interface PointbasedgridsPostRequest {
    user: string;
    pointBasedGrid?: PointBasedGrid;
}

/**
 * no description
 */
export class PointBasedGridApi extends runtime.BaseAPI {

    /**
     * Gets a list of all PointBasedGrid entities
     * List all PointBasedGrid entities
     */
    async pointbasedgridsGetRaw(requestParameters: PointbasedgridsGetRequest): Promise<runtime.ApiResponse<Array<PointBasedGrid>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/pointbasedgrids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PointBasedGridFromJSON));
    }

   /**
    * Gets a list of all PointBasedGrid entities
    * List all PointBasedGrid entities
    */
    async pointbasedgridsGet(requestParameters: PointbasedgridsGetRequest): Promise<Array<PointBasedGrid>> {
        const response = await this.pointbasedgridsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing PointBasedGrid
     * Delete a PointBasedGrid
     */
    async pointbasedgridsIdDeleteRaw(requestParameters: PointbasedgridsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pointbasedgridsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling pointbasedgridsIdDelete.');
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
            path: `/pointbasedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing PointBasedGrid
    * Delete a PointBasedGrid
    */
    async pointbasedgridsIdDelete(requestParameters: PointbasedgridsIdDeleteRequest): Promise<void> {
        await this.pointbasedgridsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a PointBasedGrid
     * Get a PointBasedGrid
     */
    async pointbasedgridsIdGetRaw(requestParameters: PointbasedgridsIdGetRequest): Promise<runtime.ApiResponse<PointBasedGrid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pointbasedgridsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/pointbasedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PointBasedGridFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a PointBasedGrid
    * Get a PointBasedGrid
    */
    async pointbasedgridsIdGet(requestParameters: PointbasedgridsIdGetRequest): Promise<PointBasedGrid> {
        const response = await this.pointbasedgridsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing PointBasedGrid
     * Update a PointBasedGrid
     */
    async pointbasedgridsIdPutRaw(requestParameters: PointbasedgridsIdPutRequest): Promise<runtime.ApiResponse<PointBasedGrid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pointbasedgridsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling pointbasedgridsIdPut.');
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
            path: `/pointbasedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PointBasedGridToJSON(requestParameters.pointBasedGrid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PointBasedGridFromJSON(jsonValue));
    }

   /**
    * Updates an existing PointBasedGrid
    * Update a PointBasedGrid
    */
    async pointbasedgridsIdPut(requestParameters: PointbasedgridsIdPutRequest): Promise<PointBasedGrid> {
        const response = await this.pointbasedgridsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a PointBasedGrid
     * Create a PointBasedGrid
     */
    async pointbasedgridsPostRaw(requestParameters: PointbasedgridsPostRequest): Promise<runtime.ApiResponse<PointBasedGrid>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling pointbasedgridsPost.');
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
            path: `/pointbasedgrids`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PointBasedGridToJSON(requestParameters.pointBasedGrid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PointBasedGridFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a PointBasedGrid
    * Create a PointBasedGrid
    */
    async pointbasedgridsPost(requestParameters: PointbasedgridsPostRequest): Promise<PointBasedGrid> {
        const response = await this.pointbasedgridsPostRaw(requestParameters);
        return await response.value();
    }

}
