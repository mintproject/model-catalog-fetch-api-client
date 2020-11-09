// tslint:disable
/**
 * Model Catalog
 * This is the API of the Software Description Ontology at [https://w3id.org/okn/o/sdm](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ConfigurationSetup,
    ConfigurationSetupFromJSON,
    ConfigurationSetupFromJSONTyped,
    ConfigurationSetupToJSON,
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
 * Special type of data transformation where the inputs and parameters have some pre-selected values. For example, they may point to a particular dataset URL to be used in the transformation
 * @export
 * @interface DataTransformationSetup
 */
export interface DataTransformationSetup {
    /**
     * Instructions needed to download a software component. The difference with `hasDownloadURL` is that this property captures the human readable instructions required to download software. For example, sometimes an authentication is needed, users need to fill in a form, etc.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Keywords associated with a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    keywords?: Array<string> | null;
    /**
     * Pointer to the documentation of the model
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Property that points to the main runnable script for the current function
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * Software requirements needed to install a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Download URL where to obtain the source/executable of the software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    type?: Array<string> | null;
    /**
     * Instructions required to install this particular piece of software. Installation instructions usually are available in a human-readable manner.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Property that links a software component to other useful software that canbe used to visualize its outputs
     * @type {Array<Software>}
     * @memberof DataTransformationSetup
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Copyright holder for a software component
     * @type {Array<Organization | Person>}
     * @memberof DataTransformationSetup
     */
    copyrightHolder?: Array<Organization | Person> | null;
    /**
     * Frequently asked questions about a software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasFAQ?: Array<string> | null;
    /**
     * Property that links to the image used as logo for a software component
     * @type {Array<Image>}
     * @memberof DataTransformationSetup
     */
    logo?: Array<Image> | null;
    /**
     * Contact person responsible for a software component
     * @type {Array<Organization | Person>}
     * @memberof DataTransformationSetup
     */
    hasContactPerson?: Array<Organization | Person> | null;
    /**
     * Tag used to annotate a version or a software configuration. This annotation is useful to show which version is the latest, or which version is deprecated. Supported tags are: \"latest\", \"deprecated\"
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    tag?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof DataTransformationSetup
     */
    id?: string;
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    identifier?: Array<string> | null;
    /**
     * Property pointing to a sample execution of a software configuration
     * @type {Array<SampleExecution>}
     * @memberof DataTransformationSetup
     */
    hasSampleExecution?: Array<SampleExecution> | null;
    /**
     * Property designed to link a software configuration to a sample resource resulting from its execution
     * @type {Array<SampleResource>}
     * @memberof DataTransformationSetup
     */
    hasSampleResult?: Array<SampleResource> | null;
    /**
     * The creator of a software component
     * @type {Array<Organization | Person>}
     * @memberof DataTransformationSetup
     */
    author?: Array<Organization | Person> | null;
    /**
     * Property that links a setup to a previous version of that setup. This property is needed (for example) when creating snapshots of setups.
     * @type {Array<ConfigurationSetup>}
     * @memberof DataTransformationSetup
     */
    wasDerivedFromSetup?: Array<ConfigurationSetup> | null;
    /**
     * Constraint or rule associated to a  variable or software configuration. For example: \"This model accepts only monthly data\", or \"all inputs of this model configuration must share the same location\". More structured restrictions, such as Jena rules or SWRL rules may also be captured with this property
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasConstraint?: Array<string> | null;
    /**
     * A file (e.g., Dockerfile) with executable instructions indicating how a Software Image or a Software component is built
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasBuildFile?: Array<string> | null;
    /**
     * A summarized description of the resource
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    shortDescription?: Array<string> | null;
    /**
     * Execution instructions on how to run the image
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * Date when a software component was published
     * @type {Array<Date>}
     * @memberof DataTransformationSetup
     */
    datePublished?: Array<Date> | null;
    /**
     * License of a software component or its source code
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    license?: Array<string> | null;
    /**
     * Property designed to link a software with its software source code (which may reside in a code repository such as GitHub)
     * @type {Array<SourceCode>}
     * @memberof DataTransformationSetup
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Property used to define configurations with some fixed resources and values. The rationale of this property is to allow predefined configurations
     * @type {Array<ConfigurationSetup>}
     * @memberof DataTransformationSetup
     */
    hasSetup?: Array<ConfigurationSetup> | null;
    /**
     * An example explaining a scenario where the software component was used in plain language.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasExample?: Array<string> | null;
    /**
     * Publisher organization or person responsible for a software component
     * @type {Array<Organization | Person>}
     * @memberof DataTransformationSetup
     */
    publisher?: Array<Organization | Person> | null;
    /**
     * Property that expresses what are the outputs of a model
     * @type {Array<DatasetSpecification>}
     * @memberof DataTransformationSetup
     */
    hasOutput?: Array<DatasetSpecification> | null;
    /**
     * Data property to indicate the status of a configuration setups. For example, to indicate that a setup has been executed in a platform, that the setup should notbe shown to users (it\'s an auxiliary setup), etc.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    status?: Array<string> | null;
    /**
     * Digital Object Identifier associated with a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    doi?: Array<string> | null;
    /**
     * Property that links a software project to its funding information
     * @type {Array<FundingInformation>}
     * @memberof DataTransformationSetup
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Location of the aggregation of all the files needed to execute the component. Usually a zip file including the run script and support scripts, including specification files
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * Property to link details, such as mailing lists in case a contact person is not provided
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    supportDetails?: Array<string> | null;
    /**
     * Property designed to link a software component with its corresponding versions
     * @type {Array<SoftwareVersion>}
     * @memberof DataTransformationSetup
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Typical data sources that are used by a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    description?: Array<string> | null;
    /**
     * Main publication to cite for this software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    referencePublication?: Array<string> | null;
    /**
     * Image illustrating a snapshot of the target software
     * @type {Array<Image>}
     * @memberof DataTransformationSetup
     */
    screenshot?: Array<Image> | null;
    /**
     * Property to identify the original source of the information of the annotated resource. It could be a web page, an organization, a person, some experiment notes, etc.
     * @type {Array<object>}
     * @memberof DataTransformationSetup
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Pointer to the issue tracker of a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    issueTracker?: Array<string> | null;
    /**
     * Function to link a function with its corresponding container
     * @type {Array<SoftwareImage>}
     * @memberof DataTransformationSetup
     */
    hasSoftwareImage?: Array<SoftwareImage> | null;
    /**
     * Date when a software component was created
     * @type {Array<Date>}
     * @memberof DataTransformationSetup
     */
    dateCreated?: Array<Date> | null;
    /**
     * Contributor to a software component
     * @type {Array<Person>}
     * @memberof DataTransformationSetup
     */
    contributor?: Array<Person> | null;
    /**
     * Objective or main functionality that can be achieved by running this software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasPurpose?: Array<string> | null;
    /**
     * Instructions that indicate how a software component should be executed. The difference with `hasExecutionCommand` is that the execution instructions aim to be human-readable, and have explanations between the different commands and instructions
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * A typical sample visualization of the softwware outputs
     * @type {Array<Visualization>}
     * @memberof DataTransformationSetup
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Memory requirements of a software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    website?: Array<string> | null;
    /**
     * How to cite this software
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    citation?: Array<string> | null;
    /**
     * Processor requirements of a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    processorRequirements?: Array<string> | null;
    /**
     * Parameter that can be adjusted in a configuration setup
     * @type {Array<Parameter>}
     * @memberof DataTransformationSetup
     */
    adjustableParameter?: Array<Parameter> | null;
    /**
     * Property that describes the usage considerations of a particular software. These notes capture the rationale of for that software configuration, along with an explanation for sample inputs, things to consider when running the model with data, etc.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * Property that links to the location of scripts that may be used from the main runnable script.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * URl to the readme file of a software component
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    label?: Array<string> | null;
    /**
     * Assumptions of a software, e.g. the solver being used for a particular model, the source of the data (e.g., all data must have a given resolution), etc.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasAssumption?: Array<string> | null;
    /**
     * Property that indicates the parameters of a model configuration
     * @type {Array<Parameter>}
     * @memberof DataTransformationSetup
     */
    hasParameter?: Array<Parameter> | null;
    /**
     * Operating systems under which a software component can operate
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    operatingSystems?: Array<string> | null;
    /**
     * Property that links a software component with an executable notebook (e.g., Jupyter notebook) that illustrates how to use it in an executable manner.
     * @type {Array<string>}
     * @memberof DataTransformationSetup
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Property that indicates that a software component (or any of its outputs) can be used to calculate a particular index. The rationale for this property is that indices are usually calculated by applying post-processing steps to the outputs of a software component.
     * @type {Array<NumericalIndex>}
     * @memberof DataTransformationSetup
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Property that links a model configuration to the input types expected by it.
     * @type {Array<DatasetSpecification>}
     * @memberof DataTransformationSetup
     */
    hasInput?: Array<DatasetSpecification> | null;
}

export function DataTransformationSetupFromJSON(json: any): DataTransformationSetup {
    return DataTransformationSetupFromJSONTyped(json, false);
}

export function DataTransformationSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataTransformationSetup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDownloadInstructions': !exists(json, 'hasDownloadInstructions') ? undefined : json['hasDownloadInstructions'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasImplementationScriptLocation': !exists(json, 'hasImplementationScriptLocation') ? undefined : json['hasImplementationScriptLocation'],
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
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'hasOutput': !exists(json, 'hasOutput') ? undefined : (json['hasOutput'] as Array<any>).map(DatasetSpecificationFromJSON),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
        'hasFunding': !exists(json, 'hasFunding') ? undefined : (json['hasFunding'] as Array<any>).map(FundingInformationFromJSON),
        'hasComponentLocation': !exists(json, 'hasComponentLocation') ? undefined : json['hasComponentLocation'],
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : (json['hasVersion'] as Array<any>).map(SoftwareVersionFromJSON),
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : (json['screenshot'] as Array<any>).map(ImageFromJSON),
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'issueTracker': !exists(json, 'issueTracker') ? undefined : json['issueTracker'],
        'hasSoftwareImage': !exists(json, 'hasSoftwareImage') ? undefined : (json['hasSoftwareImage'] as Array<any>).map(SoftwareImageFromJSON),
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : (json['contributor'] as Array<any>).map(PersonFromJSON),
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'hasExecutableInstructions': !exists(json, 'hasExecutableInstructions') ? undefined : json['hasExecutableInstructions'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : (json['hasSampleVisualization'] as Array<any>).map(VisualizationFromJSON),
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
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
        'hasInput': !exists(json, 'hasInput') ? undefined : (json['hasInput'] as Array<any>).map(DatasetSpecificationFromJSON),
    };
}

export function DataTransformationSetupToJSON(value?: DataTransformationSetup): any {
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
        'hasImplementationScriptLocation': value.hasImplementationScriptLocation,
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
        'hasExample': value.hasExample,
        'publisher': value.publisher,
        'hasOutput': value.hasOutput === undefined ? undefined : (value.hasOutput as Array<any>).map(DatasetSpecificationToJSON),
        'status': value.status,
        'doi': value.doi,
        'hasFunding': value.hasFunding === undefined ? undefined : (value.hasFunding as Array<any>).map(FundingInformationToJSON),
        'hasComponentLocation': value.hasComponentLocation,
        'supportDetails': value.supportDetails,
        'hasVersion': value.hasVersion === undefined ? undefined : (value.hasVersion as Array<any>).map(SoftwareVersionToJSON),
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot === undefined ? undefined : (value.screenshot as Array<any>).map(ImageToJSON),
        'hadPrimarySource': value.hadPrimarySource,
        'issueTracker': value.issueTracker,
        'hasSoftwareImage': value.hasSoftwareImage === undefined ? undefined : (value.hasSoftwareImage as Array<any>).map(SoftwareImageToJSON),
        'dateCreated': value.dateCreated,
        'contributor': value.contributor === undefined ? undefined : (value.contributor as Array<any>).map(PersonToJSON),
        'hasPurpose': value.hasPurpose,
        'hasExecutableInstructions': value.hasExecutableInstructions,
        'hasSampleVisualization': value.hasSampleVisualization === undefined ? undefined : (value.hasSampleVisualization as Array<any>).map(VisualizationToJSON),
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
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
        'hasInput': value.hasInput === undefined ? undefined : (value.hasInput as Array<any>).map(DatasetSpecificationToJSON),
    };
}


