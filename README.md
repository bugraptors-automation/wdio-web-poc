
# Project Title

This project is a demo of how to use WebdriverIO to automate end-to-end (e2e) flow for the web.

## Prerequisites
Install Node.js
```bash
Link - https://nodejs.org/en/download/current
```

## Installation

To install the project, follow the steps below:

Steps to install dependencies of the project:
  ```bash
  1. Open a new VSCode terminal
  ```
  ```bash
  2. Execute: npm i
  ```
## Commands to execute tests

To run test files:
```bash
   npx wdio ./wdio.conf.ts
```
## Folder Structure

```bash
wdio-project/
  ├── test
  │   │   └── example.spec.ts
  │   ├── pageobjects/
  │   │   └── login.page.ts
  │   │   └── example.json
  │   │   └── contants.ts  ├── node_modules/
  ├── .gitignore
  ├── tsconfig.json
  ├── wdio.conf.ts
  ├── package-lock.json
  └── package.json
```

The `test` directory contains all the test files and configuration for WebdriverIO. Here's what each directory contains:

- `specs`: Contains the actual tests written in typeScript files.
- `pageobjects`: Contains page object files for organizing and encapsulating page-specific functionality.

## WebdriverIO Configuration

The `wdio.conf.ts` file contains configuration options for WebdriverIO. You can set various options such as the base URL for the application, the viewport size, and much more.

## Writing Tests

Tests are written using WebdriverIO's built-in testing framework. To write a test, create a new file in the `test/specs` directory and use the `describe` and `it` functions to define your test suites and test cases.

```javascript
describe('Example test suite', () => {
  it('Example test case', () => {
    browser.url('https://example.com');
    const title = browser.getTitle();
    expect(title).toBe('Example Domain');
  });
});
```

You can use various WebdriverIO commands such as `browser.url()`, `$(selector).click()`, and many more to interact with the application and perform actions.