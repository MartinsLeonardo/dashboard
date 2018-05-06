import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OperacionalComponent } from './operacional/operacional.component';
import { AnaliticoComponent } from './analitico/analitico.component';
import { EstrategicoComponent } from './estrategico/estrategico.component';

const appRoutes: Routes = [
  {path: 'operacional', component: OperacionalComponent},
  {path: 'analitico', component: AnaliticoComponent},
  {path: 'estrategico', component: EstrategicoComponent},
  {path: '', component: MenuComponent},
  {path: '**', component: MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OperacionalComponent,
    AnaliticoComponent,
    EstrategicoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} 
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
