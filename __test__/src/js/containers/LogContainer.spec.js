import $ from "jquery"

// testing library
import { } from "@testing-library/dom";
import { } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import header from "../../../../src/js/user-interface/layout/header";
import loginPage from "../../../../src/js/user-interface/pages/login-page";
import LogContainer from "../../../../src/js/containers/LogContainer";
import { navigateToPage } from "../../../../router";



describe('LogContainer Suite', () => {
    let app;
    beforeAll(() => {

        app = document.createElement('div')
        app.id = "app"
        document.body.appendChild(app)
        app.innerHTML += header()
        app.innerHTML += loginPage()
        const onNavigate = function(h) {
            navigateToPage(h)
        }
    })

    loginTests()
    registerTests()


})


function loginTests(){
    let loginContainer;

    beforeAll(() => {
        loginContainer = new LogContainer(onNavigate);
    })

    test('should have isLoggingIn: true', () => {
        expect(loginContainer.isLoggingIn).toBe(true)
    })
}


function registerTests(){
    let registerContainer;
    beforeAll(() => {
        registerContainer = new LogContainer(onNavigate, false);
    })

    test('should have isLoggingIn : false', () => {
        expect(registerContainer.isLoggingIn).toBe(false)
    })
}