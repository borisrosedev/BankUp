export default function (input) {
  return `
            <article class="article-input">
                <label for="${input.id}"></label>
                <input 
                    id="${input.id}" 
                    placeholder="${input.placeholder}"
                    name="${input.name}"
                    type="${input.type}"
                    data-testid="${input.id}"
                    class="input ${input.className}"
                    required
                    aria-required
                />
                <section id="${input.id}-error" class="input-error"></section>
            </article>
    
        `
}
