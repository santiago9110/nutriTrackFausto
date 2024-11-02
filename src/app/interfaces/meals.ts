import { Food } from "./food";

export interface Meals {
    date: Date;
    breakfast: Food[];
    lunch: Food[];
    snack: Food[];
    dinner: Food[];
}
