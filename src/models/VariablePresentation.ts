// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationFromJSONTyped,
    DatasetSpecificationToJSON,
    StandardVariable,
    StandardVariableFromJSON,
    StandardVariableFromJSONTyped,
    StandardVariableToJSON,
    Unit,
    UnitFromJSON,
    UnitFromJSONTyped,
    UnitToJSON,
} from './';

/**
 * 
 * @export
 * @interface VariablePresentation
 */
export interface VariablePresentation {
    /**
     * 
     * @type {Array<object>}
     * @memberof VariablePresentation
     */
    hasDefaultValue?: Array<object> | null;
    /**
     * 
     * @type {Array<StandardVariable>}
     * @memberof VariablePresentation
     */
    hasStandardVariable?: Array<StandardVariable> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof VariablePresentation
     */
    hasMaximumAcceptedValue?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasConstraint?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasLongName?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasShortName?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof VariablePresentation
     */
    hasMinimumAcceptedValue?: Array<object> | null;
    /**
     * 
     * @type {string}
     * @memberof VariablePresentation
     */
    id?: string;
    /**
     * 
     * @type {Array<DatasetSpecification>}
     * @memberof VariablePresentation
     */
    partOfDataset?: Array<DatasetSpecification> | null;
    /**
     * 
     * @type {Array<Unit>}
     * @memberof VariablePresentation
     */
    usesUnit?: Array<Unit> | null;
}

export function VariablePresentationFromJSON(json: any): VariablePresentation {
    return VariablePresentationFromJSONTyped(json, false);
}

export function VariablePresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariablePresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDefaultValue': !exists(json, 'hasDefaultValue') ? undefined : json['hasDefaultValue'],
        'hasStandardVariable': !exists(json, 'hasStandardVariable') ? undefined : (json['hasStandardVariable'] as Array<any>).map(StandardVariableFromJSON),
        'hasMaximumAcceptedValue': !exists(json, 'hasMaximumAcceptedValue') ? undefined : json['hasMaximumAcceptedValue'],
        'hasConstraint': !exists(json, 'hasConstraint') ? undefined : json['hasConstraint'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasLongName': !exists(json, 'hasLongName') ? undefined : json['hasLongName'],
        'hasShortName': !exists(json, 'hasShortName') ? undefined : json['hasShortName'],
        'hasMinimumAcceptedValue': !exists(json, 'hasMinimumAcceptedValue') ? undefined : json['hasMinimumAcceptedValue'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'partOfDataset': !exists(json, 'partOfDataset') ? undefined : (json['partOfDataset'] as Array<any>).map(DatasetSpecificationFromJSON),
        'usesUnit': !exists(json, 'usesUnit') ? undefined : (json['usesUnit'] as Array<any>).map(UnitFromJSON),
    };
}

export function VariablePresentationToJSON(value?: VariablePresentation): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDefaultValue': value.hasDefaultValue,
        'hasStandardVariable': value.hasStandardVariable === undefined ? undefined : (value.hasStandardVariable as Array<any>).map(StandardVariableToJSON),
        'hasMaximumAcceptedValue': value.hasMaximumAcceptedValue,
        'hasConstraint': value.hasConstraint,
        'description': value.description,
        'label': value.label,
        'type': value.type,
        'hasLongName': value.hasLongName,
        'hasShortName': value.hasShortName,
        'hasMinimumAcceptedValue': value.hasMinimumAcceptedValue,
        'id': value.id,
        'partOfDataset': value.partOfDataset === undefined ? undefined : (value.partOfDataset as Array<any>).map(DatasetSpecificationToJSON),
        'usesUnit': value.usesUnit === undefined ? undefined : (value.usesUnit as Array<any>).map(UnitToJSON),
    };
}


