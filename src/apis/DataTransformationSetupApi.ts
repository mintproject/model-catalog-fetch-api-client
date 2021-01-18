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
    DataTransformationSetup,
    DataTransformationSetupFromJSON,
    DataTransformationSetupToJSON,
} from '../models';

export interface DatatransformationsetupsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface DatatransformationsetupsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface DatatransformationsetupsIdGetRequest {
    id: string;
    username?: string;
}

export interface DatatransformationsetupsIdPutRequest {
    id: string;
    user?: string;
    dataTransformationSetup?: DataTransformationSetup;
}

export interface DatatransformationsetupsPostRequest {
    user?: string;
    dataTransformationSetup?: DataTransformationSetup;
}

/**
 * no description
 */
export class DataTransformationSetupApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
     * List all instances of DataTransformationSetup
     */
    async datatransformationsetupsGetRaw(requestParameters: DatatransformationsetupsGetRequest): Promise<runtime.ApiResponse<Array<DataTransformationSetup>>> {
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
            path: `/datatransformationsetups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DataTransformationSetupFromJSON));
    }

   /**
    * Gets a list of all instances of DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
    * List all instances of DataTransformationSetup
    */
    async datatransformationsetupsGet(requestParameters: DatatransformationsetupsGetRequest): Promise<Array<DataTransformationSetup>> {
        const response = await this.datatransformationsetupsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
     * Delete an existing DataTransformationSetup
     */
    async datatransformationsetupsIdDeleteRaw(requestParameters: DatatransformationsetupsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datatransformationsetupsIdDelete.');
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
            path: `/datatransformationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
    * Delete an existing DataTransformationSetup
    */
    async datatransformationsetupsIdDelete(requestParameters: DatatransformationsetupsIdDeleteRequest): Promise<void> {
        await this.datatransformationsetupsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
     * Get a single DataTransformationSetup by its id
     */
    async datatransformationsetupsIdGetRaw(requestParameters: DatatransformationsetupsIdGetRequest): Promise<runtime.ApiResponse<DataTransformationSetup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datatransformationsetupsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/datatransformationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataTransformationSetupFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
    * Get a single DataTransformationSetup by its id
    */
    async datatransformationsetupsIdGet(requestParameters: DatatransformationsetupsIdGetRequest): Promise<DataTransformationSetup> {
        const response = await this.datatransformationsetupsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
     * Update an existing DataTransformationSetup
     */
    async datatransformationsetupsIdPutRaw(requestParameters: DatatransformationsetupsIdPutRequest): Promise<runtime.ApiResponse<DataTransformationSetup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling datatransformationsetupsIdPut.');
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
            path: `/datatransformationsetups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DataTransformationSetupToJSON(requestParameters.dataTransformationSetup),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataTransformationSetupFromJSON(jsonValue));
    }

   /**
    * Updates an existing DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
    * Update an existing DataTransformationSetup
    */
    async datatransformationsetupsIdPut(requestParameters: DatatransformationsetupsIdPutRequest): Promise<DataTransformationSetup> {
        const response = await this.datatransformationsetupsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
     * Create one DataTransformationSetup
     */
    async datatransformationsetupsPostRaw(requestParameters: DatatransformationsetupsPostRequest): Promise<runtime.ApiResponse<DataTransformationSetup>> {
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
            path: `/datatransformationsetups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DataTransformationSetupToJSON(requestParameters.dataTransformationSetup),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataTransformationSetupFromJSON(jsonValue));
    }

   /**
    * Create a new instance of DataTransformationSetup (more information in https://w3id.org/okn/o/sd#DataTransformationSetup)
    * Create one DataTransformationSetup
    */
    async datatransformationsetupsPost(requestParameters: DatatransformationsetupsPostRequest): Promise<DataTransformationSetup> {
        const response = await this.datatransformationsetupsPostRaw(requestParameters);
        return await response.value();
    }

}
