import ArticleInput from "../ArticleInput/article-input.js"
import Button from "../Button/button-model.js"

export default class FormModel {
  constructor({ id, className, inputs, buttons }) {
    this.id = id
    this.className = className ? className : ""
    this.buttons = buttons.map(btn => new Button({ ...btn }))
    this.inputs = inputs.map(ipt => new ArticleInput({ ...ipt }))
  }
}
