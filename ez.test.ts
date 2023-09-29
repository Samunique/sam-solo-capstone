import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Easy Crm Test', async() => {
    //test 1
    await ez.navigate()
    await ez.driver.manage().window().maximize()
    await ez.driver.sleep(2000)
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.driver.sleep(2000)
    await ez.click(ez.logoutBtn);
    await ez.click(ez.regFirstname);
    await ez.setInput(ez.regFirstname, 'Samantha');
    await ez.setInput(ez.regLastname, 'Trevino');
    await ez.click(ez.regEmail);
    await ez.setInput(ez.regEmail, 'test@email.com');
    await ez.click(ez.regPassword);
    await ez.setInput(ez.regPassword, 'password5678');
    await ez.setInput(ez.confirmPassword, 'password5678');
    await ez.click(ez.registerBtn);
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/regErrorMessage.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save successful')
    })
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.driver.sleep(2000)
    //test 2
    //('Can I create blank contacts?');
    await ez.click(ez.contacts)
    await ez.driver.sleep(2000)
    await ez.click(ez.createContact)
    await ez.driver.sleep(2000)
    await ez.click(ez.submitBtn)
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/blankContact.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save successful')
    })
    //test 3
    await ez.driver.sleep(2000)
    //('Testing the first set of inputs and the add contact button');
    await ez.click(ez.createContact)
    await ez.driver.sleep(2000)
    await ez.click(ez.firstname)
    await ez.setInput(ez.firstname, 'Barbie')
    await ez.setInput(ez.lastname, 'Girl')
    await ez.setInput(ez.jobtitle, 'Doll')
    await ez.setInput(ez.company1, 'Mattel')
    await ez.setInput(ez.bio1, 'In a Barbie World')
    await ez.click(ez.addcontactBtn)
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/firstInputsAddcontactsBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    //test 4
    //('Testing the 2nd set of inputs and submit btn')
    await ez.click(ez.createContact)
    await ez.driver.sleep(2000)
    await ez.click(ez.fname)
    await ez.setInput(ez.fname, 'Spice')
    await ez.setInput(ez.lname, 'Girl')
    await ez.setInput(ez.title, 'Singer')
    await ez.setInput(ez.company2, 'The Spicegirls')
    await ez.setInput(ez.bio2, 'Spice up your life')
    await ez.click(ez.submitBtn)
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/SecondInputsNsubmitBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    })
    // test 5
    //('Testing creating a meetings and inputs')
    await ez.click(ez.meetings)
    await ez.driver.sleep(2000)
    await ez.click(ez.createMeeting)
    await ez.click(ez.meetingtitle)
    await ez.click(ez.addmeeting)
    await ez.click(ez.meetingtitle)
    await ez.setInput(ez.meetingtitle, 'Party')
    await ez.click(ez.addmeeting)
    await ez.repeatClick(ez.selectcontact, 'barbie')
    await ez.click(ez.addmeeting)
    await ez.click(ez.method)
    await ez.setInput(ez.method, 'in person')
    await ez.click(ez.addmeeting)
    await ez.click(ez.place)
    await ez.setInput(ez.place, 'my house')
    await ez.click(ez.addmeeting)
    await ez.setInput(ez.time, '10062023')
    await ez.click(ez.addmeeting)
    await fs.writeFile(`${__dirname}/deleteBtn.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    })
    //test 5
    //('Testing for view of meeting')
    await ez.click(ez.selectTitle)
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/noMeetingTimeShown.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    })
    //test 6
    //('Testing for blank meetings and selecting for editing')
    await ez.click(ez.createMeeting)
    await ez.setInput(ez.time, '10062023')
    await ez.click(ez.addmeeting)
    await fs.writeFile(`${__dirname}/blankmeeting.png`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('save successful')
    })

    await ez.driver.quit()
});