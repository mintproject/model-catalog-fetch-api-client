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
    Equation,
    EquationFromJSON,
    EquationToJSON,
} from '../models';

export interface EquationsGetRequest {
    username?: string;
    label?: string;
}

export interface EquationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface EquationsIdGetRequest {
    id: string;
    username?: string;
}

export interface EquationsIdPutRequest {
    id: string;
    user: string;
    equation?: Equation;
}

export interface EquationsPostRequest {
    user: string;
    equation?: Equation;
}

/**
 * no description
 */
export class EquationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Equation entities
     * List all Equation entities
     */
    async equationsGetRaw(requestParameters: EquationsGetRequest): Promise<runtime.ApiResponse<Array<Equation>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/equations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EquationFromJSON));
    }

   /**
    * Gets a list of all Equation entities
    * List all Equation entities
    */
    async equationsGet(requestParameters: EquationsGetRequest): Promise<Array<Equation>> {
        const response = await this.equationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Equation
     * Delete a Equation
     */
    async equationsIdDeleteRaw(requestParameters: EquationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling equationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling equationsIdDelete.');
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
            path: `/equations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Equation
    * Delete a Equation
    */
    async equationsIdDelete(requestParameters: EquationsIdDeleteRequest): Promise<void> {
        await this.equationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Equation
     * Get a Equation
     */
    async equationsIdGetRaw(requestParameters: EquationsIdGetRequest): Promise<runtime.ApiResponse<Equation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling equationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/equations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Equation
    * Get a Equation
    */
    async equationsIdGet(requestParameters: EquationsIdGetRequest): Promise<Equation> {
        const response = await this.equationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Equation
     * Update a Equation
     */
    async equationsIdPutRaw(requestParameters: EquationsIdPutRequest): Promise<runtime.ApiResponse<Equation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling equationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling equationsIdPut.');
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
            path: `/equations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EquationToJSON(requestParameters.equation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquationFromJSON(jsonValue));
    }

   /**
    * Updates an existing Equation
    * Update a Equation
    */
    async equationsIdPut(requestParameters: EquationsIdPutRequest): Promise<Equation> {
        const response = await this.equationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a Equation
     * Create a Equation
     */
    async equationsPostRaw(requestParameters: EquationsPostRequest): Promise<runtime.ApiResponse<Equation>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling equationsPost.');
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
            path: `/equations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EquationToJSON(requestParameters.equation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a Equation
    * Create a Equation
    */
    async equationsPost(requestParameters: EquationsPostRequest): Promise<Equation> {
        const response = await this.equationsPostRaw(requestParameters);
        return await response.value();
    }

}
