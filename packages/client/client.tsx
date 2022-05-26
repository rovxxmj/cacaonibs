import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./layouts/App";

const client = new QueryClient();

render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector("#app")
);
