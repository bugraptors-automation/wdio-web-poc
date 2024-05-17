import { expect,browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import InventoryPage from '../pageobjects/inventory.page.ts'
import CartPage from '../pageobjects/cart.page.ts'
import CheckoutPage from '../pageobjects/checkout.page.ts'
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page.ts'
import {ADD_TO_CART, BARAK, CART_PAGE_ENDPOINT, CHECKOUT_COMPLETE_ENDPOINT, CHECKOUT_STEPONE_PAGE_ENDPOINT, CHECKOUT_STEPTWO_PAGE_ENDPOINT, INVENTORY_PAGE_ENDPOINT, POSTAL_CODE, ROHIT, THANK_YOU_MESSAGE} from '../../fixtures/constants.ts'
import cred from '../../fixtures/cred.json' assert { type: 'json' }

beforeEach(async()=>{
    await LoginPage.open()
})
describe('Verification of buying product', () => {
    it('verify user buy the product sucessfully', async () => {
        await LoginPage.login(cred.saucedemo.admin.username, cred.saucedemo.admin.password)
        await expect(await browser).toHaveUrl(INVENTORY_PAGE_ENDPOINT,{containing:true})
        //verify number of product
        await expect(await InventoryPage.products.length).toEqual(6);
        //verify add to cart btn is visible
        const itemName = await InventoryPage.products[0].$(".inventory_item_name").getText();
        const itemPrice = await InventoryPage.products[0].$(".inventory_item_price").getText();
        const addToCartBtn = await InventoryPage.products[0].$("button")
        await expect(addToCartBtn).toBeDisplayed()
        // //verify add to cart btn is enabled
        await expect(addToCartBtn).toBeEnabled()
        // //verify add to cart btn text
        await expect(addToCartBtn).toHaveText(ADD_TO_CART,{containing:true})
        // //click on add to cart btn
        await addToCartBtn.click()
        // //click on cart btn
        await expect(InventoryPage.shoppingCartIcon).toBeDisplayed();
        await InventoryPage.shoppingCartIcon.click();
        // //verify user is on cart page
        await expect(await browser).toHaveUrl(CART_PAGE_ENDPOINT,{containing:true})
        //verify product has added
        await expect(CartPage.inventoryItemName).toHaveText(itemName,{containing:true})
        await expect(CartPage.inventoryItemPrice).toHaveText(itemPrice,{containing:true})
        //click on check out btn
        await expect(CartPage.checkOutBtn).toBeEnabled()
        await CartPage.checkOutBtn.click()
        //verify user is on checkout page
        await expect(await browser).toHaveUrl(CHECKOUT_STEPONE_PAGE_ENDPOINT,{containing:true})
        const firstNameField = await CheckoutPage.firstNameField
        const lastNameField = await CheckoutPage.lastNameField
        const postalCodeField = await CheckoutPage.postalCodeField
        await expect(firstNameField).toBeEnabled()
        await firstNameField.setValue(ROHIT)
        await expect(lastNameField).toBeEnabled()
        await lastNameField.setValue(BARAK)
        await expect(postalCodeField).toBeEnabled()
        await postalCodeField.setValue(POSTAL_CODE)
        await CheckoutPage.continueBtn.click()
        //verify user is on checkout step two page
        await expect(await browser).toHaveUrl(CHECKOUT_STEPTWO_PAGE_ENDPOINT,{containing:true})
        await expect(CartPage.inventoryItemName).toHaveText(itemName,{containing:true})
        await expect(CartPage.inventoryItemPrice).toHaveText(itemPrice,{containing:true})
        await CheckoutPage.continueBtn.click()
        //verify user is on checkout complete page
        await expect(await browser).toHaveUrl(CHECKOUT_COMPLETE_ENDPOINT,{containing:true})
        //verify order has completed
        await expect(CheckoutCompletePage.orderCompletedMessage).toBeDisplayed()
        await expect(await CheckoutCompletePage.orderCompletedMessage).toHaveText(THANK_YOU_MESSAGE,{containing:true})
    })
})
