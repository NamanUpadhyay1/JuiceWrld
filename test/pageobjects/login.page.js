const utils = require("../specs/utils")

let date = new Date().getTime()



//const recentRegisterEmail = `namanfusion${date}@gmail.com`
const dataInp = require('../../testConfig.json')

class LogInPage
{
    static loginEmail(recentEmail)
    {
        return utils.typeText('#email', recentEmail)
    }
    static loginPassword()
    {
        return utils.typeText('#password', `${dataInp.password}`)
    }
    static loginSubmitButton()
    {
        return utils.clickOnElement('#loginButton')
    }

    static async logInForm(recentEmail)
    {
        await this.loginEmail(recentEmail)
        await this.loginPassword()
        await this.loginSubmitButton()
    }
}
module.exports = LogInPage