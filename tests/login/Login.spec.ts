import { test, expect } from '../../src/fixtures/testFixture';
import { ENV } from '../../src/utils/EnvReader';
import { Logger } from '../../src/utils/Logger';
import { ExcelReader } from '../../src/utils/ExcelReader';

test('Login Test', async ({ page, pom }) => {
    Logger.info('Launching application');

    await page.goto(ENV.BASE_URL);

    const loginPage = pom.getLoginPage();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

});

test('Read Excel Data', async () => {
    const data = ExcelReader.readData(
        './test-data/userdata.xlsx',
        'Sheet1'
    );

    console.log(data);
});



       