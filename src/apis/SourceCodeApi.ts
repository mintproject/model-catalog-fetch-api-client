// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SourceCode,
    SourceCodeFromJSON,
    SourceCodeToJSON,
} from '../models';

export interface SourcecodesGetRequest {
    username?: string;
    label?: string;
}

export interface SourcecodesIdDeleteRequest {
    id: string;
    user: string;
}

export interface SourcecodesIdGetRequest {
    id: string;
    username?: string;
}

export interface SourcecodesIdPutRequest {
    id: string;
    user: string;
    sourceCode?: SourceCode;
}

export interface SourcecodesPostRequest {
    user: string;
    sourceCode?: SourceCode;
}

/**
 * no description
 */
export class SourceCodeApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SourceCode entities
     * List all SourceCode entities
     */
    async sourcecodesGetRaw(requestParameters: SourcecodesGetRequest): Promise<runtime.ApiResponse<Array<SourceCode>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sourcecodes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SourceCodeFromJSON));
    }

   /**
    * Gets a list of all SourceCode entities
    * List all SourceCode entities
    */
    async sourcecodesGet(requestParameters: SourcecodesGetRequest): Promise<Array<SourceCode>> {
        const response = await this.sourcecodesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SourceCode
     * Delete a SourceCode
     */
    async sourcecodesIdDeleteRaw(requestParameters: SourcecodesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sourcecodesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sourcecodesIdDelete.');
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
            path: `/sourcecodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SourceCode
    * Delete a SourceCode
    */
    async sourcecodesIdDelete(requestParameters: SourcecodesIdDeleteRequest): Promise<void> {
        await this.sourcecodesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SourceCode
     * Get a SourceCode
     */
    async sourcecodesIdGetRaw(requestParameters: SourcecodesIdGetRequest): Promise<runtime.ApiResponse<SourceCode>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sourcecodesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sourcecodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceCodeFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SourceCode
    * Get a SourceCode
    */
    async sourcecodesIdGet(requestParameters: SourcecodesIdGetRequest): Promise<SourceCode> {
        const response = await this.sourcecodesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SourceCode
     * Update a SourceCode
     */
    async sourcecodesIdPutRaw(requestParameters: SourcecodesIdPutRequest): Promise<runtime.ApiResponse<SourceCode>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sourcecodesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sourcecodesIdPut.');
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
            path: `/sourcecodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SourceCodeToJSON(requestParameters.sourceCode),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceCodeFromJSON(jsonValue));
    }

   /**
    * Updates an existing SourceCode
    * Update a SourceCode
    */
    async sourcecodesIdPut(requestParameters: SourcecodesIdPutRequest): Promise<SourceCode> {
        const response = await this.sourcecodesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SourceCode
     * Create a SourceCode
     */
    async sourcecodesPostRaw(requestParameters: SourcecodesPostRequest): Promise<runtime.ApiResponse<SourceCode>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sourcecodesPost.');
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
            path: `/sourcecodes`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SourceCodeToJSON(requestParameters.sourceCode),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceCodeFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SourceCode
    * Create a SourceCode
    */
    async sourcecodesPost(requestParameters: SourcecodesPostRequest): Promise<SourceCode> {
        const response = await this.sourcecodesPostRaw(requestParameters);
        return await response.value();
    }

}
