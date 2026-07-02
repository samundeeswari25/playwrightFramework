# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login\Login.spec.ts >> Login Test
- Location: tests\login\Login.spec.ts:6:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'info')
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures/testFixture';
  2  | import { ENV } from '../../src/utils/EnvReader';
  3  | import { Logger } from '../../src/utils/Logger';
  4  | import { ExcelReader } from '../../src/utils/ExcelReader';
  5  | 
  6  | test('Login Test', async ({ page, pom }) => {
> 7  |     Logger.info('Launching application');
     |            ^ TypeError: Cannot read properties of undefined (reading 'info')
  8  | 
  9  |     await page.goto(ENV.BASE_URL);
  10 | 
  11 |     const loginPage = pom.getLoginPage();
  12 |     await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
  13 | 
  14 | });
  15 | 
  16 | 
  17 | test('Read Excel Data', async () => {
  18 |   const username = await ExcelReader.readData(
  19 |     './test-data/userdata.xlsx',
  20 |     1,
  21 |     2,
  22 |     1
  23 |   );
  24 | 
  25 |   console.log(username);
  26 | });
  27 |        
```