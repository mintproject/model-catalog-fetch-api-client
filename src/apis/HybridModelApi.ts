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
    HybridModel,
    HybridModelFromJSON,
    HybridModelToJSON,
} from '../models';

export interface HybridmodelsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface HybridmodelsIdDeleteRequest {
    id: string;
    user: string;
}

export interface HybridmodelsIdGetRequest {
    id: string;
    username?: string;
}

export interface HybridmodelsIdPutRequest {
    id: string;
    user: string;
    hybridModel?: HybridModel;
}

export interface HybridmodelsPostRequest {
    user: string;
    hybridModel?: HybridModel;
}

/**
 * no description
 */
export class HybridModelApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
     * List all instances of HybridModel
     */
    async hybridmodelsGetRaw(requestParameters: HybridmodelsGetRequest): Promise<runtime.ApiResponse<Array<HybridModel>>> {
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
            path: `/hybridmodels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HybridModelFromJSON));
    }

   /**
    * Gets a list of all instances of HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
    * List all instances of HybridModel
    */
    async hybridmodelsGet(requestParameters: HybridmodelsGetRequest): Promise<Array<HybridModel>> {
        const response = await this.hybridmodelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
     * Delete an existing HybridModel
     */
    async hybridmodelsIdDeleteRaw(requestParameters: HybridmodelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling hybridmodelsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling hybridmodelsIdDelete.');
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
            path: `/hybridmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
    * Delete an existing HybridModel
    */
    async hybridmodelsIdDelete(requestParameters: HybridmodelsIdDeleteRequest): Promise<void> {
        await this.hybridmodelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
     * Get a single HybridModel by its id
     */
    async hybridmodelsIdGetRaw(requestParameters: HybridmodelsIdGetRequest): Promise<runtime.ApiResponse<HybridModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling hybridmodelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/hybridmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HybridModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
    * Get a single HybridModel by its id
    */
    async hybridmodelsIdGet(requestParameters: HybridmodelsIdGetRequest): Promise<HybridModel> {
        const response = await this.hybridmodelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
     * Update an existing HybridModel
     */
    async hybridmodelsIdPutRaw(requestParameters: HybridmodelsIdPutRequest): Promise<runtime.ApiResponse<HybridModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling hybridmodelsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling hybridmodelsIdPut.');
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
            path: `/hybridmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: HybridModelToJSON(requestParameters.hybridModel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HybridModelFromJSON(jsonValue));
    }

   /**
    * Updates an existing HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
    * Update an existing HybridModel
    */
    async hybridmodelsIdPut(requestParameters: HybridmodelsIdPutRequest): Promise<HybridModel> {
        const response = await this.hybridmodelsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
     * Create one HybridModel
     */
    async hybridmodelsPostRaw(requestParameters: HybridmodelsPostRequest): Promise<runtime.ApiResponse<HybridModel>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling hybridmodelsPost.');
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
            path: `/hybridmodels`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HybridModelToJSON(requestParameters.hybridModel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HybridModelFromJSON(jsonValue));
    }

   /**
    * Create a new instance of HybridModel (more information in https://w3id.org/okn/o/sdm#HybridModel)
    * Create one HybridModel
    */
    async hybridmodelsPost(requestParameters: HybridmodelsPostRequest): Promise<HybridModel> {
        const response = await this.hybridmodelsPostRaw(requestParameters);
        return await response.value();
    }

}
