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
 * A symbol that represents a quanity in a dataset or dataset specification
 * @export
 * @interface Variable
 */
export interface Variable {
    /**
     * small description
     * @type {Array<string>}
     * @memberof Variable
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Variable
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Variable
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Variable
     */
    type?: Array<string> | null;
}

export function VariableFromJSON(json: any): Variable {
    return VariableFromJSONTyped(json, false);
}

export function VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variable {
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

export function VariableToJSON(value?: Variable): any {
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


