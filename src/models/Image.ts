// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.5.0
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
 * An image (e.g. tiff file) is a type of dataset specification used to define things like soil, crops, etc.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * Property to indicate dimensionality of the input or output of a dataset specification
     * @type {Array<number>}
     * @memberof Image
     */
    hasDimensionality?: Array<number> | null;
    /**
     * Format followed by a file. For example, txt, nc, etc.
     * @type {Array<string>}
     * @memberof Image
     */
    hasFormat?: Array<string> | null;
    /**
     * had primary source
     * @type {Array<object>}
     * @memberof Image
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Relates a dataset specification to the data structure definition
     * @type {Array<object>}
     * @memberof Image
     */
    hasFileStructure?: Array<object> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Image
     */
    description?: Array<string> | null;
    /**
     * Property that links an instance of a dataset (or a dataset specification) to the presentation of a variable contained (or expected to be contained) on it.
     * @type {Array<VariablePresentation>}
     * @memberof Image
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * Position of the parameter or input/output in the model configuration. This property is needed to know how to organize the I/O of the component on execution
     * @type {Array<number>}
     * @memberof Image
     */
    position?: Array<number> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Image
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Image
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Image
     */
    type?: Array<string> | null;
    /**
     * Value associated to the described entity
     * @type {Array<object>}
     * @memberof Image
     */
    value?: Array<object> | null;
    /**
     * Property that links a parameter or an input to a fixed value. For example, in a given configuration a parameter with the planting date for a model could be fixed to avoid the user changing it for that region.
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


