const utils = require("../specs/utils")
let date = new Date().getTime()

//const recentEmail = `namanfusion${date}@gmail.com`
const dataInp = require('../../testConfig.json')

class RegisterPage
{
    
    static registerEmail(recentEmail)
    {
        return utils.typeText('#emailControl', recentEmail)
    }
    static registerPassword()
    {
        return utils.typeText('#passwordControl', `${dataInp.password}`)
    }
    static registerRepeatPassword()
    {
        return utils.typeText('#repeatPasswordControl', `${dataInp.repeatPassword}`)
    }
    static registerQuestionClick()
    {
        return utils.clickOnElement('#mat-select-value-3')
    }
    static registerSecurityQuestion()
    {
        return utils.clickOnElement('//span[contains(text(), " Your favorite book? ")]')
    }
    static registerSecurityAnswer()
    {
        return utils.typeText('#securityAnswerControl', dataInp.securityAnswer)
    }
    static registerSubmitButton()
    {
        return utils.clickOnElement('//mat-card[@class="mat-card mat-focus-indicator mat-elevation-z6"]//button')
    }

    static async registerForm(recentEmail)
    {
        await this.registerEmail(recentEmail)
        await this.registerPassword()
        await this.registerRepeatPassword()
        await this.registerQuestionClick()
        await this.registerSecurityQuestion()
        await this.registerSecurityAnswer()
        await this.registerSubmitButton()
    }
}
module.exports = RegisterPage