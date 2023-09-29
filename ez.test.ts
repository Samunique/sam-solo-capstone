import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Easy Crm Test', async() => {
    //test 1
    //console.log('Can I make another account with the same Email');
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
        else console.log('Image should show error message')
    })
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
    await ez.click(ez.logPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.driver.sleep(2000)
    //test 2
    //console.log('Can I create blank contacts?');
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
        else console.log('Yes you can-see image')
    })
    //test 3
    await ez.driver.sleep(2000)
    //console.log('Testing the first set of inputs and the add contact button');
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
        else console.log('First set shown and add button works')
    })
    //test 4
    //console.log('Testing the 2nd set of inputs and submit btn')
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
        else console.log('2nd inputs dont work')
    })
    // test 5
    //console.log('Testing creating a meetings and inputs')
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
    await fs.writeFile(`${__dirname}/deleteBtn`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('delete button is in the way')
    })
    //test 5
    //console.log('Testing for view of meeting')
    await ez.click(ez.selectTitle)
    await ez.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/noMeetingTimeShown`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('no info')
    })
    //test 6
    //console.log('Testing for blank meetings and selecting for editing')
    await ez.click(ez.createMeeting)
    await ez.setInput(ez.time, '10062023')
    await ez.click(ez.addmeeting)
    await fs.writeFile(`${__dirname}/blankmeeting`,
    await ez.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('cannot select without a title')
    })

    await ez.driver.quit()
});