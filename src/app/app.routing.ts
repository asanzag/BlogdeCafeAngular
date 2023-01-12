// Importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from "./components/home/home.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ErrorComponent } from "./components/error/error.component";
import { EntradaComponent } from "./components/entrada/entrada.component";

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'entrada', component: EntradaComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);