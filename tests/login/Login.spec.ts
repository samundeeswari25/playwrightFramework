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

test('Excel Login', async ({ page, pom }) => {
    const testData: any = ExcelReader.readExcel(
        'test-data/userdata.xlsx',
        'Sheet1'
    );

    for (const data of testData) {
    console.log(data.USERNAME);
    console.log(data.PASSWORD)
    
}

    console.log(testData);
});

   

       