# Playwright Automation Framework

A scalable, industry-standard Playwright automation framework built with **TypeScript**, following the **Page Object Model (POM)** design pattern. The framework supports environment configuration, Excel data-driven testing, logging, Allure reporting, HTML reporting, and Jenkins CI/CD integration.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Dotenv
- XLSX (Excel Data)
- Allure Report
- HTML Report
- Jenkins CI/CD

---

## 📂 Project Structure

```
playwright-Framework
│
├── allure-report/
├── allure-results/
├── logs/
├── src/
│   ├── base/
│   │   └── BasePage.ts
│   ├── fixtures/
│   │   └── testFixture.ts
│   ├── pages/
│   │   └── LoginPage.ts
│   └── utils/
│       ├── EnvReader.ts
│       ├── ExcelReader.ts
│       ├── Logger.ts
│       └── ...
│
├── test-data/
│   └── userdata.xlsx
│
├── tests/
│   └── login/
│       └── Login.spec.ts
│
├── .env
├── Jenkinsfile
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## ✨ Framework Features

- Page Object Model (POM)
- Reusable Base Page
- Custom Playwright Fixtures
- Environment Variable Support (.env)
- Excel Data-Driven Testing
- Logging Utility
- HTML Report
- Allure Report
- Screenshot on Failure
- Video Recording on Failure
- Trace Collection
- Jenkins CI/CD Integration
- TypeScript Support

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd playwright-Framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/login/Login.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

---

## 🌍 Environment Configuration

Create a `.env` file:

```env
BASE_URL=https://your-application-url
USERNAME=your_username
PASSWORD=your_password
```

Access values using:

```ts
ENV.BASE_URL
ENV.USERNAME
ENV.PASSWORD
```

---

## 📊 Data-Driven Testing

Excel files are stored in:

```
test-data/
```

Example:

```ts
const data = ExcelReader.readData(
    "./test-data/userdata.xlsx",
    "Sheet1"
);
```

---

## 📷 Reports

### HTML Report

Generate:

```bash
npx playwright show-report
```

---

### Allure Report

Generate report:

```bash
allure generate allure-results --clean -o allure-report
```

Open report:

```bash
allure open allure-report
```

---

## 📝 Logging

Framework logs are stored in:

```
logs/
```

Example:

```ts
Logger.info("Launching application");
Logger.error("Login failed");
```

---

## 📸 Failure Artifacts

The framework automatically captures:

- Screenshots
- Videos
- Trace Files

These help with debugging failed test cases.

---

## 🔄 Jenkins Integration

The project includes a Jenkinsfile for CI/CD.

Pipeline flow:

- Checkout Source Code
- Install Dependencies
- Install Browsers
- Execute Tests
- Generate Allure Report
- Publish Reports

---

## 🏗️ Design Pattern

This framework follows:

- Page Object Model (POM)
- Custom Fixtures
- Base Page Pattern
- Utility Classes
- Data-Driven Testing

---

## 📦 Important Commands

Install dependencies:

```bash
npm install
```

Install browsers:

```bash
npx playwright install
```

Run tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/login/Login.spec.ts
```

Run headed:

```bash
npx playwright test --headed
```

Show HTML report:

```bash
npx playwright show-report
```

Generate Allure report:

```bash
allure generate allure-results --clean -o allure-report
```

Open Allure report:

```bash
allure open allure-report
```

---

## 👩‍💻 Author

**Samundeeswari**

QA Automation Engineer

Skills:

- Playwright
- TypeScript
- Selenium
- Java
- Jenkins
- Git & GitHub
- Allure Reporting
- API Testing

---

## ⭐ If you find this project useful

Please consider giving it a ⭐ on GitHub.