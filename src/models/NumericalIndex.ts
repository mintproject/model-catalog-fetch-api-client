// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    StandardVariable,
    StandardVariableFromJSON,
    StandardVariableFromJSONTyped,
    StandardVariableToJSON,
} from './';

/**
 * A number (such as a ratio) derived from a series of observations and used as an indicator or measure (https://www.merriam-webster.com/dictionary/index)
 * @export
 * @interface NumericalIndex
 */
export interface NumericalIndex {
    /**
     * the standard name of a variable
     * @type {Array<StandardVariable>}
     * @memberof NumericalIndex
     */
    hasStandardVariable?: Array<StandardVariable> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof NumericalIndex
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof NumericalIndex
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof NumericalIndex
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof NumericalIndex
     */
    type?: Array<string> | null;
}

export function NumericalIndexFromJSON(json: any): NumericalIndex {
    return NumericalIndexFromJSONTyped(json, false);
}

export function NumericalIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumericalIndex {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasStandardVariable': !exists(json, 'hasStandardVariable') ? undefined : (json['hasStandardVariable'] as Array<any>).map(StandardVariableFromJSON),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function NumericalIndexToJSON(value?: NumericalIndex): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasStandardVariable': value.hasStandardVariable === undefined ? undefined : (value.hasStandardVariable as Array<any>).map(StandardVariableToJSON),
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


