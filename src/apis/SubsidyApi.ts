// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
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
    Subsidy,
    SubsidyFromJSON,
    SubsidyToJSON,
} from '../models';

export interface SubsidysGetRequest {
    username?: string;
    label?: string;
}

export interface SubsidysIdDeleteRequest {
    id: string;
    user: string;
}

export interface SubsidysIdGetRequest {
    id: string;
    username?: string;
}

export interface SubsidysIdPutRequest {
    id: string;
    user: string;
    subsidy?: Subsidy;
}

export interface SubsidysPostRequest {
    user: string;
    subsidy?: Subsidy;
}

/**
 * no description
 */
export class SubsidyApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Subsidy entities
     * List all Subsidy entities
     */
    async subsidysGetRaw(requestParameters: SubsidysGetRequest): Promise<runtime.ApiResponse<Array<Subsidy>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/subsidys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SubsidyFromJSON));
    }

   /**
    * Gets a list of all Subsidy entities
    * List all Subsidy entities
    */
    async subsidysGet(requestParameters: SubsidysGetRequest): Promise<Array<Subsidy>> {
        const response = await this.subsidysGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Subsidy
     * Delete a Subsidy
     */
    async subsidysIdDeleteRaw(requestParameters: SubsidysIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subsidysIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling subsidysIdDelete.');
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
            path: `/subsidys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Subsidy
    * Delete a Subsidy
    */
    async subsidysIdDelete(requestParameters: SubsidysIdDeleteRequest): Promise<void> {
        await this.subsidysIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Subsidy
     * Get a Subsidy
     */
    async subsidysIdGetRaw(requestParameters: SubsidysIdGetRequest): Promise<runtime.ApiResponse<Subsidy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subsidysIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/subsidys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SubsidyFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Subsidy
    * Get a Subsidy
    */
    async subsidysIdGet(requestParameters: SubsidysIdGetRequest): Promise<Subsidy> {
        const response = await this.subsidysIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Subsidy
     * Update a Subsidy
     */
    async subsidysIdPutRaw(requestParameters: SubsidysIdPutRequest): Promise<runtime.ApiResponse<Subsidy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subsidysIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling subsidysIdPut.');
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
            path: `/subsidys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubsidyToJSON(requestParameters.subsidy),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SubsidyFromJSON(jsonValue));
    }

   /**
    * Updates an existing Subsidy
    * Update a Subsidy
    */
    async subsidysIdPut(requestParameters: SubsidysIdPutRequest): Promise<Subsidy> {
        const response = await this.subsidysIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a Subsidy
     * Create a Subsidy
     */
    async subsidysPostRaw(requestParameters: SubsidysPostRequest): Promise<runtime.ApiResponse<Subsidy>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling subsidysPost.');
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
            path: `/subsidys`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubsidyToJSON(requestParameters.subsidy),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SubsidyFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a Subsidy
    * Create a Subsidy
    */
    async subsidysPost(requestParameters: SubsidysPostRequest): Promise<Subsidy> {
        const response = await this.subsidysPostRaw(requestParameters);
        return await response.value();
    }

}
