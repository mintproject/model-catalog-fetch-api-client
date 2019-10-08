// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.0.0
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
    queryText?: string;
}

export interface RegionsIdDeleteRequest {
    id: string;
    user: string;
}

export interface RegionsIdGetRequest {
    id: string;
    username?: string;
}

export interface RegionsIdPutRequest {
    id: string;
    user: string;
    region?: Region;
}

export interface RegionsPostRequest {
    user: string;
    region?: Region;
}

/**
 * no description
 */
export class RegionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Region entities
     * List all Region entities
     */
    async regionsGetRaw(requestParameters: RegionsGetRequest): Promise<runtime.ApiResponse<Array<Region>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
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
    * Gets a list of all Region entities
    * List all Region entities
    */
    async regionsGet(requestParameters: RegionsGetRequest): Promise<Array<Region>> {
        const response = await this.regionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Region
     * Delete a Region
     */
    async regionsIdDeleteRaw(requestParameters: RegionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling regionsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling regionsIdDelete.');
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
            path: `/regions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Region
    * Delete a Region
    */
    async regionsIdDelete(requestParameters: RegionsIdDeleteRequest): Promise<void> {
        await this.regionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Region
     * Get a Region
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
    * Gets the details of a single instance of a Region
    * Get a Region
    */
    async regionsIdGet(requestParameters: RegionsIdGetRequest): Promise<Region> {
        const response = await this.regionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Region
     * Update a Region
     */
    async regionsIdPutRaw(requestParameters: RegionsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling regionsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling regionsIdPut.');
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
            path: `/regions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RegionToJSON(requestParameters.region),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing Region
    * Update a Region
    */
    async regionsIdPut(requestParameters: RegionsIdPutRequest): Promise<void> {
        await this.regionsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a Region
     * Create a Region
     */
    async regionsPostRaw(requestParameters: RegionsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling regionsPost.');
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
            path: `/regions`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegionToJSON(requestParameters.region),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a Region
    * Create a Region
    */
    async regionsPost(requestParameters: RegionsPostRequest): Promise<void> {
        await this.regionsPostRaw(requestParameters);
    }

}
