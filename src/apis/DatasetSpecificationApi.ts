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
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationToJSON,
} from '../models';

export interface DatasetspecificationsGetRequest {
    username?: string;
    label?: string;
}

export interface DatasetspecificationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface DatasetspecificationsIdGetRequest {
    id: string;
    username?: string;
}

export interface DatasetspecificationsIdPutRequest {
    id: string;
    user: string;
    datasetSpecification?: DatasetSpecification;
}

export interface DatasetspecificationsPostRequest {
    user: string;
    datasetSpecification?: DatasetSpecification;
}

/**
 * no description
 */
export class DatasetSpecificationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all DatasetSpecification entities
     * List all DatasetSpecification entities
     */
    async datasetspecificationsGetRaw(requestParameters: DatasetspecificationsGetRequest): Promise<runtime.ApiResponse<Array<DatasetSpecification>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasetspecifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetSpecificationFromJSON));
    }

   /**
    * Gets a list of all DatasetSpecification entities
    * List all DatasetSpecification entities
    */
    async datasetspecificationsGet(requestParameters: DatasetspecificationsGetRequest): Promise<Array<DatasetSpecification>> {
        const response = await this.datasetspecificationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing DatasetSpecification
     * Delete a DatasetSpecification
     */
    async datasetspecificationsIdDeleteRaw(requestParameters: DatasetspecificationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datasetspecificationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling datasetspecificationsIdDelete.');
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
            path: `/datasetspecifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing DatasetSpecification
    * Delete a DatasetSpecification
    */
    async datasetspecificationsIdDelete(requestParameters: DatasetspecificationsIdDeleteRequest): Promise<void> {
        await this.datasetspecificationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a DatasetSpecification
     * Get a DatasetSpecification
     */
    async datasetspecificationsIdGetRaw(requestParameters: DatasetspecificationsIdGetRequest): Promise<runtime.ApiResponse<DatasetSpecification>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datasetspecificationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datasetspecifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetSpecificationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a DatasetSpecification
    * Get a DatasetSpecification
    */
    async datasetspecificationsIdGet(requestParameters: DatasetspecificationsIdGetRequest): Promise<DatasetSpecification> {
        const response = await this.datasetspecificationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing DatasetSpecification
     * Update a DatasetSpecification
     */
    async datasetspecificationsIdPutRaw(requestParameters: DatasetspecificationsIdPutRequest): Promise<runtime.ApiResponse<DatasetSpecification>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datasetspecificationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling datasetspecificationsIdPut.');
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
            path: `/datasetspecifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetSpecificationToJSON(requestParameters.datasetSpecification),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetSpecificationFromJSON(jsonValue));
    }

   /**
    * Updates an existing DatasetSpecification
    * Update a DatasetSpecification
    */
    async datasetspecificationsIdPut(requestParameters: DatasetspecificationsIdPutRequest): Promise<DatasetSpecification> {
        const response = await this.datasetspecificationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a DatasetSpecification
     * Create a DatasetSpecification
     */
    async datasetspecificationsPostRaw(requestParameters: DatasetspecificationsPostRequest): Promise<runtime.ApiResponse<DatasetSpecification>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling datasetspecificationsPost.');
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
            path: `/datasetspecifications`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DatasetSpecificationToJSON(requestParameters.datasetSpecification),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetSpecificationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a DatasetSpecification
    * Create a DatasetSpecification
    */
    async datasetspecificationsPost(requestParameters: DatasetspecificationsPostRequest): Promise<DatasetSpecification> {
        const response = await this.datasetspecificationsPostRaw(requestParameters);
        return await response.value();
    }

}
