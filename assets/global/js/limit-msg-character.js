// Script.js 
let area = 
    document.getElementById("textarea"); 
let totalChar = document.getElementById( 
    "total-container"
); 
let remChar = document.getElementById( 
    "remaining-container"
); 
let msgResponse = document.getElementById( 
    "msg-limitExceeded"
); 
let maxLength = 150; 
updateCount(); 
area.addEventListener("input", () => { 
    updateCount(); 
}); 
area.addEventListener( 
    "keydown", 
    (event) => { 
        let textLength = 
            area.value.length; 
        if ( 
            textLength >= maxLength && 
            event.key !== "Backspace"
        ) { 
            event.preventDefault(); 
            remChar.classList.add( 
                "limit-exceeded"
            ); 
            msgResponse.textContent = "Character Limit Exceeded";
        } else { 
            remChar.classList.remove( 
                "limit-exceeded"
            ); 
            msgResponse.textContent = " ";
        } 
    } 
); 

function updateCount() { 
    let length = area.value.length; 
    totalChar.textContent = length; 
    remChar.textContent = 
        maxLength - length; 
} 