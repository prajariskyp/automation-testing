import {expect, browser} from '@wdio/globals'
import checkOut from '../pageobjects/checkOut.page.js'
import login from '../pageobjects/login.page.js'
import addToCart from '../pageobjects/addToCart.page.js'
import burger from '../pageobjects/burger.page.js'

describe('========CHECKOUT=======',function(){

    describe('INFORMASI PRIBADI', function(){
        
        before('LOGIN',async function(){
            await login.reset()
            await login.loginProcess('standard_user','secret_sauce')
        })
    
        beforeEach('RESET',async function(){
            await burger.burger()
            await burger.resetApp()
            await burger.closeBtn()
            await browser.pause(500)
            await addToCart.firstProduct()
            await addToCart.cart()
            await checkOut.checkout()
        })
    
        afterEach('RESET ADD TO CART BUTTON', async function(){
            await burger.burger()
            await burger.allItem()
            await browser.pause(500)
            await addToCart.removeFirst()
        })
        
        it('Menekan Tombol Check Out', async function(){
            
            await expect(checkOut.titleInformation).toHaveText('Checkout: Your Information')
        })
        
        it('Menekan Tombol Cancel di Halaman Informasi Pribadi',async function(){
            await checkOut.cancelButton()
    
            await expect(addToCart.titleCart).toHaveText('Your Cart')
        })
        
        it('Mengisi Informasi Pribadi Dengan Valid', async function(){
            await checkOut.informationProcess('Praja','Risky','45112' )
    
            await expect(checkOut.titleCheckout).toHaveText('Checkout: Overview')
        })
    
        it('Mengisi Informasi Pribadi Secara Valid Dengan Mengosongkan FirstName',async function(){
            await checkOut.informationProcess('','Risky','45112')
            
            await expect(checkOut.errorMsg).toHaveText(
                expect.stringContaining(checkOut.errorInformation.firstNameReq)
            )
        })
        it('Mengisi Informasi Pribadi Secara Valid Dengan Mengosongkan LastName',async function(){
            await checkOut.informationProcess('Praja','','45112')
            
            await expect(checkOut.errorMsg).toHaveText(
                expect.stringContaining(checkOut.errorInformation.lastNameReq)
            )
        })
        it('Mengisi Informasi Pribadi Secara Valid Dengan Mengosongkan PostalCode',async function(){
            await checkOut.informationProcess('Praja','Risky','')
            
            await expect(checkOut.errorMsg).toHaveText(
                expect.stringContaining(checkOut.errorInformation.postalReq)
            )
        })
        it('Mengosongkan Semua Informasi Pribadi',async function(){
            await checkOut.informationProcess('','','')
            
            await expect(checkOut.errorMsg).toHaveText(
                expect.stringContaining(checkOut.errorInformation.firstNameReq)
            )
        })
        it('Menekan Close Button di Error Message',async function(){
            await checkOut.informationProcess('','Risky','45112')
            await checkOut.closeErrorMsg()
            
            await expect(checkOut.errorMsg).not.toBeDisplayed()
        })
    })
    describe('CHECKOUT OVERVIEW',async function(){
        before('LOGIN',async function(){
            await login.reset()
            await login.loginProcess('standard_user','secret_sauce')
        })
        beforeEach('RESET',async function(){
            await burger.burger()
            await burger.resetApp()
            await burger.closeBtn()
            await browser.pause(500)
            await addToCart.firstProduct()
            await addToCart.cart()
            await checkOut.checkout()
        })

        it('Menekan Tombol Cancel di Halaman Checkout Overview',async function(){
            await checkOut.informationProcess('Praja','Risky','45112' )
        
            await checkOut.cancelButton()
            await expect(burger.titlePage).toBeDisplayed()
            await addToCart.removeFirst()
        })
        it('Menekan Tombol Finish di Halaman Checkout Overview',async function(){
            await checkOut.informationProcess('Praja','Risky','45112' )
            await checkOut.finishButton()
        
            await expect(checkOut.successCheckOut).toHaveText(checkOut.errorInformation.succesCo)
            await burger.burger()
            await burger.allItem()
        })
        it('Menekan Tombol BackHome di Halaman Checkout Complete!',async function(){
            await checkOut.informationProcess('Praja','Risky','45112' ) 
            await checkOut.finishButton()
            await checkOut.backHomeButton()
            await expect(burger.titlePage).toBeDisplayed()
        })
    })
})
