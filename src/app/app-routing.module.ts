import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  RootComponent,
  RootaddComponent,
  SuffixComponent,
  SuffixaddComponent,
  StopwordComponent,
  StopwordaddComponent,
} from './components/components';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  {
    path: 'root', component: RootComponent,
        children: [
          { path: 'add', component: RootaddComponent }
        ]
  },
  {
    path: 'suffix', component: SuffixComponent,
        children: [
          { path: 'add', component: SuffixaddComponent }
        ]
  },
  {
    path: 'stopword', component: StopwordComponent,
        children: [
          { path: 'add', component: StopwordaddComponent }
        ]
      },
      { path: '', component: StopwordComponent },
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
