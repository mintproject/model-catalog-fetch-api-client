// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    FundingInformation,
    FundingInformationFromJSON,
    FundingInformationToJSON,
} from '../models';

export interface FundinginformationsGetRequest {
    username?: string;
    label?: string;
}

export interface FundinginformationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface FundinginformationsIdGetRequest {
    id: string;
    username?: string;
}

export interface FundinginformationsIdPutRequest {
    id: string;
    user: string;
    fundingInformation?: FundingInformation;
}

export interface FundinginformationsPostRequest {
    user: string;
    fundingInformation?: FundingInformation;
}

/**
 * no description
 */
export class FundingInformationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all FundingInformation entities
     * List all FundingInformation entities
     */
    async fundinginformationsGetRaw(requestParameters: FundinginformationsGetRequest): Promise<runtime.ApiResponse<Array<FundingInformation>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fundinginformations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FundingInformationFromJSON));
    }

   /**
    * Gets a list of all FundingInformation entities
    * List all FundingInformation entities
    */
    async fundinginformationsGet(requestParameters: FundinginformationsGetRequest): Promise<Array<FundingInformation>> {
        const response = await this.fundinginformationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing FundingInformation
     * Delete a FundingInformation
     */
    async fundinginformationsIdDeleteRaw(requestParameters: FundinginformationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fundinginformationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling fundinginformationsIdDelete.');
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
            path: `/fundinginformations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing FundingInformation
    * Delete a FundingInformation
    */
    async fundinginformationsIdDelete(requestParameters: FundinginformationsIdDeleteRequest): Promise<void> {
        await this.fundinginformationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a FundingInformation
     * Get a FundingInformation
     */
    async fundinginformationsIdGetRaw(requestParameters: FundinginformationsIdGetRequest): Promise<runtime.ApiResponse<FundingInformation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fundinginformationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fundinginformations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FundingInformationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a FundingInformation
    * Get a FundingInformation
    */
    async fundinginformationsIdGet(requestParameters: FundinginformationsIdGetRequest): Promise<FundingInformation> {
        const response = await this.fundinginformationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing FundingInformation
     * Update a FundingInformation
     */
    async fundinginformationsIdPutRaw(requestParameters: FundinginformationsIdPutRequest): Promise<runtime.ApiResponse<FundingInformation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fundinginformationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling fundinginformationsIdPut.');
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
            path: `/fundinginformations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FundingInformationToJSON(requestParameters.fundingInformation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FundingInformationFromJSON(jsonValue));
    }

   /**
    * Updates an existing FundingInformation
    * Update a FundingInformation
    */
    async fundinginformationsIdPut(requestParameters: FundinginformationsIdPutRequest): Promise<FundingInformation> {
        const response = await this.fundinginformationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a FundingInformation
     * Create a FundingInformation
     */
    async fundinginformationsPostRaw(requestParameters: FundinginformationsPostRequest): Promise<runtime.ApiResponse<FundingInformation>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling fundinginformationsPost.');
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
            path: `/fundinginformations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FundingInformationToJSON(requestParameters.fundingInformation),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FundingInformationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a FundingInformation
    * Create a FundingInformation
    */
    async fundinginformationsPost(requestParameters: FundinginformationsPostRequest): Promise<FundingInformation> {
        const response = await this.fundinginformationsPostRaw(requestParameters);
        return await response.value();
    }

}