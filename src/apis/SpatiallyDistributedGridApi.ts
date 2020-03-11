// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
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
    SpatiallyDistributedGrid,
    SpatiallyDistributedGridFromJSON,
    SpatiallyDistributedGridToJSON,
} from '../models';

export interface SpatiallydistributedgridsGetRequest {
    username?: string;
    label?: string;
}

export interface SpatiallydistributedgridsIdDeleteRequest {
    id: string;
    user: string;
}

export interface SpatiallydistributedgridsIdGetRequest {
    id: string;
    username?: string;
}

export interface SpatiallydistributedgridsIdPutRequest {
    id: string;
    user: string;
    spatiallyDistributedGrid?: SpatiallyDistributedGrid;
}

export interface SpatiallydistributedgridsPostRequest {
    user: string;
    spatiallyDistributedGrid?: SpatiallyDistributedGrid;
}

/**
 * no description
 */
export class SpatiallyDistributedGridApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SpatiallyDistributedGrid entities
     * List all SpatiallyDistributedGrid entities
     */
    async spatiallydistributedgridsGetRaw(requestParameters: SpatiallydistributedgridsGetRequest): Promise<runtime.ApiResponse<Array<SpatiallyDistributedGrid>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/spatiallydistributedgrids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SpatiallyDistributedGridFromJSON));
    }

   /**
    * Gets a list of all SpatiallyDistributedGrid entities
    * List all SpatiallyDistributedGrid entities
    */
    async spatiallydistributedgridsGet(requestParameters: SpatiallydistributedgridsGetRequest): Promise<Array<SpatiallyDistributedGrid>> {
        const response = await this.spatiallydistributedgridsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SpatiallyDistributedGrid
     * Delete a SpatiallyDistributedGrid
     */
    async spatiallydistributedgridsIdDeleteRaw(requestParameters: SpatiallydistributedgridsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling spatiallydistributedgridsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling spatiallydistributedgridsIdDelete.');
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
            path: `/spatiallydistributedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SpatiallyDistributedGrid
    * Delete a SpatiallyDistributedGrid
    */
    async spatiallydistributedgridsIdDelete(requestParameters: SpatiallydistributedgridsIdDeleteRequest): Promise<void> {
        await this.spatiallydistributedgridsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SpatiallyDistributedGrid
     * Get a SpatiallyDistributedGrid
     */
    async spatiallydistributedgridsIdGetRaw(requestParameters: SpatiallydistributedgridsIdGetRequest): Promise<runtime.ApiResponse<SpatiallyDistributedGrid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling spatiallydistributedgridsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/spatiallydistributedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SpatiallyDistributedGridFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SpatiallyDistributedGrid
    * Get a SpatiallyDistributedGrid
    */
    async spatiallydistributedgridsIdGet(requestParameters: SpatiallydistributedgridsIdGetRequest): Promise<SpatiallyDistributedGrid> {
        const response = await this.spatiallydistributedgridsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SpatiallyDistributedGrid
     * Update a SpatiallyDistributedGrid
     */
    async spatiallydistributedgridsIdPutRaw(requestParameters: SpatiallydistributedgridsIdPutRequest): Promise<runtime.ApiResponse<SpatiallyDistributedGrid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling spatiallydistributedgridsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling spatiallydistributedgridsIdPut.');
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
            path: `/spatiallydistributedgrids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SpatiallyDistributedGridToJSON(requestParameters.spatiallyDistributedGrid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SpatiallyDistributedGridFromJSON(jsonValue));
    }

   /**
    * Updates an existing SpatiallyDistributedGrid
    * Update a SpatiallyDistributedGrid
    */
    async spatiallydistributedgridsIdPut(requestParameters: SpatiallydistributedgridsIdPutRequest): Promise<SpatiallyDistributedGrid> {
        const response = await this.spatiallydistributedgridsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SpatiallyDistributedGrid
     * Create a SpatiallyDistributedGrid
     */
    async spatiallydistributedgridsPostRaw(requestParameters: SpatiallydistributedgridsPostRequest): Promise<runtime.ApiResponse<SpatiallyDistributedGrid>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling spatiallydistributedgridsPost.');
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
            path: `/spatiallydistributedgrids`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SpatiallyDistributedGridToJSON(requestParameters.spatiallyDistributedGrid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SpatiallyDistributedGridFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SpatiallyDistributedGrid
    * Create a SpatiallyDistributedGrid
    */
    async spatiallydistributedgridsPost(requestParameters: SpatiallydistributedgridsPostRequest): Promise<SpatiallyDistributedGrid> {
        const response = await this.spatiallydistributedgridsPostRaw(requestParameters);
        return await response.value();
    }

}
