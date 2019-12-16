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
 * @interface Subsidy
 */
export interface Subsidy {
    /**
     * 
     * @type {Array<string>}
     * @memberof Subsidy
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Subsidy
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Subsidy
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Subsidy
     */
    type?: Array<string> | null;
}

export function SubsidyFromJSON(json: any): Subsidy {
    return SubsidyFromJSONTyped(json, false);
}

export function SubsidyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subsidy {
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

export function SubsidyToJSON(value?: Subsidy): any {
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


