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
 * Description not available
 * @export
 * @interface ConfigurationSetup
 */
export interface ConfigurationSetup {
    /**
     * Instructions needed to download a software component. The difference with `hasDownloadURL` is that this property captures the human readable instructions required to download software. For example, sometimes an authentication is needed, users need to fill in a form, etc.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasDownloadInstructions?: Array<string> | null;
    /**
     * Keywords associated with a software component
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    keywords?: Array<string> | null;
    /**
     * Pointer to the documentation of the model
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasDocumentation?: Array<string> | null;
    /**
     * Property that points to the main runnable script for the current function
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasImplementationScriptLocation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    softwareRequirements?: Array<string> | null;
    /**
     * Download URL where to obtain the source/executable of the software
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    type?: Array<string> | null;
    /**
     * Instructions required to install this particular piece of software. Installation instructions usually are available in a human-readable manner.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * Property that links a software component to other useful software that canbe used to visualize its outputs
     * @type {Array<Software>}
     * @memberof ConfigurationSetup
     */
    compatibleVisualizationSoftware?: Array<Software> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof ConfigurationSetup
     */
    copyrightHolder?: Array<object> | null;
    /**
     * Frequently asked questions about a software
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasFAQ?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof ConfigurationSetup
     */
    logo?: Array<Image> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof ConfigurationSetup
     */
    hasContactPerson?: Array<object> | null;
    /**
     * Tag used to annotate a version or a software configuration. This annotation is useful to show which version is the latest, or which version is deprecated. Supported tags are: \"latest\", \"deprecated\"
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    tag?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof ConfigurationSetup
     */
    id?: string;
    /**
     * Identifier of the resource being described
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    identifier?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SampleExecution>}
     * @memberof ConfigurationSetup
     */
    hasSampleExecution?: Array<SampleExecution> | null;
    /**
     * Description not available
     * @type {Array<SampleResource>}
     * @memberof ConfigurationSetup
     */
    hasSampleResult?: Array<SampleResource> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof ConfigurationSetup
     */
    author?: Array<object> | null;
    /**
     * Constraint or rule associated to a  variable or software configuration. For example: \"This model accepts only monthly data\", or \"all inputs of this model configuration must share the same location\". More structured restrictions, such as Jena rules or SWRL rules may also be captured with this property
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasConstraint?: Array<string> | null;
    /**
     * A file (e.g., Dockerfile) with executable instructions indicating how a Software Image or a Software component is built
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasBuildFile?: Array<string> | null;
    /**
     * A summarized description of the resource
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    shortDescription?: Array<string> | null;
    /**
     * Execution instructions on how to run the image
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasExecutionCommand?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Date>}
     * @memberof ConfigurationSetup
     */
    datePublished?: Array<Date> | null;
    /**
     * License of a software component or its source code
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    license?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SourceCode>}
     * @memberof ConfigurationSetup
     */
    hasSourceCode?: Array<SourceCode> | null;
    /**
     * Property used to define configurations with some fixed resources and values. The rationale of this property is to allow predefined configurations
     * @type {Array<ConfigurationSetup>}
     * @memberof ConfigurationSetup
     */
    hasSetup?: Array<ConfigurationSetup> | null;
    /**
     * An example explaining a scenario where the software component was used in plain language.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasExample?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<object>}
     * @memberof ConfigurationSetup
     */
    publisher?: Array<object> | null;
    /**
     * Property that expresses what are the outputs of a model
     * @type {Array<DatasetSpecification>}
     * @memberof ConfigurationSetup
     */
    hasOutput?: Array<DatasetSpecification> | null;
    /**
     * Digital Object Identifier associated with a software component
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    doi?: Array<string> | null;
    /**
     * Property that links a software project to its funding information
     * @type {Array<FundingInformation>}
     * @memberof ConfigurationSetup
     */
    hasFunding?: Array<FundingInformation> | null;
    /**
     * Location of the aggregation of all the files needed to execute the component. Usually a zip file including the run script and support scripts, including specification files
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasComponentLocation?: Array<string> | null;
    /**
     * Property to link details, such as mailing lists in case a contact person is not provided
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    supportDetails?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<SoftwareVersion>}
     * @memberof ConfigurationSetup
     */
    hasVersion?: Array<SoftwareVersion> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    description?: Array<string> | null;
    /**
     * Main publication to cite for this software component
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    referencePublication?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<Image>}
     * @memberof ConfigurationSetup
     */
    screenshot?: Array<Image> | null;
    /**
     * had primary source
     * @type {Array<object>}
     * @memberof ConfigurationSetup
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * Pointer to the issue tracker of a software component
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    issueTracker?: Array<string> | null;
    /**
     * Function to link a function with its corresponding container
     * @type {Array<SoftwareImage>}
     * @memberof ConfigurationSetup
     */
    hasSoftwareImage?: Array<SoftwareImage> | null;
    /**
     * Description not available
     * @type {Array<Date>}
     * @memberof ConfigurationSetup
     */
    dateCreated?: Array<Date> | null;
    /**
     * Description not available
     * @type {Array<Person>}
     * @memberof ConfigurationSetup
     */
    contributor?: Array<Person> | null;
    /**
     * Objective or main functionality that can be achieved by running this software
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasPurpose?: Array<string> | null;
    /**
     * Instructions that indicate how a software component should be executed. The difference with `hasExecutionCommand` is that the execution instructions aim to be human-readable, and have explanations between the different commands and instructions
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasExecutableInstructions?: Array<string> | null;
    /**
     * A typical sample visualization of the softwware outputs
     * @type {Array<Visualization>}
     * @memberof ConfigurationSetup
     */
    hasSampleVisualization?: Array<Visualization> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    memoryRequirements?: Array<string> | null;
    /**
     * Website of the software
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    website?: Array<string> | null;
    /**
     * How to cite this software
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    citation?: Array<string> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    processorRequirements?: Array<string> | null;
    /**
     * Parameter that can be adjusted in a configuration setup
     * @type {Array<Parameter>}
     * @memberof ConfigurationSetup
     */
    adjustableParameter?: Array<Parameter> | null;
    /**
     * Property that describes the usage considerations of a particular software. These notes capture the rationale of for that software configuration, along with an explanation for sample inputs, things to consider when running the model with data, etc.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * Property that links to the location of scripts that may be used from the main runnable script.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasSupportScriptLocation?: Array<string> | null;
    /**
     * URl to the readme file of a software component
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    readme?: Array<string> | null;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    label?: Array<string> | null;
    /**
     * Assumptions of a software, e.g. the solver being used for a particular model, the source of the data (e.g., all data must have a given resolution), etc.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasAssumption?: Array<string> | null;
    /**
     * Property that indicates the parameters of a model configuration
     * @type {Array<Parameter>}
     * @memberof ConfigurationSetup
     */
    hasParameter?: Array<Parameter> | null;
    /**
     * Description not available
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    operatingSystems?: Array<string> | null;
    /**
     * Property that links a software component with an executable notebook (e.g., Jupyter notebook) that illustrates how to use it in an executable manner.
     * @type {Array<string>}
     * @memberof ConfigurationSetup
     */
    hasExecutableNotebook?: Array<string> | null;
    /**
     * Property that indicates that a software component (or any of its outputs) can be used to calculate a particular index. The rationale for this property is that indices are usually calculated by applying post-processing steps to the outputs of a software component.
     * @type {Array<NumericalIndex>}
     * @memberof ConfigurationSetup
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
    /**
     * Property that links a model configuration to the input types expected by it.
     * @type {Array<DatasetSpecification>}
     * @memberof ConfigurationSetup
     */
    hasInput?: Array<DatasetSpecification> | null;
}

export function ConfigurationSetupFromJSON(json: any): ConfigurationSetup {
    return ConfigurationSetupFromJSONTyped(json, false);
}

export function ConfigurationSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationSetup {
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

export function ConfigurationSetupToJSON(value?: ConfigurationSetup): any {
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


