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

}
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
})
document.getElementById('storage512').addEventListener('click', function() {
    memory('ExtraStorageCost', '512');
})
document.getElementById('storage1TB').addEventListener('click', function() {
    memory('ExtraStorageCost', '1TB');
})

document.getElementById('freeDelivery').addEventListener('click', function() {
    memory('extraDeliveryCharge', 'free')
})
document.getElementById('DeliveryCharge').addEventListener('click', function() {
    memory('extraDeliveryCharge', 'notFree')
})