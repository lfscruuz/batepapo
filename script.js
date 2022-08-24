const overlay = document.querySelector('.overlay');
const blankarea = document.querySelector('.blankArea');
let button = document.querySelector('.button');
let chat = document.querySelector('.chat');
let text = '';
let li = '';
let contact = '';
let visibility = 'open'
const user = 'Luis';

function sidemenu(){    
    overlay.classList.remove('hidden');
    blankarea.classList.remove('hidden');
}

function backToChat(){
    overlay.classList.add('hidden');
    blankarea.classList.add('hidden');
}

function chooseOpen(open){
    visibility = 'open'
    console.log(open);
}

function sendOpen(){
    text = document.querySelector('.textBox').value;
    chat.innerHTML +=  `
    <li class="open">
        <p><strong>${user}</strong> para <strong>Todos</strong>: ${text}</p>
    </li>
    `
}

function choosePrivate(private){
    visibility = 'private'
    console.log(private);
    contact = prompt('pra quem você quer mandar mensagem?')
}

function sendPrivate(){
    text = document.querySelector('.textBox').value;
    chat.innerHTML += `
    <li class="private">
        <p><strong>${user}</strong> reservadamente para <strong>${contact}</strong>: ${text}</p>
    </li>
    `
    console.log(chat);
}

function sendMessage(){
    if (visibility === 'open'){
        sendOpen();
    } else {
        sendPrivate();
    }
}

console.log(text)