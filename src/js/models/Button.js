export default class Button {
    constructor(id, className, type, content){
        this.id =  id ? id : "";
        this.className = className ? className : "";
        this.type = type ? type : "button" 
        this.content = content ? content : "❌ Aucun contenu"
    }
}