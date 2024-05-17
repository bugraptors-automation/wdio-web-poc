import { $ } from '@wdio/globals'
import Page from './page.js';
class CartPage extends Page{
    get inventoryItemName(){
        return $(".inventory_item_name");
    }

    get inventoryItemPrice(){
        return $(".inventory_item_price");
    }

    get checkOutBtn(){
        return $(".checkout_button");
    }
}
export default new CartPage();