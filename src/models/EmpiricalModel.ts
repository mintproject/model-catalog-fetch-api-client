// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.5.0
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
    NumericalIndex,
    NumericalIndexFromJSON,
    NumericalIndexFromJSONTyped,
    NumericalIndexToJSON,
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
 * Model based on observations.
 * @export
 * @interface EmpiricalModel
 */
export interface EmpiricalModel {
    /**
     * Property that links a software project to its funding information
     * @type {Array<FundingInformation>}
     * @memberof EmpiricalModel
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Keywords associated with a software component
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    keywords?: Array<string> | null;
    /**
     * Pointer to the documentation of the model
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Grid information about the model
     * @type {Array<Grid>}
     * @memberof EmpiricalModel
     */
    hasGrid?: Array<Grid> | null;
    /**
     * Property to link details, such as mailing lists in case a contact person is not provided
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof EmpiricalModel
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * Download URL where to obtain the source/executable of the software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    description?: Array<string> | null;
    /**
     * Main publication to cite in this software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof EmpiricalModel
     */
    screenshot?: Array<Image> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    type?: Array<string> | null;
    /**
     * Instructions requires to install this particular piece of software.
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasModelCategory?: Array<string> | null;
    /**
     * Property to identify the original source of the information of the annotated resource. It could be a web page, an organization, a person, some experiment notes, etc.
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    dateCreated?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof EmpiricalModel
     */
    contributor?: Array<Person> | null;
    /**
     * Property that links a software component to other useful software that canbe used to visualize its outputs
     * @type {Array<Software>}
     * @memberof EmpiricalModel
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Frequently asked questions about a software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof EmpiricalModel
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasContactPerson?: Array<object> | null;
    /**
     * Objective or main functionality that can be achieved by running this software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasPurpose?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof EmpiricalModel
     */
    id?: string;
    /**
     * A typical sample visualization of the softwware outputs
     * @type {Array<Visualization>}
     * @memberof EmpiricalModel
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    website?: Array<string> | null;
    /**
     * How to cite this software
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    author?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    processorRequirements?: Array<string> | null;
    /**
     * Property that describes the usage considerations of a particular software. These notes capture the rationale of for that software configuration, along with an explanation for sample inputs, things to consider when running the model with data, etc.
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * A summarized description of the resource
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    shortDescription?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    label?: Array<string> | null;
    /**
     * Assumptions of a software, e.g. the solver being used for a particular model, the source of the data (e.g., all data must have a given resolution), etc.
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    datePublished?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    operatingSystems?: Array<string> | null;
    /**
     * License of a software component or its source code
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof EmpiricalModel
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Diagram used to explain the behavior of the model
     * @type {Array<Image>}
     * @memberof EmpiricalModel
     */
    hasExplanationDiagram?: Array<Image> | null;
    /**
     * An example explaining a scenario where the model was used in plain language.
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    publisher?: Array<object> | null;
    /**
     * Equations used in the model
     * @type {Array<Equation>}
     * @memberof EmpiricalModel
     */
    hasEquation?: Array<Equation> | null;
    /**
     * Property that indicates that a software component (or any of its outputs) can be used to calculate a particular index. The rationale for this property is that indices are usually calculated by applying post-processing steps to the outputs of a software component.
     * @type {Array<NumericalIndex>}
     * @memberof EmpiricalModel
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
}

export function EmpiricalModelFromJSON(json: any): EmpiricalModel {
    return EmpiricalModelFromJSONTyped(json, false);
}

export function EmpiricalModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmpiricalModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
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
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : json['hasModelCategory'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
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
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : (json['hasExplanationDiagram'] as Array<any>).map(ImageFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
    };
}

export function EmpiricalModelToJSON(value?: EmpiricalModel): any {
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
        'hasGrid': value.hasGrid === undefined ? undefined : (value.hasGrid as Array<any>).map(GridToJSON),
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
        'hasModelCategory': value.hasModelCategory,
        'hadPrimarySource': value.hadPrimarySource,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'identifier': value.identifier,
        'memoryRequirements': value.memoryRequirements,
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
        'hasExplanationDiagram': value.hasExplanationDiagram === undefined ? undefined : (value.hasExplanationDiagram as Array<any>).map(ImageToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
    };
}


