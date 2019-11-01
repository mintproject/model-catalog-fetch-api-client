// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.2.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SoftwareImage,
    SoftwareImageFromJSON,
    SoftwareImageToJSON,
} from '../models';

export interface SoftwareimagesGetRequest {
    username?: string;
    label?: string;
}

export interface SoftwareimagesIdDeleteRequest {
    id: string;
    user: string;
}

export interface SoftwareimagesIdGetRequest {
    id: string;
    username?: string;
}

export interface SoftwareimagesIdPutRequest {
    id: string;
    user: string;
    softwareImage?: SoftwareImage;
}

export interface SoftwareimagesPostRequest {
    user: string;
    softwareImage?: SoftwareImage;
}

/**
 * no description
 */
export class SoftwareImageApi extends runtime.BaseAPI {

    /**
     * Gets a list of all SoftwareImage entities
     * List all SoftwareImage entities
     */
    async softwareimagesGetRaw(requestParameters: SoftwareimagesGetRequest): Promise<runtime.ApiResponse<Array<SoftwareImage>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareimages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SoftwareImageFromJSON));
    }

   /**
    * Gets a list of all SoftwareImage entities
    * List all SoftwareImage entities
    */
    async softwareimagesGet(requestParameters: SoftwareimagesGetRequest): Promise<Array<SoftwareImage>> {
        const response = await this.softwareimagesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing SoftwareImage
     * Delete a SoftwareImage
     */
    async softwareimagesIdDeleteRaw(requestParameters: SoftwareimagesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareimagesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareimagesIdDelete.');
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
            path: `/softwareimages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing SoftwareImage
    * Delete a SoftwareImage
    */
    async softwareimagesIdDelete(requestParameters: SoftwareimagesIdDeleteRequest): Promise<void> {
        await this.softwareimagesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a SoftwareImage
     * Get a SoftwareImage
     */
    async softwareimagesIdGetRaw(requestParameters: SoftwareimagesIdGetRequest): Promise<runtime.ApiResponse<SoftwareImage>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareimagesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/softwareimages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareImageFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a SoftwareImage
    * Get a SoftwareImage
    */
    async softwareimagesIdGet(requestParameters: SoftwareimagesIdGetRequest): Promise<SoftwareImage> {
        const response = await this.softwareimagesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing SoftwareImage
     * Update a SoftwareImage
     */
    async softwareimagesIdPutRaw(requestParameters: SoftwareimagesIdPutRequest): Promise<runtime.ApiResponse<SoftwareImage>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling softwareimagesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareimagesIdPut.');
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
            path: `/softwareimages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareImageToJSON(requestParameters.softwareImage),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareImageFromJSON(jsonValue));
    }

   /**
    * Updates an existing SoftwareImage
    * Update a SoftwareImage
    */
    async softwareimagesIdPut(requestParameters: SoftwareimagesIdPutRequest): Promise<SoftwareImage> {
        const response = await this.softwareimagesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a SoftwareImage
     * Create a SoftwareImage
     */
    async softwareimagesPostRaw(requestParameters: SoftwareimagesPostRequest): Promise<runtime.ApiResponse<SoftwareImage>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling softwareimagesPost.');
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
            path: `/softwareimages`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SoftwareImageToJSON(requestParameters.softwareImage),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SoftwareImageFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a SoftwareImage
    * Create a SoftwareImage
    */
    async softwareimagesPost(requestParameters: SoftwareimagesPostRequest): Promise<SoftwareImage> {
        const response = await this.softwareimagesPostRaw(requestParameters);
        return await response.value();
    }

}
