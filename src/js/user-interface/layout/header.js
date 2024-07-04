function navBar() {
  const token = JSON.parse(localStorage.getItem("token"));

  return `
            <nav class="nav">
                <a href="./">
                    <i class="fa-solid fa-house"></i>
                </a>
                 ${
                   token
                     ? `<a href="#logout">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>`
                     : `<a href="#login">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </a>`
                 }
            </nav>
        
        
        `;
}

export default function () {
  console.log("🎾 dev says: header has been called");
  return `
            <header 
                class="header" data-testid="app-header"
            >
                <a href="./">BankUp</a>
                ${navBar()}
            </header>
        
        `;
}
