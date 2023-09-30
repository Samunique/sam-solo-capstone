import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Testing if blank contacts can be made', async() => {
    await ez.navigate();
    await ez.driver.manage().window().maximize();
    await ez.driver.sleep(2000);
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.driver.sleep(2000)
    await ez.click(ez.contacts);
    await ez.driver.sleep(2000);
    await ez.click(ez.createContact);
    await ez.driver.sleep(2000);
    await ez.click(ez.submitBtn);
    await ez.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/blankContact.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('screenshot saved')
    });
    await ez.driver.quit();
});