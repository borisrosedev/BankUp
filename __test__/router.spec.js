import router from "../router";
import $ from "jquery";

let app;

describe('router suite', () => {

    beforeEach(() => {
        app = document.createElement('div')
        app.id = "app";
        document.body.appendChild(app);
    })
    tests()

})


function tests(){

    test('should navigate to homePage', () => {
        // elle a des effets de bord
       const mockedRouter = jest.fn(router)
       mockedRouter()
       //expect(mockedRouter).toHaveBeenCalled();
       expect($(".main p").text()).toBe("Vous êtes sur la page d'accueil de notre site");
    })
}


