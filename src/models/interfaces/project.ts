
import { IUser } from "./user";
import { IUserRef } from "./userRef";
export interface IProject {
    id: string;
    title: string;
    status: string;
    dataUrl: string;
    localDataUrl: string;
    backupDataUrl: string;
    submittedDate: Date;
    createdDate: Date;
    lab: string;
    accNum: string;
    ownerRef: IUserRef;
    owner: IUser;
    piRef: IUserRef;
    pi: IUser;
    assignedToRef: IUserRef;
    assignedTo: IUser;
    imageUrl: string;
    description: string;
    memberRefs: IUserRef
    keyword: string;
    controls: string;
    microscopyType: string;
    organisms: string;
    pathogens: string;
    safetyPrecautions: string;
    formDelivered: string;
    maxNumberOfSamples: string;
    typeOfOutputDesired: string;
    selectAgent: string;
    cdcAuthorization: string;
    hprdNumber: string;
    deactivationProcedure: string;
    lsID: string;
}