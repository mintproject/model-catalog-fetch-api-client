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
/**
 * 
 * @export
 * @interface SpatiallyDistributedGrid
 */
export interface SpatiallyDistributedGrid {
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasShape?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasDimension?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SpatiallyDistributedGrid
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SpatiallyDistributedGrid
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatiallyDistributedGrid
     */
    hasCoordinateSystem?: Array<string> | null;
}

export function SpatiallyDistributedGridFromJSON(json: any): SpatiallyDistributedGrid {
    return SpatiallyDistributedGridFromJSONTyped(json, false);
}

export function SpatiallyDistributedGridFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatiallyDistributedGrid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasShape': !exists(json, 'hasShape') ? undefined : json['hasShape'],
        'hasDimension': !exists(json, 'hasDimension') ? undefined : json['hasDimension'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasSpatialResolution': !exists(json, 'hasSpatialResolution') ? undefined : json['hasSpatialResolution'],
        'hasCoordinateSystem': !exists(json, 'hasCoordinateSystem') ? undefined : json['hasCoordinateSystem'],
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
        
        'hasShape': value.hasShape,
        'hasDimension': value.hasDimension,
        'id': value.id,
        'label': value.label,
        'type': value.type,
        'hasSpatialResolution': value.hasSpatialResolution,
        'hasCoordinateSystem': value.hasCoordinateSystem,
    };
}


