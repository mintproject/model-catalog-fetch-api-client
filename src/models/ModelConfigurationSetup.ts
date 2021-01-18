// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.7.0
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
    ConfigurationSetup,
    ConfigurationSetupFromJSON,
    ConfigurationSetupFromJSONTyped,
    ConfigurationSetupToJSON,
    DatasetSpecification,
    DatasetSpecificationFromJSON,
    DatasetSpecificationFromJSONTyped,
    DatasetSpecificationToJSON,
    Equation,
    EquationFromJSON,
    EquationFromJSONTyped,
    EquationToJSON,
    FundingInformation,
    FundingInformationFromJSON,
    FundingInformationFromJSONTyped,
    FundingInformationToJSON,
    Grid,
    GridFromJSON,
    GridFromJSONTyped,
    GridToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    ModelCategory,
    ModelCategoryFromJSON,
    ModelCategoryFromJSONTyped,
    ModelCategoryToJSON,
    NumericalIndex,
    NumericalIndexFromJSON,
    NumericalIndexFromJSONTyped,
    NumericalIndexToJSON,
    Organization,
    Parameter,
    ParameterFromJSON,
    ParameterFromJSONTyped,
    ParameterToJSON,
    Person,
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
    Process,
    ProcessFromJSON,
    ProcessFromJSONTyped,
    ProcessToJSON,
    Region,
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
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
    TimeInterval,
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
    VariablePresentation,
    VariablePresentationFromJSON,
    VariablePresentationFromJSONTyped,
    VariablePresentationToJSON,
    Visualization,
    VisualizationFromJSON,
    VisualizationFromJSONTyped,
    VisualizationToJSON,
} from './';

/**
 * Setup of a particular model, that may represent a calibration or a configuration with a set of values for a specific region.
 * @export
 * @interface ModelConfigurationSetup
 */
export interface ModelConfigurationSetup {
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    keywords?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Grid information about the model
     * @type {Array<Grid>}
     * @memberof ModelConfigurationSetup
     */
    hasGrid?: Array<Grid> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    type?: Array<string> | null;
    /**
     * Variable that was calibrated in this particular model configuration calibration
     * @type {Array<VariablePresentation>}
     * @memberof ModelConfigurationSetup
     */
    calibratedVariable?: Array<VariablePresentation> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Software>}
     * @memberof ModelConfigurationSetup
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof ModelConfigurationSetup
     */
    copyrightHolder?: Array<Organization | Person> | null;
    /**
     * Calibration method used for a particular model configuration or setup
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    calibrationMethod?: Array<string> | null;
    /**
     * Property linking a region to a model configuration/calibration. This property implies that the described model configuration is prepared to execute in that target region
     * @type {Array<Region>}
     * @memberof ModelConfigurationSetup
     */
    hasRegion?: Array<Region> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof ModelConfigurationSetup
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof ModelConfigurationSetup
     */
    hasContactPerson?: Array<Organization | Person> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    tag?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof ModelConfigurationSetup
     */
    id?: string;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SampleExecution>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleExecution?: Array<SampleExecution> | null;
    /**
     * Description not available
     * @type {Array<SampleResource>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleResult?: Array<SampleResource> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof ModelConfigurationSetup
     */
    author?: Array<Organization | Person> | null;
    /**
     * Description not available
     * @type {Array<ConfigurationSetup>}
     * @memberof ModelConfigurationSetup
     */
    wasDerivedFromSetup?: Array<ConfigurationSetup> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasConstraint?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasBuildFile?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    shortDescription?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    datePublished?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof ModelConfigurationSetup
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Description not available
     * @type {Array<ConfigurationSetup>}
     * @memberof ModelConfigurationSetup
     */
    hasSetup?: Array<ConfigurationSetup> | null;
    /**
     * Diagram used to explain the behavior of the model
     * @type {Array<Image>}
     * @memberof ModelConfigurationSetup
     */
    hasExplanationDiagram?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExample?: Array<string> | null;
    /**
     * Property that represents the temporal interval used to calibrate a model
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    calibrationInterval?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof ModelConfigurationSetup
     */
    publisher?: Array<Organization | Person> | null;
    /**
     * Description not available
     * @type {Array<DatasetSpecification>}
     * @memberof ModelConfigurationSetup
     */
    hasOutput?: Array<DatasetSpecification> | null;
    /**
     * Time interval used in the model configuration
     * @type {Array<TimeInterval>}
     * @memberof ModelConfigurationSetup
     */
    hasOutputTimeInterval?: Array<TimeInterval> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    status?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    doi?: Array<string> | null;
    /**
     * Property that indicates how have the parameters assigned in a model configuration (e.g., using an expert guess, by using calibration, etc.)
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    parameterAssignmentMethod?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<FundingInformation>}
     * @memberof ModelConfigurationSetup
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * Property that indicates which physical processes (if any) are associated with a model configuration
     * @type {Array<Process>}
     * @memberof ModelConfigurationSetup
     */
    hasProcess?: Array<Process> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof ModelConfigurationSetup
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    description?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof ModelConfigurationSetup
     */
    screenshot?: Array<Image> | null;
    /**
     * Category associated with a model (e.g., Hydrology, etc.)
     * @type {Array<ModelCategory>}
     * @memberof ModelConfigurationSetup
     */
    hasModelCategory?: Array<ModelCategory> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof ModelConfigurationSetup
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    issueTracker?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareImage>}
     * @memberof ModelConfigurationSetup
     */
    hasSoftwareImage?: Array<SoftwareImage> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    dateCreated?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof ModelConfigurationSetup
     */
    contributor?: Array<Person> | null;
    /**
     * Sample result table associated with a model configuration
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasModelResultTable?: Array<string> | null;
    /**
     * Variable for which the model was calibrated for. For example, in a hydrology model one calibrate the predicted river width by varying hydrologic conductivity
     * @type {Array<VariablePresentation>}
     * @memberof ModelConfigurationSetup
     */
    calibrationTargetVariable?: Array<VariablePresentation> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasPurpose?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Visualization>}
     * @memberof ModelConfigurationSetup
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Diagram associated to a model configuration
     * @type {Array<CausalDiagram>}
     * @memberof ModelConfigurationSetup
     */
    hasCausalDiagram?: Array<CausalDiagram> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    website?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    processorRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Parameter>}
     * @memberof ModelConfigurationSetup
     */
    adjustableParameter?: Array<Parameter> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    label?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Parameter>}
     * @memberof ModelConfigurationSetup
     */
    hasParameter?: Array<Parameter> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    operatingSystems?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Date until which the calibration of a model is valid. For example, a trained model with data from 2005-2010 may only be valid for predictions until 2015.
     * @type {Array<string>}
     * @memberof ModelConfigurationSetup
     */
    validUntil?: Array<string> | null;
    /**
     * Equations used in the model
     * @type {Array<Equation>}
     * @memberof ModelConfigurationSetup
     */
    hasEquation?: Array<Equation> | null;
    /**
     * Description not available
     * @type {Array<NumericalIndex>}
     * @memberof ModelConfigurationSetup
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Description not available
     * @type {Array<DatasetSpecification>}
     * @memberof ModelConfigurationSetup
     */
    hasInput?: Array<DatasetSpecification> | null;
}

export function ModelConfigurationSetupFromJSON(json: any): ModelConfigurationSetup {
    return ModelConfigurationSetupFromJSONTyped(json, false);
}

export function ModelConfigurationSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelConfigurationSetup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDownloadInstructions': !exists(json, 'hasDownloadInstructions') ? undefined : json['hasDownloadInstructions'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
        'hasImplementationScriptLocation': !exists(json, 'hasImplementationScriptLocation') ? undefined : json['hasImplementationScriptLocation'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'calibratedVariable': !exists(json, 'calibratedVariable') ? undefined : (json['calibratedVariable'] as Array<any>).map(VariablePresentationFromJSON),
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'copyrightHolder': !exists(json, 'copyrightHolder') ? undefined : json['copyrightHolder'],
        'calibrationMethod': !exists(json, 'calibrationMethod') ? undefined : json['calibrationMethod'],
        'hasRegion': !exists(json, 'hasRegion') ? undefined : (json['hasRegion'] as Array<any>).map(RegionFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'hasSampleExecution': !exists(json, 'hasSampleExecution') ? undefined : (json['hasSampleExecution'] as Array<any>).map(SampleExecutionFromJSON),
        'hasSampleResult': !exists(json, 'hasSampleResult') ? undefined : (json['hasSampleResult'] as Array<any>).map(SampleResourceFromJSON),
        'author': !exists(json, 'author') ? undefined : json['author'],
        'wasDerivedFromSetup': !exists(json, 'wasDerivedFromSetup') ? undefined : (json['wasDerivedFromSetup'] as Array<any>).map(ConfigurationSetupFromJSON),
        'hasConstraint': !exists(json, 'hasConstraint') ? undefined : json['hasConstraint'],
        'hasBuildFile': !exists(json, 'hasBuildFile') ? undefined : json['hasBuildFile'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'hasExecutionCommand': !exists(json, 'hasExecutionCommand') ? undefined : json['hasExecutionCommand'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasSetup': !exists(json, 'hasSetup') ? undefined : (json['hasSetup'] as Array<any>).map(ConfigurationSetupFromJSON),
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : (json['hasExplanationDiagram'] as Array<any>).map(ImageFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'calibrationInterval': !exists(json, 'calibrationInterval') ? undefined : json['calibrationInterval'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasOutput': !exists(json, 'hasOutput') ? undefined : (json['hasOutput'] as Array<any>).map(DatasetSpecificationFromJSON),
        'hasOutputTimeInterval': !exists(json, 'hasOutputTimeInterval') ? undefined : (json['hasOutputTimeInterval'] as Array<any>).map(TimeIntervalFromJSON),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
        'parameterAssignmentMethod': !exists(json, 'parameterAssignmentMethod') ? undefined : json['parameterAssignmentMethod'],
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'hasComponentLocation': !exists(json, 'hasComponentLocation') ? undefined : json['hasComponentLocation'],
        'hasProcess': !exists(json, 'hasProcess') ? undefined : (json['hasProcess'] as Array<any>).map(ProcessFromJSON),
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : (json['hasModelCategory'] as Array<any>).map(ModelCategoryFromJSON),
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'issueTracker': !exists(json, 'issueTracker') ? undefined : json['issueTracker'],
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : (json['hasSoftwareImage'] as Array<any>).map(SoftwareImageFromJSON),
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasModelResultTable': !exists(json, 'hasModelResultTable') ? undefined : json['hasModelResultTable'],
        'calibrationTargetVariable': !exists(json, 'calibrationTargetVariable') ? undefined : (json['calibrationTargetVariable'] as Array<any>).map(VariablePresentationFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasExecutableInstructions': !exists(json, 'hasExecutableInstructions') ? undefined : json['hasExecutableInstructions'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'hasCausalDiagram': !exists(json, 'hasCausalDiagram') ? undefined : (json['hasCausalDiagram'] as Array<any>).map(CausalDiagramFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'adjustableParameter': !exists(json, 'adjustableParameter') ? undefined : (json['adjustableParameter'] as Array<any>).map(ParameterFromJSON),
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'hasSupportScriptLocation': !exists(json, 'hasSupportScriptLocation') ? undefined : json['hasSupportScriptLocation'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'hasParameter': !exists(json, 'hasParameter') ? undefined : (json['hasParameter'] as Array<any>).map(ParameterFromJSON),
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasExecutableNotebook': !exists(json, 'hasExecutableNotebook') ? undefined : json['hasExecutableNotebook'],
        'validUntil': !exists(json, 'validUntil') ? undefined : json['validUntil'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
        'hasInput': !exists(json, 'hasInput') ? undefined : (json['hasInput'] as Array<any>).map(DatasetSpecificationFromJSON),
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
        
        'hasDownloadInstructions': value.hasDownloadInstructions,
        'keywords': value.keywords,
        'hasDocumentation': value.hasDocumentation,
        'hasGrid': value.hasGrid === undefined ? undefined : (value.hasGrid as Array<any>).map(GridToJSON),
        'hasImplementationScriptLocation': value.hasImplementationScriptLocation,
        'softwareRequirements': value.softwareRequirements,
        'hasDownloadURL': value.hasDownloadURL,
        'type': value.type,
        'calibratedVariable': value.calibratedVariable === undefined ? undefined : (value.calibratedVariable as Array<any>).map(VariablePresentationToJSON),
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'copyrightHolder': value.copyrightHolder,
        'calibrationMethod': value.calibrationMethod,
        'hasRegion': value.hasRegion === undefined ? undefined : (value.hasRegion as Array<any>).map(RegionToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'tag': value.tag,
        'id': value.id,
        'identifier': value.identifier,
        'hasSampleExecution': value.hasSampleExecution === undefined ? undefined : (value.hasSampleExecution as Array<any>).map(SampleExecutionToJSON),
        'hasSampleResult': value.hasSampleResult === undefined ? undefined : (value.hasSampleResult as Array<any>).map(SampleResourceToJSON),
        'author': value.author,
        'wasDerivedFromSetup': value.wasDerivedFromSetup === undefined ? undefined : (value.wasDerivedFromSetup as Array<any>).map(ConfigurationSetupToJSON),
        'hasConstraint': value.hasConstraint,
        'hasBuildFile': value.hasBuildFile,
        'shortDescription': value.shortDescription,
        'hasExecutionCommand': value.hasExecutionCommand,
        'datePublished': value.datePublished,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasSetup': value.hasSetup === undefined ? undefined : (value.hasSetup as Array<any>).map(ConfigurationSetupToJSON),
        'hasExplanationDiagram': value.hasExplanationDiagram === undefined ? undefined : (value.hasExplanationDiagram as Array<any>).map(ImageToJSON),
        'hasExample': value.hasExample,
        'calibrationInterval': value.calibrationInterval,
        'publisher': value.publisher,
        'hasOutput': value.hasOutput === undefined ? undefined : (value.hasOutput as Array<any>).map(DatasetSpecificationToJSON),
        'hasOutputTimeInterval': value.hasOutputTimeInterval === undefined ? undefined : (value.hasOutputTimeInterval as Array<any>).map(TimeIntervalToJSON),
        'status': value.status,
        'doi': value.doi,
        'parameterAssignmentMethod': value.parameterAssignmentMethod,
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'hasComponentLocation': value.hasComponentLocation,
        'hasProcess': value.hasProcess === undefined ? undefined : (value.hasProcess as Array<any>).map(ProcessToJSON),
        'supportDetails': value.supportDetails,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'hasModelCategory': value.hasModelCategory === undefined ? undefined : (value.hasModelCategory as Array<any>).map(ModelCategoryToJSON),
        'hadPrimarySource': value.hadPrimarySource,
        'issueTracker': value.issueTracker,
        'hasSoftwareImage': value.hasSoftwareImage === undefined ? undefined : (value.hasSoftwareImage as Array<any>).map(SoftwareImageToJSON),
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasModelResultTable': value.hasModelResultTable,
        'calibrationTargetVariable': value.calibrationTargetVariable === undefined ? undefined : (value.calibrationTargetVariable as Array<any>).map(VariablePresentationToJSON),
        'hasPurpose': value.hasPurpose,
        'hasExecutableInstructions': value.hasExecutableInstructions,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'hasCausalDiagram': value.hasCausalDiagram === undefined ? undefined : (value.hasCausalDiagram as Array<any>).map(CausalDiagramToJSON),
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'processorRequirements': value.processorRequirements,
        'adjustableParameter': value.adjustableParameter === undefined ? undefined : (value.adjustableParameter as Array<any>).map(ParameterToJSON),
        'hasUsageNotes': value.hasUsageNotes,
        'hasSupportScriptLocation': value.hasSupportScriptLocation,
        'readme': value.readme,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'hasParameter': value.hasParameter === undefined ? undefined : (value.hasParameter as Array<any>).map(ParameterToJSON),
        'operatingSystems': value.operatingSystems,
        'hasExecutableNotebook': value.hasExecutableNotebook,
        'validUntil': value.validUntil,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
        'hasInput': value.hasInput === undefined ? undefined : (value.hasInput as Array<any>).map(DatasetSpecificationToJSON),
    };
}


