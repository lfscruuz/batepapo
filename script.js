const overlay = document.querySelector('.overlay')
const blankarea = document.querySelector('.blankarea')

function sidemenu(){    
    overlay.classList.remove('hidden')
    blankarea.classList.remove('hidden')
}

function backToChat(){
    overlay.classList.add('hidden')
    blankarea.classList.add('hidden')
}