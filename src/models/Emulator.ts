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
 * Type of models that emulates the behavior of another model. For example, an emulator can be a machine learning model trained on the output runs of a hydrology model
 * @export
 * @interface Emulator
 */
export interface Emulator {
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    keywords?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Grid information about the model
     * @type {Array<Grid>}
     * @memberof Emulator
     */
    hasGrid?: Array<Grid> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Emulator
     */
    type?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Software>}
     * @memberof Emulator
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Emulator
     */
    copyrightHolder?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Emulator
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Emulator
     */
    hasContactPerson?: Array<object> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Emulator
     */
    id?: string;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Emulator
     */
    author?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasBuildFile?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    shortDescription?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Date>}
     * @memberof Emulator
     */
    datePublished?: Array<Date> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof Emulator
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Diagram used to explain the behavior of the model
     * @type {Array<Image>}
     * @memberof Emulator
     */
    hasExplanationDiagram?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Emulator
     */
    publisher?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    doi?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<FundingInformation>}
     * @memberof Emulator
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof Emulator
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Emulator
     */
    description?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Emulator
     */
    screenshot?: Array<Image> | null;
    /**
     * Category associated with a model (e.g., Hydrology)
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasModelCategory?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Emulator
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    issueTracker?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Date>}
     * @memberof Emulator
     */
    dateCreated?: Array<Date> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof Emulator
     */
    contributor?: Array<Person> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasPurpose?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Visualization>}
     * @memberof Emulator
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    website?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    processorRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Emulator
     */
    label?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    operatingSystems?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Emulator
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Equations used in the model
     * @type {Array<Equation>}
     * @memberof Emulator
     */
    hasEquation?: Array<Equation> | null;
    /**
     * Description not available
     * @type {Array<NumericalIndex>}
     * @memberof Emulator
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
}

export function EmulatorFromJSON(json: any): Emulator {
    return EmulatorFromJSONTyped(json, false);
}

export function EmulatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Emulator {
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
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'hasBuildFile': !exists(json, 'hasBuildFile') ? undefined : json['hasBuildFile'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : (json['hasExplanationDiagram'] as Array<any>).map(ImageFromJSON),
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : json['hasModelCategory'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'issueTracker': !exists(json, 'issueTracker') ? undefined : json['issueTracker'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasExecutableInstructions': !exists(json, 'hasExecutableInstructions') ? undefined : json['hasExecutableInstructions'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasExecutableNotebook': !exists(json, 'hasExecutableNotebook') ? undefined : json['hasExecutableNotebook'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
    };
}

export function EmulatorToJSON(value?: Emulator): any {
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
        'identifier': value.identifier,
        'author': value.author,
        'hasBuildFile': value.hasBuildFile,
        'shortDescription': value.shortDescription,
        'datePublished': value.datePublished,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasExplanationDiagram': value.hasExplanationDiagram === undefined ? undefined : (value.hasExplanationDiagram as Array<any>).map(ImageToJSON),
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'doi': value.doi,
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'supportDetails': value.supportDetails,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'hasModelCategory': value.hasModelCategory,
        'hadPrimarySource': value.hadPrimarySource,
        'issueTracker': value.issueTracker,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasPurpose': value.hasPurpose,
        'hasExecutableInstructions': value.hasExecutableInstructions,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'processorRequirements': value.processorRequirements,
        'hasUsageNotes': value.hasUsageNotes,
        'readme': value.readme,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'operatingSystems': value.operatingSystems,
        'hasExecutableNotebook': value.hasExecutableNotebook,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
    };
}


