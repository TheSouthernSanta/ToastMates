import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmissionComponent } from './submission/submission.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'submission',
    component:  SubmissionComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
