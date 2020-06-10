// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SampleResource,
    SampleResourceFromJSON,
    SampleResourceToJSON,
} from '../models';

export interface SampleresourcesGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface SampleresourcesIdDeleteRequest {
    id: string;
    user: string;
}

export interface SampleresourcesIdGetRequest {
    id: string;
    username?: string;
}

export interface SampleresourcesIdPutRequest {
    id: string;
    user: string;
    sampleResource?: SampleResource;
}

export interface SampleresourcesPostRequest {
    user: string;
    sampleResource?: SampleResource;
}

/**
 * no description
 */
export class SampleResourceApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
     * List all instances of SampleResource
     */
    async sampleresourcesGetRaw(requestParameters: SampleresourcesGetRequest): Promise<runtime.ApiResponse<Array<SampleResource>>> {
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
            path: `/sampleresources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SampleResourceFromJSON));
    }

   /**
    * Gets a list of all instances of SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
    * List all instances of SampleResource
    */
    async sampleresourcesGet(requestParameters: SampleresourcesGetRequest): Promise<Array<SampleResource>> {
        const response = await this.sampleresourcesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
     * Delete an existing SampleResource
     */
    async sampleresourcesIdDeleteRaw(requestParameters: SampleresourcesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleresourcesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleresourcesIdDelete.');
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
            path: `/sampleresources/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
    * Delete an existing SampleResource
    */
    async sampleresourcesIdDelete(requestParameters: SampleresourcesIdDeleteRequest): Promise<void> {
        await this.sampleresourcesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
     * Get a single SampleResource by its id
     */
    async sampleresourcesIdGetRaw(requestParameters: SampleresourcesIdGetRequest): Promise<runtime.ApiResponse<SampleResource>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleresourcesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sampleresources/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleResourceFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
    * Get a single SampleResource by its id
    */
    async sampleresourcesIdGet(requestParameters: SampleresourcesIdGetRequest): Promise<SampleResource> {
        const response = await this.sampleresourcesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
     * Update an existing SampleResource
     */
    async sampleresourcesIdPutRaw(requestParameters: SampleresourcesIdPutRequest): Promise<runtime.ApiResponse<SampleResource>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleresourcesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleresourcesIdPut.');
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
            path: `/sampleresources/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SampleResourceToJSON(requestParameters.sampleResource),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleResourceFromJSON(jsonValue));
    }

   /**
    * Updates an existing SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
    * Update an existing SampleResource
    */
    async sampleresourcesIdPut(requestParameters: SampleresourcesIdPutRequest): Promise<SampleResource> {
        const response = await this.sampleresourcesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
     * Create one SampleResource
     */
    async sampleresourcesPostRaw(requestParameters: SampleresourcesPostRequest): Promise<runtime.ApiResponse<SampleResource>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleresourcesPost.');
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
            path: `/sampleresources`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SampleResourceToJSON(requestParameters.sampleResource),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleResourceFromJSON(jsonValue));
    }

   /**
    * Create a new instance of SampleResource (more information in https://w3id.org/okn/o/sd#SampleResource)
    * Create one SampleResource
    */
    async sampleresourcesPost(requestParameters: SampleresourcesPostRequest): Promise<SampleResource> {
        const response = await this.sampleresourcesPostRaw(requestParameters);
        return await response.value();
    }

}
