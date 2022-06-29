const submitBtn = document.querySelector('.submit-btn');
const username = document.getElementById('name')||null;
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number') || null;

const loader = document.querySelector('.loader');

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', () => {
    if (username != null) { //sign up section

        if (username.value.length < 3) {
            showAlert('not valid user');
        }
        else if (!email.value.match(validRegex) || email.value === undefined) {
            showAlert('not valid email')
        }
        else if (password.value.length < 6) {
            showAlert('not valid password')
        }
        else if (number.value.length < 10 || number.value.length > 10 || !Number(number.value)) {
            showAlert('not valid phone number')
        }
        else {
            loader.style.display = 'block';
            sendData('/signup', {
                username: username.value,
                email: email.value,
                password: password.value,
                number: number.value,
            })
        }
    }
    else{//login section
        if(!email.value.length||!password.value.length){
            showAlert('Fill all the inputs')
        }
        else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }

})

const sendData = (path, data) => {
    //when this is makign a fetch request and send the body, it goes to the express "server"
    //file and performs the actions there.
    fetch(path, {
        method: 'post',
        //this header is for the brower to detect the media type, here we want to send a
        //application through and to read it properly, it needs to be json
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => processData(data))
}
const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
        showAlert(data.alert);
    }
    else if (data.username) {
        sessionStorage.user = JSON.stringify(data);
        location.replace('/')
    }
}


const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}