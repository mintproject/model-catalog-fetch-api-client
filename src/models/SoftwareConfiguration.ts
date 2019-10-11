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
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationFromJSONTyped,
    DatasetSpecificationToJSON,
    FundingInformation,
    FundingInformationFromJSON,
    FundingInformationFromJSONTyped,
    FundingInformationToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
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
    softwareRequirements?: Array<string> | null;
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
    hasDownloadURL?: Array<string> | null;
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
     * @type {Array<object>}
     * @memberof SoftwareConfiguration
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {string}
     * @memberof SoftwareConfiguration
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    identifier?: Array<string> | null;
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
     * @type {Array<object>}
     * @memberof SoftwareConfiguration
     */
    author?: Array<object> | null;
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
    shortDescription?: Array<string> | null;
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
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<SourceCode>}
     * @memberof SoftwareConfiguration
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * 
     * @type {Array<SoftwareConfiguration>}
     * @memberof SoftwareConfiguration
     */
    hasSetup?: Array<SoftwareConfiguration> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasExample?: Array<string> | null;
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
     * @type {Array<FundingInformation>}
     * @memberof SoftwareConfiguration
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasComponentLocation?: Array<string> | null;
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
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasPurpose?: Array<string> | null;
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
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<Parameter>}
     * @memberof SoftwareConfiguration
     */
    adjustableParameter?: Array<Parameter> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SoftwareConfiguration
     */
    hasUsageNotes?: Array<string> | null;
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
    label?: Array<string> | null;
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
    operatingSystems?: Array<string> | null;
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
        
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasImplementationScriptLocation': !exists(json, 'hasImplementationScriptLocation') ? undefined : json['hasImplementationScriptLocation'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'hasSampleExecution': !exists(json, 'hasSampleExecution') ? undefined : (json['hasSampleExecution'] as Array<any>).map(SampleExecutionFromJSON),
        'hasSampleResult': !exists(json, 'hasSampleResult') ? undefined : (json['hasSampleResult'] as Array<any>).map(SampleResourceFromJSON),
        'author': !exists(json, 'author') ? undefined : json['author'],
        'hasConstraint': !exists(json, 'hasConstraint') ? undefined : json['hasConstraint'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasSetup': !exists(json, 'hasSetup') ? undefined : (json['hasSetup'] as Array<any>).map(SoftwareConfigurationFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasOutput': !exists(json, 'hasOutput') ? undefined : (json['hasOutput'] as Array<any>).map(DatasetSpecificationFromJSON),
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'hasComponentLocation': !exists(json, 'hasComponentLocation') ? undefined : json['hasComponentLocation'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : (json['hasSoftwareImage'] as Array<any>).map(SoftwareImageFromJSON),
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'adjustableParameter': !exists(json, 'adjustableParameter') ? undefined : (json['adjustableParameter'] as Array<any>).map(ParameterFromJSON),
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'hasSupportScriptLocation': !exists(json, 'hasSupportScriptLocation') ? undefined : json['hasSupportScriptLocation'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'hasParameter': !exists(json, 'hasParameter') ? undefined : (json['hasParameter'] as Array<any>).map(ParameterFromJSON),
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
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
        
        'hasDocumentation': value.hasDocumentation,
        'keywords': value.keywords,
        'softwareRequirements': value.softwareRequirements,
        'hasImplementationScriptLocation': value.hasImplementationScriptLocation,
        'hasDownloadURL': value.hasDownloadURL,
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'id': value.id,
        'identifier': value.identifier,
        'hasSampleExecution': value.hasSampleExecution === undefined ? undefined : (value.hasSampleExecution as Array<any>).map(SampleExecutionToJSON),
        'hasSampleResult': value.hasSampleResult === undefined ? undefined : (value.hasSampleResult as Array<any>).map(SampleResourceToJSON),
        'author': value.author,
        'hasConstraint': value.hasConstraint,
        'shortDescription': value.shortDescription,
        'hasExecutionCommand': value.hasExecutionCommand,
        'datePublished': value.datePublished,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasSetup': value.hasSetup === undefined ? undefined : (value.hasSetup as Array<any>).map(SoftwareConfigurationToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'hasOutput': value.hasOutput === undefined ? undefined : (value.hasOutput as Array<any>).map(DatasetSpecificationToJSON),
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'hasComponentLocation': value.hasComponentLocation,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'referencePublication': value.referencePublication,
        'description': value.description,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'hasSoftwareImage': value.hasSoftwareImage === undefined ? undefined : (value.hasSoftwareImage as Array<any>).map(SoftwareImageToJSON),
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasPurpose': value.hasPurpose,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'processorRequirements': value.processorRequirements,
        'adjustableParameter': value.adjustableParameter === undefined ? undefined : (value.adjustableParameter as Array<any>).map(ParameterToJSON),
        'hasUsageNotes': value.hasUsageNotes,
        'hasSupportScriptLocation': value.hasSupportScriptLocation,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'hasParameter': value.hasParameter === undefined ? undefined : (value.hasParameter as Array<any>).map(ParameterToJSON),
        'operatingSystems': value.operatingSystems,
        'hasInput': value.hasInput === undefined ? undefined : (value.hasInput as Array<any>).map(DatasetSpecificationToJSON),
    };
}


