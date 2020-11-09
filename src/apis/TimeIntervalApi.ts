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
    TimeInterval,
    TimeIntervalFromJSON,
    TimeIntervalToJSON,
} from '../models';

export interface TimeintervalsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface TimeintervalsIdDeleteRequest {
    id: string;
    user: string;
}

export interface TimeintervalsIdGetRequest {
    id: string;
    username?: string;
}

export interface TimeintervalsIdPutRequest {
    id: string;
    user: string;
    timeInterval?: TimeInterval;
}

export interface TimeintervalsPostRequest {
    user: string;
    timeInterval?: TimeInterval;
}

/**
 * no description
 */
export class TimeIntervalApi extends runtime.BaseAPI {

    /**
     * Gets a list of all instances of TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
     * List all instances of TimeInterval
     */
    async timeintervalsGetRaw(requestParameters: TimeintervalsGetRequest): Promise<runtime.ApiResponse<Array<TimeInterval>>> {
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
            path: `/timeintervals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TimeIntervalFromJSON));
    }

   /**
    * Gets a list of all instances of TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
    * List all instances of TimeInterval
    */
    async timeintervalsGet(requestParameters: TimeintervalsGetRequest): Promise<Array<TimeInterval>> {
        const response = await this.timeintervalsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
     * Delete an existing TimeInterval
     */
    async timeintervalsIdDeleteRaw(requestParameters: TimeintervalsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling timeintervalsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling timeintervalsIdDelete.');
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
            path: `/timeintervals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
    * Delete an existing TimeInterval
    */
    async timeintervalsIdDelete(requestParameters: TimeintervalsIdDeleteRequest): Promise<void> {
        await this.timeintervalsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
     * Get a single TimeInterval by its id
     */
    async timeintervalsIdGetRaw(requestParameters: TimeintervalsIdGetRequest): Promise<runtime.ApiResponse<TimeInterval>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling timeintervalsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeintervals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeIntervalFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
    * Get a single TimeInterval by its id
    */
    async timeintervalsIdGet(requestParameters: TimeintervalsIdGetRequest): Promise<TimeInterval> {
        const response = await this.timeintervalsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
     * Update an existing TimeInterval
     */
    async timeintervalsIdPutRaw(requestParameters: TimeintervalsIdPutRequest): Promise<runtime.ApiResponse<TimeInterval>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling timeintervalsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling timeintervalsIdPut.');
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
            path: `/timeintervals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TimeIntervalToJSON(requestParameters.timeInterval),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeIntervalFromJSON(jsonValue));
    }

   /**
    * Updates an existing TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
    * Update an existing TimeInterval
    */
    async timeintervalsIdPut(requestParameters: TimeintervalsIdPutRequest): Promise<TimeInterval> {
        const response = await this.timeintervalsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
     * Create one TimeInterval
     */
    async timeintervalsPostRaw(requestParameters: TimeintervalsPostRequest): Promise<runtime.ApiResponse<TimeInterval>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling timeintervalsPost.');
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
            path: `/timeintervals`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeIntervalToJSON(requestParameters.timeInterval),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeIntervalFromJSON(jsonValue));
    }

   /**
    * Create a new instance of TimeInterval (more information in https://w3id.org/okn/o/sdm#TimeInterval)
    * Create one TimeInterval
    */
    async timeintervalsPost(requestParameters: TimeintervalsPostRequest): Promise<TimeInterval> {
        const response = await this.timeintervalsPostRaw(requestParameters);
        return await response.value();
    }

}
