import { Meals } from "./meals";

export interface User {
    id?: string;
    name: string;
    surname: string;
    mail: string;
    password: string;
    height: number;
    weight: number;
    gender:string;
    age:number;
    caloriesNeeded?: number;
    meals?: Meals;
}
