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
    Unit,
    UnitFromJSON,
    UnitToJSON,
} from '../models';

export interface UnitsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface UnitsIdDeleteRequest {
    id: string;
    user: string;
}

export interface UnitsIdGetRequest {
    id: string;
    username?: string;
}

export interface UnitsIdPutRequest {
    id: string;
    user: string;
    unit?: Unit;
}

export interface UnitsPostRequest {
    user: string;
    unit?: Unit;
}

/**
 * no description
 */
export class UnitApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Unit (more information in https://w3id.org/okn/o/sd#Unit)
     * List all instances of Unit
     */
    async unitsGetRaw(requestParameters: UnitsGetRequest): Promise<runtime.ApiResponse<Array<Unit>>> {
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
            path: `/units`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UnitFromJSON));
    }

   /**
    * Gets a list of all instances of Unit (more information in https://w3id.org/okn/o/sd#Unit)
    * List all instances of Unit
    */
    async unitsGet(requestParameters: UnitsGetRequest): Promise<Array<Unit>> {
        const response = await this.unitsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Unit (more information in https://w3id.org/okn/o/sd#Unit)
     * Delete an existing Unit
     */
    async unitsIdDeleteRaw(requestParameters: UnitsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling unitsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling unitsIdDelete.');
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
            path: `/units/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Unit (more information in https://w3id.org/okn/o/sd#Unit)
    * Delete an existing Unit
    */
    async unitsIdDelete(requestParameters: UnitsIdDeleteRequest): Promise<void> {
        await this.unitsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Unit (more information in https://w3id.org/okn/o/sd#Unit)
     * Get a single Unit by its id
     */
    async unitsIdGetRaw(requestParameters: UnitsIdGetRequest): Promise<runtime.ApiResponse<Unit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling unitsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/units/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UnitFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Unit (more information in https://w3id.org/okn/o/sd#Unit)
    * Get a single Unit by its id
    */
    async unitsIdGet(requestParameters: UnitsIdGetRequest): Promise<Unit> {
        const response = await this.unitsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Unit (more information in https://w3id.org/okn/o/sd#Unit)
     * Update an existing Unit
     */
    async unitsIdPutRaw(requestParameters: UnitsIdPutRequest): Promise<runtime.ApiResponse<Unit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling unitsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling unitsIdPut.');
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
            path: `/units/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UnitToJSON(requestParameters.unit),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UnitFromJSON(jsonValue));
    }

   /**
    * Updates an existing Unit (more information in https://w3id.org/okn/o/sd#Unit)
    * Update an existing Unit
    */
    async unitsIdPut(requestParameters: UnitsIdPutRequest): Promise<Unit> {
        const response = await this.unitsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Unit (more information in https://w3id.org/okn/o/sd#Unit)
     * Create one Unit
     */
    async unitsPostRaw(requestParameters: UnitsPostRequest): Promise<runtime.ApiResponse<Unit>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling unitsPost.');
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
            path: `/units`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnitToJSON(requestParameters.unit),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UnitFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Unit (more information in https://w3id.org/okn/o/sd#Unit)
    * Create one Unit
    */
    async unitsPost(requestParameters: UnitsPostRequest): Promise<Unit> {
        const response = await this.unitsPostRaw(requestParameters);
        return await response.value();
    }

}
