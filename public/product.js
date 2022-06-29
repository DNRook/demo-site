const productImages=document.querySelectorAll('.product-images img');
const productImageSlide=document.querySelector('.image-slider');

let activeSlide=0;

productImages.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        productImages[activeSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage=`url('${item.src}')`;
        activeSlide=i;
    })
})

//size btn

const sizeBtns=document.querySelectorAll('.size-radio-btn');
let checkBtn=0;

sizeBtns.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        sizeBtns[checkBtn].classList.remove('checked');
        item.classList.add('checked');
        checkBtn=i;
    })
})