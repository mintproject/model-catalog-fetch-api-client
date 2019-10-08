// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    VariablePresentation,
    VariablePresentationFromJSON,
    VariablePresentationToJSON,
} from '../models';

export interface VariablepresentationsGetRequest {
    username?: string;
    queryText?: string;
}

export interface VariablepresentationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface VariablepresentationsIdGetRequest {
    id: string;
    username?: string;
}

export interface VariablepresentationsIdPutRequest {
    id: string;
    user: string;
    variablePresentation?: VariablePresentation;
}

export interface VariablepresentationsPostRequest {
    user: string;
    variablePresentation?: VariablePresentation;
}

/**
 * no description
 */
export class VariablePresentationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all VariablePresentation entities
     * List all VariablePresentation entities
     */
    async variablepresentationsGetRaw(requestParameters: VariablepresentationsGetRequest): Promise<runtime.ApiResponse<Array<VariablePresentation>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/variablepresentations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VariablePresentationFromJSON));
    }

   /**
    * Gets a list of all VariablePresentation entities
    * List all VariablePresentation entities
    */
    async variablepresentationsGet(requestParameters: VariablepresentationsGetRequest): Promise<Array<VariablePresentation>> {
        const response = await this.variablepresentationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing VariablePresentation
     * Delete a VariablePresentation
     */
    async variablepresentationsIdDeleteRaw(requestParameters: VariablepresentationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablepresentationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling variablepresentationsIdDelete.');
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
            path: `/variablepresentations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing VariablePresentation
    * Delete a VariablePresentation
    */
    async variablepresentationsIdDelete(requestParameters: VariablepresentationsIdDeleteRequest): Promise<void> {
        await this.variablepresentationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a VariablePresentation
     * Get a VariablePresentation
     */
    async variablepresentationsIdGetRaw(requestParameters: VariablepresentationsIdGetRequest): Promise<runtime.ApiResponse<VariablePresentation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablepresentationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/variablepresentations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VariablePresentationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a VariablePresentation
    * Get a VariablePresentation
    */
    async variablepresentationsIdGet(requestParameters: VariablepresentationsIdGetRequest): Promise<VariablePresentation> {
        const response = await this.variablepresentationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing VariablePresentation
     * Update a VariablePresentation
     */
    async variablepresentationsIdPutRaw(requestParameters: VariablepresentationsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablepresentationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling variablepresentationsIdPut.');
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
            path: `/variablepresentations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: VariablePresentationToJSON(requestParameters.variablePresentation),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing VariablePresentation
    * Update a VariablePresentation
    */
    async variablepresentationsIdPut(requestParameters: VariablepresentationsIdPutRequest): Promise<void> {
        await this.variablepresentationsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a VariablePresentation
     * Create a VariablePresentation
     */
    async variablepresentationsPostRaw(requestParameters: VariablepresentationsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling variablepresentationsPost.');
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
            path: `/variablepresentations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VariablePresentationToJSON(requestParameters.variablePresentation),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a VariablePresentation
    * Create a VariablePresentation
    */
    async variablepresentationsPost(requestParameters: VariablepresentationsPostRequest): Promise<void> {
        await this.variablepresentationsPostRaw(requestParameters);
    }

}
