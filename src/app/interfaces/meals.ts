import { Food } from "./food";

export interface Meals {
    id?: string;
    idUser: string;
    date: Date;
    breakfast?: Food[];
    lunch?: Food[];
    snack?: Food[];
    dinner?: Food[];
}
