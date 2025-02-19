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


