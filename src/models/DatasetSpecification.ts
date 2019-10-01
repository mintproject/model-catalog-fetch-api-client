// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.0.0
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
 * @interface DatasetSpecification
 */
export interface DatasetSpecification {
    /**
     * 
     * @type {Array<number>}
     * @memberof DatasetSpecification
     */
    hasDimensionality?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetSpecification
     */
    hasFormat?: Array<string> | null;
    /**
     * 
     * @type {object}
     * @memberof DatasetSpecification
     */
    hasFileStructure?: object | null;
    /**
     * 
     * @type {Array<VariablePresentation>}
     * @memberof DatasetSpecification
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof DatasetSpecification
     */
    position?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetSpecification
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetSpecification
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetSpecification
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<SampleResource>}
     * @memberof DatasetSpecification
     */
    hasFixedResource?: Array<SampleResource> | null;
}

export function DatasetSpecificationFromJSON(json: any): DatasetSpecification {
    return DatasetSpecificationFromJSONTyped(json, false);
}

export function DatasetSpecificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetSpecification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDimensionality': !exists(json, 'hasDimensionality') ? undefined : json['hasDimensionality'],
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'hasFileStructure': !exists(json, 'hasFileStructure') ? undefined : json['hasFileStructure'],
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasFixedResource': !exists(json, 'hasFixedResource') ? undefined : (json['hasFixedResource'] as Array<any>).map(SampleResourceFromJSON),
    };
}

export function DatasetSpecificationToJSON(value?: DatasetSpecification): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDimensionality': value.hasDimensionality,
        'hasFormat': value.hasFormat,
        'hasFileStructure': value.hasFileStructure,
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'position': value.position,
        'id': value.id,
        'label': value.label,
        'type': value.type,
        'hasFixedResource': value.hasFixedResource === undefined ? undefined : (value.hasFixedResource as Array<any>).map(SampleResourceToJSON),
    };
}


