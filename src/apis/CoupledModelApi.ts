// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CoupledModel,
    CoupledModelFromJSON,
    CoupledModelToJSON,
} from '../models';

export interface CoupledmodelsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface CoupledmodelsIdDeleteRequest {
    id: string;
    user: string;
}

export interface CoupledmodelsIdGetRequest {
    id: string;
    username?: string;
}

export interface CoupledmodelsIdPutRequest {
    id: string;
    user: string;
    coupledModel?: CoupledModel;
}

export interface CoupledmodelsPostRequest {
    user: string;
    coupledModel?: CoupledModel;
}

/**
 * no description
 */
export class CoupledModelApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
     * List all instances of CoupledModel
     */
    async coupledmodelsGetRaw(requestParameters: CoupledmodelsGetRequest): Promise<runtime.ApiResponse<Array<CoupledModel>>> {
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
            path: `/coupledmodels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CoupledModelFromJSON));
    }

   /**
    * Gets a list of all instances of CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
    * List all instances of CoupledModel
    */
    async coupledmodelsGet(requestParameters: CoupledmodelsGetRequest): Promise<Array<CoupledModel>> {
        const response = await this.coupledmodelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
     * Delete an existing CoupledModel
     */
    async coupledmodelsIdDeleteRaw(requestParameters: CoupledmodelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling coupledmodelsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling coupledmodelsIdDelete.');
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
            path: `/coupledmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
    * Delete an existing CoupledModel
    */
    async coupledmodelsIdDelete(requestParameters: CoupledmodelsIdDeleteRequest): Promise<void> {
        await this.coupledmodelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
     * Get a single CoupledModel by its id
     */
    async coupledmodelsIdGetRaw(requestParameters: CoupledmodelsIdGetRequest): Promise<runtime.ApiResponse<CoupledModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling coupledmodelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coupledmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CoupledModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
    * Get a single CoupledModel by its id
    */
    async coupledmodelsIdGet(requestParameters: CoupledmodelsIdGetRequest): Promise<CoupledModel> {
        const response = await this.coupledmodelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
     * Update an existing CoupledModel
     */
    async coupledmodelsIdPutRaw(requestParameters: CoupledmodelsIdPutRequest): Promise<runtime.ApiResponse<CoupledModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling coupledmodelsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling coupledmodelsIdPut.');
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
            path: `/coupledmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CoupledModelToJSON(requestParameters.coupledModel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CoupledModelFromJSON(jsonValue));
    }

   /**
    * Updates an existing CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
    * Update an existing CoupledModel
    */
    async coupledmodelsIdPut(requestParameters: CoupledmodelsIdPutRequest): Promise<CoupledModel> {
        const response = await this.coupledmodelsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
     * Create one CoupledModel
     */
    async coupledmodelsPostRaw(requestParameters: CoupledmodelsPostRequest): Promise<runtime.ApiResponse<CoupledModel>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling coupledmodelsPost.');
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
            path: `/coupledmodels`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CoupledModelToJSON(requestParameters.coupledModel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CoupledModelFromJSON(jsonValue));
    }

   /**
    * Create a new instance of CoupledModel (more information in https://w3id.org/okn/o/sdm#CoupledModel)
    * Create one CoupledModel
    */
    async coupledmodelsPost(requestParameters: CoupledmodelsPostRequest): Promise<CoupledModel> {
        const response = await this.coupledmodelsPostRaw(requestParameters);
        return await response.value();
    }

}