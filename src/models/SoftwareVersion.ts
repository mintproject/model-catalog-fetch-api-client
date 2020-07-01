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
 * A software version is a specificf type of software that represents a particular set of functionalities. New functionalities and error fixes may occur between software versions
 * @export
 * @interface SoftwareVersion
 */
export interface SoftwareVersion {
    /**
     * Instructions needed to download a software component. The difference with `hasDownloadURL` is that this property captures the human readable instructions required to download software. For example, sometimes an authentication is needed, users need to fill in a form, etc.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Keywords associated with a software component
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    keywords?: Array<string> | null;
    /**
     * Pointer to the documentation of the model
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Download URL where to obtain the source/executable of the software
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    type?: Array<string> | null;
    /**
     * Instructions required to install this particular piece of software. Installation instructions usually are available in a human-readable manner.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Property that links a software component to other useful software that canbe used to visualize its outputs
     * @type {Array<Software>}
     * @memberof SoftwareVersion
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    copyrightHolder?: Array<object> | null;
    /**
     * Frequently asked questions about a software
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof SoftwareVersion
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    hasContactPerson?: Array<object> | null;
    /**
     * Tag used to annotate a version or a software configuration. This annotation is useful to show which version is the latest, or which version is deprecated. Supported tags are: \"latest\", \"deprecated\"
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    tag?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof SoftwareVersion
     */
    id?: string;
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    identifier?: Array<string> | null;
    /**
     * Property that links a model to one of its configurations. A model may have multiple configurations, each of which is unique in terms of the inputs and outputs it uses.
     * @type {Array<SoftwareConfiguration>}
     * @memberof SoftwareVersion
     */
    hasConfiguration?: Array<SoftwareConfiguration> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    author?: Array<object> | null;
    /**
     * A file (e.g., Dockerfile) with executable instructions indicating how a Software Image or a Software component is built
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasBuildFile?: Array<string> | null;
    /**
     * A summarized description of the resource
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    shortDescription?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    datePublished?: Array<string> | null;
    /**
     * License of a software component or its source code
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof SoftwareVersion
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * An example explaining a scenario where the software component was used in plain language.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    publisher?: Array<object> | null;
    /**
     * Digital Object Identifier associated with a software component
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    doi?: Array<string> | null;
    /**
     * Property that links a software project to its funding information
     * @type {Array<FundingInformation>}
     * @memberof SoftwareVersion
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Property to link details, such as mailing lists in case a contact person is not provided
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof SoftwareVersion
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    description?: Array<string> | null;
    /**
     * Main publication to cite for this software component
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof SoftwareVersion
     */
    screenshot?: Array<Image> | null;
    /**
     * had primary source
     * @type {Array<object>}
     * @memberof SoftwareVersion
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Pointer to the issue tracker of a software component
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    issueTracker?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    dateCreated?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof SoftwareVersion
     */
    contributor?: Array<Person> | null;
    /**
     * Objective or main functionality that can be achieved by running this software
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasPurpose?: Array<string> | null;
    /**
     * Instructions that indicate how a software component should be executed. The difference with `hasExecutionCommand` is that the execution instructions aim to be human-readable, and have explanations between the different commands and instructions
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * A typical sample visualization of the softwware outputs
     * @type {Array<Visualization>}
     * @memberof SoftwareVersion
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    website?: Array<string> | null;
    /**
     * How to cite this software
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    processorRequirements?: Array<string> | null;
    /**
     * Property that describes the usage considerations of a particular software. These notes capture the rationale of for that software configuration, along with an explanation for sample inputs, things to consider when running the model with data, etc.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * URl to the readme file of a software component
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    label?: Array<string> | null;
    /**
     * Assumptions of a software, e.g. the solver being used for a particular model, the source of the data (e.g., all data must have a given resolution), etc.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasAssumption?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    operatingSystems?: Array<string> | null;
    /**
     * Property that links a software component with an executable notebook (e.g., Jupyter notebook) that illustrates how to use it in an executable manner.
     * @type {Array<string>}
     * @memberof SoftwareVersion
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Property that indicates that a software component (or any of its outputs) can be used to calculate a particular index. The rationale for this property is that indices are usually calculated by applying post-processing steps to the outputs of a software component.
     * @type {Array<NumericalIndex>}
     * @memberof SoftwareVersion
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Identifier of the version of this software
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
        
        'hasDownloadInstructions': !exists(json, 'hasDownloadInstructions') ? undefined : json['hasDownloadInstructions'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : (json['compatibleVisualizationSoftware'] as Array<any>).map(SoftwareFromJSON),
        'copyrightHolder': !exists(json, 'copyrightHolder') ? undefined : json['copyrightHolder'],
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : (json['logo'] as Array<any>).map(ImageFromJSON),
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'hasConfiguration': !exists(json, 'hasConfiguration') ? undefined : (json['hasConfiguration'] as Array<any>).map(SoftwareConfigurationFromJSON),
        'author': !exists(json, 'author') ? undefined : json['author'],
        'hasBuildFile': !exists(json, 'hasBuildFile') ? undefined : json['hasBuildFile'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'datePublished': !exists(json, 'datePublished') ? undefined : json['datePublished'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : (json['hasSourceCode'] as Array<any>).map(SourceCodeFromJSON),
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
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
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
        
        'hasDownloadInstructions': value.hasDownloadInstructions,
        'keywords': value.keywords,
        'hasDocumentation': value.hasDocumentation,
        'softwareRequirements': value.softwareRequirements,
        'hasDownloadURL': value.hasDownloadURL,
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware === undefined ? undefined : (value.compatibleVisualizationSoftware as Array<any>).map(SoftwareToJSON),
        'copyrightHolder': value.copyrightHolder,
        'hasFAQ': value.hasFAQ,
        'logo': value.logo === undefined ? undefined : (value.logo as Array<any>).map(ImageToJSON),
        'hasContactPerson': value.hasContactPerson,
        'tag': value.tag,
        'id': value.id,
        'identifier': value.identifier,
        'hasConfiguration': value.hasConfiguration === undefined ? undefined : (value.hasConfiguration as Array<any>).map(SoftwareConfigurationToJSON),
        'author': value.author,
        'hasBuildFile': value.hasBuildFile,
        'shortDescription': value.shortDescription,
        'datePublished': value.datePublished,
        'license': value.license,
        'hasSourceCode': value.hasSourceCode === undefined ? undefined : (value.hasSourceCode as Array<any>).map(SourceCodeToJSON),
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
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
        'hasVersionId': value.hasVersionId,
    };
}


