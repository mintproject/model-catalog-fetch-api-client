// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GeoCoordinates,
    GeoShape,
} from './';

/**
 * An area or division with some characteristics but not always fixed boundaries
 * @export
 * @interface Region
 */
export interface Region {
    /**
     * Specific coordinates or shape associated with a region
     * @type {Array<GeoCoordinates | GeoShape>}
     * @memberof Region
     */
    geo?: Array<GeoCoordinates | GeoShape> | null;
    /**
     * Indicates whether a region is part of another region
     * @type {Array<Region>}
     * @memberof Region
     */
    partOf?: Array<Region> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Region
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Region
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Region
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Region
     */
    type?: Array<string> | null;
}

export function RegionFromJSON(json: any): Region {
    return RegionFromJSONTyped(json, false);
}

export function RegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Region {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'geo': !exists(json, 'geo') ? undefined : json['geo'],
        'partOf': !exists(json, 'partOf') ? undefined : (json['partOf'] as Array<any>).map(RegionFromJSON),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function RegionToJSON(value?: Region): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'geo': value.geo,
        'partOf': value.partOf === undefined ? undefined : (value.partOf as Array<any>).map(RegionToJSON),
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


