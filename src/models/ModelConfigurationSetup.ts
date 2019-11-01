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
    Index,
    IndexFromJSON,
    IndexFromJSONTyped,
    IndexToJSON,
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
 * @interface ModelConfigurationSetup
 */
export interface ModelConfigurationSetup {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<Grid>}
     * @memberof ModelConfigurationSetup
     */
    hasGrid?: Array<Grid> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    calibratedVariable?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    compatibleVisualizationSoftware?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    calibrationMethod?: Array<string> | null;
    /**
     * 
     * @type {Array<Region>}
     * @memberof ModelConfigurationSetup
     */
    hasRegion?: Array<Region> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    logo?: Array<object> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelConfigurationSetup
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleExecution?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleResult?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasConstraint?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSourceCode?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSetup?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasExplanationDiagram?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    calibrationInterval?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasOutput?: Array<object> | null;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof ModelConfigurationSetup
     */
    hasOutputTimeInterval?: Array<TimeInterval> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    parameterAssignmentMethod?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasFunding?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<Process>}
     * @memberof ModelConfigurationSetup
     */
    hasProcess?: Array<Process> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    supportDetails?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasVersion?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    screenshot?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasModelCategory?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSoftwareImage?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    contributor?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasModelResultTable?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    calibrationTargetVariable?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleVisualization?: Array<object> | null;
    /**
     * 
     * @type {Array<CausalDiagram>}
     * @memberof ModelConfigurationSetup
     */
    hasCausalDiagram?: Array<CausalDiagram> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    adjustableParameter?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasParameter?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    validUntil?: Array<string> | null;
    /**
     * 
     * @type {Array<Equation>}
     * @memberof ModelConfigurationSetup
     */
    hasEquation?: Array<Equation> | null;
    /**
     * 
     * @type {Array<Index>}
     * @memberof ModelConfigurationSetup
     */
    usefulForCalculatingIndex?: Array<Index> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hasInput?: Array<object> | null;
}

export function ModelConfigurationSetupFromJSON(json: any): ModelConfigurationSetup {
    return ModelConfigurationSetupFromJSONTyped(json, false);
}

export function ModelConfigurationSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelConfigurationSetup {
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
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
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
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : json['hasVersion'],
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'screenshot': !exists(json, 'screenshot') ? undefined : json['screenshot'],
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : json['hasModelCategory'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : json['hasSoftwareImage'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : json['contributor'],
        'hasModelResultTable': !exists(json, 'hasModelResultTable') ? undefined : json['hasModelResultTable'],
        'calibrationTargetVariable': !exists(json, 'calibrationTargetVariable') ? undefined : json['calibrationTargetVariable'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : json['hasSampleVisualization'],
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
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(IndexFromJSON),
        'hasInput': !exists(json, 'hasInput') ? undefined : json['hasInput'],
    };
}

export function ModelConfigurationSetupToJSON(value?: ModelConfigurationSetup): any {
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
        'hasContactPerson': value.hasContactPerson,
        'logo': value.logo,
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
        'supportDetails': value.supportDetails,
        'hasVersion': value.hasVersion,
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'referencePublication': value.referencePublication,
        'description': value.description,
        'screenshot': value.screenshot,
        'hasModelCategory': value.hasModelCategory,
        'hadPrimarySource': value.hadPrimarySource,
        'hasSoftwareImage': value.hasSoftwareImage,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor,
        'hasModelResultTable': value.hasModelResultTable,
        'calibrationTargetVariable': value.calibrationTargetVariable,
        'hasPurpose': value.hasPurpose,
        'hasSampleVisualization': value.hasSampleVisualization,
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
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(IndexToJSON),
        'hasInput': value.hasInput,
    };
}

