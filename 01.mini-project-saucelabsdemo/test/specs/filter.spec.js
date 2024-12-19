import {expect, browser} from '@wdio/globals'
import burger from '../pageobjects/burger.page.js'
import login from '../pageobjects/login.page.js'
import filter from '../pageobjects/filter.page.js'

describe('====FITUR FILTER======', function (){

    before('Login', async function(){
        await login.reset()
        await login.loginProcess('standard_user','secret_sauce')
    })

    beforeEach('Reset',async function(){
        await burger.burger()
        await burger.resetApp()
        await burger.closeBtn()
    })

    it('Filter Name(A to Z)',async function(){
        await filter.aToZ()
        
        const names = await filter.getProductNames()
        const sortedNames =  [...names].sort() 

        await expect(names).toEqual(sortedNames)
    })
    it('filter Name (Z to A)', async function(){
        await filter.zToA()

        const names = await filter.getProductNames()
        const sortedNames =  [...names].sort().reverse()

        await expect(names).toEqual(sortedNames)
    })
    it('Filter Price Low To High', async function(){
        await filter.lohi()

        const prices = await filter.getProductPrices()
        const sortedPrices = [...prices].sort((a, b) => a - b)

        await expect(prices).toEqual(sortedPrices)
    })
    it('FIlter Price High to Low', async function(){
        await filter.hilo()

        const prices = await filter.getProductPrices()
        const sortedPrices = [...prices].sort((a, b) => b - a)

        await expect(prices).toEqual(sortedPrices)
    })
})