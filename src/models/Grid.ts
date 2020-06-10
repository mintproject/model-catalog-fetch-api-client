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
 * Description not available
 * @export
 * @interface Grid
 */
export interface Grid {
    /**
     * Property to indicate dimensionality of the input or output of a dataset specification
     * @type {Array<number>}
     * @memberof Grid
     */
    hasDimensionality?: Array<number> | null;
    /**
     * Format followed by a file. For example, txt, nc, etc.
     * @type {Array<string>}
     * @memberof Grid
     */
    hasFormat?: Array<string> | null;
    /**
     * Relates a dataset specification to the data structure definition
     * @type {Array<object>}
     * @memberof Grid
     */
    hasFileStructure?: Array<object> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Grid
     */
    description?: Array<string> | null;
    /**
     * Property that links an instance of a dataset (or a dataset specification) to the presentation of a variable contained (or expected to be contained) on it.
     * @type {Array<VariablePresentation>}
     * @memberof Grid
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Grid
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Grid
     */
    type?: Array<string> | null;
    /**
     * Property that links a parameter or an input to a fixed value. For example, in a given configuration a parameter with the planting date for a model could be fixed to avoid the user changing it for that region.
     * @type {Array<SampleResource>}
     * @memberof Grid
     */
    hasFixedResource?: Array<SampleResource> | null;
    /**
     * Coordinate system used in a grid
     * @type {Array<string>}
     * @memberof Grid
     */
    hasCoordinateSystem?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Grid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * Grids may be: rectangular, triangular, hexagonal, hybrid, unstructured, block structure, etc.
     * @type {Array<string>}
     * @memberof Grid
     */
    hasShape?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Grid
     */
    hasDimension?: Array<string> | null;
    /**
     * Position of the parameter or input/output in the model configuration. This property is needed to know how to organize the I/O of the component on execution
     * @type {Array<number>}
     * @memberof Grid
     */
    position?: Array<number> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Grid
     */
    id?: string;
}

export function GridFromJSON(json: any): Grid {
    return GridFromJSONTyped(json, false);
}

export function GridFromJSONTyped(json: any, ignoreDiscriminator: boolean): Grid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDimensionality': !exists(json, 'hasDimensionality') ? undefined : json['hasDimensionality'],
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'hasFileStructure': !exists(json, 'hasFileStructure') ? undefined : json['hasFileStructure'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasFixedResource': !exists(json, 'hasFixedResource') ? undefined : (json['hasFixedResource'] as Array<any>).map(SampleResourceFromJSON),
        'hasCoordinateSystem': !exists(json, 'hasCoordinateSystem') ? undefined : json['hasCoordinateSystem'],
        'hasSpatialResolution': !exists(json, 'hasSpatialResolution') ? undefined : json['hasSpatialResolution'],
        'hasShape': !exists(json, 'hasShape') ? undefined : json['hasShape'],
        'hasDimension': !exists(json, 'hasDimension') ? undefined : json['hasDimension'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function GridToJSON(value?: Grid): any {
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
        'description': value.description,
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'label': value.label,
        'type': value.type,
        'hasFixedResource': value.hasFixedResource === undefined ? undefined : (value.hasFixedResource as Array<any>).map(SampleResourceToJSON),
        'hasCoordinateSystem': value.hasCoordinateSystem,
        'hasSpatialResolution': value.hasSpatialResolution,
        'hasShape': value.hasShape,
        'hasDimension': value.hasDimension,
        'position': value.position,
        'id': value.id,
    };
}


