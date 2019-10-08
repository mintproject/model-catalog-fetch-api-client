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
    TheoryGuidedModel,
    TheoryGuidedModelFromJSON,
    TheoryGuidedModelToJSON,
} from '../models';

export interface TheoryGuidedmodelsGetRequest {
    username?: string;
    queryText?: string;
}

export interface TheoryGuidedmodelsIdDeleteRequest {
    id: string;
    user: string;
}

export interface TheoryGuidedmodelsIdGetRequest {
    id: string;
    username?: string;
}

export interface TheoryGuidedmodelsIdPutRequest {
    id: string;
    user: string;
    theoryGuidedModel?: TheoryGuidedModel;
}

export interface TheoryGuidedmodelsPostRequest {
    user: string;
    theoryGuidedModel?: TheoryGuidedModel;
}

/**
 * no description
 */
export class TheoryGuidedModelApi extends runtime.BaseAPI {

    /**
     * Gets a list of all Theory-GuidedModel entities
     * List all Theory-GuidedModel entities
     */
    async theoryGuidedmodelsGetRaw(requestParameters: TheoryGuidedmodelsGetRequest): Promise<runtime.ApiResponse<Array<TheoryGuidedModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.queryText !== undefined) {
            queryParameters['query_text'] = requestParameters.queryText;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/theory-guidedmodels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TheoryGuidedModelFromJSON));
    }

   /**
    * Gets a list of all Theory-GuidedModel entities
    * List all Theory-GuidedModel entities
    */
    async theoryGuidedmodelsGet(requestParameters: TheoryGuidedmodelsGetRequest): Promise<Array<TheoryGuidedModel>> {
        const response = await this.theoryGuidedmodelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Theory-GuidedModel
     * Delete a Theory-GuidedModel
     */
    async theoryGuidedmodelsIdDeleteRaw(requestParameters: TheoryGuidedmodelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling theoryGuidedmodelsIdDelete.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling theoryGuidedmodelsIdDelete.');
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
            path: `/theory-guidedmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Theory-GuidedModel
    * Delete a Theory-GuidedModel
    */
    async theoryGuidedmodelsIdDelete(requestParameters: TheoryGuidedmodelsIdDeleteRequest): Promise<void> {
        await this.theoryGuidedmodelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a single instance of a Theory-GuidedModel
     * Get a Theory-GuidedModel
     */
    async theoryGuidedmodelsIdGetRaw(requestParameters: TheoryGuidedmodelsIdGetRequest): Promise<runtime.ApiResponse<TheoryGuidedModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling theoryGuidedmodelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/theory-guidedmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TheoryGuidedModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a single instance of a Theory-GuidedModel
    * Get a Theory-GuidedModel
    */
    async theoryGuidedmodelsIdGet(requestParameters: TheoryGuidedmodelsIdGetRequest): Promise<TheoryGuidedModel> {
        const response = await this.theoryGuidedmodelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Theory-GuidedModel
     * Update a Theory-GuidedModel
     */
    async theoryGuidedmodelsIdPutRaw(requestParameters: TheoryGuidedmodelsIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling theoryGuidedmodelsIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling theoryGuidedmodelsIdPut.');
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
            path: `/theory-guidedmodels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TheoryGuidedModelToJSON(requestParameters.theoryGuidedModel),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Updates an existing Theory-GuidedModel
    * Update a Theory-GuidedModel
    */
    async theoryGuidedmodelsIdPut(requestParameters: TheoryGuidedmodelsIdPutRequest): Promise<void> {
        await this.theoryGuidedmodelsIdPutRaw(requestParameters);
    }

    /**
     * Create a new instance of a Theory-GuidedModel
     * Create a Theory-GuidedModel
     */
    async theoryGuidedmodelsPostRaw(requestParameters: TheoryGuidedmodelsPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling theoryGuidedmodelsPost.');
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
            path: `/theory-guidedmodels`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TheoryGuidedModelToJSON(requestParameters.theoryGuidedModel),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Create a new instance of a Theory-GuidedModel
    * Create a Theory-GuidedModel
    */
    async theoryGuidedmodelsPost(requestParameters: TheoryGuidedmodelsPostRequest): Promise<void> {
        await this.theoryGuidedmodelsPostRaw(requestParameters);
    }

}
