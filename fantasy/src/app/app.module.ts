import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CatalogComponent } from './catalog/catalog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    // NoopAnimationsModule // ЭТО УЖАС КАКОЙ ТО, НУЖНО ЭТО БУДЕТ УБРАТЬ (чтобы убрать анимацию появления каталога)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
