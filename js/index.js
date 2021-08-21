//Total Cost Calculation
function totalCostCalculation() {
    const bestTotal = document.getElementById('best-price');
    let bestTotalValue = Number(bestTotal.innerText);
    const storageTotal = document.getElementById('storage-cost');
    let storageTotalValue = Number(storageTotal.innerText);
    const deliveryTotal = document.getElementById('deliveryCharge');
    let deliveryTotalValue = Number(deliveryTotal.innerText);
    const totalCost = document.getElementById('total-price');
    // Total Cost
    totalCost.innerText = memoryCostValue + storageTotalValue + deliveryTotalValue + bestTotalValue;
    return totalCost.innerText;
}
//grand total Calculation
function grandTotal() {
    const grandTotal = document.getElementById('grand-total');
    const totalCost = document.getElementById('total-price');
    let totalCostValue = Number(totalCost.innerText);
    grandTotal.innerText = totalCostValue;
    return grandTotal.innerText;
}
//Memory section 
function memorySection(memorySize, isFree) {
    document.getElementById(memorySize).addEventListener('click', function () {

        const memoryCost = document.getElementById('memory-cost');
        if (isFree == true) {
            memoryCost.innerText = '0';
            memoryCostValue = Number(memoryCost.innerText);
        }
        else {
            memoryCost.innerText = '180';
            memoryCostValue = Number(memoryCost.innerText);
        }
        totalCostCalculation();
        grandTotal();
    })
}
memorySection('memory-8gb', true);
memorySection('memory-16gb', false);

// //storage section
function storageSection(storageCapacity, isCostly) {
    document.getElementById(storageCapacity).addEventListener('click', function () {
        const storageCost = document.getElementById('storage-cost');
        storageCost.innerText = '0';
        storageCostValue = Number(storageCost.innerText);
        if (isCostly == true) {
            storageCost.innerText = '180';
            storageCostValue = Number(storageCost.innerText);
        }
        if (isCostly == false) {
            storageCost.innerText = '100';
            storageCostValue = Number(storageCost.innerText);
        }
        totalCostCalculation();
        grandTotal();
    })
}
storageSection('basic-ssd',);
storageSection('moderate-ssd', false);
storageSection('premier-ssd', true);

//Delivery Charge Section
function deliveryCost(deliveryType, withCost) {
    document.getElementById(deliveryType).addEventListener('click', function () {

        const deliveryCharge = document.getElementById('deliveryCharge');
        if (withCost == true) {
            deliveryCharge.innerText = '20';
            deliveryChargeValue = Number(deliveryCharge.innerText);
        }
        else {
            deliveryCharge.innerText = '0';
            deliveryChargeValue = Number(deliveryCharge.innerText);
        }
        totalCostCalculation();
        grandTotal();
    })
}
deliveryCost('express-delivery', true);
deliveryCost('free-delivery', false);

//Apply Promo Code & Set Grand Total
document.getElementById('promoCode-btn').addEventListener('click', function () {
    const grandTotal = document.getElementById('grand-total');
    const totalCost = document.getElementById('total-price');
    let totalCostValue = Number(totalCost.innerText);
    grandTotal.innerText = totalCostValue;
    const promoCode = document.getElementById('apply-promoCode');
    let promoCodeText = promoCode.value;
    if (promoCodeText == 'stevekaku') {
        grandTotal.innerText = parseFloat('0.8' * totalCostCalculation());
    }
    promoCode.value = '';

})

