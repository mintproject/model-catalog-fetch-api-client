// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    StandardVariable,
    StandardVariableFromJSON,
    StandardVariableToJSON,
} from '../models';

export interface StandardvariablesGetRequest {
    username?: string;
    label?: string;
}

export interface StandardvariablesIdDeleteRequest {
    id: string;
    user: string;
}

export interface StandardvariablesIdGetRequest {
    id: string;
    username?: string;
}

export interface StandardvariablesIdPutRequest {
    id: string;
    user: string;
    standardVariable?: StandardVariable;
}

export interface StandardvariablesPostRequest {
    user: string;
    standardVariable?: StandardVariable;
}

/**
 * no description
 */
export class StandardVariableApi extends runtime.BaseAPI {

    /**
     * Gets a list of all StandardVariable entities
     * List all StandardVariable entities
     */
    async standardvariablesGetRaw(requestParameters: StandardvariablesGetRequest): Promise<runtime.ApiResponse<Array<StandardVariable>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/standardvariables`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StandardVariableFromJSON));
    }

   /**
    * Gets a list of all StandardVariable entities
    * List all StandardVariable entities
    */
    async standardvariablesGet(requestParameters: StandardvariablesGetRequest): Promise<Array<StandardVariable>> {
        const response = await this.standardvariablesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing StandardVariable
     * Delete a StandardVariable
     */
    async standardvariablesIdDeleteRaw(requestParameters: StandardvariablesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling standardvariablesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling standardvariablesIdDelete.');
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
            path: `/standardvariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing StandardVariable
    * Delete a StandardVariable
    */
    async standardvariablesIdDelete(requestParameters: StandardvariablesIdDeleteRequest): Promise<void> {
        await this.standardvariablesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a StandardVariable
     * Get a StandardVariable
     */
    async standardvariablesIdGetRaw(requestParameters: StandardvariablesIdGetRequest): Promise<runtime.ApiResponse<StandardVariable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling standardvariablesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/standardvariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StandardVariableFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a StandardVariable
    * Get a StandardVariable
    */
    async standardvariablesIdGet(requestParameters: StandardvariablesIdGetRequest): Promise<StandardVariable> {
        const response = await this.standardvariablesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing StandardVariable
     * Update a StandardVariable
     */
    async standardvariablesIdPutRaw(requestParameters: StandardvariablesIdPutRequest): Promise<runtime.ApiResponse<StandardVariable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling standardvariablesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling standardvariablesIdPut.');
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
            path: `/standardvariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StandardVariableToJSON(requestParameters.standardVariable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StandardVariableFromJSON(jsonValue));
    }

   /**
    * Updates an existing StandardVariable
    * Update a StandardVariable
    */
    async standardvariablesIdPut(requestParameters: StandardvariablesIdPutRequest): Promise<StandardVariable> {
        const response = await this.standardvariablesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a StandardVariable
     * Create a StandardVariable
     */
    async standardvariablesPostRaw(requestParameters: StandardvariablesPostRequest): Promise<runtime.ApiResponse<StandardVariable>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling standardvariablesPost.');
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
            path: `/standardvariables`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StandardVariableToJSON(requestParameters.standardVariable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StandardVariableFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a StandardVariable
    * Create a StandardVariable
    */
    async standardvariablesPost(requestParameters: StandardvariablesPostRequest): Promise<StandardVariable> {
        const response = await this.standardvariablesPostRaw(requestParameters);
        return await response.value();
    }

}
