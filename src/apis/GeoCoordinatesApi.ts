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
    GeoCoordinates,
    GeoCoordinatesFromJSON,
    GeoCoordinatesToJSON,
} from '../models';

export interface GeocoordinatessGetRequest {
    username?: string;
    queryText?: string;
}

export interface GeocoordinatessIdDeleteRequest {
    id: string;
    user: string;
}

export interface GeocoordinatessIdGetRequest {
    id: string;
    username?: string;
}

export interface GeocoordinatessIdPutRequest {
    id: string;
    user: string;
    geoCoordinates?: GeoCoordinates;
}

export interface GeocoordinatessPostRequest {
    user: string;
    geoCoordinates?: GeoCoordinates;
}

/**
 * no description
 */
export class GeoCoordinatesApi extends runtime.BaseAPI {

    /**
     * Gets a list of all GeoCoordinates entities
     * List all GeoCoordinates entities
     */
    async geocoordinatessGetRaw(requestParameters: GeocoordinatessGetRequest): Promise<runtime.ApiResponse<Array<GeoCoordinates>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/geocoordinatess`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GeoCoordinatesFromJSON));
    }

   /**
    * Gets a list of all GeoCoordinates entities
    * List all GeoCoordinates entities
    */
    async geocoordinatessGet(requestParameters: GeocoordinatessGetRequest): Promise<Array<GeoCoordinates>> {
        const response = await this.geocoordinatessGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing GeoCoordinates
     * Delete a GeoCoordinates
     */
    async geocoordinatessIdDeleteRaw(requestParameters: GeocoordinatessIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling geocoordinatessIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling geocoordinatessIdDelete.');
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
            path: `/geocoordinatess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing GeoCoordinates
    * Delete a GeoCoordinates
    */
    async geocoordinatessIdDelete(requestParameters: GeocoordinatessIdDeleteRequest): Promise<void> {
        await this.geocoordinatessIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a GeoCoordinates
     * Get a GeoCoordinates
     */
    async geocoordinatessIdGetRaw(requestParameters: GeocoordinatessIdGetRequest): Promise<runtime.ApiResponse<GeoCoordinates>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling geocoordinatessIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/geocoordinatess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GeoCoordinatesFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a GeoCoordinates
    * Get a GeoCoordinates
    */
    async geocoordinatessIdGet(requestParameters: GeocoordinatessIdGetRequest): Promise<GeoCoordinates> {
        const response = await this.geocoordinatessIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing GeoCoordinates
     * Update a GeoCoordinates
     */
    async geocoordinatessIdPutRaw(requestParameters: GeocoordinatessIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling geocoordinatessIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling geocoordinatessIdPut.');
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
            path: `/geocoordinatess/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GeoCoordinatesToJSON(requestParameters.geoCoordinates),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing GeoCoordinates
    * Update a GeoCoordinates
    */
    async geocoordinatessIdPut(requestParameters: GeocoordinatessIdPutRequest): Promise<void> {
        await this.geocoordinatessIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a GeoCoordinates
     * Create a GeoCoordinates
     */
    async geocoordinatessPostRaw(requestParameters: GeocoordinatessPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling geocoordinatessPost.');
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
            path: `/geocoordinatess`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GeoCoordinatesToJSON(requestParameters.geoCoordinates),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a GeoCoordinates
    * Create a GeoCoordinates
    */
    async geocoordinatessPost(requestParameters: GeocoordinatessPostRequest): Promise<void> {
        await this.geocoordinatessPostRaw(requestParameters);
    }

}
