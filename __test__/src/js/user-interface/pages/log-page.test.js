import $ from "jquery"
import { screen, toHaveValue, toBeInTheDocument } from "@testing-library/dom"
import { userEvent } from "@testing-library/user-event"
import "@testing-library/jest-dom"
import header from "../../../../../src/js/user-interface/layout/header"
import notification from "../../../../../src/js/user-interface/layout/notification"
import logPage from "../../../../../src/js/user-interface/pages/log-page"
import LogContainer from "../../../../../src/js/containers/LogContainer"
import {navigateToPage} from "../../../../../router"



let app;
const onNavigate = (h) => {
    navigateToPage(h)
}
let submitButton;
let notificationAside;
let appHeader;
describe('Log Suite', () => {

    beforeAll(async() => {
        app = document.createElement('div')
        app.id = "app"
        document.body.appendChild(app)
        app.innerHTML += header()
        app.innerHTML += notification()
    })

    //registerTests()
    loginTests()

})

function registerTests(){
    let logContainer;
    let user;
    beforeAll(() => {
        user = userEvent.setup()
        app.innerHTML += logPage(false)
        logContainer = new LogContainer(onNavigate, false)
        submitButton = screen.getByTestId('submit-button')
    })

    afterAll(() => {
        app.innerHTML = ""
        app.innerHTML += header()
        app.innerHTML += notification() 
    })
}


function loginTests(){
    let logContainer;
    let user
    beforeAll(async() => {
        user = userEvent.setup()
        app.innerHTML += logPage(true)
        logContainer = new LogContainer(onNavigate, true)
        submitButton = screen.getByTestId('submit-button')
        appHeader = await screen.findByTestId('app-header')
        notificationAside = await screen.findByTestId('notification')
    })

    test.skip('should be written Se connecter', () => {
        expect(screen.getByText('Se connecter')).toBeTruthy()
    })

    test('should have a notification aside', () => {
        expect(notificationAside).toBeInTheDocument()
    })

    test('should have an header app', () => {
        expect(appHeader).toBeInTheDocument()
    })


    test('should be written if failed to login Connexion échouée', async() => {

        const emailInput = screen.getByTestId('email')
        expect(emailInput).toBeTruthy()
        await userEvent.type(emailInput, 'boris@gmail.com')
        expect(emailInput).toHaveValue('boris@gmail.com')


        const passwordInput = screen.getByTestId('password')

        expect(passwordInput).toBeTruthy()
        
        await userEvent.type(passwordInput, 'caroline')

        expect(screen.getByTestId('password')).toHaveValue('caroline')

       
        await userEvent.click(submitButton)
        expect(notificationAside.querySelector('p')).toHaveTextContent('Connexion échouée')
     


    })

    afterAll(() => {
        app.innerHTML = ""
        app.innerHTML += header()
        app.innerHTML += notification() 
    })

    
}


