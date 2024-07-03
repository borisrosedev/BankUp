export default function(btn){
    return(
        `
            <button 
                id="${btn.id}"
                class="button ${btn.className}"
                type="${btn.type}"
                data-testid="${btn.id}"
            >${btn.content}</button>
        
        `
    )
}


