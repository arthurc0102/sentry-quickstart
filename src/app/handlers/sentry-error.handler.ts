import { Injectable, ErrorHandler } from '@angular/core';

import * as Sentry from '@sentry/browser';

import { environment } from '../../environments/environment';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any) {
    if (!environment.production && environment.sentryDsn) {
      const eventId = Sentry.captureException(error.originalError || error);
      Sentry.showReportDialog({ eventId });
      return;
    }

    console.group('Log by SentryErrorHandler');
    console.error(error);
    console.groupEnd();
  }
}
