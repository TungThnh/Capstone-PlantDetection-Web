import { ClassLabel } from "./class-label.type";
import { Manager } from "./manager.type";

export interface Class {
    id: string,
    name: string,
    code: string,
    description?: string,
    note?: string,
    createAt: string,
    numberOfMember: number,
    status: string,
    manager: Manager,
    classLabels: ClassLabel[]
}