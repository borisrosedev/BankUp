function navBar(){

    return(
        `
            <nav class="nav">
                <a href="./">
                    <i class="fa-solid fa-house"></i>
                </a>
                 <a href="#login">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </a>
            </nav>
        
        
        `
    )
}



export default function(){
    console.log('🎾 dev says: header has been called')
    return(
        `
            <header class="header">
                <a href="./">BankUp</a>
                ${navBar()}
            </header>
        
        `
    )
}