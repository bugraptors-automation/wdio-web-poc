import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage  extends Page{
    get products() {
        return $$(".inventory_list .inventory_item")
    }

    get shoppingCartIcon(){
        return $(".shopping_cart_link")
    }
}
export default new InventoryPage();