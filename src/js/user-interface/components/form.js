import articleInput from "./article-input";
import button from "./button";

export default function (data) {
  return `
            <form id="${data.id}" class="form ${data.className}">
                <section class="form__inputs">
                    ${data.inputs.map((ipt) => articleInput(ipt)).join("")}
                </section>
                <section class="form__buttons">
                    ${data.buttons.map((btn) => button(btn)).join("")}
                </section>
            </form>
        
        `;
}
