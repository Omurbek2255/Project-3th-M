const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp = /^[a-z0-9.]+@gmail.com$/;
gmailButton.onclick = () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}





const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let posBlock = 0

const myFunk = (e,y) => {
    posBlock++
    console.log(posBlock);
    childBlock.style.left = `${posBlock}px`
    if (posBlock <= 446) {
        myFunk()
    }


    // e++
    // console.log(e);
    // y.style.left = `${e}px`
    // if (e <= 446) {
    //     myFunk()
    // }
    // Я не понял почему этот код не работает?
}


myFunk(posBlock, childBlock)


