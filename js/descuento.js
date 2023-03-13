const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento)

// const couponObj = {
//     'Mathias es Batman': 30,
//     '1234556': 25,
//     '123': 15,
// }

const couponsList = [];
couponsList.push({
    name: 'hola',
    discount: 30,
})

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon){
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }

    let discount;

    function isCouponInArray (couponElement){
      return  couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray);
    
    if (couponInArray){
        discount = couponInArray.discount;
    }else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    // if (couponObj [coupon]){
    //     discount = couponObj[coupon];
    // }else {
    //     pResult.innerText = 'El cupón no es válido';
    //     return
    // }

    // switch (coupon) {
    //     case 'Mathias es batman':
    //         discount = 30
    //         break;

    //     case 'No le digas a nadie':
    //     discount = 25;
    //     break;
    
    //     default:
    //         pResult.innerText = 'El cupón no es válido';
    //         return;
    // }

    // if (coupon == 'Mathias_es_Batman'){
    //     discount = 30;
    // } else if(coupon == 'no le digas a nadie'){
    //     discount = 25;
    // }else{
    //     pResult.innerText = 'El cupón no es válido';
    //     return
    // }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice;
}

