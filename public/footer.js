const createFooter=()=>{
    let footer= document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Sweatshirt</a></li>
            <li><a href="#" class="footer-link">Shirt</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sport</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Sweatshirt</a></li>
            <li><a href="#" class="footer-link">Shirt</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sport</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Excepturi accusamus quam laboriosam dolorem aspernatur, 
     laborum dolores cumque minus eaque natus? Repellat
     debitis aliquam tenetur ipsum commodi 
     labore sapiente sed similique.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Excepturi accusamus quam laboriosam dolorem aspernatur, 
     laborum dolores cumque minus eaque natus? Repellat
     debitis aliquam tenetur ipsum commodi 
     labore sapiente sed similique.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Excepturi accusamus quam laboriosam dolorem aspernatur, 
     laborum dolores cumque minus eaque natus? Repellat
     debitis aliquam tenetur ipsum commodi 
     labore sapiente sed similique.
</p>
<p class="info"> Support Emails - fake@email.com, fake2@email.com </p>
<p class="info">Telephone - (123)-456-7890, (098)-765-4321</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">Terms & Services</a>
        <a href="#" class="social-link">Privacy Page</a>
    </div>
    <div>
        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="social-link"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}
createFooter();