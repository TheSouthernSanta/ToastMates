import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmissionComponent } from './submission/submission.component';
import { Routes, RouterModule } from '@angular/router';
import { TotdComponent } from './totd/totd.component';
import { ToastlistComponent } from './toastlist/toastlist.component';
import { ToastdetailsComponent } from './toastdetails/toastdetails.component';
import { RecenttoastComponent } from './recenttoast/recenttoast.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'details',
    component: ToastdetailsComponent
  },
  {
    path: 'submission',
    component:  SubmissionComponent
  },
  {
    path: 'index',
    component: ToastlistComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
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
    ToastlistComponent,
    ToastdetailsComponent,
    RecenttoastComponent,
    ReviewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
