import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './component/notas/notas.component';
import { TareasComponent } from './component/tareas/tareas.component';


const routes: Routes = [
  {path: 'notas', component: NotasComponent},
  {path: 'tareas', component: TareasComponent},
  {path :'**', pathMatch: 'full', redirectTo: 'tareas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
