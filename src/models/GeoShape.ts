// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Shape or polygon of a region in a map
 * @export
 * @interface GeoShape
 */
export interface GeoShape {
    /**
     * Elevation of a location (WGS84)
     * @type {Array<string>}
     * @memberof GeoShape
     */
    elevation?: Array<string> | null;
    /**
     * Latitude (coordinates) of a location (WGS84)
     * @type {Array<string>}
     * @memberof GeoShape
     */
    latitude?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof GeoShape
     */
    description?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof GeoShape
     */
    box?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof GeoShape
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof GeoShape
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof GeoShape
     */
    type?: Array<string> | null;
    /**
     * Longitude (coordinates) of a location (WGS84)
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


