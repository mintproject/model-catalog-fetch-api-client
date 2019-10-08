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
    Organization,
    OrganizationFromJSON,
    OrganizationToJSON,
} from '../models';

export interface OrganizationsGetRequest {
    username?: string;
    label?: string;
}

export interface OrganizationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface OrganizationsIdGetRequest {
    id: string;
    username?: string;
}

export interface OrganizationsIdPutRequest {
    id: string;
    user: string;
    organization?: Organization;
}

export interface OrganizationsPostRequest {
    user: string;
    organization?: Organization;
}

/**
 * no description
 */
export class OrganizationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Organization entities
     * List all Organization entities
     */
    async organizationsGetRaw(requestParameters: OrganizationsGetRequest): Promise<runtime.ApiResponse<Array<Organization>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrganizationFromJSON));
    }

   /**
    * Gets a list of all Organization entities
    * List all Organization entities
    */
    async organizationsGet(requestParameters: OrganizationsGetRequest): Promise<Array<Organization>> {
        const response = await this.organizationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Organization
     * Delete a Organization
     */
    async organizationsIdDeleteRaw(requestParameters: OrganizationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling organizationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling organizationsIdDelete.');
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
            path: `/organizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Organization
    * Delete a Organization
    */
    async organizationsIdDelete(requestParameters: OrganizationsIdDeleteRequest): Promise<void> {
        await this.organizationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Organization
     * Get a Organization
     */
    async organizationsIdGetRaw(requestParameters: OrganizationsIdGetRequest): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling organizationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/organizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Organization
    * Get a Organization
    */
    async organizationsIdGet(requestParameters: OrganizationsIdGetRequest): Promise<Organization> {
        const response = await this.organizationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Organization
     * Update a Organization
     */
    async organizationsIdPutRaw(requestParameters: OrganizationsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling organizationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling organizationsIdPut.');
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
            path: `/organizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationToJSON(requestParameters.organization),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing Organization
    * Update a Organization
    */
    async organizationsIdPut(requestParameters: OrganizationsIdPutRequest): Promise<void> {
        await this.organizationsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a Organization
     * Create a Organization
     */
    async organizationsPostRaw(requestParameters: OrganizationsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling organizationsPost.');
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
            path: `/organizations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationToJSON(requestParameters.organization),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a Organization
    * Create a Organization
    */
    async organizationsPost(requestParameters: OrganizationsPostRequest): Promise<void> {
        await this.organizationsPostRaw(requestParameters);
    }

}
