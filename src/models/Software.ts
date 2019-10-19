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
    FundingInformation,
    FundingInformationFromJSON,
    FundingInformationFromJSONTyped,
    FundingInformationToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
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
     * @type {Array<FundingInformation>}
     * @memberof Software
     */
    hasFunding?: Array<FundingInformation> | null;
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
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    referencePublication?: Array<string> | null;
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
     * @type {Array<Software>}
     * @memberof Software
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
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
     * @type {Array<Image>}
     * @memberof Software
     */
    logo?: Array<Image> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Software
     */
    hasContactPerson?: Array<object> | null;
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
    memoryRequirements?: Array<string> | null;
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
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Software
     */
    label?: Array<string> | null;
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
     * @type {Array<string>}
     * @memberof Software
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Software
     */
    publisher?: Array<object> | null;
}

export function SoftwareFromJSON(json: any): Software {
    return SoftwareFromJSONTyped(json, false);
}

export function SoftwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): Software {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
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
        
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'hasDocumentation': value.hasDocumentation,
        'keywords': value.keywords,
        'softwareRequirements': value.softwareRequirements,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'hasDownloadURL': value.hasDownloadURL,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'dateCreated': value.dateCreated,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'memoryRequirements': value.memoryRequirements,
        'identifier': value.identifier,
        'website': value.website,
        'citation': value.citation,
        'author': value.author,
        'processorRequirements': value.processorRequirements,
        'hasUsageNotes': value.hasUsageNotes,
        'shortDescription': value.shortDescription,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'datePublished': value.datePublished,
        'operatingSystems': value.operatingSystems,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
    };
}


