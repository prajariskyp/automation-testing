import {$, browser} from '@wdio/globals'

class burger {
    //elemen locators
    get menuBurger() { return $('//div[@class="bm-menu-wrap"]')}
    get notifCart() { return $('//span[@class="shopping_cart_badge"]') }
    get loginBtn() { return $('//*[@id="login-button"]') }
    get titlePage () {  return $('//span[@class="title"]') }

    //page actions
    async product(){
        const productClick = $('//div[@class="inventory_item_img"]')
        await productClick.click()
    }
    async addToCart(){
        const atc = $('//button[@id="add-to-cart-sauce-labs-backpack"]')

        await atc.click()
    }
    async burger(){
        const burgerBtn = $('//div[@class="bm-burger-button"]')
        
        await burgerBtn.scrollIntoView()
        await burgerBtn.waitForDisplayed()
        await burgerBtn.click()
    }
    async about(){
        const aboutBtn = $('//a[@id="about_sidebar_link"]')

        await aboutBtn.click()
    }
    async allItem(){
        const allItemBtn = $('//a[@id="inventory_sidebar_link"]')

        await allItemBtn.click()
    }
    async resetApp(){
        const reset = $('//a[@id="reset_sidebar_link"]')

        await reset.click()
    }
    async logout(){
        const logoutBtn = $('//a[@id="logout_sidebar_link"]')

        await logoutBtn.click()
    }
    async closeBtn(){
        const closeMenu =$('//button[@id="react-burger-cross-btn"]')

        await closeMenu.waitForDisplayed()
        await closeMenu.click()
    }

}
export default new burger()