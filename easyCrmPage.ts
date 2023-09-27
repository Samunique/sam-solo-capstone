import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage';

export class EasyCRM extends BasePage {
    logEmail: By = By.xpath('//input[@name="email"][0]');
    logPassword: By = By.xpath('//input[@name="password"][0]');
    loginBtn: By = By.xpath('//input[@value="login"]');
    logoutBtn: By = By.xpath('//a[text()="LOGOUT"]');
    regFirstname: By = By.id("#first_name");
    regLastname: By = By.id("#last_name");
    regEmail: By = By.xpath('//input[@name="email"][1]');
    regPassword: By = By.xpath('//input[@name="password"][1]');
    confirmPassword: By = By.id("#confirm_password");
    registerBtn: By = By.xpath('//input[@value="register"]');
    eMessageExit: By = By.id("#alert-btn");

    constructor() {
        super({url: "http://www.easy-crm.us"});
    };

    async repeatClick(number, thingToClick) {
        for(let i = 0; i < number; i++) {
            await this.click(thingToClick);
        };
    };

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

    async type() {

    }
};