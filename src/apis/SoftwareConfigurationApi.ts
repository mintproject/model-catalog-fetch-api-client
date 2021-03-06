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
    SoftwareConfiguration,
    SoftwareConfigurationFromJSON,
    SoftwareConfigurationToJSON,
} from '../models';

export interface SoftwareconfigurationsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface SoftwareconfigurationsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface SoftwareconfigurationsIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwareconfigurationsIdPutRequest {
    id: string;
    user?: string;
    softwareConfiguration?: SoftwareConfiguration;
}

export interface SoftwareconfigurationsPostRequest {
    user?: string;
    softwareConfiguration?: SoftwareConfiguration;
}

/**
 * no description
 */
export class SoftwareConfigurationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
     * List all instances of SoftwareConfiguration
     */
    async softwareconfigurationsGetRaw(requestParameters: SoftwareconfigurationsGetRequest): Promise<runtime.ApiResponse<Array<SoftwareConfiguration>>> {
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
            path: `/softwareconfigurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareConfigurationFromJSON));
    }

   /**
    * Gets a list of all instances of SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
    * List all instances of SoftwareConfiguration
    */
    async softwareconfigurationsGet(requestParameters: SoftwareconfigurationsGetRequest): Promise<Array<SoftwareConfiguration>> {
        const response = await this.softwareconfigurationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
     * Delete an existing SoftwareConfiguration
     */
    async softwareconfigurationsIdDeleteRaw(requestParameters: SoftwareconfigurationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareconfigurationsIdDelete.');
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
            path: `/softwareconfigurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
    * Delete an existing SoftwareConfiguration
    */
    async softwareconfigurationsIdDelete(requestParameters: SoftwareconfigurationsIdDeleteRequest): Promise<void> {
        await this.softwareconfigurationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
     * Get a single SoftwareConfiguration by its id
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
    * Gets the details of a given SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
    * Get a single SoftwareConfiguration by its id
    */
    async softwareconfigurationsIdGet(requestParameters: SoftwareconfigurationsIdGetRequest): Promise<SoftwareConfiguration> {
        const response = await this.softwareconfigurationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
     * Update an existing SoftwareConfiguration
     */
    async softwareconfigurationsIdPutRaw(requestParameters: SoftwareconfigurationsIdPutRequest): Promise<runtime.ApiResponse<SoftwareConfiguration>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareconfigurationsIdPut.');
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
            path: `/softwareconfigurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareConfigurationToJSON(requestParameters.softwareConfiguration),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareConfigurationFromJSON(jsonValue));
    }

   /**
    * Updates an existing SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
    * Update an existing SoftwareConfiguration
    */
    async softwareconfigurationsIdPut(requestParameters: SoftwareconfigurationsIdPutRequest): Promise<SoftwareConfiguration> {
        const response = await this.softwareconfigurationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
     * Create one SoftwareConfiguration
     */
    async softwareconfigurationsPostRaw(requestParameters: SoftwareconfigurationsPostRequest): Promise<runtime.ApiResponse<SoftwareConfiguration>> {
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
            path: `/softwareconfigurations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareConfigurationToJSON(requestParameters.softwareConfiguration),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareConfigurationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of SoftwareConfiguration (more information in https://w3id.org/okn/o/sd#SoftwareConfiguration)
    * Create one SoftwareConfiguration
    */
    async softwareconfigurationsPost(requestParameters: SoftwareconfigurationsPostRequest): Promise<SoftwareConfiguration> {
        const response = await this.softwareconfigurationsPostRaw(requestParameters);
        return await response.value();
    }

}
