// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Emulator,
    EmulatorFromJSON,
    EmulatorToJSON,
} from '../models';

export interface EmulatorsGetRequest {
    username?: string;
    label?: string;
}

export interface EmulatorsIdDeleteRequest {
    id: string;
    user: string;
}

export interface EmulatorsIdGetRequest {
    id: string;
    username?: string;
}

export interface EmulatorsIdPutRequest {
    id: string;
    user: string;
    emulator?: Emulator;
}

export interface EmulatorsPostRequest {
    user: string;
    emulator?: Emulator;
}

/**
 * no description
 */
export class EmulatorApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Emulator entities
     * List all Emulator entities
     */
    async emulatorsGetRaw(requestParameters: EmulatorsGetRequest): Promise<runtime.ApiResponse<Array<Emulator>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/emulators`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EmulatorFromJSON));
    }

   /**
    * Gets a list of all Emulator entities
    * List all Emulator entities
    */
    async emulatorsGet(requestParameters: EmulatorsGetRequest): Promise<Array<Emulator>> {
        const response = await this.emulatorsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Emulator
     * Delete a Emulator
     */
    async emulatorsIdDeleteRaw(requestParameters: EmulatorsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling emulatorsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling emulatorsIdDelete.');
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
            path: `/emulators/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Emulator
    * Delete a Emulator
    */
    async emulatorsIdDelete(requestParameters: EmulatorsIdDeleteRequest): Promise<void> {
        await this.emulatorsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Emulator
     * Get a Emulator
     */
    async emulatorsIdGetRaw(requestParameters: EmulatorsIdGetRequest): Promise<runtime.ApiResponse<Emulator>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling emulatorsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/emulators/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmulatorFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Emulator
    * Get a Emulator
    */
    async emulatorsIdGet(requestParameters: EmulatorsIdGetRequest): Promise<Emulator> {
        const response = await this.emulatorsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Emulator
     * Update a Emulator
     */
    async emulatorsIdPutRaw(requestParameters: EmulatorsIdPutRequest): Promise<runtime.ApiResponse<Emulator>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling emulatorsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling emulatorsIdPut.');
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
            path: `/emulators/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EmulatorToJSON(requestParameters.emulator),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmulatorFromJSON(jsonValue));
    }

   /**
    * Updates an existing Emulator
    * Update a Emulator
    */
    async emulatorsIdPut(requestParameters: EmulatorsIdPutRequest): Promise<Emulator> {
        const response = await this.emulatorsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of a Emulator
     * Create a Emulator
     */
    async emulatorsPostRaw(requestParameters: EmulatorsPostRequest): Promise<runtime.ApiResponse<Emulator>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling emulatorsPost.');
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
            path: `/emulators`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmulatorToJSON(requestParameters.emulator),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmulatorFromJSON(jsonValue));
    }

   /**
    * Create a new instance of a Emulator
    * Create a Emulator
    */
    async emulatorsPost(requestParameters: EmulatorsPostRequest): Promise<Emulator> {
        const response = await this.emulatorsPostRaw(requestParameters);
        return await response.value();
    }

}
