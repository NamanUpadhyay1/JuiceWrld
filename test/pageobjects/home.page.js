const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _dismissAlert = '//span[contains(text(), "Dismiss")]'
const _accountButton = '//span[contains(text(), " Account ")]'
const _loginButton = '#navbarLoginButton'
const _registerLink = '//a[contains(text() ,"Not yet a customer?")]'
const _profileButton = '//div[@class="mat-menu-content ng-tns-c247-2"]//button[1]'
const _productPrices = '//span[@class="ng-star-inserted"]'

class HomePage
{
    static async accountButton()
    {
        await utils.clickOnElement(_accountButton)
    }

    static async dismissAlert()
    {
        await utils.clickOnElement(_dismissAlert)
    }

    static async loginButton()
    {
        await utils.clickOnElement(_loginButton)
    }

    static async registerLink()
    {
        await utils.clickOnElement(_registerLink)
    }

    static async profileButton()
    {
        await utils.clickOnElement(_profileButton)
    }

    static productprices()
    {
        let listings =  $$(_productPrices)
        listings.forEach(element => 
        {
            return element.getText()
        });
    }
    
}
module.exports = HomePage