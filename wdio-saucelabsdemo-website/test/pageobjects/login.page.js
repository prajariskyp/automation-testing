import {browser, $} from '@wdio/globals'

class login{
    //elemen locators
    get errorMessage() { return $('//h3[@data-test="error"]') }
    get closeButton() { return $('//button[@class="error-button"]') }
    get loginContainer() { return $('//div[@class="login_wrapper-inner"]') }

    //error message
    ErrorMessageLogin = { 
        invalidInput: "Username and password do not match any user in this service",
        usernameReq: "Username is required",
        passwordReq: "Password is required"
}

    //page actions
    async reset(){
        await browser.url('https://www.saucedemo.com')
    }
    async loginProcess(username,password){
        const inputUsername = $('//*[@id="user-name"]')
        const inputPassword = $('//*[@id="password"]')
        const loginBtn      = $('//*[@id="login-button"]')

        await inputUsername.setValue(username)
        await inputPassword.setValue(password)
        await loginBtn.click()
    }
}
export default new login()