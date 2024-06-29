import { navigateToPage } from "../../../../router";
import $ from "jquery"
import HomeContainer from "../../../../src/js/containers/HomeContainer";
import {screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

let user;


describe('HomeContainer Suit', () => {

    beforeEach(() => {
        const app = document.createElement('div')
        app.id = "app"
        document.body.appendChild(app)
        user = userEvent.setup()
        navigateToPage(window.location.hash)
        console.log(window.location.hash)
    })
    tests()
})

function tests(){
    test.skip('should be on home page with a Se connecter button', () => {
        expect($('button.home-page__button').first().text()).toBe('Se connecter')
    })

    test.skip('should lead to login Page after the click', () => {
        const onNavigate = (h) => {
            navigateToPage(h)
        }
        const homeContainer = new HomeContainer(onNavigate)
        const spy = jest.spyOn(homeContainer, 'onLoginClick');
        homeContainer.onLoginClick()
        expect(spy).toHaveBeenCalled()
        expect($('h1').text()).toBe('Login Page')
    })

    test('should lead to login Page after the click', async() => {
        const onNavigate = (h) => {
            navigateToPage(h)
        }
        new HomeContainer(onNavigate)

        const btn = screen.getByRole('button', { name: /Se connecter/i})

        expect(btn).toBeTruthy()

        await user.click(screen.getByRole('button', { name: /Se connecter/i}));
        expect(screen.getByTestId('login-page__title')).toHaveTextContent('Login Page')
    })
}
