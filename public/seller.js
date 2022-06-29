let loader=document.querySelector('.loader');
const applyBtn = document.getElementById('apply-btn');
const becomeSeller = document.querySelector('.become-seller');
const applyForm = document.querySelector('.apply-form');
const formSubmit = document.getElementById('apply-form-btn');
const realinfo = document.getElementById('#realinfo');
 const header=document.querySelector('.title');
 const logo=document.getElementById('logo');

window.onload=()=>{
    let user=JSON.parse(sessionStorage.user|| null);

    if(user===null){
        location.replace('/login');
    }
    else if(user.seller){
        becomeSeller.classList.add('hide');
        header.classList.add('hide');
        logo.style.display='none';
    }
}

applyBtn.addEventListener('click', () => {
    becomeSeller.classList.add('hide');
    applyForm.classList.remove('hide');
})

formSubmit.addEventListener('click', () => {
    const businessName = document.getElementById('business-name').value;
    const address = document.getElementById('business-add').value;
    const about = document.getElementById('about').value;
    const phone = document.getElementById('number').value;
    if (!businessName.length || !address.length || !about.length || !phone.length|| realinfo===false) {
        showAlert('fill all inputs');
    }
    else{
        loader.style.display='block';
        sendData('/seller',{
            username:businessName,
            address:address,
            about:about,
            number:phone,
            email:JSON.parse(sessionStorage.user).email
        })
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
    else if(data.seller){
        let user=JSON.parse(sessionStorage.user);
        //used to update the sessionStorage
        user.seller=true;
        sessionStorage.user=JSON.stringify(user);
        location.replace('/');
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