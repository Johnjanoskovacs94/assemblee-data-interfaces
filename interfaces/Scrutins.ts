
/**
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 * @description: This is a set of types for typescript generated from data schema of ballots provided by French parlament. 
 *               The set is not intended to be used stricto sensu as provided, more over if you expect to manipulate the data. 
 *               It's rather a base to modify if you inted to work with the original source of data. 
 */

export interface Coordinate {
    scrutins: ScrutinsObject;
}

export interface ScrutinsObject {
    scrutin: Array<any[] | boolean | number | number | null | ScrutinObject | string>;
}

export interface ScrutinObject {
    "@xmlns:xsi":            string;
    dateScrutin:             string;
    demandeur?:              Demandeur;
    legislature:             string;
    miseAuPoint?:            MiseAuPoint;
    modePublicationDesVotes: string;
    numero:                  string;
    objet?:                  Objet;
    organeRef:               string;
    quantiemeJourSeance:     string;
    seanceRef:               string;
    sessionRef:              string;
    sort?:                   Sort;
    syntheseVote?:           SyntheseVote;
    titre:                   string;
    typeVote?:               TypeVote;
    uid:                     string;
    ventilationVotes?:       VentilationVote;
}

export interface Demandeur {
    referenceLegislative?: any;
    texte:                 string;
}

export interface MiseAuPoint {
    abstentions:           Array<any[] | boolean | number | number | { [key: string]: any } | null | string>;
    contres?:              any;
    dysfonctionnement:     Dysfonctionnement;
    nonVotants:            Array<any[] | boolean | number | number | { [key: string]: any } | null | string>;
    nonVotantsVolontaires: Array<any[] | boolean | number | number | { [key: string]: any } | null | string>;
    pours:                 MiseAuPointPours;
}

export interface Dysfonctionnement {
    abstentions?:           any;
    contre?:                any;
    nonVotants?:            any;
    nonVotantsVolontaires?: any;
    pour?:                  any;
}

export interface MiseAuPointPours {
    votant: PoursVotantObject;
}

export interface PoursVotantObject {
    acteurRef: string;
    mandatRef: string;
}

export interface Objet {
    libelle:               string;
    referenceLegislative?: any;
}

export interface Sort {
    code:    string;
    libelle: string;
}

export interface SyntheseVote {
    annonce:            string;
    decompte:           Decompte;
    nbrSuffragesRequis: string;
    nombreVotants:      string;
    suffragesExprimes:  string;
}

export interface Decompte {
    abstentions:           string;
    contre:                string;
    nonVotants:            string;
    nonVotantsVolontaires: string;
    pour:                  string;
}

export interface TypeVote {
    codeTypeVote:    string;
    libelleTypeVote: string;
    typeMajorite:    string;
}

export interface VentilationVote {
    organe: Organe;
}

export interface Organe {
    groupes:   GroupesObject;
    organeRef: string;
}

export interface GroupesObject {
    groupe: Array<any[] | boolean | number | number | null | GroupeObject | string>;
}

export interface GroupeObject {
    nombreMembresGroupe: string;
    organeRef:           string;
    vote?:               Vote;
}

export interface Vote {
    decompteNominatif:   DecompteNominatif;
    decompteVoix:        DecompteVoix;
    positionMajoritaire: string;
}

export interface DecompteNominatif {
    abstentions?: any;
    contres?:     any;
    nonVotants:   NonVotant;
    pours:        DecompteNominatifPours;
}

export interface NonVotant {
    votant: Array<any[] | boolean | number | number | null | PurpleVotant | string>;
}

export interface PurpleVotant {
    acteurRef:         string;
    causePositionVote: string;
    mandatRef:         string;
}

export interface DecompteNominatifPours {
    votant: Array<any[] | boolean | number | number | null | FluffyVotant | string>;
}

export interface FluffyVotant {
    acteurRef:     string;
    mandatRef:     string;
    parDelegation: string;
}

export interface DecompteVoix {
    abstentions:           string;
    contre:                string;
    nonVotants:            string;
    nonVotantsVolontaires: string;
    pour:                  string;
}
