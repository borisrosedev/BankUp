import $ from "jquery"
import header from "../../../../../src/js/user-interface/layout/header.js"

let app;


describe('header suite', () => {
    beforeEach(() => {
        app = document.createElement('div');
        document.body.appendChild(app)
        app.id = "app";
        app.innerHTML += header()
    })

    tests()
})


function tests(){
    test('shoud contain the test BankUp', () => {
        expect($('header a').length).toBeGreaterThan(0)
        expect($('header a').first().text()).toBe('BankUp')
    })
}