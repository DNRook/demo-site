let user=JSON.parse(sessionStorage.user||null);
let loader=document.querySelector('.loader');
const actualprice=document.getElementById('actual-price');
const discountprice=document.getElementById('discount');
const sellingprice=document.getElementById('sell-price');

window.onload=()=>{
    if(user){
        location.replace('/login');
    }
}



discountprice.addEventListener('input',()=>{
    console.log(actualprice.value, discountprice.value)
    if(discountprice.value>100){
        discountprice.value=90;
    }
    else{
        let discount=actualprice.value*(discountprice.value/100);
        sellingprice.value="$"+`${actualprice.value-discount} (sell price)`+ " - 20%"+`= $${actualprice.value-discount-(actualprice.value-discount)*0.2} (profit)`;
    }
})


let uploadimage=document.querySelector('.fileupload');
let imagepaths=[];