import Button from "../../../../src/js/models/Button.js";


let btn;

describe('Button Class Suite', () => {

    beforeAll(() => {
        btn = new Button("", "home-page__button", "", "Découvrir nos offres")
    })
    tests()
})


function tests(){

    test('should have no id if no id is given as argument', () => {
        expect(btn.id).toBe("")
    })

    test('should have className home-page__button if this className has been given as argument', () => {
        expect(btn.className).toBe("home-page__button")
    })

    test('should have type button if no type has been given as argument', () => {
        expect(btn.type).toBe("button")
    })

    test('should have content "Découvrir nos offres" if this content has been given as argument', () => {
        expect(btn.content).toBe("Découvrir nos offres")
    })
}