import {browser, expect} from '@wdio/globals'
import burger from '../pageobjects/burger.page.js'
import login from '../pageobjects/login.page.js'

describe('======burger=======', function (){

    beforeEach('Login', async function(){
        await login.reset()
        await burger.loginBtn.waitForDisplayed()
        await login.loginProcess('standard_user','secret_sauce')
    })
    
    it('Menekan Icon Burger',async function (){
        await burger.burger()
        await expect(burger.menuBurger).toBeDisplayed()
    })

    it('Mengecek Fitur About di Icon Burger', async function(){
        await burger.burger()
        await burger.about()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
        await browser.pause(5000)
    })

    it('Mengecek Fitur All Item di Icon Burger', async function(){
        await burger.product()
        await burger.burger()
        await burger.allItem()
        await expect(burger.titlePage).toBeDisplayed()
    })

    it('Mengecek Fitur Reset App State di Icon Burger', async function(){
        await burger.addToCart()
        await burger.burger()
        await burger.resetApp()
        await expect(burger.notifCart).not.toBeDisplayed()
    })
    
    it('Menekan Tombol Close Menu Burger', async function(){
        await burger.burger()
        await burger.closeBtn()
        await expect(burger.menuBurger).not.toBeDisplayed()

    })

    it('Mengecek Fitur Logout di Icon  Burger', async function(){
        await burger.burger()
        await burger.logout()
        await expect(login.loginContainer).toBeDisplayed()
    })
})