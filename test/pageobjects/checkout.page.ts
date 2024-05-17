import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutPage extends Page{
    get firstNameField() {
        return $("#first-name");
    }

    get lastNameField() {
        return $("#last-name");
    }

    get postalCodeField() {
        return $("#postal-code");
    }

    get continueBtn(){
        return $(".cart_button");
    }
}
export default  new CheckoutPage();