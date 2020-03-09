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
import {
    Software,
    SoftwareFromJSON,
    SoftwareFromJSONTyped,
    SoftwareToJSON,
} from './';

/**
 * 
 * @export
 * @interface Visualization
 */
export interface Visualization {
    /**
     * 
     * @type {Array<string>}
     * @memberof Visualization
     */
    hasFormat?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Visualization
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {Array<Software>}
     * @memberof Visualization
     */
    wasDerivedFromSoftware?: Array<Software> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Visualization
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Visualization
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Visualization
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Visualization
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Visualization
     */
    value?: Array<object> | null;
}

export function VisualizationFromJSON(json: any): Visualization {
    return VisualizationFromJSONTyped(json, false);
}

export function VisualizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Visualization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'wasDerivedFromSoftware': !exists(json, 'wasDerivedFromSoftware') ? undefined : (json['wasDerivedFromSoftware'] as Array<any>).map(SoftwareFromJSON),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function VisualizationToJSON(value?: Visualization): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasFormat': value.hasFormat,
        'hadPrimarySource': value.hadPrimarySource,
        'wasDerivedFromSoftware': value.wasDerivedFromSoftware === undefined ? undefined : (value.wasDerivedFromSoftware as Array<any>).map(SoftwareToJSON),
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
        'value': value.value,
    };
}


