import ArticleInput from "../ArticleInput/ArticleInput.js";
import Button from "../Button/Button.js";

export default class Form {

    constructor({id, className, inputs, buttons}){
        this.id = id;
        this.className = className ? className : "";
        this.buttons = buttons.map((btn) => new Button({...btn}))
        this.inputs = inputs.map((ipt) => new ArticleInput({...ipt}))
    }
}