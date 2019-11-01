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
import {
    VariablePresentation,
    VariablePresentationFromJSON,
    VariablePresentationFromJSONTyped,
    VariablePresentationToJSON,
} from './';

/**
 * 
 * @export
 * @interface Parameter
 */
export interface Parameter {
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    hasDefaultValue?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    hasMaximumAcceptedValue?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Parameter
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Parameter
     */
    hasDataType?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    hasFixedValue?: Array<object> | null;
    /**
     * 
     * @type {Array<VariablePresentation>}
     * @memberof Parameter
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Parameter
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Parameter
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    hasMinimumAcceptedValue?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    adjustsVariable?: Array<object> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Parameter
     */
    position?: Array<number> | null;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    id?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof Parameter
     */
    usesUnit?: Array<object> | null;
}

export function ParameterFromJSON(json: any): Parameter {
    return ParameterFromJSONTyped(json, false);
}

export function ParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Parameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDefaultValue': !exists(json, 'hasDefaultValue') ? undefined : json['hasDefaultValue'],
        'hasMaximumAcceptedValue': !exists(json, 'hasMaximumAcceptedValue') ? undefined : json['hasMaximumAcceptedValue'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasDataType': !exists(json, 'hasDataType') ? undefined : json['hasDataType'],
        'hasFixedValue': !exists(json, 'hasFixedValue') ? undefined : json['hasFixedValue'],
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasMinimumAcceptedValue': !exists(json, 'hasMinimumAcceptedValue') ? undefined : json['hasMinimumAcceptedValue'],
        'adjustsVariable': !exists(json, 'adjustsVariable') ? undefined : json['adjustsVariable'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'usesUnit': !exists(json, 'usesUnit') ? undefined : json['usesUnit'],
    };
}

export function ParameterToJSON(value?: Parameter): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDefaultValue': value.hasDefaultValue,
        'hasMaximumAcceptedValue': value.hasMaximumAcceptedValue,
        'description': value.description,
        'hasDataType': value.hasDataType,
        'hasFixedValue': value.hasFixedValue,
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'label': value.label,
        'type': value.type,
        'hasMinimumAcceptedValue': value.hasMinimumAcceptedValue,
        'adjustsVariable': value.adjustsVariable,
        'position': value.position,
        'id': value.id,
        'usesUnit': value.usesUnit,
    };
}

