import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterModule, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import ApiService from './_services/api.service';

const routes: Route[] =  [
//  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'details/:idFact',
    component: DettaglioComponent,
    /*resolve: {
                'fact': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                            inject(ApiService).getFact(route.paramMap.get('idFact')!)
      }*/
  },
  {path: '', pathMatch: 'full', redirectTo: '/home'},
//  {path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
