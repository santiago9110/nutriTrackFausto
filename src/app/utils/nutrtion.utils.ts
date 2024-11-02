import { User } from "../interfaces/user";

export function calcularTMB(user: User): number {
    const { weight, height, age, gender } = user;
    let tmb: number;

    // Fórmula de Mifflin-St Joer para TMB
    if (gender === "masculino") {
        tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    user.caloriesNeeded = tmb;
    return tmb;
}