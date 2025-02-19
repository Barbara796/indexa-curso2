import { Routes } from '@angular/router';
import { ListaContactosComponent } from './paginas/lista-contactos/lista-contactos.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';

export const routes: Routes = [
    { path:'lista-contactos', component: ListaContactosComponent},
    { path: 'formulario', component:FormularioComponent},
    {path:'', redirectTo:'lista-contactos', pathMatch:'full'}
];
