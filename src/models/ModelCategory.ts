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

import { exists, mapValues } from '../runtime';
/**
 * Class used to represent a category of a model (e.g., Hydrology, Agriculture, etc.)
 * @export
 * @interface ModelCategory
 */
export interface ModelCategory {
    /**
     * small description
     * @type {Array<string>}
     * @memberof ModelCategory
     */
    description?: Array<string> | null;
    /**
     * Indicates this subcategory parent category
     * @type {Array<ModelCategory>}
     * @memberof ModelCategory
     */
    parentCategory?: Array<ModelCategory> | null;
    /**
     * identifier
     * @type {string}
     * @memberof ModelCategory
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof ModelCategory
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof ModelCategory
     */
    type?: Array<string> | null;
}

export function ModelCategoryFromJSON(json: any): ModelCategory {
    return ModelCategoryFromJSONTyped(json, false);
}

export function ModelCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'parentCategory': !exists(json, 'parentCategory') ? undefined : (json['parentCategory'] as Array<any>).map(ModelCategoryFromJSON),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ModelCategoryToJSON(value?: ModelCategory): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'parentCategory': value.parentCategory === undefined ? undefined : (value.parentCategory as Array<any>).map(ModelCategoryToJSON),
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


