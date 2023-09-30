import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Contacts double inputs and submit buttons', async() => {
    await ez.navigate();
    await ez.driver.manage().window().maximize();
    await ez.driver.sleep(2000);
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.click(ez.closeBtn)
    await ez.driver.sleep(2000)
    await ez.click(ez.createContact);
    await ez.driver.sleep(2000);
    await ez.click(ez.firstname);
    await ez.setInput(ez.firstname, 'Barbie');
    await ez.setInput(ez.lastname, 'Girl');
    await ez.setInput(ez.jobtitle, 'Doll');
    await ez.setInput(ez.company1, 'Mattel');
    await ez.setInput(ez.bio1, 'In a Barbie World');
    await ez.click(ez.addcontactBtn);
    await ez.click(ez.name);
    await ez.click(ez.addphoneBtn);
    await ez.setInput(ez.phoneInput, '1234567890')
    await ez.click(ez.addphone);
    await ez.click(ez.addemailBtn);
    await ez.setInput(ez.emailInput, 'a');
    await ez.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/firstInputsAddcontactsBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    });
    await ez.click(ez.createContact);
    await ez.driver.sleep(2000);
    await ez.click(ez.fname);
    await ez.setInput(ez.fname, 'Spice');
    await ez.setInput(ez.lname, 'Girl');
    await ez.setInput(ez.title, 'Singer');
    await ez.setInput(ez.company2, 'The Spicegirls');
    await ez.setInput(ez.bio2, 'Spice up your life');
    await ez.click(ez.submitBtn);
    await ez.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/SecondInputsNsubmitBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    });
    await ez.driver.quit();
});
