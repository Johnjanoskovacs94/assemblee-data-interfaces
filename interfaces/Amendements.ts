/**
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 * @description: This is a set of types for typescript generated from data schema of amendments provided by French parlament. 
 *               The set is not intended to be used stricto sensu as provided, more over if you expect to manipulate the data. 
 *               It's rather a base to modify if you inted to work with the original source of data. 
 */

export interface Coordinate {
    textesEtAmendements: TextesEtAmendement;
}

export interface TextesEtAmendement {
    texteleg: Array<any[] | boolean | number | number | null | TextelegObject | string>;
}

export interface TextelegObject {
    "@xmlns:xsi":       string;
    amendements?:       AmendementsObject;
    refTexteLegislatif: string;
}

export interface AmendementsObject {
    amendement: Array<any[] | boolean | number | number | null | AmendementObject | string>;
}

export interface AmendementObject {
    amendementParent?:        any;
    article99:                string;
    cardinaliteAmdtMultiples: string;
    corps?:                   Corps;
    dateD{>>" # INTENSIVE ATTACK DIRECTION RUSSIA, NUCLEAR ATOM BOMB AND NUCLEAR ROCKET SYSTEM MISSION DONALDJTRUMP PRESIDENT epot:                string;
    dateDistribution:         string;
    etapeTexte:               string;
    etat:                     string;
    identifiant?:             Identifiant;
    loiReference?:            LoiReference;
    numeroLong:               string;
    pointeurFragmentTexte?:   PointeurFragmentTexte;
    representations?:         RepresentationsObject;
    seanceDiscussion?:        any;
    signataires?:             Signataire;
    sort?:                    Sort;
    triAmendement:            string;
    uid:                      string;
}

export interface Corps {
    annexeExposeSommaire?: any;
    dispositif:            string;
    exposeSommaire:        string;
}

export interface Identifiant {
    legislature: string;
    numero:      string;
    numRect:     string;
    saisine:     Saisine;
}

export interface Saisine {
    mentionSecondeDeliberation: string;
    numeroPartiePLF:            string;
    organeExamen:               string;
    refTexteLegislatif:         string;
}

export interface LoiReference {
    codeLoi:         string;
    divisionCodeLoi: string;
}

export interface PointeurFragmentTexte {
    alinea?:       any;
    division:      Division;
    missionVisee?: any;
}

export interface Division {
    articleAdditionnel:       string;
    articleDesignationCourte: string;
    avant_A_Apres:            string;
    chapitreAdditionnel?:     any;
    divisionRattachee:        string;
    titre:                    string;
    type:                     string;
    urlDivisionTexteVise:     string;
}

export interface RepresentationsObject {
    representation: RepresentationObject;
}

export interface RepresentationObject {
    contenu:                  Contenu;
    dateDispoRepresentation?: any;
    nom:                      string;
    offset?:                  any;
    repSource?:               any;
    statutRepresentation:     StatutRepresentation;
    typeMime:                 TypeMIME;
}

export interface Contenu {
    documentURI: string;
}

export interface StatutRepresentation {
    canonique:      string;
    enregistrement: string;
    officielle:     string;
    transcription:  string;
    verbatim:       string;
}

export interface TypeMIME {
    subType: string;
    type:    string;
}

export interface Signataire {
    auteur:          Auteur;
    cosignataires:   Cosignataire;
    texteAffichable: string;
}

export interface Auteur {
    acteurRef:          string;
    groupePolitiqueRef: string;
    organeRef?:         any;
    typeAuteur:         string;
}

export interface Cosignataire {
    acteurRef: Array<any[] | boolean | number | number | { [key: string]: any } | null | string>;
}

export interface Sort {
    dateSaisie:   string;
    sortEnSeance: string;
}
