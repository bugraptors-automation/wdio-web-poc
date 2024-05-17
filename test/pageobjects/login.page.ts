import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get usernameField() {
        return $('#user-name');
    }

    get passwordField() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login-button');
    }

    public async login (username: string, password: string) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginBtn.click();
    }

    public open () {
        return super.open('/');
    }
}

export default new LoginPage();
