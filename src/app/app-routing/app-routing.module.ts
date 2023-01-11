import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { InfoComponent } from '../componentes/info/info.component';
import { LoginComponent } from '../componentes/login/login.component';


const routes: Routes = [
{path:"login", component:LoginComponent},
{path:"inicio", component:AppComponent},
{path: "", redirectTo: "/inicio", pathMatch: 'full'}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
