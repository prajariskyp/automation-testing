import {browser, expect} from '@wdio/globals'
import login from '../pageobjects/login.page.js'
import burger from '../pageobjects/burger.page.js'

describe('========FITUR LOGIN======', function(){

    beforeEach('Reload Browser', async function(){
        await login.reset()
    })

    it('Login Dengan Data Yang Valid', async function(){
        await login.loginProcess('standard_user','secret_sauce')
        await expect(burger.titlePage).toBeDisplayed()
    })

    it('Login Dengan Username Yang Salah', async function (){
        await login.loginProcess('praja','secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it('Login Dengan Password Yang Salah', async function(){
        await login.loginProcess('standard_user','praja')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it('Login Dengan Username Kosong', async function(){
        await login.loginProcess('','secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.usernameReq)
        )
    })

    it('Login Dengan Password Kosong', async function(){
        await login.loginProcess('standard_user','')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.passwordReq)
        )
    })

    it('Login Dengan Mengosongkan Semua Input', async function(){
        await login.loginProcess('','secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.usernameReq)
        )
    })

    it('Login Dengan Username yang Valid Menggunakan Variasi Kapitalisasi', async function(){
        await login.loginProcess('Standard_user','secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it('Login Dengan Password yang Valid Menggunakan Variasi Kapitalisasi', async function(){
        await login.loginProcess('standard_user','Secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it ('Login dengan Whitespace di Username', async function(){
        await login.loginProcess(' ','secret_sauce')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it ('Login dengan Whitespace di password', async function(){
        await login.loginProcess('standard_user',' ')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it ('Login dengan Whitespace di Username dan Password', async function(){
        await login.loginProcess(' ',' ')
        await expect(login.errorMessage).toHaveText(
            expect.stringContaining(login.ErrorMessageLogin.invalidInput)
        )
    })

    it('Menekan Tombol Close Button Yang Ada di Error Message', async function(){
        await login.loginProcess('Praja', 'Risky')
        await login.closeButton.waitForDisplayed()
        await login.closeButton.click()
        await expect(login.errorMessage).not.toBeDisplayed()
    })

})