// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Person,
    PersonFromJSON,
    PersonToJSON,
} from '../models';

export interface PersonsGetRequest {
    username?: string;
    label?: string;
}

export interface PersonsIdDeleteRequest {
    id: string;
    user: string;
}

export interface PersonsIdGetRequest {
    id: string;
    username?: string;
}

export interface PersonsIdPutRequest {
    id: string;
    user: string;
    person?: Person;
}

export interface PersonsPostRequest {
    user: string;
    person?: Person;
}

/**
 * no description
 */
export class PersonApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Person entities
     * List all Person entities
     */
    async personsGetRaw(requestParameters: PersonsGetRequest): Promise<runtime.ApiResponse<Array<Person>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonFromJSON));
    }

   /**
    * Gets a list of all Person entities
    * List all Person entities
    */
    async personsGet(requestParameters: PersonsGetRequest): Promise<Array<Person>> {
        const response = await this.personsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Person
     * Delete a Person
     */
    async personsIdDeleteRaw(requestParameters: PersonsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling personsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling personsIdDelete.');
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
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Person
    * Delete a Person
    */
    async personsIdDelete(requestParameters: PersonsIdDeleteRequest): Promise<void> {
        await this.personsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Person
     * Get a Person
     */
    async personsIdGetRaw(requestParameters: PersonsIdGetRequest): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling personsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Person
    * Get a Person
    */
    async personsIdGet(requestParameters: PersonsIdGetRequest): Promise<Person> {
        const response = await this.personsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Person
     * Update a Person
     */
    async personsIdPutRaw(requestParameters: PersonsIdPutRequest): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling personsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling personsIdPut.');
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
            path: `/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters.person),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

   /**
    * Updates an existing Person
    * Update a Person
    */
    async personsIdPut(requestParameters: PersonsIdPutRequest): Promise<Person> {
        const response = await this.personsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a Person
     * Create a Person
     */
    async personsPostRaw(requestParameters: PersonsPostRequest): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling personsPost.');
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
            path: `/persons`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters.person),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a Person
    * Create a Person
    */
    async personsPost(requestParameters: PersonsPostRequest): Promise<Person> {
        const response = await this.personsPostRaw(requestParameters);
        return await response.value();
    }

}
