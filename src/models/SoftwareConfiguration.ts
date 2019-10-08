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
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationFromJSONTyped,
    DatasetSpecificationToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    Parameter,
    ParameterFromJSON,
    ParameterFromJSONTyped,
    ParameterToJSON,
    Person,
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
    SampleExecution,
    SampleExecutionFromJSON,
    SampleExecutionFromJSONTyped,
    SampleExecutionToJSON,
    SampleResource,
    SampleResourceFromJSON,
    SampleResourceFromJSONTyped,
    SampleResourceToJSON,
    Software,
    SoftwareFromJSON,
    SoftwareFromJSONTyped,
    SoftwareToJSON,
    SoftwareImage,
    SoftwareImageFromJSON,
    SoftwareImageFromJSONTyped,
    SoftwareImageToJSON,
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
 * @interface SoftwareConfiguration
 */
export interface SoftwareConfiguration {
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareVersion>}
     * @memberof SoftwareConfiguration
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareConfiguration
     */
    screenshot?: Array<Image> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<SoftwareImage>}
     * @memberof SoftwareConfiguration
     */
    hasSoftwareImage?: Array<SoftwareImage> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof SoftwareConfiguration
     */
    contributor?: Array<Person> | null;
    /**
     * 
     * @type {Array<Software>}
     * @memberof SoftwareConfiguration
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<Image>}
     * @memberof SoftwareConfiguration
     */
    logo?: Array<Image> | null;
    /**
     * 
     * @type {Array<Person>}
     * @memberof SoftwareConfiguration
     */
    hasContactPerson?: Array<Person> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SoftwareConfiguration
     */
    id?: string;
    /**
     * 
     * @type {Array<Visualization>}
     * @memberof SoftwareConfiguration
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<SampleExecution>}
     * @memberof SoftwareConfiguration
     */
    hasSampleExecution?: Array<SampleExecution> | null;
    /**
     * 
     * @type {Array<SampleResource>}
     * @memberof SoftwareConfiguration
     */
    hasSampleResult?: Array<SampleResource> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareConfiguration
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasConstraint?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SoftwareConfiguration
     */
    label?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<Parameter>}
     * @memberof SoftwareConfiguration
     */
    hasParameter?: Array<Parameter> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<SourceCode>}
     * @memberof SoftwareConfiguration
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof SoftwareConfiguration
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<DatasetSpecification>}
     * @memberof SoftwareConfiguration
     */
    hasOutput?: Array<DatasetSpecification> | null;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof SoftwareConfiguration
     */
    fundingSource?: Array<Organization> | null;
    /**
     * 
     * @type {Array<DatasetSpecification>}
     * @memberof SoftwareConfiguration
     */
    hasInput?: Array<DatasetSpecification> | null;
}

export function SoftwareConfigurationFromJSON(json: any): SoftwareConfiguration {
    return SoftwareConfigurationFromJSONTyped(json, false);
}

export function SoftwareConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftwareConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasComponentLocation': !exists(json, 'hasComponentLocation') ? undefined : json['hasComponentLocation'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasImplementationScriptLocation': !exists(json, 'hasImplementationScriptLocation') ? undefined : json['hasImplementationScriptLocation'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : (json['hasSoftwareImage'] as Array<any>).map(SoftwareImageFromJSON),
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : (json['hasContactPerson'] as Array<any>).map(PersonFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'hasSampleExecution': !exists(json, 'hasSampleExecution') ? undefined : (json['hasSampleExecution'] as Array<any>).map(SampleExecutionFromJSON),
        'hasSampleResult': !exists(json, 'hasSampleResult') ? undefined : (json['hasSampleResult'] as Array<any>).map(SampleResourceFromJSON),
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'hasConstraint': !exists(json, 'hasConstraint') ? undefined : json['hasConstraint'],
        'hasSupportScriptLocation': !exists(json, 'hasSupportScriptLocation') ? undefined : json['hasSupportScriptLocation'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'hasParameter': !exists(json, 'hasParameter') ? undefined : (json['hasParameter'] as Array<any>).map(ParameterFromJSON),
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasOutput': !exists(json, 'hasOutput') ? undefined : (json['hasOutput'] as Array<any>).map(DatasetSpecificationFromJSON),
        'fundingSource': !exists(json, 'fundingSource') ? undefined : (json['fundingSource'] as Array<any>).map(OrganizationFromJSON),
        'hasInput': !exists(json, 'hasInput') ? undefined : (json['hasInput'] as Array<any>).map(DatasetSpecificationFromJSON),
    };
}

export function SoftwareConfigurationToJSON(value?: SoftwareConfiguration): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasComponentLocation': value.hasComponentLocation,
        'hasDocumentation': value.hasDocumentation,
        'keywords': value.keywords,
        'hasImplementationScriptLocation': value.hasImplementationScriptLocation,
        'softwareRequirements': value.softwareRequirements,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'hasDownloadURL': value.hasDownloadURL,
        'referencePublication': value.referencePublication,
        'description': value.description,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'hasSoftwareImage': value.hasSoftwareImage === undefined ? undefined : (value.hasSoftwareImage as Array<any>).map(SoftwareImageToJSON),
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson === undefined ? undefined : (value.hasContactPerson as Array<any>).map(PersonToJSON),
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'identifier': value.identifier,
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'hasSampleExecution': value.hasSampleExecution === undefined ? undefined : (value.hasSampleExecution as Array<any>).map(SampleExecutionToJSON),
        'hasSampleResult': value.hasSampleResult === undefined ? undefined : (value.hasSampleResult as Array<any>).map(SampleResourceToJSON),
        'citation': value.citation,
        'author': value.author,
        'processorRequirements': value.processorRequirements,
        'hasConstraint': value.hasConstraint,
        'hasSupportScriptLocation': value.hasSupportScriptLocation,
        'shortDescription': value.shortDescription,
        'label': value.label,
        'hasExecutionCommand': value.hasExecutionCommand,
        'hasAssumption': value.hasAssumption,
        'hasParameter': value.hasParameter === undefined ? undefined : (value.hasParameter as Array<any>).map(ParameterToJSON),
        'datePublished': value.datePublished,
        'license': value.license,
        'operatingSystems': value.operatingSystems,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'publisher': value.publisher,
        'hasOutput': value.hasOutput === undefined ? undefined : (value.hasOutput as Array<any>).map(DatasetSpecificationToJSON),
        'fundingSource': value.fundingSource === undefined ? undefined : (value.fundingSource as Array<any>).map(OrganizationToJSON),
        'hasInput': value.hasInput === undefined ? undefined : (value.hasInput as Array<any>).map(DatasetSpecificationToJSON),
    };
}


