#!/usr/bin/env node

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generateResumePDF() {
	console.log("🚀 Starting resume PDF generation...");

	try {
		// Check if data file exists
		const dataPath = path.join(__dirname, "data", "site-data.json");
		if (!fs.existsSync(dataPath)) {
			console.error("❌ Data file not found:", dataPath);
			process.exit(1);
		}

		// Launch browser
		const browser = await puppeteer.launch({
			headless: "new",
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
		});

		const page = await browser.newPage();

		// Set viewport for consistent rendering
		await page.setViewport({
			width: 1200,
			height: 1600,
			deviceScaleFactor: 2,
		});

		// Get the file path
		const resumePath = path.join(__dirname, "resume.html");
		const resumeUrl = `file://${resumePath}`;

		console.log(`📄 Loading resume from: ${resumeUrl}`);

		// Navigate to resume page
		await page.goto(resumeUrl, {
			waitUntil: "networkidle0",
			timeout: 30000,
		});

		// Wait for data to load and content to populate
		await page.waitForFunction(() => document.querySelector("#about-summary")?.innerHTML?.trim() !== "", {
			timeout: 10000,
		});

		console.log("✅ Resume content loaded successfully");

		// Optional: Take a screenshot for preview
		await page.screenshot({
			path: "resume-preview.png",
			fullPage: true,
		});
		console.log("📸 Screenshot saved as resume-preview.png");

		// Generate PDF
		const pdfOptions = {
			path: "Devendra_Pratap_Singh_Resume.pdf",
			format: "A4",
			printBackground: true,
			margin: {
				top: "0.5in",
				right: "0.5in",
				bottom: "0.5in",
				left: "0.5in",
			},
			displayHeaderFooter: false,
			preferCSSPageSize: true,
		};

		await page.pdf(pdfOptions);

		console.log("✅ PDF generated successfully: Devendra_Pratap_Singh_Resume.pdf");

		await browser.close();

		// Check file size
		const stats = fs.statSync("Devendra_Pratap_Singh_Resume.pdf");
		const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
		console.log(`📊 PDF file size: ${fileSizeInMB} MB`);
	} catch (error) {
		console.error("❌ Error generating PDF:", error);
		process.exit(1);
	}
}

// Run if called directly
if (require.main === module) {
	generateResumePDF();
}

module.exports = { generateResumePDF };
