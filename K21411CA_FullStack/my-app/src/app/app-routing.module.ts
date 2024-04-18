import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { Ptb1Component } from './ptb1/ptb1.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"ptb1",component:Ptb1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents=[LoginComponent]