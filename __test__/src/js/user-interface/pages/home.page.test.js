/**
* @jest-environment jsdom
*/
import $ from 'jquery';
import homePage from "../../../../../src/js/user-interface/pages/home-page.js"

// $(document).ready(function() {
//     console.log('jQuery is working!');
// });
let app;

describe('HomePage Suite', () => {

    beforeEach(() => {
        app = document.createElement('div');
        app.id = "app";
        document.body.appendChild(app)
        app.innerHTML = homePage()
        
    })

    tests()
})

function tests(){

    test('homepage is into app div', () => {
        var paragraphText = $('.main p').text();
        expect(paragraphText).toBe("Vous êtes sur la page d'accueil de notre site")

    })

}
