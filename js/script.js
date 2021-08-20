/* 
create a function to get the value of memory, storage etc 
*/

function memory(extraConfiguration, memoryCapacity) {
    const memory = document.getElementById(extraConfiguration);
    const memoryCost = memory.innerText;

    if (memoryCapacity == 8) {
        memory.innerText = 0;
    } else if (memoryCapacity == 16) {
        memory.innerText = 180;
    } else if (memoryCapacity == 256) {
        memory.innerText = 0;
    } else if (memoryCapacity == 512) {
        memory.innerText = 100;
    } else if (memoryCapacity == '1TB') {
        memory.innerText = 180;
    } else if (memoryCapacity == 'free') {
        memory.innerText = 0;
    } else if (memoryCapacity == 'notFree') {
        memory.innerText = 20;
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


document.getElementById('apply').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    let inputVlue = inputField.value;
    if (inputVlue == 'stevekaku') {
        const yourTotal = document.getElementById('TotalAfterDiscount');
        const totalMoney = yourTotal.innerText;
        const totalDiscount = (parseFloat(totalMoney) * 20) / 100;
        yourTotal.innerText = totalMoney - totalDiscount;
        inputField.value = '';
    }

})




/* 
make memory section interactive
 */
document.getElementById('8GBmemory').addEventListener('click', function() {
    memory('ExtraMemoryCost', '8');

});
document.getElementById('16GBmemory').addEventListener('click', function() {

    memory('ExtraMemoryCost', '16');
});

/* 
make storage section interactive
 */
document.getElementById('storage256').addEventListener('click', function() {
    memory('ExtraStorageCost', '256');
});
document.getElementById('storage512').addEventListener('click', function() {
    memory('ExtraStorageCost', '512');
});
document.getElementById('storage1TB').addEventListener('click', function() {
    memory('ExtraStorageCost', '1TB');
});

document.getElementById('freeDelivery').addEventListener('click', function() {
    memory('extraDeliveryCharge', 'free')
});
document.getElementById('DeliveryCharge').addEventListener('click', function() {
    memory('extraDeliveryCharge', 'notFree')
});