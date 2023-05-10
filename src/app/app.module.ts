import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductPageComponent } from './product-page/product-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartpopupComponent } from './cartpopup/cartpopup.component';
import { ShortproductComponent } from './shortproduct/shortproduct.component';
import { OrderspopupComponent } from './orderspopup/orderspopup.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { SearchpopupComponent } from './searchpopup/searchpopup.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    CartpopupComponent,
    ShortproductComponent,
    OrderspopupComponent,
    OrderInfoComponent,
    SearchpopupComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
