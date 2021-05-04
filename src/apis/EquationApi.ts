// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.8.0
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
    page?: number;
    perPage?: number;
}

export interface EquationsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface EquationsIdGetRequest {
    id: string;
    username?: string;
}

export interface EquationsIdPutRequest {
    id: string;
    user?: string;
    equation?: Equation;
}

export interface EquationsPostRequest {
    user?: string;
    equation?: Equation;
}

/**
 * no description
 */
export class EquationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Equation (more information in https://w3id.org/okn/o/sdm#Equation)
     * List all instances of Equation
     */
    async equationsGetRaw(requestParameters: EquationsGetRequest): Promise<runtime.ApiResponse<Array<Equation>>> {
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
            path: `/equations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EquationFromJSON));
    }

   /**
    * Gets a list of all instances of Equation (more information in https://w3id.org/okn/o/sdm#Equation)
    * List all instances of Equation
    */
    async equationsGet(requestParameters: EquationsGetRequest): Promise<Array<Equation>> {
        const response = await this.equationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Equation (more information in https://w3id.org/okn/o/sdm#Equation)
     * Delete an existing Equation
     */
    async equationsIdDeleteRaw(requestParameters: EquationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling equationsIdDelete.');
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
            path: `/equations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Equation (more information in https://w3id.org/okn/o/sdm#Equation)
    * Delete an existing Equation
    */
    async equationsIdDelete(requestParameters: EquationsIdDeleteRequest): Promise<void> {
        await this.equationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Equation (more information in https://w3id.org/okn/o/sdm#Equation)
     * Get a single Equation by its id
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
    * Gets the details of a given Equation (more information in https://w3id.org/okn/o/sdm#Equation)
    * Get a single Equation by its id
    */
    async equationsIdGet(requestParameters: EquationsIdGetRequest): Promise<Equation> {
        const response = await this.equationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Equation (more information in https://w3id.org/okn/o/sdm#Equation)
     * Update an existing Equation
     */
    async equationsIdPutRaw(requestParameters: EquationsIdPutRequest): Promise<runtime.ApiResponse<Equation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling equationsIdPut.');
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
            path: `/equations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EquationToJSON(requestParameters.equation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquationFromJSON(jsonValue));
    }

   /**
    * Updates an existing Equation (more information in https://w3id.org/okn/o/sdm#Equation)
    * Update an existing Equation
    */
    async equationsIdPut(requestParameters: EquationsIdPutRequest): Promise<Equation> {
        const response = await this.equationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Equation (more information in https://w3id.org/okn/o/sdm#Equation)
     * Create one Equation
     */
    async equationsPostRaw(requestParameters: EquationsPostRequest): Promise<runtime.ApiResponse<Equation>> {
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
            path: `/equations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EquationToJSON(requestParameters.equation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EquationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Equation (more information in https://w3id.org/okn/o/sdm#Equation)
    * Create one Equation
    */
    async equationsPost(requestParameters: EquationsPostRequest): Promise<Equation> {
        const response = await this.equationsPostRaw(requestParameters);
        return await response.value();
    }

}
