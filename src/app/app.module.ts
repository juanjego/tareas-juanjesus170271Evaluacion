import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { TareasComponent } from './component/tareas/tareas.component';
import { TareasregComponent } from './component/tareasreg/tareasreg.component';
import { NotasComponent } from './component/notas/notas.component';
import { NotasregComponent } from './component/notasreg/notasreg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TareasComponent,
    TareasregComponent,
    NotasComponent,
    NotasregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
