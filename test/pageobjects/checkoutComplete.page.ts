import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutCompletePage extends Page{

    get orderCompletedMessage() {
        return $(".complete-header")
    }
} 

export default new CheckoutCompletePage();