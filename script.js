const passwordLbl = document.querySelector("#passwordLbl")
const generateBtn = document.querySelector("#generateBtn")

function generatePassword(){
    return Math.floor(Math.random() * 99999999)
    
}

generateBtn.addEventListener("click",()=>{
    generatePassword()
})