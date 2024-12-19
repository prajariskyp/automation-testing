import{$, browser} from '@wdio/globals'

class filter{
    //elemen locators
    get allProductName(){ return  $$('//div[@class="inventory_item_name "]') }
    get allProductPrices() { return $$('//div[@class="inventory_item_price"]') }
    get filterButton() { return $('//select[@class="product_sort_container"]') }

    //page actions
    async aToZ(){
        await this.filterButton.selectByAttribute('value','az')
    }
    async zToA(){
        await this.filterButton.selectByAttribute('value','za')
    }
    async lohi(){
        await this.filterButton.selectByAttribute('value','lohi')
    }
    async hilo(){
        await this.filterButton.selectByAttribute('value', 'hilo')
    }
    async getProductNames(){
      const names = []
      for(let i = 0; i <= this.allProductName.length; i++){
            const name = await this.allProductName[i].getText()
            names.push(name)
      }   
      return names
    }
    async getProductPrices(){
        const prices = []
        for(let i = 0; i <= this.allProductPrices.length; i++){
            const priceText = await this.allProductPrices[i].getText()
            const price = parseFloat(priceText.replace('$', ''))
            prices.push(price)
        }
        return prices
    }
}
export default new filter()