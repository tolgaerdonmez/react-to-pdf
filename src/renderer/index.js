import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

export function render() {
	// rendering react component to html string
	return renderToStaticMarkup(<App />);
}
