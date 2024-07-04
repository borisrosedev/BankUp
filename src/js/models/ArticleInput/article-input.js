export default class ArticleInput {
  constructor({ id, placeholder, name, className, type }) {
    this.id = id
    this.name = name ? name : id
    this.placeholder = placeholder
    this.type = type ? type : "text"
    this.className = className ? className : ""
  }
}
