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
 * @interface SampleExecution
 */
export interface SampleExecution {
    /**
     * 
     * @type {Array<string>}
     * @memberof SampleExecution
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SampleExecution
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SampleExecution
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SampleExecution
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SampleExecution
     */
    hasExecutionCommand?: Array<string> | null;
}

export function SampleExecutionFromJSON(json: any): SampleExecution {
    return SampleExecutionFromJSONTyped(json, false);
}

export function SampleExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleExecution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
    };
}

export function SampleExecutionToJSON(value?: SampleExecution): any {
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
        'hasExecutionCommand': value.hasExecutionCommand,
    };
}


