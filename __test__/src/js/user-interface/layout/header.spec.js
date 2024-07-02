import $ from "jquery"
import header from "../../../../../src/js/user-interface/layout/header.js"

let app;


describe('header suite', () => {
    beforeAll(() => {
        app = document.createElement('div');
        document.body.appendChild(app)
        app.id = "app";
        app.innerHTML = "";
        app.innerHTML += header()
    })

    tests()
})


function tests(){
    test('shoud contain the test BankUp', () => {
        expect($('header a').length).toBeGreaterThan(0)
        expect($('header a').first().text()).toBe('BankUp')
    })

    test('shoud contain 2 anchors in the nav', () => {
        expect($('nav a').length).toEqual(2)
    })
}