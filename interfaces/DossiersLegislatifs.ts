/**
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 * @description: This is a set of types for typescript generated from data schema of law adoption projects provided by French parlament. 
 *               The set is not intended to be used stricto sensu as provided, more over if you expect to manipulate the data. 
 *               It's rather a base to modify if you inted to work with the original source of data. 
 */

export interface Coordinate {
    export: Export;
}

export interface Export {
    "@xmlns:xsi":        string;
    dossiersLegislatifs: DossiersLegislatif;
    textesLegislatifs:   TextesLegislatif;
}

export interface DossiersLegislatif {
    dossier: Array<any[] | boolean | number | number | null | DossierObject | string>;
}

export interface DossierObject {
    dossierParlementaire?: DossierParlementaire;
}

export interface DossierParlementaire {
    "@xsi:type":            string;
    actesLegislatifs:       DossierParlementaireActesLegislatifs;
    fusionDossier:          FusionDossier;
    initiateur:             InitiateurObject;
    legislature:            string;
    procedureParlementaire: ProcedureParlementaire;
    titreDossier:           TitreDossier;
    uid:                    string;
}

export interface DossierParlementaireActesLegislatifs {
    acteLegislatif: PurpleActeLegislatif;
}

export interface PurpleActeLegislatif {
    "@xsi:type":      string;
    actesLegislatifs: PurpleActesLegislatif;
    codeActe:         string;
    dateActe?:        any;
    libelleActe:      TentacledLibelleActe;
    organeRef:        string;
    uid:              string;
}

export interface PurpleActesLegislatif {
    acteLegislatif: FluffyActeLegislatif;
}

export interface FluffyActeLegislatif {
    "@xsi:type":      string;
    actesLegislatifs: FluffyActesLegislatif;
    codeActe:         string;
    dateActe?:        any;
    libelleActe:      FluffyLibelleActe;
    organeRef:        string;
    uid:              string;
}

export interface FluffyActesLegislatif {
    acteLegislatif: TentacledActeLegislatif;
}

export interface TentacledActeLegislatif {
    "@xsi:type":       string;
    actesLegislatifs?: any;
    codeActe:          string;
    dateActe:          string;
    initiateurs:       InitiateursObject;
    libelleActe:       PurpleLibelleActe;
    organeRef:         string;
    uid:               string;
}

export interface InitiateursObject {
    organeRef: string;
}

export interface PurpleLibelleActe {
    libelleCourt: string;
    nomCanonique: string;
}

export interface FluffyLibelleActe {
    libelleCourt: string;
    nomCanonique: string;
}

export interface TentacledLibelleActe {
    nomCanonique: string;
}

export interface FusionDossier {
    cause:               string;
    dossierAbsorbantRef: string;
}

export interface InitiateurObject {
    acteurs: ActeursObject;
    organes: OrganesObject;
}

export interface ActeursObject {
    acteur: ActeurObject;
}

export interface ActeurObject {
    acteurRef: string;
    mandatRef: string;
}

export interface OrganesObject {
    organe: OrganesOrgane;
}

export interface OrganesOrgane {
    organeRef: OrganeRef;
}

export interface OrganeRef {
    uid: string;
}

export interface ProcedureParlementaire {
    code:    string;
    libelle: string;
}

export interface TitreDossier {
    senatChemin?: any;
    titre:        string;
    titreChemin:  string;
}

export interface TextesLegislatif {
    document: Array<any[] | boolean | number | number | null | DocumentObject | string>;
}

export interface DocumentObject {
    "@xsi:type":              string;
    auteurs?:                 AuteursObject;
    classification?:          Classification;
    correction?:              any;
    coSignataires?:           any;
    cycleDeVie?:              CycleDeVie;
    denominationStructurelle: string;
    depotAmendements?:        DepotAmendement;
    divisions?:               any;
    dossierRef:               string;
    imprimerie?:              any;
    indexation?:              any;
    legislature:              string;
    notice?:                  Notice;
    provenance:               string;
    redacteur?:               any;
    titres?:                  Titre;
    uid:                      string;
}

export interface AuteursObject {
    auteur: AuteurObject;
}

export interface AuteurObject {
    organe: AuteurOrgane;
}

export interface AuteurOrgane {
    organeRef: string;
}

export interface Classification {
    famille:         Famille;
    sousType?:       any;
    statutAdoption?: any;
    type:            Type;
}

export interface Famille {
    classe: Classe;
    depot:  Depot;
}

export interface Classe {
    code:    string;
    libelle: string;
}

export interface Depot {
    code:    string;
    libelle: string;
}

export interface Type {
    code:    string;
    libelle: string;
}

export interface CycleDeVie {
    chrono: Chrono;
}

export interface Chrono {
    dateCreation:       string;
    dateDepot:          string;
    datePublication:    string;
    datePublicationWeb: string;
}

export interface DepotAmendement {
    amendementsCommission: AmendementsCommission;
    amendementsSeance:     AmendementsSeance;
}

export interface AmendementsCommission {
    commission: Commission;
}

export interface Commission {
    amendable:        string;
    dateLimiteDepot?: any;
    organeRef:        string;
}

export interface AmendementsSeance {
    amendable:        string;
    dateLimiteDepot?: any;
}

export interface Notice {
    adoptionConforme: string;
    formule:          string;
    numNotice:        string;
}

export interface Titre {
    titrePrincipal:      string;
    titrePrincipalCourt: string;
}
