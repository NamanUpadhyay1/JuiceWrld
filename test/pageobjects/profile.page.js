const dataInp = require('../../testConfig.json')
const utils = require("../specs/utils")

const _userName = '#username'
const _userNameSubmit = '#submit'
const _chooseFile = '#picture'
const _uploadButton = '//button[contains(text(), "Upload Picture")]'


class ProfilePage
{
    static async userNameInput()
    {
        await utils.typeText(_userName, dataInp.userName)
    }

    static async profileSubmitButton()
    {
        await utils.clickOnElement(_userNameSubmit)
    }

    static chooseFileButton()
    {
        return $(_chooseFile)
    }

    static async uploadButton()
    {
        await utils.clickOnElement(_uploadButton)
    }

}
module.exports = ProfilePage