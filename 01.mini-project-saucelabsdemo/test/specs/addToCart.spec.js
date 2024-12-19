import {browser, expect} from '@wdio/globals'
import addToCart from '../pageobjects/addToCart.page.js'
import login from '../pageobjects/login.page.js'
import burger from '../pageobjects/burger.page.js'


describe('======FITUR ADD TOCART=========',function(){

    before('LOGIN',async function(){
        await login.reset()
        await login.loginProcess('standard_user','secret_sauce')
    })
    beforeEach('RESET',async function(){
        await burger.burger()
        await burger.resetApp()
        await burger.closeBtn()
    })

    it('Membuka Icon Keranjang', async function(){
        await addToCart.cart()

        await expect(addToCart.titleCart).toHaveText('Your Cart')
        await addToCart.continueCart()
    })
    it('Memasukan Product Paling Awal Dengan Tombol AddToCart', async function(){
        await addToCart.firstProduct()
        
        await expect(addToCart.notifCart).toHaveText('1')
        await addToCart.removeFirst()
    })
    it('Memasukan Product Paling Akhir Dengan Tombol AddToCart', async function(){
        await addToCart.lastProduct()

        await expect(addToCart.notifCart).toHaveText('1')
        await addToCart.removeLast()
    })
    it('Verifikasi First Product di keranjang Sesuai Dengan Product Yang Dipilih',async function(){
        await addToCart.firstProduct()
        const firstProductText = await addToCart.firstProductName.getText()
        await addToCart.cart()
        
        const cartProductText = await addToCart.cartProductName.getText()
        await expect(cartProductText).toEqual(firstProductText)
        await addToCart.continueCart()
    })
    it('Verifikasi Last Product di keranjang Sesuai Dengan Product Yang Dipilih',async function(){
        await addToCart.lastProduct()
        const firstProductText = await addToCart.lastProductName.getText()
        await addToCart.cart()
        
        const cartProductText = await addToCart.cartProductName.getText()
        await expect(cartProductText).toEqual(firstProductText)
        await addToCart.continueCart()
    })
    it('Membuka Halaman Product Detail',async function(){
        await addToCart.firstProductName.click()

        await expect(addToCart.titleProduct).toHaveText('Sauce Labs Backpack')
    })
    it('add To Cart Dari Halaman Product Detail',async function(){
        await addToCart.atcProductDetail()

        await expect(addToCart.notifCart).toHaveText('1')
        await burger.burger()
        await burger.allItem()
    })
    it('Menghapus Product Dari keranjang',async function(){
        await addToCart.removeFirst()
        await addToCart.firstProduct()
        await addToCart.cart()
        await addToCart.removeCart()

        await expect(addToCart.cartProductName).not.toBeDisplayed()
        await addToCart.continueCart()
    })
    it('Menekan Tombol Continue Shopping yang ada di Cart',async function(){
        await addToCart.lastProduct()
        await addToCart.cart()
        await addToCart.continueCart()

        await expect(burger.titlePage).toBeDisplayed()
    })
})
