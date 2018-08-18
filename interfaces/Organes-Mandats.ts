
/**
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 * @description: This is a set of types for typescript generated from data schema of internal groups, organizations and mandates provided by French parlament. 
 *               The set is not intended to be used stricto sensu as provided, more over if you expect to manipulate the data. 
 *               It's rather a base to modify if you inted to work with the original source of data. 
 */

export interface Coordinate {
    export: Export;
}

export interface Export {
    "@xmlns:xsi": string;
    acteurs:      ActeursObject;
    organes:      ExportOrganes;
}

export interface ActeursObject {
    acteur: Array<any[] | boolean | number | number | null | ActeurObject | string>;
}

export interface ActeurObject {
    etatCivil?: EtatCivil;
    mandats?:   MandatsObject;
    uid?:       Uid;
    uri_hatvp?: any;
}

export interface EtatCivil {
    dateDeces?:    any;
    ident:         Ident;
    infoNaissance: InfoNaissance;
}

export interface Ident {
    alpha:      string;
    civ:        string;
    nom:        string;
    prenom:     string;
    trigramme?: any;
}

export interface InfoNaissance {
    dateNais:  string;
    depNais:   string;
    paysNais:  string;
    villeNais: string;
}

export interface MandatsObject {
    mandat: Array<any[] | boolean | number | number | null | MandatObject | string>;
}

export interface MandatObject {
    "@xsi:type":      string;
    acteurRef:        string;
    dateDebut:        string;
    dateFin?:         any;
    datePublication?: any;
    election?:        Election;
    InfosHorsSIAN?:   InfosHorsSIAN;
    infosQualite?:    InfosQualite;
    legislature?:     any;
    mandature?:       Mandature;
    nominPrincipale:  string;
    organes?:         MandatOrganes;
    preseance:        string;
    suppleants?:      any;
    typeOrgane:       string;
    uid:              string;
}

export interface InfosHorsSIAN {
    HATVP_URI?: any;
}

export interface Election {
    causeMandat?: any;
    lieu:         Lieu;
}

export interface Lieu {
    departement?:   any;
    numCirco?:      any;
    numDepartement: string;
    region?:        any;
    regionType?:    any;
}

export interface InfosQualite {
    codeQualite:   string;
    libQualite:    string;
    libQualiteSex: string;
}

export interface Mandature {
    causeFin?:          any;
    datePriseFonction?: any;
    mandatRemplaceRef?: any;
    placeHemicycle?:    any;
    premiereElection?:  any;
}

export interface MandatOrganes {
    organeRef: string;
}

export interface Uid {
    "#text":     string;
    "@xsi:type": string;
}

export interface ExportOrganes {
    organe: Array<any[] | boolean | number | number | null | OrganeObject | string>;
}

export interface OrganeObject {
    "@xsi:type":        string;
    codeType:           string;
    legislature:        string;
    libelle:            string;
    libelleAbrege:      string;
    libelleAbrev:       string;
    libelleEdition:     string;
    positionPolitique?: any;
    regime:             string;
    secretariat?:       Secretariat;
    uid:                string;
    viMoDe?:            ViMoDe;
}

export interface Secretariat {
    secretaire01?: any;
    secretaire02?: any;
}

export interface ViMoDe {
    dateAgrement?: any;
    dateDebut:     string;
    dateFin:       string;
}
