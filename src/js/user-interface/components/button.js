export default function(btn){
    return(
        `
            <button 
                id="${btn.id}"
                class="button ${btn.className}"
                type="${btn.type}"
            >${btn.content}</button>
        
        `
    )
}


