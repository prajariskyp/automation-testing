import {$, browser} from '@wdio/globals'

class addToCart{
    //elemen locators
    get titleCart() { return $('//span[@class="title"]') }
    get notifCart() { return $('//span[@class="shopping_cart_badge"]') }
    get firstProductName() { return $('//a[@id="item_4_title_link"]') }
    get lastProductName () { return $('//a[@id="item_3_title_link"]') }
    get titleProduct() { return $('//div[@class="inventory_details_name large_size"]') }
    get cartProductName() { return $('//div[@class="inventory_item_name"]') }

    //page actions
    async cart(){
        const cartIcon = $('//div[@id="shopping_cart_container"]')
        await cartIcon.scrollIntoView()
        await cartIcon.click()
    }
    async continueCart(){
        const continueBtn = $('//button[@id="continue-shopping"]')
        await continueBtn.click()
    }
    async firstProduct(){
        const first = $('// button[@id="add-to-cart-sauce-labs-backpack"]')
        await browser.pause(1000)
        await first.click()
    }
    async lastProduct(){
        const last = $('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        await last.scrollIntoView()
        await last.click()
    }
    async removeFirst(){
        const remove = $('//button[@id="remove-sauce-labs-backpack"]')
        await remove.scrollIntoView()
        await remove.click()
    }
    async removeLast(){
        const remove = $('//button[@id="remove-test.allthethings()-t-shirt-(red)"]')
        await remove.scrollIntoView()
        await remove.click()
    }
    async removeCart(){
        const remove = $('//button[@id="remove-sauce-labs-backpack"]')
        await remove.click()
    }
    async atcProductDetail(){
        const atc = $('//button[@id="add-to-cart"]')
        await atc.click()
    }
}
export default new addToCart()