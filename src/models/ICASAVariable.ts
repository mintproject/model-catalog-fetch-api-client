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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ICASAVariable
 */
export interface ICASAVariable {
    /**
     * 
     * @type {Array<string>}
     * @memberof ICASAVariable
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ICASAVariable
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ICASAVariable
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ICASAVariable
     */
    type?: Array<string> | null;
}

export function ICASAVariableFromJSON(json: any): ICASAVariable {
    return ICASAVariableFromJSONTyped(json, false);
}

export function ICASAVariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICASAVariable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ICASAVariableToJSON(value?: ICASAVariable): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


