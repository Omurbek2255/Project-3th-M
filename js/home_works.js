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




const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth - 1;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight - 1;

let posX = 0, posY = 0;
const step = 2;
let direction = 'right';

const myFunk = () => {
    if (direction === 'right') {
        if (posX < offsetWidth) {
            posX += step;
        } else { 
            direction = 'down';
        }
    }
    
    if (direction === 'down') {
        if (posY < offsetHeight) {
            posY += step;
        } else {
            direction = 'left';
        }
    }
    
    if (direction === 'left') {
        if (posX > 0) {
            posX -= step;
        } else {
            direction = 'up';
        }
    }
    
    if (direction === 'up') {
        if (posY > 0) {
            posY -= step;
        } else {
            direction = 'right';
        }
    }
    
    childBlock.style.left = `${posX}px`;
    childBlock.style.top = `${posY}px`;
    
    requestAnimationFrame(myFunk);
};

myFunk();






const secondsBlock = document.querySelector('#seconds')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let interval = null
let seconds = 0

startButton.onclick = () =>{
    if (interval === null) {
            interval = setInterval(() => {
                seconds++
                secondsBlock.innerHTML = seconds
            }, 1000);
    }
}

stopButton.onclick = () =>{
    if (interval !== null) {
        clearInterval(interval)
        interval === null
    }
}

resetButton.onclick = () =>{
    clearInterval(interval)
    seconds = 0
    secondsBlock.innerHTML = seconds
    interval = null
    console.log(interval);
    
}














// hw-4

const charList = document.querySelector('.characters-list')

const renderChar = () =>{
    const reqest = new XMLHttpRequest()
    reqest.open('GET', '../data/data.json')
    reqest.setRequestHeader('Content-type', 'application/json')
    reqest.send()

    reqest.onload = () =>{
        const data = JSON.parse(reqest.response)
        console.log(data);
        
        data.forEach(item => {
            
            const charBlock = document.createElement('div')
            charBlock.classList.add('character-card')

            charBlock.innerHTML = `
                <div class=" character-photo">
                    <img src="${item.photo}" alt="${item.name}}">
                </div>
                <h2>${item.name}</h2>
                <h4>${item.age}</h4>

            `

            charList.appendChild(charBlock)
        });
    }
}

renderChar()    