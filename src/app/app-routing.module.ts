import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ListComponent } from './components/list/list.component';
import { VerComponent } from './components/ver/ver.component';


const routes: Routes = [
  {path:'list', component: ListComponent},
  {path:'', component: ListComponent},
  {path:'add', component: AddEditComponent},
  {path:'edit/:id', component: AddEditComponent},
  {path:'ver/:id', component: VerComponent},
  {path:'**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
