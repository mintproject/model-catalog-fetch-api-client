// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.0
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
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Organization
     */
    type?: Array<string> | null;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function OrganizationToJSON(value?: Organization): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': value.identifier,
        'website': value.website,
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


