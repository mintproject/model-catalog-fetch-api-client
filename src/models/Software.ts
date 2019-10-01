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
import {
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    Person,
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
    SoftwareVersion,
    SoftwareVersionFromJSON,
    SoftwareVersionFromJSONTyped,
    SoftwareVersionToJSON,
    SourceCode,
    SourceCodeFromJSON,
    SourceCodeFromJSONTyped,
    SourceCodeToJSON,
    Visualization,
    VisualizationFromJSON,
    VisualizationFromJSONTyped,
    VisualizationToJSON,
} from './';

/**
 * 
 * @export
 * @interface Software
 */
export interface Software {
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareVersion>}
     * @memberof Software
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof Software
     */
    screenshot?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof Software
     */
    contributor?: Array<Person> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof Software
     */
    hasContactPerson?: Array<Person> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof Software
     */
    logo?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Software
     */
    id?: string;
    /**
     * 
     * @type {Array<Visualization>}
     * @memberof Software
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Software
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Software
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<SourceCode>}
     * @memberof Software
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Software
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof Software
     */
    fundingSource?: Array<Organization> | null;
}

export function SoftwareFromJSON(json: any): Software {
    return SoftwareFromJSONTyped(json, false);
}

export function SoftwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): Software {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : (json['hasContactPerson'] as Array<any>).map(PersonFromJSON),
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'fundingSource': !exists(json, 'fundingSource') ? undefined : (json['fundingSource'] as Array<any>).map(OrganizationFromJSON),
    };
}

export function SoftwareToJSON(value?: Software): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDocumentation': value.hasDocumentation,
        'keywords': value.keywords,
        'softwareRequirements': value.softwareRequirements,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'hasDownloadURL': value.hasDownloadURL,
        'referencePublication': value.referencePublication,
        'description': value.description,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasFAQ': value.hasFAQ,
        'hasContactPerson': value.hasContactPerson === undefined ? undefined : (value.hasContactPerson as Array<any>).map(PersonToJSON),
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'identifier': value.identifier,
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'author': value.author,
        'processorRequirements': value.processorRequirements,
        'shortDescription': value.shortDescription,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'datePublished': value.datePublished,
        'operatingSystems': value.operatingSystems,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'publisher': value.publisher,
        'fundingSource': value.fundingSource === undefined ? undefined : (value.fundingSource as Array<any>).map(OrganizationToJSON),
    };
}


