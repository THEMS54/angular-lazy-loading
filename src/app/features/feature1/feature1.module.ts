import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component
  }
];


@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
