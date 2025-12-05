# QA_auto_tests
QA automation test: login verification on smart meter web UI using Playwright.

> ⚠️ **Important note**: This test is designed to run only in a local environment where the device is connected via USB to the host machine. The IP address `http://192.168.225.1` is not publicly accessible and will not work outside this setup.

## How to run locally

1. Connect the smart meter device via USB to your computer.
2. Install Node.js.
3. Run `npm install`.
4. Run `npx playwright test login.spec.ts --headed`.

Built by Lida, QA Engineer.
