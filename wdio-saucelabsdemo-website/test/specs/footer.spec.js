import {browser, expect} from '@wdio/globals'
import footer from '../pageobjects/footer.page.js'
import login from '../pageobjects/login.page.js'

describe('========FOOTER=======',function(){
    beforeEach('LOGIN',async function(){
        await login.reset()
        await login.loginProcess('standard_user','secret_sauce')
    })
    it('Menampilkan Footer',async function(){
        await footer.footerScroll()

        await expect(footer.footer).toBeDisplayed()
    })
    it('Menekan Icon Twitter di Footer',async function(){
        await footer.footerScroll()
        await footer.sosialMedia('twitter')
        await footer.switchTab(1)
        
        await expect(browser).toHaveUrl('https://x.com/saucelabs')
        await footer.closeTab()
        await footer.switchMain()
    })
    it('Menekan Icon Facebook di Footer',async function(){
        await footer.footerScroll()
        await footer.sosialMedia('facebook')
        await footer.switchTab(1)

        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        await footer.closeTab()
        await footer.switchMain()
    })
    it('Menekan Icon LinkedIn di Footer',async function(){
        await footer.footerScroll()
        await footer.sosialMedia('linkedin')
        await footer.switchTab(1)

        await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
        await footer.closeTab()
        await footer.switchMain()
    })
})