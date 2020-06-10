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
    Image,
    ImageFromJSON,
    ImageToJSON,
} from '../models';

export interface ImagesGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface ImagesIdDeleteRequest {
    id: string;
    user: string;
}

export interface ImagesIdGetRequest {
    id: string;
    username?: string;
}

export interface ImagesIdPutRequest {
    id: string;
    user: string;
    image?: Image;
}

export interface ImagesPostRequest {
    user: string;
    image?: Image;
}

/**
 * no description
 */
export class ImageApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Image (more information in https://w3id.org/okn/o/sd#Image)
     * List all instances of Image
     */
    async imagesGetRaw(requestParameters: ImagesGetRequest): Promise<runtime.ApiResponse<Array<Image>>> {
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
            path: `/images`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ImageFromJSON));
    }

   /**
    * Gets a list of all instances of Image (more information in https://w3id.org/okn/o/sd#Image)
    * List all instances of Image
    */
    async imagesGet(requestParameters: ImagesGetRequest): Promise<Array<Image>> {
        const response = await this.imagesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Image (more information in https://w3id.org/okn/o/sd#Image)
     * Delete an existing Image
     */
    async imagesIdDeleteRaw(requestParameters: ImagesIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling imagesIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling imagesIdDelete.');
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
            path: `/images/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Image (more information in https://w3id.org/okn/o/sd#Image)
    * Delete an existing Image
    */
    async imagesIdDelete(requestParameters: ImagesIdDeleteRequest): Promise<void> {
        await this.imagesIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Image (more information in https://w3id.org/okn/o/sd#Image)
     * Get a single Image by its id
     */
    async imagesIdGetRaw(requestParameters: ImagesIdGetRequest): Promise<runtime.ApiResponse<Image>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling imagesIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/images/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Image (more information in https://w3id.org/okn/o/sd#Image)
    * Get a single Image by its id
    */
    async imagesIdGet(requestParameters: ImagesIdGetRequest): Promise<Image> {
        const response = await this.imagesIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Image (more information in https://w3id.org/okn/o/sd#Image)
     * Update an existing Image
     */
    async imagesIdPutRaw(requestParameters: ImagesIdPutRequest): Promise<runtime.ApiResponse<Image>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling imagesIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling imagesIdPut.');
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
            path: `/images/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ImageToJSON(requestParameters.image),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageFromJSON(jsonValue));
    }

   /**
    * Updates an existing Image (more information in https://w3id.org/okn/o/sd#Image)
    * Update an existing Image
    */
    async imagesIdPut(requestParameters: ImagesIdPutRequest): Promise<Image> {
        const response = await this.imagesIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Image (more information in https://w3id.org/okn/o/sd#Image)
     * Create one Image
     */
    async imagesPostRaw(requestParameters: ImagesPostRequest): Promise<runtime.ApiResponse<Image>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling imagesPost.');
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
            path: `/images`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImageToJSON(requestParameters.image),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Image (more information in https://w3id.org/okn/o/sd#Image)
    * Create one Image
    */
    async imagesPost(requestParameters: ImagesPostRequest): Promise<Image> {
        const response = await this.imagesPostRaw(requestParameters);
        return await response.value();
    }

}
