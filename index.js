

const btn = document.getElementById("genPass")
const newPass = document.getElementById("newPass")
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeValue")
rangeVal.innerText = slider.value

slider.addEventListener('input',(e)=>{
    rangeVal.innerText = e.target.value
})

btn.addEventListener('click',()=>{
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let numberStr = '0123456789'
    let symbolsStr = '~`!@#$%^&*()_+{}[]'
    let finalStr = ''

    

    for(let i=0; i<slider.value; i++){
        console.log(i)
    }




   newPass.innerText = "New Password Generated"
})