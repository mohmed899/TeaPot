import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FeaturesComponent } from './Components/features/features.component';
import { ProductService } from 'src/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductComponent } from './Components/product/product.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

import { ProductDetailsComponent } from './Components/product-details/product-details.component';

import { ItemCategoryComponent } from './Components/item-category/item-category.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ContactUsComponent,
    FeaturesComponent,
    ProductItemComponent,
    ProductComponent,
    WelcomeComponent,

    ProductDetailsComponent,

    ItemCategoryComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTabsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
