let date = new Date().getTime()
const dataInp = require('../../testConfig.json')
const allureReporter = require('@wdio/allure-reporter').default
const utils = require("../specs/utils")
const homePage = require('../pageobjects/home.page')
const registerPage = require('../pageobjects/register.page')
const loginpage = require('../pageobjects/login.page')
const profilePage = require('../pageobjects/profile.page')
const recentEmail = `namanfusion${date}@gmail.com`
const { assert, expect, util } = require('chai')



describe(`register and login beforeEach`,()=>
{
    before('optional description',async function ()
    {
        allureReporter.addStep("Opening the browser url")
        allureReporter.addSeverity("critical")
        await browser.url(dataInp.baseUrl)
        await browser.pause(3000)
        await homePage.dismissAlert()
        const currentUrl = await browser.getUrl()
        const expectedUrl = dataInp.baseUrl
        console.log(currentUrl)
        assert(currentUrl===expectedUrl)
        allureReporter.addStep("Registering an account")
        await homePage.accountButton()
        await homePage.loginButton()
        await homePage.registerLink()
        await browser.pause(1500)
        await registerPage.registerForm(recentEmail)
        await browser.pause(3000)
        allureReporter.addStep("Logging in an account")
        await loginpage.logInForm(recentEmail)
        await browser.pause(2000)
    })
// it('printing',async()=>
// {
//     console.log("printing shinting");
// })

// describe('to Verify user is able to change their profile picture',()=>
// {
//     it('Navigate to the Account button',async()=>
//     {
//         await homePage.accountButton()
//         await homePage.profileButton()
//         await browser.pause(2000)
//     })
//     it('Update your profile nickname',async()=>
//     {
//         await profilePage.userNameInput()
//         await profilePage.profileSubmitButton()
//         await browser.pause(2000)
//     })

//     it('Update your profile picture', async()=>
//     {
       
//         const filePath = 'seleniumPhoto.png'
//         const remoteFilePath = await browser.uploadFile(filePath)

//         await profilePage.chooseFileButton().setValue(remoteFilePath)
//         await profilePage.uploadButton()    
//         await browser.pause(2000)
//     })
    
// })
// })

// it('Assert the profile picture',async()=>
    // {
    //     const actualSrc = await profilePage.actualSrc().getAttribute('src')
    //     console.log(`-The SRC is : ${actualSrc}`);
    //     expect(actualSrc).contains("assets/public/images/uploads/")
     
    describe('Prices on the home page',()=>
    {
        it('checking prices', async()=>
        {
            await homePage.productprices()
            await utils.pauseTime(3000)
            //throw new Error('Error herê')
        })
    })

})
    //"allure-report": "allure generate --clean ./reports/allure/allure-results -o ./reports/allure/allure-report && allure open"
