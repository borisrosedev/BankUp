export default class Button {
  constructor({ type, content, id, className }) {
    this.className = className ? className : "";
    this.id = id ? id : "";
    this.type = type ? type : "button";
    this.content = content ? content : "❌ Aucun contenu";
  }
}
