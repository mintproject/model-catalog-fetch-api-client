// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
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
    Person,
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
    Process,
    ProcessFromJSON,
    ProcessFromJSONTyped,
    ProcessToJSON,
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
 * A mathematical description of a process (e.g., hydrological, agricultural, social, etc.)
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    keywords?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Grid information about the model
     * @type {Array<Grid>}
     * @memberof Model
     */
    hasGrid?: Array<Grid> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Model
     */
    type?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Software>}
     * @memberof Model
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof Model
     */
    copyrightHolder?: Array<Organization | Person> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Model
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof Model
     */
    hasContactPerson?: Array<Organization | Person> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Model
     */
    id?: string;
    /**
     * Known restrictions (i.e. cases where the model is known not to be reliable or shouldn\'t be used)
     * @type {Array<string>}
     * @memberof Model
     */
    limitations?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof Model
     */
    author?: Array<Organization | Person> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasBuildFile?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    shortDescription?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    datePublished?: Array<string> | null;
    /**
     * What is the theory behind the processes described in the model
     * @type {Array<string>}
     * @memberof Model
     */
    theoreticalBasis?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof Model
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Diagram used to explain the behavior of the model
     * @type {Array<Image>}
     * @memberof Model
     */
    hasExplanationDiagram?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Organization | Person>}
     * @memberof Model
     */
    publisher?: Array<Organization | Person> | null;
    /**
     * An estimate of the time required to run example codes or other known configurations
     * @type {Array<string>}
     * @memberof Model
     */
    runtimeEstimation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    doi?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<FundingInformation>}
     * @memberof Model
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Property that indicates which physical processes (if any) are associated with a model
     * @type {Array<Process>}
     * @memberof Model
     */
    hasProcess?: Array<Process> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof Model
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Model
     */
    description?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Model
     */
    screenshot?: Array<Image> | null;
    /**
     * Category associated with a model (e.g., Hydrology, etc.)
     * @type {Array<ModelCategory>}
     * @memberof Model
     */
    hasModelCategory?: Array<ModelCategory> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Model
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    issueTracker?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    dateCreated?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof Model
     */
    contributor?: Array<Person> | null;
    /**
     * Variable that is used as input for this model
     * @type {Array<VariablePresentation>}
     * @memberof Model
     */
    hasInputVariable?: Array<VariablePresentation> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasPurpose?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Visualization>}
     * @memberof Model
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    website?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    processorRequirements?: Array<string> | null;
    /**
     * Were there any simplifications made to processes to make the model more efficient
     * @type {Array<string>}
     * @memberof Model
     */
    parameterization?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Model
     */
    label?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    operatingSystems?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Model
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Equations used in the model
     * @type {Array<Equation>}
     * @memberof Model
     */
    hasEquation?: Array<Equation> | null;
    /**
     * Description not available
     * @type {Array<NumericalIndex>}
     * @memberof Model
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Variable that is used as output for this model
     * @type {Array<VariablePresentation>}
     * @memberof Model
     */
    hasOutputVariable?: Array<VariablePresentation> | null;
}

export function ModelFromJSON(json: any): Model {
    return ModelFromJSONTyped(json, false);
}

export function ModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDownloadInstructions': !exists(json, 'hasDownloadInstructions') ? undefined : json['hasDownloadInstructions'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'copyrightHolder': !exists(json, 'copyrightHolder') ? undefined : json['copyrightHolder'],
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'limitations': !exists(json, 'limitations') ? undefined : json['limitations'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'hasBuildFile': !exists(json, 'hasBuildFile') ? undefined : json['hasBuildFile'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'theoreticalBasis': !exists(json, 'theoreticalBasis') ? undefined : json['theoreticalBasis'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : (json['hasExplanationDiagram'] as Array<any>).map(ImageFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'runtimeEstimation': !exists(json, 'runtimeEstimation') ? undefined : json['runtimeEstimation'],
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
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
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasInputVariable': !exists(json, 'hasInputVariable') ? undefined : (json['hasInputVariable'] as Array<any>).map(VariablePresentationFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasExecutableInstructions': !exists(json, 'hasExecutableInstructions') ? undefined : json['hasExecutableInstructions'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'parameterization': !exists(json, 'parameterization') ? undefined : json['parameterization'],
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasExecutableNotebook': !exists(json, 'hasExecutableNotebook') ? undefined : json['hasExecutableNotebook'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
        'hasOutputVariable': !exists(json, 'hasOutputVariable') ? undefined : (json['hasOutputVariable'] as Array<any>).map(VariablePresentationFromJSON),
    };
}

export function ModelToJSON(value?: Model): any {
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
        'softwareRequirements': value.softwareRequirements,
        'hasDownloadURL': value.hasDownloadURL,
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'copyrightHolder': value.copyrightHolder,
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'id': value.id,
        'limitations': value.limitations,
        'identifier': value.identifier,
        'author': value.author,
        'hasBuildFile': value.hasBuildFile,
        'shortDescription': value.shortDescription,
        'datePublished': value.datePublished,
        'theoreticalBasis': value.theoreticalBasis,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasExplanationDiagram': value.hasExplanationDiagram === undefined ? undefined : (value.hasExplanationDiagram as Array<any>).map(ImageToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'runtimeEstimation': value.runtimeEstimation,
        'doi': value.doi,
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
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
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasInputVariable': value.hasInputVariable === undefined ? undefined : (value.hasInputVariable as Array<any>).map(VariablePresentationToJSON),
        'hasPurpose': value.hasPurpose,
        'hasExecutableInstructions': value.hasExecutableInstructions,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'processorRequirements': value.processorRequirements,
        'parameterization': value.parameterization,
        'hasUsageNotes': value.hasUsageNotes,
        'readme': value.readme,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'operatingSystems': value.operatingSystems,
        'hasExecutableNotebook': value.hasExecutableNotebook,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
        'hasOutputVariable': value.hasOutputVariable === undefined ? undefined : (value.hasOutputVariable as Array<any>).map(VariablePresentationToJSON),
    };
}


