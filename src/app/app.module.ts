import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmissionComponent } from './submission/submission.component';
import { Routes, RouterModule } from '@angular/router';
import { TotdComponent } from './totd/totd.component';
import { ToastlistComponent } from './toastlist/toastlist.component';
import { ToastdetailsComponent } from './toastdetails/toastdetails.component';

const routes: Routes = [
  {
    path: 'submission',
    component:  SubmissionComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent,
    TotdComponent,
    ToastlistComponent,
    ToastdetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
