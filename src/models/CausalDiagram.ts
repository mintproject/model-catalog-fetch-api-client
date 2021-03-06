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
    VariablePresentation,
    Process,
} from './';

/**
 * Diagram information with the processes and variables associated with a model configuration
 * @export
 * @interface CausalDiagram
 */
export interface CausalDiagram {
    /**
     * Property that links a causal diagram with its constituent nodes
     * @type {Array<VariablePresentation | Process>}
     * @memberof CausalDiagram
     */
    hasDiagramPart?: Array<VariablePresentation | Process> | null;
    /**
     * small description
     * @type {Array<string>}
     * @memberof CausalDiagram
     */
    description?: Array<string> | null;
    /**
     * identifier
     * @type {string}
     * @memberof CausalDiagram
     */
    id?: string;
    /**
     * short description of the resource
     * @type {Array<string>}
     * @memberof CausalDiagram
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     * @type {Array<string>}
     * @memberof CausalDiagram
     */
    type?: Array<string> | null;
}

export function CausalDiagramFromJSON(json: any): CausalDiagram {
    return CausalDiagramFromJSONTyped(json, false);
}

export function CausalDiagramFromJSONTyped(json: any, ignoreDiscriminator: boolean): CausalDiagram {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDiagramPart': !exists(json, 'hasDiagramPart') ? undefined : json['hasDiagramPart'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CausalDiagramToJSON(value?: CausalDiagram): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDiagramPart': value.hasDiagramPart,
        'description': value.description,
        'id': value.id,
        'label': value.label,
        'type': value.type,
    };
}


