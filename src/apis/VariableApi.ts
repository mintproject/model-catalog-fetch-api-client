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
    Variable,
    VariableFromJSON,
    VariableToJSON,
} from '../models';

export interface VariablesGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface VariablesIdDeleteRequest {
    id: string;
    user?: string;
}

export interface VariablesIdGetRequest {
    id: string;
    username?: string;
}

export interface VariablesIdPutRequest {
    id: string;
    user?: string;
    variable?: Variable;
}

export interface VariablesPostRequest {
    user?: string;
    variable?: Variable;
}

/**
 * no description
 */
export class VariableApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Variable (more information in https://w3id.org/okn/o/sd#Variable)
     * List all instances of Variable
     */
    async variablesGetRaw(requestParameters: VariablesGetRequest): Promise<runtime.ApiResponse<Array<Variable>>> {
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
            path: `/variables`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VariableFromJSON));
    }

   /**
    * Gets a list of all instances of Variable (more information in https://w3id.org/okn/o/sd#Variable)
    * List all instances of Variable
    */
    async variablesGet(requestParameters: VariablesGetRequest): Promise<Array<Variable>> {
        const response = await this.variablesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Variable (more information in https://w3id.org/okn/o/sd#Variable)
     * Delete an existing Variable
     */
    async variablesIdDeleteRaw(requestParameters: VariablesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablesIdDelete.');
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
            path: `/variables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Variable (more information in https://w3id.org/okn/o/sd#Variable)
    * Delete an existing Variable
    */
    async variablesIdDelete(requestParameters: VariablesIdDeleteRequest): Promise<void> {
        await this.variablesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Variable (more information in https://w3id.org/okn/o/sd#Variable)
     * Get a single Variable by its id
     */
    async variablesIdGetRaw(requestParameters: VariablesIdGetRequest): Promise<runtime.ApiResponse<Variable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/variables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VariableFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Variable (more information in https://w3id.org/okn/o/sd#Variable)
    * Get a single Variable by its id
    */
    async variablesIdGet(requestParameters: VariablesIdGetRequest): Promise<Variable> {
        const response = await this.variablesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Variable (more information in https://w3id.org/okn/o/sd#Variable)
     * Update an existing Variable
     */
    async variablesIdPutRaw(requestParameters: VariablesIdPutRequest): Promise<runtime.ApiResponse<Variable>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling variablesIdPut.');
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
            path: `/variables/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: VariableToJSON(requestParameters.variable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VariableFromJSON(jsonValue));
    }

   /**
    * Updates an existing Variable (more information in https://w3id.org/okn/o/sd#Variable)
    * Update an existing Variable
    */
    async variablesIdPut(requestParameters: VariablesIdPutRequest): Promise<Variable> {
        const response = await this.variablesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Variable (more information in https://w3id.org/okn/o/sd#Variable)
     * Create one Variable
     */
    async variablesPostRaw(requestParameters: VariablesPostRequest): Promise<runtime.ApiResponse<Variable>> {
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
            path: `/variables`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VariableToJSON(requestParameters.variable),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VariableFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Variable (more information in https://w3id.org/okn/o/sd#Variable)
    * Create one Variable
    */
    async variablesPost(requestParameters: VariablesPostRequest): Promise<Variable> {
        const response = await this.variablesPostRaw(requestParameters);
        return await response.value();
    }

}
