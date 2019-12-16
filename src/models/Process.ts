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
 * @interface Process
 */
export interface Process {
    /**
     * 
     * @type {Array<string>}
     * @memberof Process
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Process
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Process
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Process
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<Process>}
     * @memberof Process
     */
    influences?: Array<Process> | null;
}

export function ProcessFromJSON(json: any): Process {
    return ProcessFromJSONTyped(json, false);
}

export function ProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Process {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'influences': !exists(json, 'influences') ? undefined : (json['influences'] as Array<any>).map(ProcessFromJSON),
    };
}

export function ProcessToJSON(value?: Process): any {
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
        'influences': value.influences === undefined ? undefined : (value.influences as Array<any>).map(ProcessToJSON),
    };
}


