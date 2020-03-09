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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Unit
 */
export interface Unit {
    /**
     * 
     * @type {Array<string>}
     * @memberof Unit
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Unit
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Unit
     */
    type?: Array<string> | null;
}

export function UnitFromJSON(json: any): Unit {
    return UnitFromJSONTyped(json, false);
}

export function UnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unit {
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

export function UnitToJSON(value?: Unit): any {
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


