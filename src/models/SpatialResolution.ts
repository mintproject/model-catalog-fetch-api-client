// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.1
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
 * @interface SpatialResolution
 */
export interface SpatialResolution {
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatialResolution
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SpatialResolution
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatialResolution
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SpatialResolution
     */
    type?: Array<string> | null;
}

export function SpatialResolutionFromJSON(json: any): SpatialResolution {
    return SpatialResolutionFromJSONTyped(json, false);
}

export function SpatialResolutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialResolution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function SpatialResolutionToJSON(value?: SpatialResolution): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


