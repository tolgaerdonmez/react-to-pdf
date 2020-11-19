import { render } from "./renderer";
import { createPdf } from "./createPdf";

async function main() {
	// creating the html string using react
	const html = render();

	// printing page to pdf using puppeteer
	await createPdf("./output.pdf", html);
}

main();
