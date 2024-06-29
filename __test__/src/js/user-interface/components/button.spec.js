import $ from "jquery"
import button from "../../../../../src/js/user-interface/components/button.js"
import Button from "../../../../../src/js/models/Button.js"


describe('button suite', () => {
    beforeAll(() => {
        let btn = new Button("", "home-page__button","", "Se connecter")
        document.body.innerHTML += button(btn)
    })
    tests()
})

function tests(){
    test('should have a least one button', () => {
        expect(button.length).toBeGreaterThan(0);
    })
    test('should a button with type button', () => {
        const btn = $('.home-page__button');
        expect(btn.attr('type')).toBe('button')
    })
}
