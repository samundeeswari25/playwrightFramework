import { test as base } from '@playwright/test';
import { PageObjectManager } from '../PageObjects/PageObjectManager';

type MyFixtures = {
    pom: PageObjectManager;
};

export const test = base.extend<MyFixtures>({
    pom: async ({ page }, use) => {
        const pom = new PageObjectManager(page);
        await use(pom);
    }
});

export { expect } from '@playwright/test';