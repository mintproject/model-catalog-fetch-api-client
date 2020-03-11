// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SVOVariable,
    SVOVariableFromJSON,
    SVOVariableToJSON,
} from '../models';

export interface SvovariablesGetRequest {
    username?: string;
    label?: string;
}

export interface SvovariablesIdDeleteRequest {
    id: string;
    user: string;
}

export interface SvovariablesIdGetRequest {
    id: string;
    username?: string;
}

export interface SvovariablesIdPutRequest {
    id: string;
    user: string;
    sVOVariable?: SVOVariable;
}

export interface SvovariablesPostRequest {
    user: string;
    sVOVariable?: SVOVariable;
}

/**
 * no description
 */
export class SVOVariableApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SVOVariable entities
     * List all SVOVariable entities
     */
    async svovariablesGetRaw(requestParameters: SvovariablesGetRequest): Promise<runtime.ApiResponse<Array<SVOVariable>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/svovariables`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SVOVariableFromJSON));
    }

   /**
    * Gets a list of all SVOVariable entities
    * List all SVOVariable entities
    */
    async svovariablesGet(requestParameters: SvovariablesGetRequest): Promise<Array<SVOVariable>> {
        const response = await this.svovariablesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SVOVariable
     * Delete a SVOVariable
     */
    async svovariablesIdDeleteRaw(requestParameters: SvovariablesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling svovariablesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling svovariablesIdDelete.');
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
            path: `/svovariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SVOVariable
    * Delete a SVOVariable
    */
    async svovariablesIdDelete(requestParameters: SvovariablesIdDeleteRequest): Promise<void> {
        await this.svovariablesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SVOVariable
     * Get a SVOVariable
     */
    async svovariablesIdGetRaw(requestParameters: SvovariablesIdGetRequest): Promise<runtime.ApiResponse<SVOVariable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling svovariablesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/svovariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SVOVariableFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SVOVariable
    * Get a SVOVariable
    */
    async svovariablesIdGet(requestParameters: SvovariablesIdGetRequest): Promise<SVOVariable> {
        const response = await this.svovariablesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SVOVariable
     * Update a SVOVariable
     */
    async svovariablesIdPutRaw(requestParameters: SvovariablesIdPutRequest): Promise<runtime.ApiResponse<SVOVariable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling svovariablesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling svovariablesIdPut.');
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
            path: `/svovariables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SVOVariableToJSON(requestParameters.sVOVariable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SVOVariableFromJSON(jsonValue));
    }

   /**
    * Updates an existing SVOVariable
    * Update a SVOVariable
    */
    async svovariablesIdPut(requestParameters: SvovariablesIdPutRequest): Promise<SVOVariable> {
        const response = await this.svovariablesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SVOVariable
     * Create a SVOVariable
     */
    async svovariablesPostRaw(requestParameters: SvovariablesPostRequest): Promise<runtime.ApiResponse<SVOVariable>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling svovariablesPost.');
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
            path: `/svovariables`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SVOVariableToJSON(requestParameters.sVOVariable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SVOVariableFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SVOVariable
    * Create a SVOVariable
    */
    async svovariablesPost(requestParameters: SvovariablesPostRequest): Promise<SVOVariable> {
        const response = await this.svovariablesPostRaw(requestParameters);
        return await response.value();
    }

}
