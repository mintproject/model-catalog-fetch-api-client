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
 * @interface Grid
 */
export interface Grid {
    /**
     * 
     * @type {Array<number>}
     * @memberof Grid
     */
    hasDimensionality?: Array<number> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    hasFormat?: Array<string> | null;
    /**
     * 
     * @type {object}
     * @memberof Grid
     */
    hasFileStructure?: object | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Grid
     */
    hasPresentation?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Grid
     */
    hasFixedResource?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    hasSpatialResolution?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    hasCoordinateSystem?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    hasShape?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Grid
     */
    hasDimension?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Grid
     */
    position?: Array<number> | null;
    /**
     * 
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


