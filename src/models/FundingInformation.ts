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
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './';

/**
 * A class to represent the funding information of a software project
 * @export
 * @interface FundingInformation
 */
export interface FundingInformation {
    /**
     * small description
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof FundingInformation
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    label?: Array<string> | null;
    /**
     * Link to the organization funding a software component
     * @type {Array<Organization>}
     * @memberof FundingInformation
     */
    fundingSource?: Array<Organization> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    type?: Array<string> | null;
    /**
     * Grant number used for funding
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    fundingGrant?: Array<string> | null;
}

export function FundingInformationFromJSON(json: any): FundingInformation {
    return FundingInformationFromJSONTyped(json, false);
}

export function FundingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'fundingSource': !exists(json, 'fundingSource') ? undefined : (json['fundingSource'] as Array<any>).map(OrganizationFromJSON),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'fundingGrant': !exists(json, 'fundingGrant') ? undefined : json['fundingGrant'],
    };
}

export function FundingInformationToJSON(value?: FundingInformation): any {
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
        'fundingSource': value.fundingSource === undefined ? undefined : (value.fundingSource as Array<any>).map(OrganizationToJSON),
        'type': value.type,
        'fundingGrant': value.fundingGrant,
    };
}


