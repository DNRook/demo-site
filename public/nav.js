const createNav=()=>{
    let nav= document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="nav">
        <img src="img/dark-logo.png" class="brand-logo">
        <div class="nav-item">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brands, product">
                <button class="search-btn">search</button> 
            </div>
            <a>
                <img src="img/user.png" id="user-img">
                <div class="login-logout-popup hide">
                    <p class="account-info"> Logged in as,name</p>
                    <button class="account-btn" id="user-btn">Log out</button>
                </div>
            </a>
            <a href="#"><img src="img/cart.png"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#home" class="link">Home</a></li>
        <li class="link-item" ><a href="#women" class="link">Women</a></li>
        <li class="link-item" ><a href="#mens" class="link">Men</a></li>
        <li class="link-item"><a href="#shoes" class="link">Shoes</a></li>
    </ul>
    `;
}
createNav();

const scrollLinks = document.querySelectorAll(".link");
const navbar = document.querySelector(".nav");

scrollLinks.forEach((link)=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        //this will grab a string of the href without the #
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);

        const navHeight=navbar.getBoundingClientRect().height;

        //return a distance from the element to the parent element
        let position = element.offsetTop - navHeight-50;
       
        window.scrollTo({
            left: 0,
            top: position,
          });
    })
})

const userImageButton=document.getElementById('user-img');
const userPopup=document.querySelector('.login-logout-popup');
const popuptext=document.querySelector('.account-info');
const actionBtn=document.querySelector('#user-btn');

userImageButton.addEventListener('click', ()=>{
    userPopup.classList.toggle('hide');
})

window.onload=()=>{
    let user=JSON.parse(sessionStorage.user||null);
    if(user!==null){
        popuptext.innerHTML=`logged in as ${user.username}`;
        actionBtn.innerHTML='log out';
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    }
    else{
        popuptext.innerHTML='log in to your account';
        actionBtn.innerHTML='log in';
        actionBtn.addEventListener('click',()=>{
            //this is different than the replace sicne this keeps its history meaning 
            //you can return back to the previous page
            location.href='/login';
        })
    }
}