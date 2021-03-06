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
 * Description not available
 * @export
 * @interface VariablePresentation
 */
export interface VariablePresentation {
    /**
     * Default accepted value of a variable presentation (or a parameter)
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasDefaultValue?: Array<string> | null;
    /**
     * the standard name of a variable
     * @type {Array<StandardVariable>}
     * @memberof VariablePresentation
     */
    hasStandardVariable?: Array<StandardVariable> | null;
    /**
     * Maximum accepted value of a variable presentation (or a parameter)
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasMaximumAcceptedValue?: Array<string> | null;
    /**
     * Constraint or rule associated to a  variable or software configuration. For example: \"This model accepts only monthly data\", or \"all inputs of this model configuration must share the same location\". More structured restrictions, such as Jena rules or SWRL rules may also be captured with this property
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasConstraint?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    description?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    type?: Array<string> | null;
    /**
     * Properties that relate the variable representation to its long name. The long name is useful for context (e.g., precipitation is less ambiguous than P) but not as precise as the standard name.
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasLongName?: Array<string> | null;
    /**
     * A short name (e.g., temperature) capturing the high-level concept of the variable
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasShortName?: Array<string> | null;
    /**
     * Minimum accepted value of a variable presentation (or a parameter)
     * @type {Array<string>}
     * @memberof VariablePresentation
     */
    hasMinimumAcceptedValue?: Array<string> | null;
    /**
     * Associates a presentation with a dataset where the presentation occurs
     * @type {Array<DatasetSpecification>}
     * @memberof VariablePresentation
     */
    partOfDataset?: Array<DatasetSpecification> | null;
    /**
     * identifier
     * @type {string}
     * @memberof VariablePresentation
     */
    id?: string;
    /**
     * Property used to link a variable presentation or time interval to the unit they are represented in
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
        'partOfDataset': !exists(json, 'partOfDataset') ? undefined : (json['partOfDataset'] as Array<any>).map(DatasetSpecificationFromJSON),
        'id': !exists(json, 'id') ? undefined : json['id'],
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
        'partOfDataset': value.partOfDataset === undefined ? undefined : (value.partOfDataset as Array<any>).map(DatasetSpecificationToJSON),
        'id': value.id,
        'usesUnit': value.usesUnit === undefined ? undefined : (value.usesUnit as Array<any>).map(UnitToJSON),
    };
}


