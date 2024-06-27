export function makeOperation(digit){
    const button = document.getElementById('result-button')
    switch(button.dataset.operation){
        case "add":
            button.dataset.val = Number(button.dataset.val) + Number(digit);
            break;
        case "substract":
            button.dataset.val = Number(button.dataset.val) + - Number(digit)    
            break;
        case "divide":
            button.dataset.val = Number(button.dataset.val) / Number(digit) 
            break;
        case "multiply":
            button.dataset.val = Number(button.dataset.val) * Number(digit)  
            break;
        default:
            button.dataset.val = Number(button.dataset.val) +  Number(digit)
            break;
        
    }
}