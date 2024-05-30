import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component
  }
];

@NgModule({
  declarations: [
    Feature2Component,
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
