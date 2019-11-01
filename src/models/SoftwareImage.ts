// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.2.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.2.0
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
    Software,
    SoftwareFromJSON,
    SoftwareFromJSONTyped,
    SoftwareToJSON,
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
 * @interface SoftwareImage
 */
export interface SoftwareImage {
    /**
     * 
     * @type {Array<FundingInformation>}
     * @memberof SoftwareImage
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    supportDetails?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareVersion>}
     * @memberof SoftwareImage
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareImage
     */
    screenshot?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareImage
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<Software>}
     * @memberof SoftwareImage
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof SoftwareImage
     */
    contributor?: Array<Person> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareImage
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareImage
     */
    logo?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SoftwareImage
     */
    id?: string;
    /**
     * 
     * @type {Array<Visualization>}
     * @memberof SoftwareImage
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareImage
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<SourceCode>}
     * @memberof SoftwareImage
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareImage
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareImage
     */
    publisher?: Array<object> | null;
}

export function SoftwareImageFromJSON(json: any): SoftwareImage {
    return SoftwareImageFromJSONTyped(json, false);
}

export function SoftwareImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftwareImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
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
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
    };
}

export function SoftwareImageToJSON(value?: SoftwareImage): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'keywords': value.keywords,
        'hasDocumentation': value.hasDocumentation,
        'supportDetails': value.supportDetails,
        'softwareRequirements': value.softwareRequirements,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'hasDownloadURL': value.hasDownloadURL,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'hadPrimarySource': value.hadPrimarySource,
        'dateCreated': value.dateCreated,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasFAQ': value.hasFAQ,
        'hasContactPerson': value.hasContactPerson,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
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
        'hasExecutionCommand': value.hasExecutionCommand,
        'hasAssumption': value.hasAssumption,
        'datePublished': value.datePublished,
        'license': value.license,
        'operatingSystems': value.operatingSystems,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
    };
}


