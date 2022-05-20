import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDsComponent } from './components/product-ds/product-ds.component';
import { ProductThemComponent } from './components/product-them/product-them.component';
import { ProductSuaComponent } from './components/product-sua/product-sua.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent,
    LienheComponent,
    DangnhapComponent,
    HomeComponent,
    ProductDsComponent,
    ProductThemComponent,
    ProductSuaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
