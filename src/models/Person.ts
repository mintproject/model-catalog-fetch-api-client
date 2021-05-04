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
/**
 * A human being (individual)
 * @export
 * @interface Person
 */
export interface Person {
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof Person
     */
    identifier?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof Person
     */
    website?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Person
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Person
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Person
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Person
     */
    type?: Array<string> | null;
    /**
     * Email of a person
     * @type {Array<string>}
     * @memberof Person
     */
    email?: Array<string> | null;
}

export function PersonFromJSON(json: any): Person {
    return PersonFromJSONTyped(json, false);
}

export function PersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Person {
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
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function PersonToJSON(value?: Person): any {
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
        'email': value.email,
    };
}


