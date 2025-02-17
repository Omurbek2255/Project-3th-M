const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () =>{
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.style.overflow = ''
}


modalTriggerButton.onclick = openModal
modalCloseButton.onclick = closeModal
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}







const scrollHandler = () => {
    if ((window.scrollY + window.innerHeight) > document.body.scrollHeight - 1) {
        openModal()
        window.removeEventListener('scroll', scrollHandler)
    }
}

window.addEventListener('scroll', scrollHandler)

document.onload = setTimeout(() => {
    openModal()
}, 10000);

