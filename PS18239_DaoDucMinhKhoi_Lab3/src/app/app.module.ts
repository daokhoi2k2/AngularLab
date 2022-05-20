import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductlistComponent,
    LienheComponent,
    DangnhapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
