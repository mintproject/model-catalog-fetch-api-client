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
    Visualization,
    VisualizationFromJSON,
    VisualizationToJSON,
} from '../models';

export interface VisualizationsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface VisualizationsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface VisualizationsIdGetRequest {
    id: string;
    username?: string;
}

export interface VisualizationsIdPutRequest {
    id: string;
    user?: string;
    visualization?: Visualization;
}

export interface VisualizationsPostRequest {
    user?: string;
    visualization?: Visualization;
}

/**
 * no description
 */
export class VisualizationApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
     * List all instances of Visualization
     */
    async visualizationsGetRaw(requestParameters: VisualizationsGetRequest): Promise<runtime.ApiResponse<Array<Visualization>>> {
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
            path: `/visualizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VisualizationFromJSON));
    }

   /**
    * Gets a list of all instances of Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
    * List all instances of Visualization
    */
    async visualizationsGet(requestParameters: VisualizationsGetRequest): Promise<Array<Visualization>> {
        const response = await this.visualizationsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
     * Delete an existing Visualization
     */
    async visualizationsIdDeleteRaw(requestParameters: VisualizationsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling visualizationsIdDelete.');
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
            path: `/visualizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
    * Delete an existing Visualization
    */
    async visualizationsIdDelete(requestParameters: VisualizationsIdDeleteRequest): Promise<void> {
        await this.visualizationsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
     * Get a single Visualization by its id
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
    * Gets the details of a given Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
    * Get a single Visualization by its id
    */
    async visualizationsIdGet(requestParameters: VisualizationsIdGetRequest): Promise<Visualization> {
        const response = await this.visualizationsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
     * Update an existing Visualization
     */
    async visualizationsIdPutRaw(requestParameters: VisualizationsIdPutRequest): Promise<runtime.ApiResponse<Visualization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling visualizationsIdPut.');
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
            path: `/visualizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: VisualizationToJSON(requestParameters.visualization),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VisualizationFromJSON(jsonValue));
    }

   /**
    * Updates an existing Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
    * Update an existing Visualization
    */
    async visualizationsIdPut(requestParameters: VisualizationsIdPutRequest): Promise<Visualization> {
        const response = await this.visualizationsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
     * Create one Visualization
     */
    async visualizationsPostRaw(requestParameters: VisualizationsPostRequest): Promise<runtime.ApiResponse<Visualization>> {
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
            path: `/visualizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VisualizationToJSON(requestParameters.visualization),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VisualizationFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Visualization (more information in https://w3id.org/okn/o/sd#Visualization)
    * Create one Visualization
    */
    async visualizationsPost(requestParameters: VisualizationsPostRequest): Promise<Visualization> {
        const response = await this.visualizationsPostRaw(requestParameters);
        return await response.value();
    }

}
