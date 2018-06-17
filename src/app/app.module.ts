import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  RootComponent,
  RootaddComponent,
  RootlistComponent,
  SuffixComponent,
  SuffixaddComponent,
  SuffixlistComponent,
  StopwordComponent,
  StopwordaddComponent,
  StopwordlistComponent
} from './components/components';
import { NavbarComponent } from './shared/shared';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { ApiserviceService } from './services/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootComponent,
    RootaddComponent,
    RootlistComponent,
    SuffixComponent,
    SuffixaddComponent,
    SuffixlistComponent,
    StopwordComponent,
    StopwordaddComponent,
    StopwordlistComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
