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
    Visualization,
    VisualizationFromJSON,
    VisualizationToJSON,
} from '../models';

export interface VisualizationsGetRequest {
    username?: string;
    queryText?: string;
}

export interface VisualizationsIdDeleteRequest {
    id: string;
    user: string;
}

export interface VisualizationsIdGetRequest {
    id: string;
    username?: string;
}

export interface VisualizationsIdPutRequest {
    id: string;
    user: string;
    visualization?: Visualization;
}

export interface VisualizationsPostRequest {
    user: string;
    visualization?: Visualization;
}

/**
 * no description
 */
export class VisualizationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Visualization entities
     * List all Visualization entities
     */
    async visualizationsGetRaw(requestParameters: VisualizationsGetRequest): Promise<runtime.ApiResponse<Array<Visualization>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/visualizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VisualizationFromJSON));
    }

   /**
    * Gets a list of all Visualization entities
    * List all Visualization entities
    */
    async visualizationsGet(requestParameters: VisualizationsGetRequest): Promise<Array<Visualization>> {
        const response = await this.visualizationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Visualization
     * Delete a Visualization
     */
    async visualizationsIdDeleteRaw(requestParameters: VisualizationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling visualizationsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling visualizationsIdDelete.');
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
            path: `/visualizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Visualization
    * Delete a Visualization
    */
    async visualizationsIdDelete(requestParameters: VisualizationsIdDeleteRequest): Promise<void> {
        await this.visualizationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Visualization
     * Get a Visualization
     */
    async visualizationsIdGetRaw(requestParameters: VisualizationsIdGetRequest): Promise<runtime.ApiResponse<Visualization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling visualizationsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/visualizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VisualizationFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Visualization
    * Get a Visualization
    */
    async visualizationsIdGet(requestParameters: VisualizationsIdGetRequest): Promise<Visualization> {
        const response = await this.visualizationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Visualization
     * Update a Visualization
     */
    async visualizationsIdPutRaw(requestParameters: VisualizationsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling visualizationsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling visualizationsIdPut.');
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
            path: `/visualizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: VisualizationToJSON(requestParameters.visualization),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing Visualization
    * Update a Visualization
    */
    async visualizationsIdPut(requestParameters: VisualizationsIdPutRequest): Promise<void> {
        await this.visualizationsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a Visualization
     * Create a Visualization
     */
    async visualizationsPostRaw(requestParameters: VisualizationsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling visualizationsPost.');
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
            path: `/visualizations`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VisualizationToJSON(requestParameters.visualization),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a Visualization
    * Create a Visualization
    */
    async visualizationsPost(requestParameters: VisualizationsPostRequest): Promise<void> {
        await this.visualizationsPostRaw(requestParameters);
    }

}
