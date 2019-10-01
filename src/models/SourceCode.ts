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
 * @interface SourceCode
 */
export interface SourceCode {
    /**
     * 
     * @type {Array<string>}
     * @memberof SourceCode
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SourceCode
     */
    programmingLanguage?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SourceCode
     */
    codeRepository?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SourceCode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceCode
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SourceCode
     */
    type?: Array<string> | null;
}

export function SourceCodeFromJSON(json: any): SourceCode {
    return SourceCodeFromJSONTyped(json, false);
}

export function SourceCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'license': !exists(json, 'license') ? undefined : json['license'],
        'programmingLanguage': !exists(json, 'programmingLanguage') ? undefined : json['programmingLanguage'],
        'codeRepository': !exists(json, 'codeRepository') ? undefined : json['codeRepository'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function SourceCodeToJSON(value?: SourceCode): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'license': value.license,
        'programmingLanguage': value.programmingLanguage,
        'codeRepository': value.codeRepository,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


