// tslint:disable
/**
 * Model Catalog
 * This is the API of the  Software Description Ontology at [https://mintproject.github.io/Mint-ModelCatalog-Ontology/release/1.3.0/index-en.html](https://w3id.org/okn/o/sdm)
 *
 * The version of the OpenAPI document: v1.3.0
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
    Grid,
    GridFromJSON,
    GridFromJSONTyped,
    GridToJSON,
    NumericalIndex,
    NumericalIndexFromJSON,
    NumericalIndexFromJSONTyped,
    NumericalIndexToJSON,
} from './';

/**
 * 
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasFunding?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<Grid>}
     * @memberof Model
     */
    hasGrid?: Array<Grid> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    supportDetails?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasVersion?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    screenshot?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasModelCategory?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    contributor?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    compatibleVisualizationSoftware?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    logo?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    id?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasSampleVisualization?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasSourceCode?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    hasExplanationDiagram?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Model
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<Equation>}
     * @memberof Model
     */
    hasEquation?: Array<Equation> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Model
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<NumericalIndex>}
     * @memberof Model
     */
    usefulForCalculatingIndex?: Array<NumericalIndex> | null;
}

export function ModelFromJSON(json: any): Model {
    return ModelFromJSONTyped(json, false);
}

export function ModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : json['hasFunding'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'hasVersion': !exists(json, 'hasVersion') ? undefined : json['hasVersion'],
        'hasTypicalDataSource': !exists(json, 'hasTypicalDataSource') ? undefined : json['hasTypicalDataSource'],
        'hasDownloadURL': !exists(json, 'hasDownloadURL') ? undefined : json['hasDownloadURL'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referencePublication': !exists(json, 'referencePublication') ? undefined : json['referencePublication'],
        'screenshot': !exists(json, 'screenshot') ? undefined : json['screenshot'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'hasInstallationInstructions': !exists(json, 'hasInstallationInstructions') ? undefined : json['hasInstallationInstructions'],
        'hasModelCategory': !exists(json, 'hasModelCategory') ? undefined : json['hasModelCategory'],
        'hadPrimarySource': !exists(json, 'hadPrimarySource') ? undefined : json['hadPrimarySource'],
        'dateCreated': !exists(json, 'dateCreated') ? undefined : json['dateCreated'],
        'contributor': !exists(json, 'contributor') ? undefined : json['contributor'],
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : json['compatibleVisualizationSoftware'],
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : json['hasSampleVisualization'],
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
        'license': !exists(json, 'license') ? undefined : json['license'],
        'operatingSystems': !exists(json, 'operatingSystems') ? undefined : json['operatingSystems'],
        'hasSourceCode': !exists(json, 'hasSourceCode') ? undefined : json['hasSourceCode'],
        'hasExplanationDiagram': !exists(json, 'hasExplanationDiagram') ? undefined : json['hasExplanationDiagram'],
        'hasExample': !exists(json, 'hasExample') ? undefined : json['hasExample'],
        'hasEquation': !exists(json, 'hasEquation') ? undefined : (json['hasEquation'] as Array<any>).map(EquationFromJSON),
        'publisher': !exists(json, 'publisher') ? undefined : json['publisher'],
        'usefulForCalculatingIndex': !exists(json, 'usefulForCalculatingIndex') ? undefined : (json['usefulForCalculatingIndex'] as Array<any>).map(NumericalIndexFromJSON),
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
        
        'hasFunding': value.hasFunding,
        'hasDocumentation': value.hasDocumentation,
        'keywords': value.keywords,
        'hasGrid': value.hasGrid === undefined ? undefined : (value.hasGrid as Array<any>).map(GridToJSON),
        'supportDetails': value.supportDetails,
        'softwareRequirements': value.softwareRequirements,
        'hasVersion': value.hasVersion,
        'hasTypicalDataSource': value.hasTypicalDataSource,
        'hasDownloadURL': value.hasDownloadURL,
        'description': value.description,
        'referencePublication': value.referencePublication,
        'screenshot': value.screenshot,
        'type': value.type,
        'hasInstallationInstructions': value.hasInstallationInstructions,
        'hasModelCategory': value.hasModelCategory,
        'hadPrimarySource': value.hadPrimarySource,
        'dateCreated': value.dateCreated,
        'contributor': value.contributor,
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware,
        'hasFAQ': value.hasFAQ,
        'logo': value.logo,
        'hasContactPerson': value.hasContactPerson,
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization,
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
        'license': value.license,
        'operatingSystems': value.operatingSystems,
        'hasSourceCode': value.hasSourceCode,
        'hasExplanationDiagram': value.hasExplanationDiagram,
        'hasExample': value.hasExample,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'publisher': value.publisher,
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
    };
}


