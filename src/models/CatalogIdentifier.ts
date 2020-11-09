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
    DateTime | float | integer,
    DateTime | float | integerFromJSON,
    DateTime | float | integerFromJSONTyped,
    DateTime | float | integerToJSON,
    Intervention,
    InterventionFromJSON,
    InterventionFromJSONTyped,
    InterventionToJSON,
    URI | boolean | DateTime | float | integer | string,
    URI | boolean | DateTime | float | integer | stringFromJSON,
    URI | boolean | DateTime | float | integer | stringFromJSONTyped,
    URI | boolean | DateTime | float | integer | stringToJSON,
    Unit,
    UnitFromJSON,
    UnitFromJSONTyped,
    UnitToJSON,
    Variable,
    VariableFromJSON,
    VariableFromJSONTyped,
    VariableToJSON,
    VariablePresentation,
    VariablePresentationFromJSON,
    VariablePresentationFromJSONTyped,
    VariablePresentationToJSON,
} from './';

/**
 * Class to identify that a parameter is a catalog identifier. The rationale for this type of parameter is that in some cases datasets may be downloaded in the software component itself, rather than exposed as an input
 * @export
 * @interface CatalogIdentifier
 */
export interface CatalogIdentifier {
    /**
     * Default accepted value of a variable presentation (or a parameter)
     * @type {Array<URI | boolean | DateTime | float | integer | string>}
     * @memberof CatalogIdentifier
     */
    hasDefaultValue?: Array<URI | boolean | DateTime | float | integer | string> | null;
    /**
     * Maximum accepted value of a variable presentation (or a parameter)
     * @type {Array<DateTime | float | integer>}
     * @memberof CatalogIdentifier
     */
    hasMaximumAcceptedValue?: Array<DateTime | float | integer> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof CatalogIdentifier
     */
    description?: Array<string> | null;
    /**
     * Property that indicates the data type of a parameter
     * @type {Array<string>}
     * @memberof CatalogIdentifier
     */
    hasDataType?: Array<string> | null;
    /**
     * Value of a parameter in a software setup.
     * @type {Array<URI | boolean | DateTime | float | integer | string>}
     * @memberof CatalogIdentifier
     */
    hasFixedValue?: Array<URI | boolean | DateTime | float | integer | string> | null;
    /**
     * Property that links an instance of a dataset (or a dataset specification) to the presentation of a variable contained (or expected to be contained) on it.
     * @type {Array<VariablePresentation>}
     * @memberof CatalogIdentifier
     */
    hasPresentation?: Array<VariablePresentation> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof CatalogIdentifier
     */
    label?: Array<string> | null;
    /**
     * Value that represents how a parameter should be incremented on each iteration of a software component execution. This value is important when preparing execution ensembles automatically, e.g., simulating crop production varying the parameter \"fertilizer amount\" in increments of 10%.
     * @type {Array<number>}
     * @memberof CatalogIdentifier
     */
    recommendedIncrement?: Array<number> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof CatalogIdentifier
     */
    type?: Array<string> | null;
    /**
     * Minimum accepted value of a variable presentation (or a parameter)
     * @type {Array<DateTime | float | integer>}
     * @memberof CatalogIdentifier
     */
    hasMinimumAcceptedValue?: Array<DateTime | float | integer> | null;
    /**
     * Property that constraints which values are accepted for a parameter. For example, the name of a crop can only be \"Maize\" or \"Sorghum\"
     * @type {Array<string>}
     * @memberof CatalogIdentifier
     */
    hasAcceptedValues?: Array<string> | null;
    /**
     * Property that links parameter with the variable they adjust. This property can be used when parameters quantify variables without directly representing them. For example, a \"fertilizer percentage adjustment\" parameter can quantify a \"fertilizer price\" variable
     * @type {Array<Variable>}
     * @memberof CatalogIdentifier
     */
    adjustsVariable?: Array<Variable> | null;
    /**
     * Description not available
     * @type {Array<Intervention>}
     * @memberof CatalogIdentifier
     */
    relevantForIntervention?: Array<Intervention> | null;
    /**
     * Position of the parameter or input/output in the model configuration. This property is needed to know how to organize the I/O of the component on execution
     * @type {Array<number>}
     * @memberof CatalogIdentifier
     */
    position?: Array<number> | null;
    /**
     * identifier
     * @type {string}
     * @memberof CatalogIdentifier
     */
    id?: string;
    /**
     * Property used to link a variable presentation or time interval to the unit they are represented in
     * @type {Array<Unit>}
     * @memberof CatalogIdentifier
     */
    usesUnit?: Array<Unit> | null;
    /**
     * Property that determines what are the increments (step size) that are commonly used to vary a parameter. This is commonly used for automatically setting up software tests. For example, if I want to set up a model and try 30 reasonable values on a parameter, I may use the default value and the step size to create the appropriate increments. If the step size is 0.1 and the default value is 0, then I will will be able to create setups: 0, 0.1, 0.2...2.9,3
     * @type {Array<number>}
     * @memberof CatalogIdentifier
     */
    hasStepSize?: Array<number> | null;
}

export function CatalogIdentifierFromJSON(json: any): CatalogIdentifier {
    return CatalogIdentifierFromJSONTyped(json, false);
}

export function CatalogIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDefaultValue': !exists(json, 'hasDefaultValue') ? undefined : (json['hasDefaultValue'] as Array<any>).map(URI | boolean | DateTime | float | integer | stringFromJSON),
        'hasMaximumAcceptedValue': !exists(json, 'hasMaximumAcceptedValue') ? undefined : (json['hasMaximumAcceptedValue'] as Array<any>).map(DateTime | float | integerFromJSON),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hasDataType': !exists(json, 'hasDataType') ? undefined : json['hasDataType'],
        'hasFixedValue': !exists(json, 'hasFixedValue') ? undefined : (json['hasFixedValue'] as Array<any>).map(URI | boolean | DateTime | float | integer | stringFromJSON),
        'hasPresentation': !exists(json, 'hasPresentation') ? undefined : (json['hasPresentation'] as Array<any>).map(VariablePresentationFromJSON),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'recommendedIncrement': !exists(json, 'recommendedIncrement') ? undefined : json['recommendedIncrement'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasMinimumAcceptedValue': !exists(json, 'hasMinimumAcceptedValue') ? undefined : (json['hasMinimumAcceptedValue'] as Array<any>).map(DateTime | float | integerFromJSON),
        'hasAcceptedValues': !exists(json, 'hasAcceptedValues') ? undefined : json['hasAcceptedValues'],
        'adjustsVariable': !exists(json, 'adjustsVariable') ? undefined : (json['adjustsVariable'] as Array<any>).map(VariableFromJSON),
        'relevantForIntervention': !exists(json, 'relevantForIntervention') ? undefined : (json['relevantForIntervention'] as Array<any>).map(InterventionFromJSON),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'usesUnit': !exists(json, 'usesUnit') ? undefined : (json['usesUnit'] as Array<any>).map(UnitFromJSON),
        'hasStepSize': !exists(json, 'hasStepSize') ? undefined : json['hasStepSize'],
    };
}

export function CatalogIdentifierToJSON(value?: CatalogIdentifier): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDefaultValue': value.hasDefaultValue === undefined ? undefined : (value.hasDefaultValue as Array<any>).map(URI | boolean | DateTime | float | integer | stringToJSON),
        'hasMaximumAcceptedValue': value.hasMaximumAcceptedValue === undefined ? undefined : (value.hasMaximumAcceptedValue as Array<any>).map(DateTime | float | integerToJSON),
        'description': value.description,
        'hasDataType': value.hasDataType,
        'hasFixedValue': value.hasFixedValue === undefined ? undefined : (value.hasFixedValue as Array<any>).map(URI | boolean | DateTime | float | integer | stringToJSON),
        'hasPresentation': value.hasPresentation === undefined ? undefined : (value.hasPresentation as Array<any>).map(VariablePresentationToJSON),
        'label': value.label,
        'recommendedIncrement': value.recommendedIncrement,
        'type': value.type,
        'hasMinimumAcceptedValue': value.hasMinimumAcceptedValue === undefined ? undefined : (value.hasMinimumAcceptedValue as Array<any>).map(DateTime | float | integerToJSON),
        'hasAcceptedValues': value.hasAcceptedValues,
        'adjustsVariable': value.adjustsVariable === undefined ? undefined : (value.adjustsVariable as Array<any>).map(VariableToJSON),
        'relevantForIntervention': value.relevantForIntervention === undefined ? undefined : (value.relevantForIntervention as Array<any>).map(InterventionToJSON),
        'position': value.position,
        'id': value.id,
        'usesUnit': value.usesUnit === undefined ? undefined : (value.usesUnit as Array<any>).map(UnitToJSON),
        'hasStepSize': value.hasStepSize,
    };
}

