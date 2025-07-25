// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://678818a0a6f59ee060c26145bfee8759@o4509724289597440.ingest.de.sentry.io/4509724291301456",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
