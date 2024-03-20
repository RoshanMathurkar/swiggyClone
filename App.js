import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", {}, "Heading from react.");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(header);
