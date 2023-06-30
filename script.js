// Evento de erro quando o formulário estiver vazio

const submit = document.getElementById('btn');
submit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let valid = true;

    if (!firstName.value) {

        const error1 = document.getElementById('error1')
        error1.classList.add('visible');
        firstName.classList.add('invalid');
        firstName.removeAttribute('placeholder') 
        error1.setAttribute('aria-hidden', false);
        error1.setAttribute('aria-invalid', true);

    } if (!lastName.value) {

        const error2 = document.getElementById('error2')
        error2.classList.add('visible');
        lastName.classList.add('invalid');
        lastName.removeAttribute('placeholder') 
        error2.setAttribute('aria-hidden', false);
        error2.setAttribute('aria-invalid', true);

    } if (!email.value) {

        const error3 = document.getElementById('error3')
        error3.classList.add('visible');
        email.classList.add('invalid');
        email.removeAttribute('placeholder') 
        error3.setAttribute('aria-hidden', false);
        error3.setAttribute('aria-invalid', true);
        document.getElementsByName('email')[0].placeholder = 'email@example/com'
        email.style.webkitTextFillColor = 'hsl(0, 100%, 74%)'

    }   if (!password.value) {

        const error4 = document.getElementById('error4')
        error4.classList.add('visible');
        password.classList.add('invalid');
        password.removeAttribute('placeholder') 
        error4.setAttribute('aria-hidden', false);
        error4.setAttribute('aria-invalid', true);
    }
    return valid;
}

// Retirada do erro quando o usuário clica no input

const firstName = document.getElementById('first-name')
firstName.addEventListener('focus', () => {
    document.getElementsByName('first-name')[0].placeholder = 'First Name'
})

const lastName = document.getElementById('last-name')
lastName.addEventListener('focus', () => {
    document.getElementsByName('last-name')[0].placeholder = 'Last Name'
})

const email = document.getElementById('email')
email.addEventListener('focus', () => {
    email.style.webkitTextFillColor = 'hsl(249, 10%, 26%)'
    document.getElementsByName('email')[0].placeholder = 'Email Address'
})

const password = document.getElementById('password')
password.addEventListener('focus', () => {
    document.getElementsByName('password')[0].placeholder = 'Password' 
})

const inputs = document.querySelectorAll('input')
for (let input of inputs) {
    input.addEventListener('focus', () => {
        input.classList.remove('invalid') 
    })
}

document.getElementById('first-name').onclick = function(){
    document.getElementById('error1').outerHTML = ''
}

document.getElementById('last-name').onclick = function(){
    document.getElementById('error2').outerHTML = ''
}

document.getElementById('email').onclick = function(){
    document.getElementById('error3').outerHTML = ''

}

document.getElementById('password').onclick = function(){
    document.getElementById('error4').outerHTML = ''

}