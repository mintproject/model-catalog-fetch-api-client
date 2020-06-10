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
    Grid,
    GridFromJSON,
    GridToJSON,
} from '../models';

export interface GridsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface GridsIdDeleteRequest {
    id: string;
    user: string;
}

export interface GridsIdGetRequest {
    id: string;
    username?: string;
}

export interface GridsIdPutRequest {
    id: string;
    user: string;
    grid?: Grid;
}

export interface GridsPostRequest {
    user: string;
    grid?: Grid;
}

/**
 * no description
 */
export class GridApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Grid (more information in https://w3id.org/okn/o/sdm#Grid)
     * List all instances of Grid
     */
    async gridsGetRaw(requestParameters: GridsGetRequest): Promise<runtime.ApiResponse<Array<Grid>>> {
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
            path: `/grids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GridFromJSON));
    }

   /**
    * Gets a list of all instances of Grid (more information in https://w3id.org/okn/o/sdm#Grid)
    * List all instances of Grid
    */
    async gridsGet(requestParameters: GridsGetRequest): Promise<Array<Grid>> {
        const response = await this.gridsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Grid (more information in https://w3id.org/okn/o/sdm#Grid)
     * Delete an existing Grid
     */
    async gridsIdDeleteRaw(requestParameters: GridsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gridsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling gridsIdDelete.');
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
            path: `/grids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Grid (more information in https://w3id.org/okn/o/sdm#Grid)
    * Delete an existing Grid
    */
    async gridsIdDelete(requestParameters: GridsIdDeleteRequest): Promise<void> {
        await this.gridsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Grid (more information in https://w3id.org/okn/o/sdm#Grid)
     * Get a single Grid by its id
     */
    async gridsIdGetRaw(requestParameters: GridsIdGetRequest): Promise<runtime.ApiResponse<Grid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gridsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/grids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GridFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Grid (more information in https://w3id.org/okn/o/sdm#Grid)
    * Get a single Grid by its id
    */
    async gridsIdGet(requestParameters: GridsIdGetRequest): Promise<Grid> {
        const response = await this.gridsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Grid (more information in https://w3id.org/okn/o/sdm#Grid)
     * Update an existing Grid
     */
    async gridsIdPutRaw(requestParameters: GridsIdPutRequest): Promise<runtime.ApiResponse<Grid>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gridsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling gridsIdPut.');
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
            path: `/grids/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GridToJSON(requestParameters.grid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GridFromJSON(jsonValue));
    }

   /**
    * Updates an existing Grid (more information in https://w3id.org/okn/o/sdm#Grid)
    * Update an existing Grid
    */
    async gridsIdPut(requestParameters: GridsIdPutRequest): Promise<Grid> {
        const response = await this.gridsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Grid (more information in https://w3id.org/okn/o/sdm#Grid)
     * Create one Grid
     */
    async gridsPostRaw(requestParameters: GridsPostRequest): Promise<runtime.ApiResponse<Grid>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling gridsPost.');
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
            path: `/grids`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GridToJSON(requestParameters.grid),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GridFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Grid (more information in https://w3id.org/okn/o/sdm#Grid)
    * Create one Grid
    */
    async gridsPost(requestParameters: GridsPostRequest): Promise<Grid> {
        const response = await this.gridsPostRaw(requestParameters);
        return await response.value();
    }

}
