// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Region,
    RegionFromJSON,
    RegionToJSON,
} from '../models';

export interface RegionsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface RegionsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface RegionsIdGetRequest {
    id: string;
    username?: string;
}

export interface RegionsIdPutRequest {
    id: string;
    user?: string;
    region?: Region;
}

export interface RegionsPostRequest {
    user?: string;
    region?: Region;
}

/**
 * no description
 */
export class RegionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Region (more information in https://w3id.org/okn/o/sdm#Region)
     * List all instances of Region
     */
    async regionsGetRaw(requestParameters: RegionsGetRequest): Promise<runtime.ApiResponse<Array<Region>>> {
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
            path: `/regions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RegionFromJSON));
    }

   /**
    * Gets a list of all instances of Region (more information in https://w3id.org/okn/o/sdm#Region)
    * List all instances of Region
    */
    async regionsGet(requestParameters: RegionsGetRequest): Promise<Array<Region>> {
        const response = await this.regionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Region (more information in https://w3id.org/okn/o/sdm#Region)
     * Delete an existing Region
     */
    async regionsIdDeleteRaw(requestParameters: RegionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling regionsIdDelete.');
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
            path: `/regions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Region (more information in https://w3id.org/okn/o/sdm#Region)
    * Delete an existing Region
    */
    async regionsIdDelete(requestParameters: RegionsIdDeleteRequest): Promise<void> {
        await this.regionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Region (more information in https://w3id.org/okn/o/sdm#Region)
     * Get a single Region by its id
     */
    async regionsIdGetRaw(requestParameters: RegionsIdGetRequest): Promise<runtime.ApiResponse<Region>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling regionsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/regions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RegionFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Region (more information in https://w3id.org/okn/o/sdm#Region)
    * Get a single Region by its id
    */
    async regionsIdGet(requestParameters: RegionsIdGetRequest): Promise<Region> {
        const response = await this.regionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Region (more information in https://w3id.org/okn/o/sdm#Region)
     * Update an existing Region
     */
    async regionsIdPutRaw(requestParameters: RegionsIdPutRequest): Promise<runtime.ApiResponse<Region>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling regionsIdPut.');
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
            path: `/regions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RegionToJSON(requestParameters.region),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RegionFromJSON(jsonValue));
    }

   /**
    * Updates an existing Region (more information in https://w3id.org/okn/o/sdm#Region)
    * Update an existing Region
    */
    async regionsIdPut(requestParameters: RegionsIdPutRequest): Promise<Region> {
        const response = await this.regionsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Region (more information in https://w3id.org/okn/o/sdm#Region)
     * Create one Region
     */
    async regionsPostRaw(requestParameters: RegionsPostRequest): Promise<runtime.ApiResponse<Region>> {
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
            path: `/regions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegionToJSON(requestParameters.region),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RegionFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Region (more information in https://w3id.org/okn/o/sdm#Region)
    * Create one Region
    */
    async regionsPost(requestParameters: RegionsPostRequest): Promise<Region> {
        const response = await this.regionsPostRaw(requestParameters);
        return await response.value();
    }

}
