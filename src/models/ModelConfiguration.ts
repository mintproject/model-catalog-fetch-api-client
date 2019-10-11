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
    CausalDiagram,
    CausalDiagramFromJSON,
    CausalDiagramFromJSONTyped,
    CausalDiagramToJSON,
    Equation,
    EquationFromJSON,
    EquationFromJSONTyped,
    EquationToJSON,
    Grid,
    GridFromJSON,
    GridFromJSONTyped,
    GridToJSON,
    Process,
    ProcessFromJSON,
    ProcessFromJSONTyped,
    ProcessToJSON,
    Region,
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
    TimeInterval,
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './';

/**
 * 
 * @export
 * @interface ModelConfiguration
 */
export interface ModelConfiguration {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<Grid>}
     * @memberof ModelConfiguration
     */
    hasGrid?: Array<Grid> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    calibratedVariable?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    compatibleVisualizationSoftware?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    calibrationMethod?: Array<string> | null;
    /**
     * 
     * @type {Array<Region>}
     * @memberof ModelConfiguration
     */
    hasRegion?: Array<Region> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    logo?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelConfiguration
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSampleExecution?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSampleResult?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasConstraint?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSourceCode?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSetup?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasExplanationDiagram?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    calibrationInterval?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasOutput?: Array<object> | null;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof ModelConfiguration
     */
    hasOutputTimeInterval?: Array<TimeInterval> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    parameterAssignmentMethod?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasFunding?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<Process>}
     * @memberof ModelConfiguration
     */
    hasProcess?: Array<Process> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasVersion?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    screenshot?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasModelCategory?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSoftwareImage?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    contributor?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasModelResultTable?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    calibrationTargetVariable?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasSampleVisualization?: Array<object> | null;
    /**
     * 
     * @type {Array<ModelConfiguration>}
     * @memberof ModelConfiguration
     */
    hasCalibration?: Array<ModelConfiguration> | null;
    /**
     * 
     * @type {Array<CausalDiagram>}
     * @memberof ModelConfiguration
     */
    hasCausalDiagram?: Array<CausalDiagram> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    adjustableParameter?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasParameter?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfiguration
     */
    validUntil?: Array<string> | null;
    /**
     * 
     * @type {Array<Equation>}
     * @memberof ModelConfiguration
     */
    hasEquation?: Array<Equation> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfiguration
     */
    hasInput?: Array<object> | null;
}

export function ModelConfigurationFromJSON(json: any): ModelConfiguration {
    return ModelConfigurationFromJSONTyped(json, false);
}

export function ModelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
        'hasImplementationScriptLocation': !exists(json, 'hasImplementationScriptLocation') ? undefined : json['hasImplementationScriptLocation'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'calibratedVariable': !exists(json, 'calibratedVariable') ? undefined : json['calibratedVariable'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : json['compatibleVisualizationSoftware'],
        'calibrationMethod': !exists(json, 'calibrationMethod') ? undefined : json['calibrationMethod'],
        'hasRegion': !exists(json, 'hasRegion') ? undefined : (json['hasRegion'] as Array<any>).map(RegionFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'hasSampleExecution': !exists(json, 'hasSampleExecution') ? undefined : json['hasSampleExecution'],
        'hasSampleResult': !exists(json, 'hasSampleResult') ? undefined : json['hasSampleResult'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'hasConstraint': !exists(json, 'hasConstraint') ? undefined : json['hasConstraint'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : json['hasSourceCode'],
        'hasSetup': !exists(json, 'hasSetup') ? undefined : json['hasSetup'],
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : json['hasExplanationDiagram'],
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'calibrationInterval': !exists(json, 'calibrationInterval') ? undefined : json['calibrationInterval'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasOutput': !exists(json, 'hasOutput') ? undefined : json['hasOutput'],
        'hasOutputTimeInterval': !exists(json, 'hasOutputTimeInterval') ? undefined : (json['hasOutputTimeInterval'] as Array<any>).map(TimeIntervalFromJSON),
        'parameterAssignmentMethod': !exists(json, 'parameterAssignmentMethod') ? undefined : json['parameterAssignmentMethod'],
        'hasFunding': !exists(json, 'hasFunding') ? undefined : json['hasFunding'],
        'hasComponentLocation': !exists(json, 'hasComponentLocation') ? undefined : json['hasComponentLocation'],
        'hasProcess': !exists(json, 'hasProcess') ? undefined : (json['hasProcess'] as Array<any>).map(ProcessFromJSON),
        'hasVersion': !exists(json, 'hasVersion') ? undefined : json['hasVersion'],
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : json['screenshot'],
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : json['hasModelCategory'],
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : json['hasSoftwareImage'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : json['contributor'],
        'hasModelResultTable': !exists(json, 'hasModelResultTable') ? undefined : json['hasModelResultTable'],
        'calibrationTargetVariable': !exists(json, 'calibrationTargetVariable') ? undefined : json['calibrationTargetVariable'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : json['hasSampleVisualization'],
        'hasCalibration': !exists(json, 'hasCalibration') ? undefined : (json['hasCalibration'] as Array<any>).map(ModelConfigurationFromJSON),
        'hasCausalDiagram': !exists(json, 'hasCausalDiagram') ? undefined : (json['hasCausalDiagram'] as Array<any>).map(CausalDiagramFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'adjustableParameter': !exists(json, 'adjustableParameter') ? undefined : json['adjustableParameter'],
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'hasSupportScriptLocation': !exists(json, 'hasSupportScriptLocation') ? undefined : json['hasSupportScriptLocation'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'hasParameter': !exists(json, 'hasParameter') ? undefined : json['hasParameter'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'validUntil': !exists(json, 'validUntil') ? undefined : json['validUntil'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'hasInput': !exists(json, 'hasInput') ? undefined : json['hasInput'],
    };
}

export function ModelConfigurationToJSON(value?: ModelConfiguration): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'keywords': value.keywords,
        'hasDocumentation': value.hasDocumentation,
        'hasGrid': value.hasGrid === undefined ? undefined : (value.hasGrid as Array<any>).map(GridToJSON),
        'hasImplementationScriptLocation': value.hasImplementationScriptLocation,
        'softwareRequirements': value.softwareRequirements,
        'hasDownloadURL': value.hasDownloadURL,
        'type': value.type,
        'calibratedVariable': value.calibratedVariable,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware,
        'calibrationMethod': value.calibrationMethod,
        'hasRegion': value.hasRegion === undefined ? undefined : (value.hasRegion as Array<any>).map(RegionToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo,
        'hasContactPerson': value.hasContactPerson,
        'id': value.id,
        'identifier': value.identifier,
        'hasSampleExecution': value.hasSampleExecution,
        'hasSampleResult': value.hasSampleResult,
        'author': value.author,
        'hasConstraint': value.hasConstraint,
        'shortDescription': value.shortDescription,
        'hasExecutionCommand': value.hasExecutionCommand,
        'datePublished': value.datePublished,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode,
        'hasSetup': value.hasSetup,
        'hasExplanationDiagram': value.hasExplanationDiagram,
        'hasExample': value.hasExample,
        'calibrationInterval': value.calibrationInterval,
        'publisher': value.publisher,
        'hasOutput': value.hasOutput,
        'hasOutputTimeInterval': value.hasOutputTimeInterval === undefined ? undefined : (value.hasOutputTimeInterval as Array<any>).map(TimeIntervalToJSON),
        'parameterAssignmentMethod': value.parameterAssignmentMethod,
        'hasFunding': value.hasFunding,
        'hasComponentLocation': value.hasComponentLocation,
        'hasProcess': value.hasProcess === undefined ? undefined : (value.hasProcess as Array<any>).map(ProcessToJSON),
        'hasVersion': value.hasVersion,
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot,
        'hasModelCategory': value.hasModelCategory,
        'hasSoftwareImage': value.hasSoftwareImage,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor,
        'hasModelResultTable': value.hasModelResultTable,
        'calibrationTargetVariable': value.calibrationTargetVariable,
        'hasPurpose': value.hasPurpose,
        'hasSampleVisualization': value.hasSampleVisualization,
        'hasCalibration': value.hasCalibration === undefined ? undefined : (value.hasCalibration as Array<any>).map(ModelConfigurationToJSON),
        'hasCausalDiagram': value.hasCausalDiagram === undefined ? undefined : (value.hasCausalDiagram as Array<any>).map(CausalDiagramToJSON),
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'processorRequirements': value.processorRequirements,
        'adjustableParameter': value.adjustableParameter,
        'hasUsageNotes': value.hasUsageNotes,
        'hasSupportScriptLocation': value.hasSupportScriptLocation,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'hasParameter': value.hasParameter,
        'operatingSystems': value.operatingSystems,
        'validUntil': value.validUntil,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'hasInput': value.hasInput,
    };
}


