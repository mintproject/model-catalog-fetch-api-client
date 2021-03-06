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
import {
    DataTransformation,
    DataTransformationFromJSON,
    DataTransformationFromJSONTyped,
    DataTransformationToJSON,
    DataTransformationSetup,
    DataTransformationSetupFromJSON,
    DataTransformationSetupFromJSONTyped,
    DataTransformationSetupToJSON,
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationFromJSONTyped,
    DatasetSpecificationToJSON,
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
 * Class that represents the geospatial information associated with a model
 * @export
 * @interface Grid
 */
export interface Grid {
    /**
     * Description not available
     * @type {Array<number>}
     * @memberof Grid
     */
    hasDimensionality?: Array<number> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Grid
     */
    hasFormat?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Grid
     */
    pathLocation?: Array<string> | null;
    /**
     * Description not available
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
     * Description not available
     * @type {Array<DataTransformation>}
     * @memberof Grid
     */
    hasDataTransformation?: Array<DataTransformation> | null;
    /**
     * Description not available
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
     * Description not available
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
     * Spatial resolution of a grid (e.g., 50m)
     * @type {Array<string>}
     * @memberof Grid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<DatasetSpecification>}
     * @memberof Grid
     */
    isTransformedFrom?: Array<DatasetSpecification> | null;
    /**
     * Grids may be: rectangular, triangular, hexagonal, hybrid, unstructured, block structure, etc.
     * @type {Array<string>}
     * @memberof Grid
     */
    hasShape?: Array<string> | null;
    /**
     * Dimension of the grid (2D, 3D)
     * @type {Array<string>}
     * @memberof Grid
     */
    hasDimension?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<DataTransformationSetup>}
     * @memberof Grid
     */
    hasDataTransformationSetup?: Array<DataTransformationSetup> | null;
    /**
     * Description not available
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
        'isTransformedFrom': !exists(json, 'isTransformedFrom') ? undefined : (json['isTransformedFrom'] as Array<any>).map(DatasetSpecificationFromJSON),
        'hasShape': !exists(json, 'hasShape') ? undefined : json['hasShape'],
        'hasDimension': !exists(json, 'hasDimension') ? undefined : json['hasDimension'],
        'hasDataTransformationSetup': !exists(json, 'hasDataTransformationSetup') ? undefined : (json['hasDataTransformationSetup'] as Array<any>).map(DataTransformationSetupFromJSON),
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
        'isTransformedFrom': value.isTransformedFrom === undefined ? undefined : (value.isTransformedFrom as Array<any>).map(DatasetSpecificationToJSON),
        'hasShape': value.hasShape,
        'hasDimension': value.hasDimension,
        'hasDataTransformationSetup': value.hasDataTransformationSetup === undefined ? undefined : (value.hasDataTransformationSetup as Array<any>).map(DataTransformationSetupToJSON),
        'position': value.position,
        'id': value.id,
    };
}


