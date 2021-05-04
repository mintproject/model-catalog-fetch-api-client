// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Model,
    ModelFromJSON,
    ModelToJSON,
} from '../models';

export interface CustomModelIndexGetRequest {
    label: string;
    customQueryName?: string;
    username?: string;
}

export interface CustomModelInterventionGetRequest {
    label: string;
    customQueryName?: string;
    username?: string;
}

export interface CustomModelRegionGetRequest {
    label: string;
    customQueryName?: string;
    username?: string;
}

export interface CustomModelsStandardVariableGetRequest {
    label: string;
    customQueryName?: string;
    username?: string;
}

export interface CustomModelsVariableGetRequest {
    label: string;
    customQueryName?: string;
    username?: string;
}

export interface ModelsGetRequest {
    username?: string;
    label?: string;
    page?: number;
    perPage?: number;
}

export interface ModelsIdDeleteRequest {
    id: string;
    user?: string;
}

export interface ModelsIdGetRequest {
    id: string;
    username?: string;
}

export interface ModelsIdPutRequest {
    id: string;
    user?: string;
    model?: Model;
}

export interface ModelsPostRequest {
    user?: string;
    model?: Model;
}

/**
 * no description
 */
export class ModelApi extends runtime.BaseAPI {

    /**
     * Gets the details of a single instance of a Model
     * Get a Model
     */
    async customModelIndexGetRaw(requestParameters: CustomModelIndexGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        if (requestParameters.label === null || requestParameters.label === undefined) {
            throw new runtime.RequiredError('label','Required parameter requestParameters.label was null or undefined when calling customModelIndexGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/model/index`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets the details of a single instance of a Model
    * Get a Model
    */
    async customModelIndexGet(requestParameters: CustomModelIndexGetRequest): Promise<Array<Model>> {
        const response = await this.customModelIndexGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets the details of a single instance of a Model
     * Get a Model
     */
    async customModelInterventionGetRaw(requestParameters: CustomModelInterventionGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        if (requestParameters.label === null || requestParameters.label === undefined) {
            throw new runtime.RequiredError('label','Required parameter requestParameters.label was null or undefined when calling customModelInterventionGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/model/intervention`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets the details of a single instance of a Model
    * Get a Model
    */
    async customModelInterventionGet(requestParameters: CustomModelInterventionGetRequest): Promise<Array<Model>> {
        const response = await this.customModelInterventionGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets the details of a single instance of a Model
     * Get a Model
     */
    async customModelRegionGetRaw(requestParameters: CustomModelRegionGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        if (requestParameters.label === null || requestParameters.label === undefined) {
            throw new runtime.RequiredError('label','Required parameter requestParameters.label was null or undefined when calling customModelRegionGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/model/region`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets the details of a single instance of a Model
    * Get a Model
    */
    async customModelRegionGet(requestParameters: CustomModelRegionGetRequest): Promise<Array<Model>> {
        const response = await this.customModelRegionGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of model filter by the label of a standard variable
     * Get a list of models
     */
    async customModelsStandardVariableGetRaw(requestParameters: CustomModelsStandardVariableGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        if (requestParameters.label === null || requestParameters.label === undefined) {
            throw new runtime.RequiredError('label','Required parameter requestParameters.label was null or undefined when calling customModelsStandardVariableGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/models/standard_variable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets a list of model filter by the label of a standard variable
    * Get a list of models
    */
    async customModelsStandardVariableGet(requestParameters: CustomModelsStandardVariableGetRequest): Promise<Array<Model>> {
        const response = await this.customModelsStandardVariableGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get models by variable name
     * Get a list of Model
     */
    async customModelsVariableGetRaw(requestParameters: CustomModelsVariableGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
        if (requestParameters.label === null || requestParameters.label === undefined) {
            throw new runtime.RequiredError('label','Required parameter requestParameters.label was null or undefined when calling customModelsVariableGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customQueryName !== undefined) {
            queryParameters['custom_query_name'] = requestParameters.customQueryName;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.label !== undefined) {
            queryParameters['label'] = requestParameters.label;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/custom/models/variable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Get models by variable name
    * Get a list of Model
    */
    async customModelsVariableGet(requestParameters: CustomModelsVariableGetRequest): Promise<Array<Model>> {
        const response = await this.customModelsVariableGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Gets a list of all instances of Model (more information in https://w3id.org/okn/o/sdm#Model)
     * List all instances of Model
     */
    async modelsGetRaw(requestParameters: ModelsGetRequest): Promise<runtime.ApiResponse<Array<Model>>> {
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
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

   /**
    * Gets a list of all instances of Model (more information in https://w3id.org/okn/o/sdm#Model)
    * List all instances of Model
    */
    async modelsGet(requestParameters: ModelsGetRequest): Promise<Array<Model>> {
        const response = await this.modelsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing Model (more information in https://w3id.org/okn/o/sdm#Model)
     * Delete an existing Model
     */
    async modelsIdDeleteRaw(requestParameters: ModelsIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdDelete.');
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
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    * Delete an existing Model (more information in https://w3id.org/okn/o/sdm#Model)
    * Delete an existing Model
    */
    async modelsIdDelete(requestParameters: ModelsIdDeleteRequest): Promise<void> {
        await this.modelsIdDeleteRaw(requestParameters);
    }

    /**
     * Gets the details of a given Model (more information in https://w3id.org/okn/o/sdm#Model)
     * Get a single Model by its id
     */
    async modelsIdGetRaw(requestParameters: ModelsIdGetRequest): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Gets the details of a given Model (more information in https://w3id.org/okn/o/sdm#Model)
    * Get a single Model by its id
    */
    async modelsIdGet(requestParameters: ModelsIdGetRequest): Promise<Model> {
        const response = await this.modelsIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an existing Model (more information in https://w3id.org/okn/o/sdm#Model)
     * Update an existing Model
     */
    async modelsIdPutRaw(requestParameters: ModelsIdPutRequest): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling modelsIdPut.');
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
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelToJSON(requestParameters.model),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Updates an existing Model (more information in https://w3id.org/okn/o/sdm#Model)
    * Update an existing Model
    */
    async modelsIdPut(requestParameters: ModelsIdPutRequest): Promise<Model> {
        const response = await this.modelsIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of Model (more information in https://w3id.org/okn/o/sdm#Model)
     * Create one Model
     */
    async modelsPostRaw(requestParameters: ModelsPostRequest): Promise<runtime.ApiResponse<Model>> {
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
            path: `/models`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelToJSON(requestParameters.model),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

   /**
    * Create a new instance of Model (more information in https://w3id.org/okn/o/sdm#Model)
    * Create one Model
    */
    async modelsPost(requestParameters: ModelsPostRequest): Promise<Model> {
        const response = await this.modelsPostRaw(requestParameters);
        return await response.value();
    }

}
