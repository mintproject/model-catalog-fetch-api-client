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
    SoftwareVersion,
    SoftwareVersionFromJSON,
    SoftwareVersionToJSON,
} from '../models';

export interface SoftwareversionsGetRequest {
    username?: string;
    label?: string;
}

export interface SoftwareversionsIdDeleteRequest {
    id: string;
    user: string;
}

export interface SoftwareversionsIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwareversionsIdPutRequest {
    id: string;
    user: string;
    softwareVersion?: SoftwareVersion;
}

export interface SoftwareversionsPostRequest {
    user: string;
    softwareVersion?: SoftwareVersion;
}

/**
 * no description
 */
export class SoftwareVersionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SoftwareVersion entities
     * List all SoftwareVersion entities
     */
    async softwareversionsGetRaw(requestParameters: SoftwareversionsGetRequest): Promise<runtime.ApiResponse<Array<SoftwareVersion>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareversions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareVersionFromJSON));
    }

   /**
    * Gets a list of all SoftwareVersion entities
    * List all SoftwareVersion entities
    */
    async softwareversionsGet(requestParameters: SoftwareversionsGetRequest): Promise<Array<SoftwareVersion>> {
        const response = await this.softwareversionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SoftwareVersion
     * Delete a SoftwareVersion
     */
    async softwareversionsIdDeleteRaw(requestParameters: SoftwareversionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareversionsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareversionsIdDelete.');
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
            path: `/softwareversions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SoftwareVersion
    * Delete a SoftwareVersion
    */
    async softwareversionsIdDelete(requestParameters: SoftwareversionsIdDeleteRequest): Promise<void> {
        await this.softwareversionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SoftwareVersion
     * Get a SoftwareVersion
     */
    async softwareversionsIdGetRaw(requestParameters: SoftwareversionsIdGetRequest): Promise<runtime.ApiResponse<SoftwareVersion>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareversionsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareversions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareVersionFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SoftwareVersion
    * Get a SoftwareVersion
    */
    async softwareversionsIdGet(requestParameters: SoftwareversionsIdGetRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SoftwareVersion
     * Update a SoftwareVersion
     */
    async softwareversionsIdPutRaw(requestParameters: SoftwareversionsIdPutRequest): Promise<runtime.ApiResponse<SoftwareVersion>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareversionsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareversionsIdPut.');
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
            path: `/softwareversions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareVersionToJSON(requestParameters.softwareVersion),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareVersionFromJSON(jsonValue));
    }

   /**
    * Updates an existing SoftwareVersion
    * Update a SoftwareVersion
    */
    async softwareversionsIdPut(requestParameters: SoftwareversionsIdPutRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SoftwareVersion
     * Create a SoftwareVersion
     */
    async softwareversionsPostRaw(requestParameters: SoftwareversionsPostRequest): Promise<runtime.ApiResponse<SoftwareVersion>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareversionsPost.');
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
            path: `/softwareversions`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareVersionToJSON(requestParameters.softwareVersion),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareVersionFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SoftwareVersion
    * Create a SoftwareVersion
    */
    async softwareversionsPost(requestParameters: SoftwareversionsPostRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsPostRaw(requestParameters);
        return await response.value();
    }

}
