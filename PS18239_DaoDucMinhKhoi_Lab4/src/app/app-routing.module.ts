import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { ProductDsComponent } from './components/product-ds/product-ds.component';
import { ProductThemComponent } from './components/product-them/product-them.component';
import { ProductSuaComponent } from './components/product-sua/product-sua.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sanpham', component: ProductlistComponent },
  { path: 'sanpham/:id', component: ProductdetailComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'admin/sp', component: ProductDsComponent },
  { path: 'admin/themSP', component: ProductThemComponent },
  { path: 'admin/suaSP/:id', component: ProductSuaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
