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
 * @interface SVOVariable
 */
export interface SVOVariable {
    /**
     * 
     * @type {Array<string>}
     * @memberof SVOVariable
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SVOVariable
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SVOVariable
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SVOVariable
     */
    type?: Array<string> | null;
}

export function SVOVariableFromJSON(json: any): SVOVariable {
    return SVOVariableFromJSONTyped(json, false);
}

export function SVOVariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): SVOVariable {
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

export function SVOVariableToJSON(value?: SVOVariable): any {
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

