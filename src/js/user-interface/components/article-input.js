export default function(input){
    return(
        `
            <article class="article-input">
                <label for="${input.id}"></label>
                <input 
                    id="${input.id}" 
                    placeholder="${input.placeholder}"
                    name="${input.name}"
                    type="${input.type}"
                    class="input ${input.className}"
                    required
                    aria-required
                />
            </article>
    
        `
    )
}