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
    SoftwareConfiguration,
    SoftwareConfigurationFromJSON,
    SoftwareConfigurationToJSON,
} from '../models';

export interface SoftwareconfigurationsGetRequest {
    username?: string;
    queryText?: string;
}

export interface SoftwareconfigurationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface SoftwareconfigurationsIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwareconfigurationsIdPutRequest {
    id: string;
    user: string;
    softwareConfiguration?: SoftwareConfiguration;
}

export interface SoftwareconfigurationsPostRequest {
    user: string;
    softwareConfiguration?: SoftwareConfiguration;
}

/**
 * no description
 */
export class SoftwareConfigurationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SoftwareConfiguration entities
     * List all SoftwareConfiguration entities
     */
    async softwareconfigurationsGetRaw(requestParameters: SoftwareconfigurationsGetRequest): Promise<runtime.ApiResponse<Array<SoftwareConfiguration>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareconfigurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareConfigurationFromJSON));
    }

   /**
    * Gets a list of all SoftwareConfiguration entities
    * List all SoftwareConfiguration entities
    */
    async softwareconfigurationsGet(requestParameters: SoftwareconfigurationsGetRequest): Promise<Array<SoftwareConfiguration>> {
        const response = await this.softwareconfigurationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SoftwareConfiguration
     * Delete a SoftwareConfiguration
     */
    async softwareconfigurationsIdDeleteRaw(requestParameters: SoftwareconfigurationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareconfigurationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareconfigurationsIdDelete.');
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
            path: `/softwareconfigurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SoftwareConfiguration
    * Delete a SoftwareConfiguration
    */
    async softwareconfigurationsIdDelete(requestParameters: SoftwareconfigurationsIdDeleteRequest): Promise<void> {
        await this.softwareconfigurationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SoftwareConfiguration
     * Get a SoftwareConfiguration
     */
    async softwareconfigurationsIdGetRaw(requestParameters: SoftwareconfigurationsIdGetRequest): Promise<runtime.ApiResponse<SoftwareConfiguration>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareconfigurationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareconfigurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareConfigurationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SoftwareConfiguration
    * Get a SoftwareConfiguration
    */
    async softwareconfigurationsIdGet(requestParameters: SoftwareconfigurationsIdGetRequest): Promise<SoftwareConfiguration> {
        const response = await this.softwareconfigurationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SoftwareConfiguration
     * Update a SoftwareConfiguration
     */
    async softwareconfigurationsIdPutRaw(requestParameters: SoftwareconfigurationsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareconfigurationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareconfigurationsIdPut.');
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
            path: `/softwareconfigurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareConfigurationToJSON(requestParameters.softwareConfiguration),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing SoftwareConfiguration
    * Update a SoftwareConfiguration
    */
    async softwareconfigurationsIdPut(requestParameters: SoftwareconfigurationsIdPutRequest): Promise<void> {
        await this.softwareconfigurationsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a SoftwareConfiguration
     * Create a SoftwareConfiguration
     */
    async softwareconfigurationsPostRaw(requestParameters: SoftwareconfigurationsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareconfigurationsPost.');
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
            path: `/softwareconfigurations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareConfigurationToJSON(requestParameters.softwareConfiguration),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a SoftwareConfiguration
    * Create a SoftwareConfiguration
    */
    async softwareconfigurationsPost(requestParameters: SoftwareconfigurationsPostRequest): Promise<void> {
        await this.softwareconfigurationsPostRaw(requestParameters);
    }

}
