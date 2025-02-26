const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/



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


// SWITCH
// DZ-6


const nurdinNext = document.querySelector('#btn-next')
const nurdinPrev = document.querySelector('#btn-prev')
const nurdinBlock = document.querySelector('.card')






let cardId = 199

const NurdinFunc = (elementClick) =>{


    elementClick.onclick = () =>{
        if (elementClick.id === 'btn-next') {
            if (cardId === 200) {
                cardId = 0
            }
            if (cardId <= 199) {
                cardId++
                console.log(cardId);

                nurdinRender()

            } 
        }
        if (elementClick.id === 'btn-prev') {
            if (cardId === 1) {
                cardId = 201
            }
            if (cardId != 0) {
                cardId--
                console.log(cardId);

                nurdinRender()

            }
        }
    }

    
    const nurdinRender  =  async () =>{
        try{
            const response  = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
            const data = await response.json()
            nurdinBlock.innerHTML = `
                <p>${data.title}</p>
                <p>${data.completed}</p>
                <span>${data.id}</span>
            `
        } catch(e){
            console.log(e);
            
        }
    }

    nurdinRender()
}


NurdinFunc(nurdinNext)
NurdinFunc(nurdinPrev)





const renderPostsNurdin = async () =>{
    try{
        const response  = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        console.log(data);
    } catch(e){
        console.log(e);
        
    }
}

renderPostsNurdin()














const searchInput = document.querySelector('.cityName')
const searchButton = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_TOKEN = 'e417df62e04d3b1b111abeab19cea714'

searchButton.onclick = async () =>{
    try{
        if (searchInput.value === '') {
            city.innerHTML = 'Введите название города'
            temp.innerHTML = ''
            return
        }
        const response = await fetch(`${API_URL}?appid=${API_TOKEN}&q=${searchInput.value}&lang=ru&units=metric`)
        const data = await response.json()
        city.innerHTML = data.name || 'Город не найден'
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '°C' : ''

        searchInput.value = ''
    } catch(e){
        console.log(e);
        
    }
}









