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
    DataTransformation,
    DataTransformationFromJSON,
    DataTransformationFromJSONTyped,
    DataTransformationToJSON,
    DataTransformationSetup,
    DataTransformationSetupFromJSON,
    DataTransformationSetupFromJSONTyped,
    DataTransformationSetupToJSON,
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
 * Grid that represents a 2D or 3D space
 * @export
 * @interface SpatiallyDistributedGrid
 */
export interface SpatiallyDistributedGrid {
    /**
     * Description not available
     * @type {Array<number>}
     * @memberof SpatiallyDistributedGrid
     */
    hasDimensionality?: Array<number> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasFormat?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    pathLocation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof SpatiallyDistributedGrid
     */
    hasFileStructure?: Array<object> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    description?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<DataTransformation>}
     * @memberof SpatiallyDistributedGrid
     */
    hasDataTransformation?: Array<DataTransformation> | null;
    /**
     * Description not available
     * @type {Array<VariablePresentation>}
     * @memberof SpatiallyDistributedGrid
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    type?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SampleResource>}
     * @memberof SpatiallyDistributedGrid
     */
    hasFixedResource?: Array<SampleResource> | null;
    /**
     * Coordinate system used in a grid
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasCoordinateSystem?: Array<string> | null;
    /**
     * Spatial resolution of a grid (e.g., 50m)
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * Grids may be: rectangular, triangular, hexagonal, hybrid, unstructured, block structure, etc.
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasShape?: Array<string> | null;
    /**
     * Dimension of the grid (2D, 3D)
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasDimension?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<DataTransformationSetup>}
     * @memberof SpatiallyDistributedGrid
     */
    hasDataTransformationSetup?: Array<DataTransformationSetup> | null;
    /**
     * Description not available
     * @type {Array<number>}
     * @memberof SpatiallyDistributedGrid
     */
    position?: Array<number> | null;
    /**
     * identifier
     * @type {string}
     * @memberof SpatiallyDistributedGrid
     */
    id?: string;
}

export function SpatiallyDistributedGridFromJSON(json: any): SpatiallyDistributedGrid {
    return SpatiallyDistributedGridFromJSONTyped(json, false);
}

export function SpatiallyDistributedGridFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatiallyDistributedGrid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDimensionality': !exists(json, 'hasDimensionality') ? undefined : json['hasDimensionality'],
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'pathLocation': !exists(json, 'pathLocation') ? undefined : json['pathLocation'],
        'hasFileStructure': !exists(json, 'hasFileStructure') ? undefined : json['hasFileStructure'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasDataTransformation': !exists(json, 'hasDataTransformation') ? undefined : (json['hasDataTransformation'] as Array<any>).map(DataTransformationFromJSON),
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasFixedResource': !exists(json, 'hasFixedResource') ? undefined : (json['hasFixedResource'] as Array<any>).map(SampleResourceFromJSON),
        'hasCoordinateSystem': !exists(json, 'hasCoordinateSystem') ? undefined : json['hasCoordinateSystem'],
        'hasSpatialResolution': !exists(json, 'hasSpatialResolution') ? undefined : json['hasSpatialResolution'],
        'hasShape': !exists(json, 'hasShape') ? undefined : json['hasShape'],
        'hasDimension': !exists(json, 'hasDimension') ? undefined : json['hasDimension'],
        'hasDataTransformationSetup': !exists(json, 'hasDataTransformationSetup') ? undefined : (json['hasDataTransformationSetup'] as Array<any>).map(DataTransformationSetupFromJSON),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function SpatiallyDistributedGridToJSON(value?: SpatiallyDistributedGrid): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDimensionality': value.hasDimensionality,
        'hasFormat': value.hasFormat,
        'pathLocation': value.pathLocation,
        'hasFileStructure': value.hasFileStructure,
        'description': value.description,
        'hasDataTransformation': value.hasDataTransformation === undefined ? undefined : (value.hasDataTransformation as Array<any>).map(DataTransformationToJSON),
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'label': value.label,
        'type': value.type,
        'hasFixedResource': value.hasFixedResource === undefined ? undefined : (value.hasFixedResource as Array<any>).map(SampleResourceToJSON),
        'hasCoordinateSystem': value.hasCoordinateSystem,
        'hasSpatialResolution': value.hasSpatialResolution,
        'hasShape': value.hasShape,
        'hasDimension': value.hasDimension,
        'hasDataTransformationSetup': value.hasDataTransformationSetup === undefined ? undefined : (value.hasDataTransformationSetup as Array<any>).map(DataTransformationSetupToJSON),
        'position': value.position,
        'id': value.id,
    };
}


