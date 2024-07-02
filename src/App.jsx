/* eslint-disable no-undef */

import * as sentry from "@sentry/react";

function App() {
   return <div></div>;
}

export default sentry.withProfiler(App);
