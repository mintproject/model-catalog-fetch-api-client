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
 * @interface EmpiricalModel
 */
export interface EmpiricalModel {
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasFunding?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    keywords?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasDocumentation?: Array<string> | null;
    /**
     * 
     * @type {Array<Grid>}
     * @memberof EmpiricalModel
     */
    hasGrid?: Array<Grid> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    softwareRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    supportDetails?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasVersion?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasTypicalDataSource?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasDownloadURL?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    description?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    referencePublication?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    screenshot?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    type?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasInstallationInstructions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasModelCategory?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hadPrimarySource?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    dateCreated?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    compatibleVisualizationSoftware?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    contributor?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasFAQ?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    logo?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasContactPerson?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasPurpose?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof EmpiricalModel
     */
    id?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasSampleVisualization?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    memoryRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    identifier?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    website?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    citation?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    author?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    processorRequirements?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasUsageNotes?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    shortDescription?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    label?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasAssumption?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    datePublished?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    license?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    operatingSystems?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasSourceCode?: Array<object> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    hasExplanationDiagram?: Array<object> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmpiricalModel
     */
    hasExample?: Array<string> | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof EmpiricalModel
     */
    publisher?: Array<object> | null;
    /**
     * 
     * @type {Array<Equation>}
     * @memberof EmpiricalModel
     */
    hasEquation?: Array<Equation> | null;
    /**
     * 
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
        
        'hasFunding': !exists(json, 'hasFunding') ? undefined : json['hasFunding'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'hasDocumentation': !exists(json, 'hasDocumentation') ? undefined : json['hasDocumentation'],
        'hasGrid': !exists(json, 'hasGrid') ? undefined : (json['hasGrid'] as Array<any>).map(GridFromJSON),
        'softwareRequirements': !exists(json, 'softwareRequirements') ? undefined : json['softwareRequirements'],
        'supportDetails': !exists(json, 'supportDetails') ? undefined : json['supportDetails'],
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
        'compatibleVisualizationSoftware': !exists(json, 'compatibleVisualizationSoftware') ? undefined : json['compatibleVisualizationSoftware'],
        'contributor': !exists(json, 'contributor') ? undefined : json['contributor'],
        'hasFAQ': !exists(json, 'hasFAQ') ? undefined : json['hasFAQ'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'hasContactPerson': !exists(json, 'hasContactPerson') ? undefined : json['hasContactPerson'],
        'hasPurpose': !exists(json, 'hasPurpose') ? undefined : json['hasPurpose'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hasSampleVisualization': !exists(json, 'hasSampleVisualization') ? undefined : json['hasSampleVisualization'],
        'memoryRequirements': !exists(json, 'memoryRequirements') ? undefined : json['memoryRequirements'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
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
        
        'hasFunding': value.hasFunding,
        'keywords': value.keywords,
        'hasDocumentation': value.hasDocumentation,
        'hasGrid': value.hasGrid === undefined ? undefined : (value.hasGrid as Array<any>).map(GridToJSON),
        'softwareRequirements': value.softwareRequirements,
        'supportDetails': value.supportDetails,
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
        'compatibleVisualizationSoftware': value.compatibleVisualizationSoftware,
        'contributor': value.contributor,
        'hasFAQ': value.hasFAQ,
        'logo': value.logo,
        'hasContactPerson': value.hasContactPerson,
        'hasPurpose': value.hasPurpose,
        'id': value.id,
        'hasSampleVisualization': value.hasSampleVisualization,
        'memoryRequirements': value.memoryRequirements,
        'identifier': value.identifier,
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
        'publisher': value.publisher,
        'hasEquation': value.hasEquation === undefined ? undefined : (value.hasEquation as Array<any>).map(EquationToJSON),
        'usefulForCalculatingIndex': value.usefulForCalculatingIndex === undefined ? undefined : (value.usefulForCalculatingIndex as Array<any>).map(NumericalIndexToJSON),
    };
}


