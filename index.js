const userName = 'diegosmp'
const passwordUser = '123abc'

const divAuth = document.querySelector('#auth')
const message = document.createElement('p')
const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const formLogin = document.querySelector('#formLogin')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    if(inputUser.value === userName && inputPass.value === passwordUser){
        message.classList.remove('error')
        message.classList.add('success')
        message.textContent = 'Logado com sucesso'
        divAuth.append(message)
        inputUser.value = ''
        inputPass.value = ''
    } else {
        message.classList.remove('success')
        message.classList.add('error')
        message.textContent = 'Usuário/senha não estão correto'
        divAuth.append(message)
    }
})