import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OperacionalComponent } from './operacional/operacional.component';
import { AnaliticoComponent } from './analitico/analitico.component';
import { EstrategicoComponent } from './estrategico/estrategico.component';

const appRoutes: Routes = [
  {path: 'operacional', component: OperacionalComponent},
  {path: 'analitico', component: AnaliticoComponent},
  {path: 'estrategico', component: EstrategicoComponent},
  {path:'menu',component: MenuComponent},
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
    BrowserModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
