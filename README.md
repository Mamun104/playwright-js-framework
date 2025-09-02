#  Playwright JavaScript Framework

##  Introduction

This repository provides a **robust and scalable Playwright test automation framework** built with **JavaScript**.
It is designed to support **UI test automation** with modern features like Page Object Model (POM), reusable utilities, and advanced reporting.

The framework is **modular, maintainable, and easy to scale** for larger test suites.

<img width="646" height="400" alt="image" src="https://github.com/user-attachments/assets/5f5305d0-b842-483d-8e8b-143df16e8677" />

---

##  Prerequisites

Before setting up the project, make sure you have the following installed:

* **Node.js** (>= 18.x recommended) → [Download Node.js](https://nodejs.org/)
* **npm** (comes with Node.js)
* **Git** → [Download Git](https://git-scm.com/)
* A supported browser (Chromium, Firefox, WebKit – Playwright downloads these automatically)
* (Optional) **VS Code** with [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension

Check versions with:

```bash
node -v
npm -v
git --version
```

---

## How to Run This Project

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/playwright-javascript-framework.git

# Navigate to project directory
cd playwright-javascript-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

Run your first test:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

---

## Technologies & Tools Used

| Tool / Library                 | Purpose                            |
| ------------------------------ | ---------------------------------- |
| JavaScript (Node.js)           | Programming language               |
| Playwright                     | Cross-browser automation framework |
| Mocha / Playwright Test Runner | Test execution                     |
| Allure / HTML Report           | Test reporting                     |
| GitHub Actions (CI)            | Continuous Integration (optional)  |

---

## Project Structure

```bash
playwright-js-framework/
├── data/                  # Test data (e.g., users.json)
├── fixtures/              # Test fixtures
├── node_modules/          # Node dependencies (ignored by git)
├── pages/                 # Page Object Model (LoginPage.js, DashboardPage.js)
├── playwright-report/     # Auto-generated Playwright reports
├── reports/               # Custom reports
├── tests/                 # Test cases (login.test.js etc.)
├── utils/                 # Utility helpers (testDataReader.js)
├── .gitignore             # Ignored files & folders
├── package.json           # Project dependencies & scripts
├── package-lock.json      # Dependency lock file
└── playwright.config.js   # Playwright configuration file
```

---

## Available Scripts

Run all tests:

```bash
npm test
```

Run tests in headed mode (with browser UI):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/login.test.js
```

Generate & open HTML report:

```bash
npx playwright show-report
```

---

## Reports

* **Playwright HTML Report** → Auto-generated after every run inside `playwright-report/`
* **Custom Reports** (optional) → Stored inside `reports/`

Open report:

```bash
npx playwright show-report
```

---

## CI/CD (Optional)

This framework can be integrated with **GitHub Actions** for CI:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npx playwright test --reporter=html


