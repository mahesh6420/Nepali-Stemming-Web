import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      {
        path: '', component: RootlistComponent,
        children: [
          { path: 'add', component: RootaddComponent }
        ]
      },
    ]
  },
  {
    path: 'suffix', component: SuffixComponent,
    children: [
      {
        path: '', component: SuffixlistComponent,
        children: [
          { path: 'add', component: SuffixaddComponent }
        ]
      },
    ]
  },
  {
    path: 'stopword', component: StopwordComponent,
    children: [
      {
        path: '', component: StopwordlistComponent,
        children: [
          { path: 'add', component: StopwordaddComponent }
        ]
      },
      { path: '', component: StopwordComponent },
    ]
  }
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
