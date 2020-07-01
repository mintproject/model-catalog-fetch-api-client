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
    FundingInformation,
    FundingInformationFromJSON,
    FundingInformationFromJSONTyped,
    FundingInformationToJSON,
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
 * Description not available
 * @export
 * @interface Software
 */
export interface Software {
    /**
     * Instructions needed to download a software component. The difference with `hasDownloadURL` is that this property captures the human readable instructions required to download software. For example, sometimes an authentication is needed, users need to fill in a form, etc.
     * @type {Array<string>}
     * @memberof Software
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Property that links a software project to its funding information
     * @type {Array<FundingInformation>}
     * @memberof Software
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Keywords associated with a software component
     * @type {Array<string>}
     * @memberof Software
     */
    keywords?: Array<string> | null;
    /**
     * Pointer to the documentation of the model
     * @type {Array<string>}
     * @memberof Software
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Property to link details, such as mailing lists in case a contact person is not provided
     * @type {Array<string>}
     * @memberof Software
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof Software
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * Download URL where to obtain the source/executable of the software
     * @type {Array<string>}
     * @memberof Software
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof Software
     */
    description?: Array<string> | null;
    /**
     * Main publication to cite for this software component
     * @type {Array<string>}
     * @memberof Software
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Software
     */
    screenshot?: Array<Image> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof Software
     */
    type?: Array<string> | null;
    /**
     * Instructions required to install this particular piece of software. Installation instructions usually are available in a human-readable manner.
     * @type {Array<string>}
     * @memberof Software
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * had primary source
     * @type {Array<object>}
     * @memberof Software
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Pointer to the issue tracker of a software component
     * @type {Array<string>}
     * @memberof Software
     */
    issueTracker?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    dateCreated?: Array<string> | null;
    /**
     * Property that links a software component to other useful software that canbe used to visualize its outputs
     * @type {Array<Software>}
     * @memberof Software
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof Software
     */
    contributor?: Array<Person> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Software
     */
    copyrightHolder?: Array<object> | null;
    /**
     * Frequently asked questions about a software
     * @type {Array<string>}
     * @memberof Software
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof Software
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Software
     */
    hasContactPerson?: Array<object> | null;
    /**
     * Objective or main functionality that can be achieved by running this software
     * @type {Array<string>}
     * @memberof Software
     */
    hasPurpose?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof Software
     */
    id?: string;
    /**
     * Instructions that indicate how a software component should be executed. The difference with `hasExecutionCommand` is that the execution instructions aim to be human-readable, and have explanations between the different commands and instructions
     * @type {Array<string>}
     * @memberof Software
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * A typical sample visualization of the softwware outputs
     * @type {Array<Visualization>}
     * @memberof Software
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof Software
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof Software
     */
    website?: Array<string> | null;
    /**
     * How to cite this software
     * @type {Array<string>}
     * @memberof Software
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Software
     */
    author?: Array<object> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    processorRequirements?: Array<string> | null;
    /**
     * Property that describes the usage considerations of a particular software. These notes capture the rationale of for that software configuration, along with an explanation for sample inputs, things to consider when running the model with data, etc.
     * @type {Array<string>}
     * @memberof Software
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * URl to the readme file of a software component
     * @type {Array<string>}
     * @memberof Software
     */
    readme?: Array<string> | null;
    /**
     * A file (e.g., Dockerfile) with executable instructions indicating how a Software Image or a Software component is built
     * @type {Array<string>}
     * @memberof Software
     */
    hasBuildFile?: Array<string> | null;
    /**
     * A summarized description of the resource
     * @type {Array<string>}
     * @memberof Software
     */
    shortDescription?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof Software
     */
    label?: Array<string> | null;
    /**
     * Assumptions of a software, e.g. the solver being used for a particular model, the source of the data (e.g., all data must have a given resolution), etc.
     * @type {Array<string>}
     * @memberof Software
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    datePublished?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof Software
     */
    operatingSystems?: Array<string> | null;
    /**
     * License of a software component or its source code
     * @type {Array<string>}
     * @memberof Software
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof Software
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Property that links a software component with an executable notebook (e.g., Jupyter notebook) that illustrates how to use it in an executable manner.
     * @type {Array<string>}
     * @memberof Software
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * An example explaining a scenario where the software component was used in plain language.
     * @type {Array<string>}
     * @memberof Software
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof Software
     */
    publisher?: Array<object> | null;
    /**
     * Property that indicates that a software component (or any of its outputs) can be used to calculate a particular index. The rationale for this property is that indices are usually calculated by applying post-processing steps to the outputs of a software component.
     * @type {Array<NumericalIndex>}
     * @memberof Software
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Digital Object Identifier associated with a software component
     * @type {Array<string>}
     * @memberof Software
     */
    doi?: Array<string> | null;
}

export function SoftwareFromJSON(json: any): Software {
    return SoftwareFromJSONTyped(json, false);
}

export function SoftwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): Software {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDownloadInstructions': !exists(json, 'hasDownloadInstructions') ? undefined : json['hasDownloadInstructions'],
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
        'issueTracker': !exists(json, 'issueTracker') ? undefined : json['issueTracker'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'copyrightHolder': !exists(json, 'copyrightHolder') ? undefined : json['copyrightHolder'],
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasExecutableInstructions': !exists(json, 'hasExecutableInstructions') ? undefined : json['hasExecutableInstructions'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'citation': !exists(json, 'citation') ? undefined : json['citation'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'processorRequirements': !exists(json, 'processorRequirements') ? undefined : json['processorRequirements'],
        'hasUsageNotes': !exists(json, 'hasUsageNotes') ? undefined : json['hasUsageNotes'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'hasBuildFile': !exists(json, 'hasBuildFile') ? undefined : json['hasBuildFile'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'hasAssumption': !exists(json, 'hasAssumption') ? undefined : json['hasAssumption'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
        'hasExecutableNotebook': !exists(json, 'hasExecutableNotebook') ? undefined : json['hasExecutableNotebook'],
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
    };
}

export function SoftwareToJSON(value?: Software): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDownloadInstructions': value.hasDownloadInstructions,
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
        'issueTracker': value.issueTracker,
        'dateCreated': value.dateCreated,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'copyrightHolder': value.copyrightHolder,
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasExecutableInstructions': value.hasExecutableInstructions,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
        'identifier': value.identifier,
        'memoryRequirements': value.memoryRequirements,
        'website': value.website,
        'citation': value.citation,
        'author': value.author,
        'processorRequirements': value.processorRequirements,
        'hasUsageNotes': value.hasUsageNotes,
        'readme': value.readme,
        'hasBuildFile': value.hasBuildFile,
        'shortDescription': value.shortDescription,
        'label': value.label,
        'hasAssumption': value.hasAssumption,
        'datePublished': value.datePublished,
        'operatingSystems': value.operatingSystems,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
        'hasExecutableNotebook': value.hasExecutableNotebook,
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
        'doi': value.doi,
    };
}


