import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CsgoskinsComponent } from './csgoskins/csgoskins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/csgoskins', pathMatch: 'full' },
  //{ path: 'csgoskins', component: CsgoskinsComponent },
  {
    path: 'detalle/:name', component: DetalleComponent
  },
  {
    path: '**', component: DashboardComponent
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

