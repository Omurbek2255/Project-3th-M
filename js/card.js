const render = document.querySelector('.render_card')

const API_URL = 'https://jsonplaceholder.typicode.com/posts'


const RenderFunc = async() =>{
    try{
        const respone = await fetch(`${API_URL}`)
        const data = await respone.json()
        
        // console.log(data);
        data.forEach(item => {
           if (item.id <= 10) {
            const card_block = document.createElement('div')
            console.log(item);
            
            card_block.innerHTML = `
                <div class="card">
                    <div class="card_img">

                    </div>
                    <div class="card_title">
                        <h2>${item.title}</h2>
                        <p>ID:${item.id}<b/>
                    </div>
                </div>
            `
            render.appendChild(card_block)

           }
            
        })
        
    } catch(e){
        console.log(e);
        
    }
}

RenderFunc()