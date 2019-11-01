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
/**
 * 
 * @export
 * @interface GeoShape
 */
export interface GeoShape {
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    elevation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    latitude?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    box?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof GeoShape
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeoShape
     */
    longitude?: Array<string> | null;
}

export function GeoShapeFromJSON(json: any): GeoShape {
    return GeoShapeFromJSONTyped(json, false);
}

export function GeoShapeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoShape {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elevation': !exists(json, 'elevation') ? undefined : json['elevation'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'box': !exists(json, 'box') ? undefined : json['box'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
    };
}

export function GeoShapeToJSON(value?: GeoShape): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elevation': value.elevation,
        'latitude': value.latitude,
        'description': value.description,
        'box': value.box,
        'id': value.id,
        'label': value.label,
        'type': value.type,
        'longitude': value.longitude,
    };
}


