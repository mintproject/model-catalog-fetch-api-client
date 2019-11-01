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
 * @interface Region
 */
export interface Region {
    /**
     * 
     * @type {Array<object>}
     * @memberof Region
     */
    geo?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Region
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<Region>}
     * @memberof Region
     */
    country?: Array<Region> | null;
    /**
     * 
     * @type {string}
     * @memberof Region
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Region
     */
    label?: Array<string> | null;
    /**
     * 
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
        'description': !exists(json, 'description') ? undefined : json['description'],
        'country': !exists(json, 'country') ? undefined : (json['country'] as Array<any>).map(RegionFromJSON),
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
        'description': value.description,
        'country': value.country === undefined ? undefined : (value.country as Array<any>).map(RegionToJSON),
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


