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
    Software,
    SoftwareFromJSON,
    SoftwareFromJSONTyped,
    SoftwareToJSON,
    SoftwareConfiguration,
    SoftwareConfigurationFromJSON,
    SoftwareConfigurationFromJSONTyped,
    SoftwareConfigurationToJSON,
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
 * @interface SoftwareVersion
 */
export interface SoftwareVersion {
    /**
     * 
     * @type {Array<FundingInformation>}
     * @memberof SoftwareVersion
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareVersion>}
     * @memberof SoftwareVersion
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareVersion
     */
    screenshot?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<Software>}
     * @memberof SoftwareVersion
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof SoftwareVersion
     */
    contributor?: Array<Person> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareVersion
     */
    logo?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SoftwareVersion
     */
    id?: string;
    /**
     * 
     * @type {Array<Visualization>}
     * @memberof SoftwareVersion
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareConfiguration>}
     * @memberof SoftwareVersion
     */
    hasConfiguration?: Array<SoftwareConfiguration> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<SourceCode>}
     * @memberof SoftwareVersion
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasVersionId?: Array<string> | null;
}

export function SoftwareVersionFromJSON(json: any): SoftwareVersion {
    return SoftwareVersionFromJSONTyped(json, false);
}

export function SoftwareVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftwareVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
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
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'hasConfiguration': !exists(json, 'hasConfiguration') ? undefined : (json['hasConfiguration'] as Array<any>).map(SoftwareConfigurationFromJSON),
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
        'hasVersionId': !exists(json, 'hasVersionId') ? undefined : json['hasVersionId'],
    };
}

export function SoftwareVersionToJSON(value?: SoftwareVersion): any {
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
        'hasContactPerson': value.hasContactPerson,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'memoryRequirements': value.memoryRequirements,
        'identifier': value.identifier,
        'website': value.website,
        'citation': value.citation,
        'hasConfiguration': value.hasConfiguration === undefined ? undefined : (value.hasConfiguration as Array<any>).map(SoftwareConfigurationToJSON),
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
        'hasVersionId': value.hasVersionId,
    };
}


