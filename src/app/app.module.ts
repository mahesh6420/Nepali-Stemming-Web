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
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
