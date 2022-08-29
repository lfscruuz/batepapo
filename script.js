const overlay = document.querySelector('.overlay');
const blankarea = document.querySelector('.blankArea');
let optionGeneral = document.querySelectorAll('.chooseVisibility .checkmark');
let button = document.querySelector('.button');
let chat = document.querySelector('.chat');
let scroll = chat.querySelector('.open');
let contactList = document.querySelector('.contacts');
let text = '';
let li = '';
let contacts;
let contact = '';
let visibility = 'open';
let username = '';
let user = '';
let message = '';

login()
setInterval(statusUser, 5000)
getMessages()
getContacts()

function getContacts(){
    axios.get('https://mock-api.driven.com.br/api/v6/uol/participants')
    .then(dados => {
        dados.data.forEach(element => {
            contactList.innerHTML += `
        <div class="contact" onclick="chooseContact(this);">
            <li>
                <ion-icon class="icon" name="person-circle"></ion-icon>
                <p>${element.name}</p>
            </li>
            <ion-icon class="checkmark hidden" name="checkmark-outline"></ion-icon>
        </div>`;
        });
    })
}

function login(){
    username = prompt('Qual o seu nome?');
    if (username !== null){
        user = {
            name: username
        }
        axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', user);
    }

    chat.innerHTML += `
        <li class="status">
             <p><strong>${username}</strong> entra na sala</p>
        </li>
    `
}

function statusUser(){
    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', user);
}

function getMessages(){
    axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    .then(dados =>{
        dados.data.forEach(element => {
            if(element.type === 'status'){
                chat.innerHTML += `
                <li class="status">
                    <p><strong>${element.from}</strong> entra na sala</p>
                </li>`
            }else{
                if (element.to === 'Todos'){
                    chat.innerHTML += `
                    <li class="open">
                        <p><strong>${element.from}</strong> para <strong>${element.to}</strong>: ${element.text}</p>
                    </li>
                    `
                }else{
                    chat.innerHTML += `
                    <li class="private">
                        <p><strong>${element.from}</strong> reservadamente para <strong>${element.to}</strong>: ${element.text}</p>
                    </li>
                    `
                }
            }
            
        })
    })
}

function send(username, to, text, type){
    message = {
		from: username,
		to: to,
		text: text,
		type: type
	}
    axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', )
}

function sidemenu(){    
    overlay.classList.remove('hidden');
    getContacts()
    blankarea.classList.remove('hidden');
}

function backToChat(){
    overlay.classList.add('hidden');
    blankarea.classList.add('hidden');
}

function chooseContact(contacts){
    contact = contacts.querySelector('p').innerHTML;
    let allOptions = document.querySelectorAll('.contacts .checkmark');
    let chosenOption = contacts.querySelector('.contact .checkmark');
    console.log(contact)
    allOptions.forEach((item) => {
        item.classList.add('hidden');
    })
    if (contact === 'Todos'){
        visibility = 'open';
        chooseOpen();
        chosenOption.classList.toggle('hidden');
    }else{
        visibility = 'private';
        choosePrivate();
        chosenOption.classList.toggle('hidden');
    }
}

function chooseOpen(open){
    open = document.querySelector('.visibilityOpen');
    let option = open.querySelector('.chooseVisibility .checkmark');
    optionGeneral.forEach(item => {
        item.classList.add('hidden')
    })
    option.classList.toggle('hidden');
    visibility = 'open';
}

function choosePrivate(private){
    private = document.querySelector('.visibilityPrivate');
    let option = private.querySelector('.chooseVisibility .checkmark');
    optionGeneral.forEach(item => {
        item.classList.add('hidden')
    })
    if (option.classList.contains('hidden')){
        option.classList.remove('hidden');
        visibility = 'private';
    }else{
        optionGeneral.classList.add('hidden');
        visibility = 'open';
    }
}

function sendOpen(){
    text = document.querySelector('.textBox').value;
    chat.innerHTML +=  `
    <li class="open">
        <p><strong>${username}</strong> para <strong>Todos</strong>: ${text}</p>
    </li>
    `
    send(username, 'todos', text, 'message')
}

function sendPrivate(chosenContact){
    text = document.querySelector('.textBox').value;
    chat.innerHTML += `
    <li class="private">
        <p><strong>${username}</strong> reservadamente para <strong>${contact}</strong>: ${text}</p>
    </li>
    `
    send(username, 'contact', text, 'private_message')
}

function sendMessage(){
    if (visibility === 'open'){
        sendOpen();
    } else {
        sendPrivate();
    }
}