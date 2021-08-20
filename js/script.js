/* 
create a function to get the value of memory, storage etc 
*/

function Price(extraConfiguration, Capacity) {
    const modifiedPrice = document.getElementById(extraConfiguration);
    const Cost = modifiedPrice.innerText;

    if (Capacity == 8) {
        modifiedPrice.innerText = 0;
    } else if (Capacity == 16) {
        modifiedPrice.innerText = 180;
    } else if (Capacity == 256) {
        modifiedPrice.innerText = 0;
    } else if (Capacity == 512) {
        modifiedPrice.innerText = 100;
    } else if (Capacity == '1TB') {
        modifiedPrice.innerText = 180;
    } else if (Capacity == 'free') {
        modifiedPrice.innerText = 0;
    } else if (Capacity == 'notFree') {
        modifiedPrice.innerText = 20;
    }
    /* 
    getting innervalue from different field 
    */
    const bestPrice = document.getElementById('bestPrice').innerText;
    const ExtraMemoryCost = document.getElementById('ExtraMemoryCost').innerText;
    const ExtraStorageCost = document.getElementById('ExtraStorageCost').innerText;
    const extraDeliveryCharge = document.getElementById('extraDeliveryCharge').innerText;
    /*
     getting Total Price 
     */
    const Price = document.getElementById('totalPrice');
    Price.innerText = parseInt(bestPrice) + parseInt(ExtraMemoryCost) + parseInt(ExtraStorageCost) + parseInt(extraDeliveryCharge);

    const yourTotal = document.getElementById('TotalAfterDiscount');
    yourTotal.innerText = Price.innerText;



};

/* 
make memory section interactive
 */
document.getElementById('8GBmemory').addEventListener('click', function() {
    Price('ExtraMemoryCost', '8');

});
document.getElementById('16GBmemory').addEventListener('click', function() {

    Price('ExtraMemoryCost', '16');
});

/* 
make storage section interactive
 */
document.getElementById('storage256').addEventListener('click', function() {
    Price('ExtraStorageCost', '256');
});
document.getElementById('storage512').addEventListener('click', function() {
    Price('ExtraStorageCost', '512');
});
document.getElementById('storage1TB').addEventListener('click', function() {
    Price('ExtraStorageCost', '1TB');
});

document.getElementById('freeDelivery').addEventListener('click', function() {
    Price('extraDeliveryCharge', 'free')
});
document.getElementById('DeliveryCharge').addEventListener('click', function() {
    Price('extraDeliveryCharge', 'notFree')
});

//discount part
document.getElementById('apply').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    let inputVlue = inputField.value;
    const warning = document.getElementById('warning');
    const congratulation = document.getElementById('congratulation');
    if (inputVlue == 'stevekaku') {
        const yourTotal = document.getElementById('TotalAfterDiscount');
        const totalMoney = yourTotal.innerText;
        const totalDiscount = (parseFloat(totalMoney) * 20) / 100;
        yourTotal.innerText = totalMoney - totalDiscount;
        congratulation.style.display = 'block';
        warning.style.display = 'none';

        inputField.value = '';

        //warning message
    } else {

        warning.style.display = 'block';
        congratulation.style.display = 'none';

        inputField.value = '';
    }

})