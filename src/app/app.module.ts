import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { RootaddComponent } from './rootadd/rootadd.component';
import { RootlistComponent } from './rootlist/rootlist.component';
import { SuffixComponent } from './suffix/suffix.component';
import { SuffixaddComponent } from './suffixadd/suffixadd.component';
import { SuffixlistComponent } from './suffixlist/suffixlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { StopwordComponent } from './stopword/stopword.component';
import { StopwordaddComponent } from './stopwordadd/stopwordadd.component';
import { StopwordlistComponent } from './stopwordlist/stopwordlist.component';

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
    StopwordlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
