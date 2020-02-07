import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import * as Sentry from '@sentry/browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentryErrorHandler } from './handlers/sentry-error.handler';
import { environment } from '../environments/environment';

if (!environment.production && environment.sentryDsn) {
  Sentry.init({
    dsn: environment.sentryDsn,
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
