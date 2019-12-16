// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.0
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
 * @interface Intervention
 */
export interface Intervention {
    /**
     * 
     * @type {Array<string>}
     * @memberof Intervention
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Intervention
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Intervention
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Intervention
     */
    type?: Array<string> | null;
}

export function InterventionFromJSON(json: any): Intervention {
    return InterventionFromJSONTyped(json, false);
}

export function InterventionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Intervention {
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

export function InterventionToJSON(value?: Intervention): any {
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


