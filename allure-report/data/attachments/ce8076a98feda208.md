# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login\Login.spec.ts >> Login Test
- Location: tests\login\Login.spec.ts:6:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#username')

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |     protected page: Page;
  5  | 
  6  |     constructor(page: Page) {
  7  |         this.page = page;
  8  |     }
  9  | 
  10 |     async clickElement(locator: Locator) {
  11 |         await locator.waitFor({ state: 'visible' });
  12 |         await locator.click();
  13 |     }
  14 | 
  15 |     async enterText(locator: Locator, value: string) {
> 16 |         await locator.fill(value);
     |                       ^ Error: locator.fill: Target page, context or browser has been closed
  17 |     }
  18 | 
  19 |     async getText(locator: Locator): Promise<string> {
  20 |         return await locator.textContent() || '';
  21 |     }
  22 | 
  23 |     async waitForPageLoad() {
  24 |         await this.page.waitForLoadState('networkidle');
  25 |     }
  26 | 
  27 |     async takeScreenshot(name: string) {
  28 |         await this.page.screenshot({
  29 |             path: `screenshots/${name}.png`
  30 |         });
  31 |     }
  32 | 
  33 |     async verifyTitle(expectedTitle: string) {
  34 |         await expect(this.page).toHaveTitle(expectedTitle);
  35 |     }
  36 | }
```