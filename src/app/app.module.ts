import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  RootComponent,
  RootaddComponent,
  SuffixComponent,
  SuffixaddComponent,
  StopwordComponent,
  StopwordaddComponent,
  DataTableComponent
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
  MatSortModule,
  MatInputModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatChipsModule
} from '@angular/material';
import { ApiserviceService } from './services/services';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootComponent,
    RootaddComponent,
    SuffixComponent,
    SuffixaddComponent,
    StopwordComponent,
    StopwordaddComponent,
    NavbarComponent,
    DataTableComponent,
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
    MatSortModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    DataTableModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
