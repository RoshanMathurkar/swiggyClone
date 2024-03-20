import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => {
  return <Header />;
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
