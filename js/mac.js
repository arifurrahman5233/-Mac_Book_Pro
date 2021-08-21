//-- base Amount----//
const baseAmount = document.getElementById('basePrice');

//---- Memory------//

const memoryStorage8 = document.getElementById('memory8gb');
const memoryStorage16 = document.getElementById('memory16gb');

// ----storage-----//
const storage256 = document.getElementById('storage256gb')
const storage512 = document.getElementById('storage512gb')
const storage1 = document.getElementById('storage1tb')

//-- shipping----//
const freeDelivery0 = document.getElementById('freeDelivery');
const urgentDelivery20 = document.getElementById('urgentDelivery');

//---- total----//
const total = document.getElementById('totalCost');
const totalAmount = document.getElementById('totalPrice');


//--- Memory update---//
const memoryCost8gb = document.getElementById('memoryCost');
const memoryCost16gb = document.getElementById('memoryCost')

//--- storage update----//
const storageCost256gb = document.getElementById('storageCost');
const storageCost512gb = document.getElementById('storageCost');
const storageCost1TB = document.getElementById('storageCost');
 
//---- shipping update---//

const deliveryCost0 = document.getElementById('deliveryCost');
const deliveryCost20 = document.getElementById('deliveryCost');

//--- base update---//

const baseFixed = document.getElementById('basePrice');

//---- total update----// 
function updateTotal() {
    const memoryPrice = Number(memoryCost16gb.innerText);
    const storagePrice = Number(storageCost256gb.innerText);
    const storageprice1TB = Number(storageCost1TB.innerText);
    const shippingPrice = Number(deliveryCost20.innerText);
    const baseTotal = Number(baseFixed.innerText);
     
    const grandTotal = memoryPrice + baseTotal + storagePrice +storageprice1TB +  shippingPrice;
    total.innerText = grandTotal;
    totalAmount.innerText = grandTotal;
    

//----Promo apply---//
document.getElementById('promoApply').addEventListener('click', function () {
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceText = totalPrice.innerText;
    const totalPriceNumeric = grandTotal;

    const promoInput = document.getElementById('promoCode');
    const promoInputText = promoInput.value;

    if (promoInputText == 'stevekaku') {
        const discountPrice = totalPriceNumeric * 0.2;
        const totalPriceAmount = grandTotal - discountPrice;
        totalPrice.innerText = totalPriceAmount;
        promoInput.value = '';
        document.getElementById("promoApply").disabled = true;
    }
    else {
        totalPrice.innerText = totalamount;
    }
});
}
//--- Memory price handle-----//

memoryStorage8.addEventListener('click', function () {
    memoryCost8gb.innerText = 0;
    updateTotal()
});

memoryStorage16.addEventListener('click', function () {
    memoryCost16gb.innerText = 180;
    updateTotal()
});
 

//---- storage price handle----//
storage256.addEventListener('click', function () {
    storageCost256gb.innerText = 0;
    updateTotal()
})
storage512.addEventListener('click', function () {
    storageCost256gb.innerText = 100;
    updateTotal()
})

storage1.addEventListener('click', function () {
    storageCost1TB.innerText = 180;
    updateTotal()
})

//---- shipping price handle-----//
freeDelivery0.addEventListener('click', function () {
    deliveryCost0.innerText = 0;
    updateTotal()
})
urgentDelivery20.addEventListener('click', function () {
    deliveryCost20.innerText = 20;
    updateTotal()
})

//---- base price handle-----//
baseAmount.addEventListener('click', function () {
    baseFixed.innerText = 1299;
    updateTotal()
});