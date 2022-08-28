const overlay = document.querySelector('.overlay');
const blankarea = document.querySelector('.blankArea');
let button = document.querySelector('.button');
let chat = document.querySelector('.chat');
let scroll = chat.querySelector('.open')
let contactList = document.querySelector('.contacts')
let text = '';
let li = '';
let contacts;
let contact = '';
let visibility = 'open';
let username = ''
let user = ''
let message = ''

// // setTimeout(getContacts, 5000)

// // criar uma array com objeto de tudo
// // isso inclui nome do contato, data e mensagem
// //let arrayExemplo = [
//     // {name: 'balbalabla', mensagem: 'balbalablabl'}
//     // {name: 'juninho', mensagem: 'opa bao'}
// // ]

// // login()
// setInterval(statusUser, 5000)
// getMessages()

// function getContacts(){
//     axios.get('https://mock-api.driven.com.br/api/v6/uol/participants')
//     .then(dados => {
//         dados.data.forEach(element => {
//             contactList.innerHTML += `
//         <div class="contact" onclick="chooseContact(this);">
//             <li>
//                 <ion-icon class="icon" name="person-circle"></ion-icon>
//                 <p>${element.name}</p>
//             </li>
//             <ion-icon class="checkmark hidden" name="checkmark-outline"></ion-icon>
//         </div>`;
//         });
//     })
// }

// function login(){
//     username = prompt('Qual o seu nome?')
//     if (username !== null){
//         user = {
//             name: username
//         }
//         axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', user)
//     }

// }

// function statusUser(){
//     axios.post('https://mock-api.driven.com.br/api/v6/uol/status', user)
//     console.log(user)
// }

// function getMessages(){
//     axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
//     .then(dados =>{
//         dados.data.forEach(element => {
//             if(element.type === 'status'){
//                 chat.innerHTML += `
//                 <li class="status">
//                     <p><strong>${element.from}</strong> entra na sala</p>
//                 </li>`
//             }else{
//                 if (element.to === 'Todos'){
//                     chat.innerHTML += `
//                     <li class="open">
//                         <p><strong>${element.from}</strong> para <strong>${element.to}</strong>: ${element.text}</p>
//                     </li>
//                     `
//                 }else{
//                     chat.innerHTML += `
//                     <li class="private">
//                         <p><strong>${element.from}</strong> reservadamente para <strong>${element.to}</strong>: ${element.text}</p>
//                     </li>
//                     `
//                 }
//             }
            
//         })
//     })
// }

// function send(to){
//     message = {
// 		from: username,
// 		to: to,
// 		text: "entra na sala...",
// 		type: "status",
// 		time: "08:01:17"
// 	}
//     axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', )
// }

function sidemenu(){    
    overlay.classList.remove('hidden');
    // getContacts()
    blankarea.classList.remove('hidden');
}

function backToChat(){
    overlay.classList.add('hidden');
    blankarea.classList.add('hidden');
}

// function chooseContact(contacts){
//     console.log(contacts)
// }

// function chooseOpen(open){
//     let option = open.querySelector('.chooseVisibility .checkmark')
//     console.log(option)
//     option.classList.remove('hidden')
//     visibility = 'open'
// }

// function choosePrivate(private){
//     let option = private.querySelector('.chooseVisibility .checkmark')
//     console.log(option)
//     if (option.classList.contains('hidden')){
//         option.classList.remove('hidden')
//         visibility = 'private'
//     }else{
//         option.classList.add('hidden')
//         visibility = 'open'
//     }
// }

// function sendOpen(){
//     text = document.querySelector('.textBox').value;
//     chat.innerHTML +=  `
//     <li class="open">
//         <p><strong>${username}</strong> para <strong>Todos</strong>: ${text}</p>
//     </li>
//     `
//     scroll = chat.querySelector('.open')
//     scroll.scrollIntoView()
//     send('Todos')
// }

// function sendPrivate(){
//     text = document.querySelector('.textBox').value;
//     chat.innerHTML += `
//     <li class="private">
//         <p><strong>${username}</strong> reservadamente para <strong>${contact}</strong>: ${text}</p>
//     </li>
//     `
//     scroll = chat.querySelector('.private')
//     scroll.scrollIntoView()
// }

// function sendMessage(){
//     if (visibility === 'open'){
//         sendOpen();
//     } else {
//         sendPrivate();
//     }
// }