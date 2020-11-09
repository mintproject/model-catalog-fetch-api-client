// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Intervention,
    InterventionFromJSON,
    InterventionToJSON,
} from '../models';

export interface InterventionsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface InterventionsIdDeleteRequest {
    id: string;
    user: string;
}

export interface InterventionsIdGetRequest {
    id: string;
    username?: string;
}

export interface InterventionsIdPutRequest {
    id: string;
    user: string;
    intervention?: Intervention;
}

export interface InterventionsPostRequest {
    user: string;
    intervention?: Intervention;
}

/**
 * no description
 */
export class InterventionApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
     * List all instances of Intervention
     */
    async interventionsGetRaw(requestParameters: InterventionsGetRequest): Promise<runtime.ApiResponse<Array<Intervention>>> {
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
            path: `/interventions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InterventionFromJSON));
    }

   /**
    * Gets a list of all instances of Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
    * List all instances of Intervention
    */
    async interventionsGet(requestParameters: InterventionsGetRequest): Promise<Array<Intervention>> {
        const response = await this.interventionsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
     * Delete an existing Intervention
     */
    async interventionsIdDeleteRaw(requestParameters: InterventionsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interventionsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling interventionsIdDelete.');
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
            path: `/interventions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
    * Delete an existing Intervention
    */
    async interventionsIdDelete(requestParameters: InterventionsIdDeleteRequest): Promise<void> {
        await this.interventionsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
     * Get a single Intervention by its id
     */
    async interventionsIdGetRaw(requestParameters: InterventionsIdGetRequest): Promise<runtime.ApiResponse<Intervention>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interventionsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interventions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InterventionFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
    * Get a single Intervention by its id
    */
    async interventionsIdGet(requestParameters: InterventionsIdGetRequest): Promise<Intervention> {
        const response = await this.interventionsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
     * Update an existing Intervention
     */
    async interventionsIdPutRaw(requestParameters: InterventionsIdPutRequest): Promise<runtime.ApiResponse<Intervention>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interventionsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling interventionsIdPut.');
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
            path: `/interventions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InterventionToJSON(requestParameters.intervention),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InterventionFromJSON(jsonValue));
    }

   /**
    * Updates an existing Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
    * Update an existing Intervention
    */
    async interventionsIdPut(requestParameters: InterventionsIdPutRequest): Promise<Intervention> {
        const response = await this.interventionsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
     * Create one Intervention
     */
    async interventionsPostRaw(requestParameters: InterventionsPostRequest): Promise<runtime.ApiResponse<Intervention>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling interventionsPost.');
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
            path: `/interventions`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InterventionToJSON(requestParameters.intervention),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InterventionFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Intervention (more information in https://w3id.org/okn/o/sdm#Intervention)
    * Create one Intervention
    */
    async interventionsPost(requestParameters: InterventionsPostRequest): Promise<Intervention> {
        const response = await this.interventionsPostRaw(requestParameters);
        return await response.value();
    }

}
