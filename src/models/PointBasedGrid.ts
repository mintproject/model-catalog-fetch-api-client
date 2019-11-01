// tslint:disable
/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * The version of the OpenAPI document: v1.1.0
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
 * @interface PointBasedGrid
 */
export interface PointBasedGrid {
    /**
     * 
     * @type {Array<number>}
     * @memberof PointBasedGrid
     */
    hasDimensionality?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    hasFormat?: Array<string> | null;
    /**
     * 
     * @type {object}
     * @memberof PointBasedGrid
     */
    hasFileStructure?: object | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof PointBasedGrid
     */
    hasPresentation?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof PointBasedGrid
     */
    hasFixedResource?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    hasCoordinateSystem?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    hasShape?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PointBasedGrid
     */
    hasDimension?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PointBasedGrid
     */
    position?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof PointBasedGrid
     */
    id?: string;
}

export function PointBasedGridFromJSON(json: any): PointBasedGrid {
    return PointBasedGridFromJSONTyped(json, false);
}

export function PointBasedGridFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointBasedGrid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDimensionality': !exists(json, 'hasDimensionality') ? undefined : json['hasDimensionality'],
        'hasFormat': !exists(json, 'hasFormat') ? undefined : json['hasFormat'],
        'hasFileStructure': !exists(json, 'hasFileStructure') ? undefined : json['hasFileStructure'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : json['hasPresentation'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasFixedResource': !exists(json, 'hasFixedResource') ? undefined : json['hasFixedResource'],
        'hasSpatialResolution': !exists(json, 'hasSpatialResolution') ? undefined : json['hasSpatialResolution'],
        'hasCoordinateSystem': !exists(json, 'hasCoordinateSystem') ? undefined : json['hasCoordinateSystem'],
        'hasShape': !exists(json, 'hasShape') ? undefined : json['hasShape'],
        'hasDimension': !exists(json, 'hasDimension') ? undefined : json['hasDimension'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function PointBasedGridToJSON(value?: PointBasedGrid): any {
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
        'hasPresentation': value.hasPresentation,
        'label': value.label,
        'type': value.type,
        'hasFixedResource': value.hasFixedResource,
        'hasSpatialResolution': value.hasSpatialResolution,
        'hasCoordinateSystem': value.hasCoordinateSystem,
        'hasShape': value.hasShape,
        'hasDimension': value.hasDimension,
        'position': value.position,
        'id': value.id,
    };
}

