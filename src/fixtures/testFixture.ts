import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'

type MyFixtures = {
    login:LoginPage
};

// export const test1 = base.extend<MyFixtures>({
//     pom: async ({ page }, use) => {
//         const pom = new PageObjectManager(page);
//         await use(pom);
//     }
// });
export const test = base.extend<MyFixtures>({
    login: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login);
    }
});

export { expect } from '@playwright/test';