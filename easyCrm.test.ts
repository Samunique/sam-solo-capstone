import {EasyCRM} from './easyCrmPage'
const ez = new EasyCRM ();
const fs = require("fs")

test('Can I make another account with the same Email', async() => {
    await ez.navigate();
    await ez.click(ez.logEmail);
    await ez.setInput(ez.logEmail, 'test@email.com');
   // await ez.click(ez.loginPassword);
    await ez.setInput(ez.logPassword, 'password1234');
    await ez.click(ez.loginBtn);
    await ez.click(ez.logoutBtn);
    await ez.click(ez.regFirstname);
    await ez.setInput(ez.regFirstname, 'Samantha');
    await ez.setInput(ez.regLastname, 'Trevino');
    await ez.setInput(ez.regEmail, 'test@email.com');
    await ez.setInput(ez.regPassword, 'password5678');
    await ez.setInput(ez.confirmPassword, 'password5678');
    await ez.click(ez.registerBtn);
    await ez.click(ez.eMessageExit);
    await ez.driver.quit();
});

