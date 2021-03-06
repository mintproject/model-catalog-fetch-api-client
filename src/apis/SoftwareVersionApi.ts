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
    SoftwareVersion,
    SoftwareVersionFromJSON,
    SoftwareVersionToJSON,
} from '../models';

export interface SoftwareversionsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface SoftwareversionsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface SoftwareversionsIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwareversionsIdPutRequest {
    id: string;
    user?: string;
    softwareVersion?: SoftwareVersion;
}

export interface SoftwareversionsPostRequest {
    user?: string;
    softwareVersion?: SoftwareVersion;
}

/**
 * no description
 */
export class SoftwareVersionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
     * List all instances of SoftwareVersion
     */
    async softwareversionsGetRaw(requestParameters: SoftwareversionsGetRequest): Promise<runtime.ApiResponse<Array<SoftwareVersion>>> {
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
            path: `/softwareversions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareVersionFromJSON));
    }

   /**
    * Gets a list of all instances of SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
    * List all instances of SoftwareVersion
    */
    async softwareversionsGet(requestParameters: SoftwareversionsGetRequest): Promise<Array<SoftwareVersion>> {
        const response = await this.softwareversionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
     * Delete an existing SoftwareVersion
     */
    async softwareversionsIdDeleteRaw(requestParameters: SoftwareversionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareversionsIdDelete.');
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
            path: `/softwareversions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
    * Delete an existing SoftwareVersion
    */
    async softwareversionsIdDelete(requestParameters: SoftwareversionsIdDeleteRequest): Promise<void> {
        await this.softwareversionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
     * Get a single SoftwareVersion by its id
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
    * Gets the details of a given SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
    * Get a single SoftwareVersion by its id
    */
    async softwareversionsIdGet(requestParameters: SoftwareversionsIdGetRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
     * Update an existing SoftwareVersion
     */
    async softwareversionsIdPutRaw(requestParameters: SoftwareversionsIdPutRequest): Promise<runtime.ApiResponse<SoftwareVersion>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareversionsIdPut.');
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
            path: `/softwareversions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareVersionToJSON(requestParameters.softwareVersion),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareVersionFromJSON(jsonValue));
    }

   /**
    * Updates an existing SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
    * Update an existing SoftwareVersion
    */
    async softwareversionsIdPut(requestParameters: SoftwareversionsIdPutRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
     * Create one SoftwareVersion
     */
    async softwareversionsPostRaw(requestParameters: SoftwareversionsPostRequest): Promise<runtime.ApiResponse<SoftwareVersion>> {
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
            path: `/softwareversions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareVersionToJSON(requestParameters.softwareVersion),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareVersionFromJSON(jsonValue));
    }

   /**
    * Create a new instance of SoftwareVersion (more information in https://w3id.org/okn/o/sd#SoftwareVersion)
    * Create one SoftwareVersion
    */
    async softwareversionsPost(requestParameters: SoftwareversionsPostRequest): Promise<SoftwareVersion> {
        const response = await this.softwareversionsPostRaw(requestParameters);
        return await response.value();
    }

}
