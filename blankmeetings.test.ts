import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Meeting inputs and view', async() => {
    await ez.navigate();
    await ez.driver.manage().window().maximize();
    await ez.driver.sleep(2000);
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.driver.sleep(2000)
    await ez.click(ez.meetings);
    await ez.driver.sleep(2000);
    await ez.click(ez.createMeeting);
    await ez.click(ez.meetingtitle);
    await ez.setInput(ez.meetingtitle, 'Party');
    await ez.click(ez.addmeeting);
    await ez.click(ez.backtomeetingsBtn);
    await ez.driver.sleep(2000);
    await ez.click(ez.createMeeting);
    await ez.repeatClick(ez.selectcontact, 'barbie');
    await ez.click(ez.addmeeting);
    await ez.click(ez.backtomeetingsBtn);
    await ez.driver.sleep(2000);
    await ez.click(ez.createMeeting);
    await ez.click(ez.method);
    await ez.setInput(ez.method, 'in person');
    await ez.click(ez.addmeeting);
    await ez.click(ez.backtomeetingsBtn);
    await ez.driver.sleep(2000);
    await ez.click(ez.createMeeting);
    await ez.click(ez.place);
    await ez.setInput(ez.place, 'my house');
    await ez.click(ez.addmeeting);
    await ez.click(ez.backtomeetingsBtn);
    await ez.driver.sleep(2000);
    await ez.click(ez.createMeeting);
    await ez.setInput(ez.time, '10062023');
    await ez.click(ez.addmeeting);
    await ez.click(ez.selectTitle);
    await ez.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/deleteBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    });

    await ez.driver.quit();
});