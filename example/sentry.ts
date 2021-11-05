import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://efa44b26de494d6ba87a04786b997e3c@sentry.zarinpal.com/22",

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,

});
