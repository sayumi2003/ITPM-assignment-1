IT3040 Assignment 1 – Playwright Automation (TypeScript) This repository contains automated test cases for the SwiftTranslator web application (Singlish → Sinhala) using Playwright with TypeScript. The suite validates various translation scenarios to ensure accuracy and application stability.

Prerequisites Before running the project, ensure you have the following installed:

Node.js (Version 16 or higher recommended)

npm (comes with Node.js)

Git

VS Code (Recommended editor)

Check your installation by running:

Bash node -v npm -v git --version Installation Clone the Repository:

Bash git clone [(https://github.com/sayumi2003/ITPM-assignment-1)](https://github.com/sayumi2003/ITPM-assignment-1) cd ITPM Install Dependencies: Run the following command to install the necessary packages:

Bash npm install Install Playwright Browsers:

Bash npx playwright install Run Tests Run all tests (Headless mode) This will execute all 35 test scenarios (including positive and negative cases) across configured browsers:

Bash npx playwright test Run with UI Mode To interactively view the tests as they run:

Bash npx playwright test --ui Run specific test file Bash npx playwright test tests/assignment1.spec.ts View Test Reports After the tests complete, Playwright generates a detailed HTML report:

Bash npx playwright show-report Project Structure Based on the repository organization:

.github/: Contains GitHub Actions workflows for Continuous Integration (CI).

tests/: The core directory for test scripts.

assignment1.spec.ts: Main automated test script for the Singlish to Sinhala translator.

playwright.config.ts: The central configuration file for browser settings and test parameters.

package.json: Manages project dependencies and scripts.

playwright-report/: Stores generated HTML reports for review.

test-results/: Contains debugging artifacts like screenshots or videos from failed tests.

Notes Language: Developed using TypeScript for better type safety and maintainability.

Test Data: Scenarios cover functional translations from Singlish to Sinhala based on provided test cases.

Automation: Integrated with GitHub Actions for automated testing on every push.

Repository Link The GitHub repository is publicly accessible at: [(https://github.com/sayumi2003/ITPM-assignment-1)](https://github.com/sayumi2003/ITPM-assignment-1)
