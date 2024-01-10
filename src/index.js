import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Helmet>
      <title>KiwiNote</title>
      <meta
        name="description"
        content="A curated resource to help you find trending design, inspiration and latest web technologies."
      />
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M4J36TFNRR"
      ></script>
      <script>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-M4J36TFNRR');
    `}
      </script>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
