import{browser, $} from '@wdio/globals'

class footer{
    //element locators
    get footer(){ return $('//footer[@class="footer"]') }
    // page actions
    async footerScroll(){
        this.footer.scrollIntoView({behavior:'smooth'})
    }
    async sosialMedia(platform){
        let sosialIcon
        switch(platform){
            case 'twitter':
                sosialIcon = $('//a[@data-test="social-twitter"]')
                break
            case 'facebook':
                sosialIcon = $('//a[@data-test="social-facebook"]')
                break
            case 'linkedin' :
                sosialIcon = $('//a[@data-test="social-linkedin"]')
                break
        }
        await sosialIcon.click()
        await browser.pause(2000)
    }
    async switchTab(tab){
        const allTabs = await browser.getWindowHandles()
        await browser.switchToWindow(allTabs[tab])
    }
    async closeTab(){
        await browser.closeWindow()
    }
    async switchMain(){
        const allTabs = await browser.getWindowHandles()
        await browser.switchToWindow(allTabs[0])
        await browser.pause(2000)
    }
}
export default new footer()