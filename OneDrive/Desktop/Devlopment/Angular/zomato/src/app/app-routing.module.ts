import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { ResturantItemsComponent } from './pages/resturant-items/resturant-items.component';

const routes: Routes = [
  {
    path :"",
    component:CategoriesComponent,
    title:"Home"
  },
  {
    path :"login",
    component:LoginComponent,
    title:"Login"
  },
  {
    path:"categories",
    component:CategoriesComponent,
    title:"Categories"
  },
  {
    path:"create-order",
    component:CreateOrderComponent,
    title:"Create-Order"
  },
  {
    path:"restuarnt-item",
    component:ResturantItemsComponent,
    title:"Restuarnt Items"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
