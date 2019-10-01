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
    EmpiricalModel,
    EmpiricalModelFromJSON,
    EmpiricalModelToJSON,
} from '../models';

export interface EmpiricalmodelsGetRequest {
    username?: string;
}

export interface EmpiricalmodelsIdDeleteRequest {
    id: string;
    user: string;
}

export interface EmpiricalmodelsIdGetRequest {
    id: string;
    username?: string;
}

export interface EmpiricalmodelsIdPutRequest {
    id: string;
    user: string;
    empiricalModel?: EmpiricalModel;
}

export interface EmpiricalmodelsPostRequest {
    user: string;
    empiricalModel?: EmpiricalModel;
}

/**
 * no description
 */
export class EmpiricalModelApi extends runtime.BaseAPI {

    /**
     * Gets a list of all EmpiricalModel entities
     * List all EmpiricalModel entities
     */
    async empiricalmodelsGetRaw(requestParameters: EmpiricalmodelsGetRequest): Promise<runtime.ApiResponse<Array<EmpiricalModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/empiricalmodels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EmpiricalModelFromJSON));
    }

   /**
    * Gets a list of all EmpiricalModel entities
    * List all EmpiricalModel entities
    */
    async empiricalmodelsGet(requestParameters: EmpiricalmodelsGetRequest): Promise<Array<EmpiricalModel>> {
        const response = await this.empiricalmodelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing EmpiricalModel
     * Delete a EmpiricalModel
     */
    async empiricalmodelsIdDeleteRaw(requestParameters: EmpiricalmodelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling empiricalmodelsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling empiricalmodelsIdDelete.');
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
            path: `/empiricalmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing EmpiricalModel
    * Delete a EmpiricalModel
    */
    async empiricalmodelsIdDelete(requestParameters: EmpiricalmodelsIdDeleteRequest): Promise<void> {
        await this.empiricalmodelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a EmpiricalModel
     * Get a EmpiricalModel
     */
    async empiricalmodelsIdGetRaw(requestParameters: EmpiricalmodelsIdGetRequest): Promise<runtime.ApiResponse<EmpiricalModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling empiricalmodelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/empiricalmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmpiricalModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a EmpiricalModel
    * Get a EmpiricalModel
    */
    async empiricalmodelsIdGet(requestParameters: EmpiricalmodelsIdGetRequest): Promise<EmpiricalModel> {
        const response = await this.empiricalmodelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing EmpiricalModel
     * Update a EmpiricalModel
     */
    async empiricalmodelsIdPutRaw(requestParameters: EmpiricalmodelsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling empiricalmodelsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling empiricalmodelsIdPut.');
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
            path: `/empiricalmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EmpiricalModelToJSON(requestParameters.empiricalModel),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing EmpiricalModel
    * Update a EmpiricalModel
    */
    async empiricalmodelsIdPut(requestParameters: EmpiricalmodelsIdPutRequest): Promise<void> {
        await this.empiricalmodelsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a EmpiricalModel
     * Create a EmpiricalModel
     */
    async empiricalmodelsPostRaw(requestParameters: EmpiricalmodelsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling empiricalmodelsPost.');
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
            path: `/empiricalmodels`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmpiricalModelToJSON(requestParameters.empiricalModel),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a EmpiricalModel
    * Create a EmpiricalModel
    */
    async empiricalmodelsPost(requestParameters: EmpiricalmodelsPostRequest): Promise<void> {
        await this.empiricalmodelsPostRaw(requestParameters);
    }

}
