import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature1', loadChildren: () => import('./features/feature1/feature1.module').then(m => m.Feature1Module) },
  { path: 'feature2', loadChildren: () => import('./features/feature2/feature2.module').then(m => m.Feature2Module) },
  {
    path: '',
    redirectTo: '/feature1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/feature1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Use the below commands to create feature modules
// ng generate module features/feature1 --route feature1 --module app.module
// ng generate module features/feature2 --route feature2 --module app.module
