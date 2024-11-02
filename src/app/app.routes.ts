import { Routes } from '@angular/router';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegistrosComponent } from './pages/registros/registros.component';

export const routes: Routes = [
    { path: 'alimentos', component: AlimentosComponent },
    { path: 'inicio', component: LandingComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'registros', component: RegistrosComponent }
];
