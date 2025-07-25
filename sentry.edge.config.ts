// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://678818a0a6f59ee060c26145bfee8759@o4509724289597440.ingest.de.sentry.io/4509724291301456",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
