const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

// const regExp = /^[a-z0-9.]+@gmail.com$/;

phoneButton.onclick = () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}


// CONVERTER


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement1, targetElement2 ) =>{
    element.oninput = () =>{
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Comtent-type','application/json')
        request.send()

        request.onload = () =>{
            const data = JSON.parse(request.response)
            if (element.id === 'usd') {
                targetElement1.value = (element.value * data.usdXsom).toFixed(2);
                targetElement2.value = (element.value / data.eurXusd).toFixed(2);
                
            }
            if(element.id === 'som'){
                targetElement1.value = (element.value / data.usdXsom).toFixed(3);
                targetElement2.value = (element.value / data.eurXsom).toFixed(3);
                
            }
            if(element.id === 'eur'){
                targetElement1.value = (element.value * data.eurXusd).toFixed(2);
                targetElement2.value = (element.value * data.eurXsom).toFixed(2);
                
            }
            if (element.value === '') {
                targetElement1.value = ''
                targetElement2.value = ''
            }
            
        }

        
    }

}

converter(somInput, usdInput, eurInput )
converter(usdInput, somInput, eurInput)
converter(eurInput, usdInput, somInput)

// somInput.oninput = () =>{
//     const request = new XMLHttpRequest();
//     request.open("GET", '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()

//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }

// usdInput.oninput = () =>{
//     const request = new XMLHttpRequest();
//     request.open("GET", '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()

//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }













// SWITCH
// DZ-6


const nurdinNext = document.querySelector('#btn-next')
const nurdinPrev = document.querySelector('#btn-prev')
const nurdinBlock = document.querySelector('.card')






let cardId = 1

const NurdinFunc = (elementClick) =>{


    elementClick.onclick = () =>{
        if (elementClick.id === 'btn-next') {
            if (cardId === 20) {
                cardId = 0
            }
            if (cardId <= 19) {
                cardId++
                console.log(cardId);

                nurdinRender()

            } 
        }
        if (elementClick.id === 'btn-prev') {
            if (cardId === 1) {
                cardId = 21
            }
            if (cardId != 0) {
                cardId--
                console.log(cardId);

                nurdinRender()

            }
        }
    }

    
    const nurdinRender  = () =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        .then(response => response.json())
        .then(data => {
            nurdinBlock.innerHTML = `
                <p>${data.title}</p>
                <p>${data.completed}</p>
                <span>${data.id}</span>
            `
        })
    }

    nurdinRender()
}


NurdinFunc(nurdinNext)
NurdinFunc(nurdinPrev)




const renderPostsNurdin = () =>{
    
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

renderPostsNurdin()