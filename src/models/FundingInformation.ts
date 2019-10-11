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
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingInformation
 */
export interface FundingInformation {
    /**
     * 
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FundingInformation
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FundingInformation
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof FundingInformation
     */
    fundingSource?: Array<Organization> | null;
    /**
     * 
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
        'type': !exists(json, 'type') ? undefined : json['type'],
        'fundingSource': !exists(json, 'fundingSource') ? undefined : (json['fundingSource'] as Array<any>).map(OrganizationFromJSON),
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
        'type': value.type,
        'fundingSource': value.fundingSource === undefined ? undefined : (value.fundingSource as Array<any>).map(OrganizationToJSON),
        'fundingGrant': value.fundingGrant,
    };
}


