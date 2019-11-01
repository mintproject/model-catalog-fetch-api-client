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
import {
    SampleResource,
    SampleResourceFromJSON,
    SampleResourceFromJSONTyped,
    SampleResourceToJSON,
    VariablePresentation,
    VariablePresentationFromJSON,
    VariablePresentationFromJSONTyped,
    VariablePresentationToJSON,
} from './';

/**
 * 
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * 
     * @type {Array<number>}
     * @memberof Image
     */
    hasDimensionality?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    hasFormat?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Image
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {object}
     * @memberof Image
     */
    hasFileStructure?: object | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<VariablePresentation>}
     * @memberof Image
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Image
     */
    position?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof Image
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    value?: Array<string> | null;
    /**
     * 
     * @type {Array<SampleResource>}
     * @memberof Image
     */
    hasFixedResource?: Array<SampleResource> | null;
}

export function ImageFromJSON(json: any): Image {
    return ImageFromJSONTyped(json, false);
}

export function ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDimensionality': !exists(json, 'hasDimensionality') ? undefined : json['hasDimensionality'],
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'hasFileStructure': !exists(json, 'hasFileStructure') ? undefined : json['hasFileStructure'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'hasFixedResource': !exists(json, 'hasFixedResource') ? undefined : (json['hasFixedResource'] as Array<any>).map(SampleResourceFromJSON),
    };
}

export function ImageToJSON(value?: Image): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDimensionality': value.hasDimensionality,
        'hasFormat': value.hasFormat,
        'hadPrimarySource': value.hadPrimarySource,
        'hasFileStructure': value.hasFileStructure,
        'description': value.description,
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'position': value.position,
        'id': value.id,
        'label': value.label,
        'type': value.type,
        'value': value.value,
        'hasFixedResource': value.hasFixedResource === undefined ? undefined : (value.hasFixedResource as Array<any>).map(SampleResourceToJSON),
    };
}


