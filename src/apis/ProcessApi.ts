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
    Process,
    ProcessFromJSON,
    ProcessToJSON,
} from '../models';

export interface ProcesssGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface ProcesssIdDeleteRequest {
    id: string;
    user?: string;
}

export interface ProcesssIdGetRequest {
    id: string;
    username?: string;
}

export interface ProcesssIdPutRequest {
    id: string;
    user?: string;
    process?: Process;
}

export interface ProcesssPostRequest {
    user?: string;
    process?: Process;
}

/**
 * no description
 */
export class ProcessApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Process (more information in https://w3id.org/okn/o/sdm#Process)
     * List all instances of Process
     */
    async processsGetRaw(requestParameters: ProcesssGetRequest): Promise<runtime.ApiResponse<Array<Process>>> {
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
            path: `/processs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProcessFromJSON));
    }

   /**
    * Gets a list of all instances of Process (more information in https://w3id.org/okn/o/sdm#Process)
    * List all instances of Process
    */
    async processsGet(requestParameters: ProcesssGetRequest): Promise<Array<Process>> {
        const response = await this.processsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Process (more information in https://w3id.org/okn/o/sdm#Process)
     * Delete an existing Process
     */
    async processsIdDeleteRaw(requestParameters: ProcesssIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling processsIdDelete.');
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
            path: `/processs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Process (more information in https://w3id.org/okn/o/sdm#Process)
    * Delete an existing Process
    */
    async processsIdDelete(requestParameters: ProcesssIdDeleteRequest): Promise<void> {
        await this.processsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Process (more information in https://w3id.org/okn/o/sdm#Process)
     * Get a single Process by its id
     */
    async processsIdGetRaw(requestParameters: ProcesssIdGetRequest): Promise<runtime.ApiResponse<Process>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling processsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/processs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProcessFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Process (more information in https://w3id.org/okn/o/sdm#Process)
    * Get a single Process by its id
    */
    async processsIdGet(requestParameters: ProcesssIdGetRequest): Promise<Process> {
        const response = await this.processsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Process (more information in https://w3id.org/okn/o/sdm#Process)
     * Update an existing Process
     */
    async processsIdPutRaw(requestParameters: ProcesssIdPutRequest): Promise<runtime.ApiResponse<Process>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling processsIdPut.');
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
            path: `/processs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProcessToJSON(requestParameters.process),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProcessFromJSON(jsonValue));
    }

   /**
    * Updates an existing Process (more information in https://w3id.org/okn/o/sdm#Process)
    * Update an existing Process
    */
    async processsIdPut(requestParameters: ProcesssIdPutRequest): Promise<Process> {
        const response = await this.processsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Process (more information in https://w3id.org/okn/o/sdm#Process)
     * Create one Process
     */
    async processsPostRaw(requestParameters: ProcesssPostRequest): Promise<runtime.ApiResponse<Process>> {
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
            path: `/processs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProcessToJSON(requestParameters.process),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProcessFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Process (more information in https://w3id.org/okn/o/sdm#Process)
    * Create one Process
    */
    async processsPost(requestParameters: ProcesssPostRequest): Promise<Process> {
        const response = await this.processsPostRaw(requestParameters);
        return await response.value();
    }

}
