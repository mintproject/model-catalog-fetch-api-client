// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SampleExecution,
    SampleExecutionFromJSON,
    SampleExecutionToJSON,
} from '../models';

export interface SampleexecutionsGetRequest {
    username?: string;
    label?: string;
}

export interface SampleexecutionsIdDeleteRequest {
    id: string;
    user: string;
}

export interface SampleexecutionsIdGetRequest {
    id: string;
    username?: string;
}

export interface SampleexecutionsIdPutRequest {
    id: string;
    user: string;
    sampleExecution?: SampleExecution;
}

export interface SampleexecutionsPostRequest {
    user: string;
    sampleExecution?: SampleExecution;
}

/**
 * no description
 */
export class SampleExecutionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SampleExecution entities
     * List all SampleExecution entities
     */
    async sampleexecutionsGetRaw(requestParameters: SampleexecutionsGetRequest): Promise<runtime.ApiResponse<Array<SampleExecution>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sampleexecutions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SampleExecutionFromJSON));
    }

   /**
    * Gets a list of all SampleExecution entities
    * List all SampleExecution entities
    */
    async sampleexecutionsGet(requestParameters: SampleexecutionsGetRequest): Promise<Array<SampleExecution>> {
        const response = await this.sampleexecutionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SampleExecution
     * Delete a SampleExecution
     */
    async sampleexecutionsIdDeleteRaw(requestParameters: SampleexecutionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleexecutionsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleexecutionsIdDelete.');
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
            path: `/sampleexecutions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SampleExecution
    * Delete a SampleExecution
    */
    async sampleexecutionsIdDelete(requestParameters: SampleexecutionsIdDeleteRequest): Promise<void> {
        await this.sampleexecutionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SampleExecution
     * Get a SampleExecution
     */
    async sampleexecutionsIdGetRaw(requestParameters: SampleexecutionsIdGetRequest): Promise<runtime.ApiResponse<SampleExecution>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleexecutionsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sampleexecutions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleExecutionFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SampleExecution
    * Get a SampleExecution
    */
    async sampleexecutionsIdGet(requestParameters: SampleexecutionsIdGetRequest): Promise<SampleExecution> {
        const response = await this.sampleexecutionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SampleExecution
     * Update a SampleExecution
     */
    async sampleexecutionsIdPutRaw(requestParameters: SampleexecutionsIdPutRequest): Promise<runtime.ApiResponse<SampleExecution>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sampleexecutionsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleexecutionsIdPut.');
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
            path: `/sampleexecutions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SampleExecutionToJSON(requestParameters.sampleExecution),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleExecutionFromJSON(jsonValue));
    }

   /**
    * Updates an existing SampleExecution
    * Update a SampleExecution
    */
    async sampleexecutionsIdPut(requestParameters: SampleexecutionsIdPutRequest): Promise<SampleExecution> {
        const response = await this.sampleexecutionsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SampleExecution
     * Create a SampleExecution
     */
    async sampleexecutionsPostRaw(requestParameters: SampleexecutionsPostRequest): Promise<runtime.ApiResponse<SampleExecution>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sampleexecutionsPost.');
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
            path: `/sampleexecutions`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SampleExecutionToJSON(requestParameters.sampleExecution),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SampleExecutionFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SampleExecution
    * Create a SampleExecution
    */
    async sampleexecutionsPost(requestParameters: SampleexecutionsPostRequest): Promise<SampleExecution> {
        const response = await this.sampleexecutionsPostRaw(requestParameters);
        return await response.value();
    }

}
