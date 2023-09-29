import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage';

export class EasyCRM extends BasePage {
    logEmail: By = By.xpath('//input[@id="email"][1]');
    logPassword: By = By.xpath('//input[@id="password"][1]');
    loginBtn: By = By.xpath('//input[@value="login"]');
    logoutBtn: By = By.xpath('//a[text()="LOGOUT"]');
    regFirstname: By = By.xpath('//input[@id="first_name"]')
    regLastname: By = By.xpath('//input[@id="last_name"]')
    regEmail: By = By.xpath('(//input[@id="email"])[2]');
    regPassword: By = By.xpath('(//input[@id="password"])[2]');
    confirmPassword: By = By.xpath('//input[@id="confirm_password"]');
    registerBtn: By = By.xpath('//input[@value="register"]');
    contacts: By = By.xpath('//a[@href="/contacts"]');
    createContact: By = By.xpath('//a[@href="/add-contact"]');
    submitBtn: By = By.xpath('//button[text()="Submit"]');
    firstname: By = By.xpath('//input[@id="first_name"]')
    lastname: By = By.xpath('//input[@id="last_name"]')
    jobtitle: By = By.xpath('//input[@id="job_title"]')
    company1: By = By.xpath('(//input[@id="company"])[1]')
    bio1: By = By.xpath('(//textarea[@id="bio"])[1]')
    addcontactBtn: By = By.xpath('//input[@id="submit"]')
    fname: By = By.xpath('//input[@id="fname"]')
    lname: By = By.xpath('//input[@id="lname"]')
    company2: By = By.xpath('(//input[@id="company"])[2]')
    bio2: By = By.xpath('(//textarea[@id="bio"])[2]')
    home: By = By.xpath('(//a[@href="/"])[2]')
    title: By = By.xpath('//input[@id="title"]')
    meetings: By = By.xpath('//a[@href="/meetings"]')
    createMeeting: By = By.xpath('//a[text()="CREATE NEW MEETING"]')
    addmeeting: By = By.xpath('//input[@id="submit"]')
    meetingtitle: By = By.xpath('//input[@id="title"]')
    selectcontact: By = By.id('#contact')
    method: By = By.xpath('//input[@id="method"]')
    place: By = By.xpath('//input[@id="place"]')
    time: By = By.xpath('//input[@id="datetime"]')
    selectTitle: By = By.xpath('//a[@href="/individual-meeting/12"]')

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

};