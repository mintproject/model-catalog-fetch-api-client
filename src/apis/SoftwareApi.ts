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
    Software,
    SoftwareFromJSON,
    SoftwareToJSON,
} from '../models';

export interface SoftwaresGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface SoftwaresIdDeleteRequest {
    id: string;
    user: string;
}

export interface SoftwaresIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwaresIdPutRequest {
    id: string;
    user: string;
    software?: Software;
}

export interface SoftwaresPostRequest {
    user: string;
    software?: Software;
}

/**
 * no description
 */
export class SoftwareApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Software (more information in https://w3id.org/okn/o/sd#Software)
     * List all instances of Software
     */
    async softwaresGetRaw(requestParameters: SoftwaresGetRequest): Promise<runtime.ApiResponse<Array<Software>>> {
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
            path: `/softwares`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareFromJSON));
    }

   /**
    * Gets a list of all instances of Software (more information in https://w3id.org/okn/o/sd#Software)
    * List all instances of Software
    */
    async softwaresGet(requestParameters: SoftwaresGetRequest): Promise<Array<Software>> {
        const response = await this.softwaresGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Software (more information in https://w3id.org/okn/o/sd#Software)
     * Delete an existing Software
     */
    async softwaresIdDeleteRaw(requestParameters: SoftwaresIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwaresIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwaresIdDelete.');
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
            path: `/softwares/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Software (more information in https://w3id.org/okn/o/sd#Software)
    * Delete an existing Software
    */
    async softwaresIdDelete(requestParameters: SoftwaresIdDeleteRequest): Promise<void> {
        await this.softwaresIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Software (more information in https://w3id.org/okn/o/sd#Software)
     * Get a single Software by its id
     */
    async softwaresIdGetRaw(requestParameters: SoftwaresIdGetRequest): Promise<runtime.ApiResponse<Software>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwaresIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwares/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Software (more information in https://w3id.org/okn/o/sd#Software)
    * Get a single Software by its id
    */
    async softwaresIdGet(requestParameters: SoftwaresIdGetRequest): Promise<Software> {
        const response = await this.softwaresIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Software (more information in https://w3id.org/okn/o/sd#Software)
     * Update an existing Software
     */
    async softwaresIdPutRaw(requestParameters: SoftwaresIdPutRequest): Promise<runtime.ApiResponse<Software>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwaresIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwaresIdPut.');
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
            path: `/softwares/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareToJSON(requestParameters.software),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareFromJSON(jsonValue));
    }

   /**
    * Updates an existing Software (more information in https://w3id.org/okn/o/sd#Software)
    * Update an existing Software
    */
    async softwaresIdPut(requestParameters: SoftwaresIdPutRequest): Promise<Software> {
        const response = await this.softwaresIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Software (more information in https://w3id.org/okn/o/sd#Software)
     * Create one Software
     */
    async softwaresPostRaw(requestParameters: SoftwaresPostRequest): Promise<runtime.ApiResponse<Software>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwaresPost.');
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
            path: `/softwares`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareToJSON(requestParameters.software),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Software (more information in https://w3id.org/okn/o/sd#Software)
    * Create one Software
    */
    async softwaresPost(requestParameters: SoftwaresPostRequest): Promise<Software> {
        const response = await this.softwaresPostRaw(requestParameters);
        return await response.value();
    }

}
