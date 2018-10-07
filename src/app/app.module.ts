import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmissionComponent } from './submission/submission.component';
import { Routes, RouterModule } from '@angular/router';
import { TotdComponent } from './totd/totd.component';
import { ToastlistComponent } from './toastlist/toastlist.component';

const routes: Routes = [
  {
    path: 'submission',
    component:  SubmissionComponent
  },
  {
    path: 'index',
    component: ToastlistComponent
  },
  {
    path: '',
    component: ToastlistComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent,
    TotdComponent,
    ToastlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
