import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SuffixComponent } from './suffix/suffix.component';
import { StopwordComponent } from './stopword/stopword.component';
import { RootlistComponent } from './rootlist/rootlist.component';
import { RootaddComponent } from './rootadd/rootadd.component';
import { SuffixlistComponent } from './suffixlist/suffixlist.component';
import { StopwordlistComponent } from './stopwordlist/stopwordlist.component';
import { SuffixaddComponent } from './suffixadd/suffixadd.component';
import { StopwordaddComponent } from './stopwordadd/stopwordadd.component';

const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      {
        path: 'root', component: RootlistComponent,
        children: [
          { path: 'add', component: RootaddComponent }
        ]
      },
    ]
  },
  {
    path: '', component: SuffixComponent,
    children: [
      {
        path: 'suffix', component: SuffixlistComponent,
        children: [
          { path: 'add', component: SuffixaddComponent }
        ]
      },
    ]
  },
  {
    path: '', component: StopwordComponent,
    children: [
      {
        path: 'stopword', component: StopwordlistComponent,
        children: [
          { path: 'add', component: StopwordaddComponent }
        ]
      },
      {path: '', component: StopwordComponent},
      // { path: '**', component: NotFoundComponent}
    ]
  }
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
