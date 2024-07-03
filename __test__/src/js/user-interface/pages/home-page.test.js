// /**
// * @jest-environment jsdom
// */
import $ from 'jquery';
import homePage from "../../../../../src/js/user-interface/pages/home-page.js"

// $(document).ready(function() {
//     console.log('jQuery is working!');
// });
let app;

describe('HomePage Suite', () => {

    beforeAll(() => {
        app = document.createElement('div');
        app.id = "app";
        document.body.appendChild(app)
        app.innerHTML = homePage()
        
    })

    tests()
})

function tests(){

 
    test('should have at least one button', () => {
        expect($('button.home-page__button').length).toBeGreaterThan(0)

    })

    test('should have a button with content Se connecter', () => {
    
        expect($('button.home-page__button').first().text()).toBe('Se connecter')

    })

}
