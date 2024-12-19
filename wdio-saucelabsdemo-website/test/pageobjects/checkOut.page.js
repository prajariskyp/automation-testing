import{$, browser} from '@wdio/globals'

class checkout{
    //elemen locators
    get titleInformation(){ return $('//span[@data-test="title"]') }
    get titleCheckout(){ return $('//span[@data-test="title"]') }
    get errorMsg() { return $('//*[h3]') }
    get successCheckOut() { return $('//h2[@data-test="complete-header"]') }

    //error message
    errorInformation = {
        firstNameReq    : 'First Name is required',
        lastNameReq     : 'Last Name is required',
        postalReq       : 'Postal Code is required',
        succesCo        : 'Thank you for your order!'
    }

    // page actions
    async checkout(){
        const checkoutBtn = $('//button[@id="checkout"]')
        await checkoutBtn.click()
    }
    async informationProcess(first,last,zip){
        const firstName = $('//input[@id="first-name"]')
        const lastName  = $('//input[@id="last-name"]')
        const zipCode   = $('//input[@id="postal-code"]')
        const continueBtn  = $('//input[@id="continue"]')

        await firstName.setValue(first)
        await lastName.setValue(last)
        await zipCode.setValue(zip)
        await continueBtn.scrollIntoView({behavior:'smooth'})
        await continueBtn.click()
    }
    async closeErrorMsg(){
        const close = $('//button[@class="error-button"]')
        await close.waitForClickable()
        await close.click()
    }
    async cancelButton(){
        const cancelBtn = $('//button[@id="cancel"]')
        await cancelBtn.scrollIntoView()
        await cancelBtn.click()
    }
    async finishButton(){
        const finishBtn = $('//button[@id="finish"]')
        await finishBtn.scrollIntoView()
        await finishBtn.click()
    }
    async backHomeButton(){
        const homeBtn = $('//button[@id="back-to-products"]')
        await homeBtn.scrollIntoView()
        await homeBtn.click()
    }

}
export default new checkout()