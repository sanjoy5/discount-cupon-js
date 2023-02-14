

document.getElementById('addCost').addEventListener('click', function () {
    const totalCost = parseInt(prompt('Enter total cost : '))

    if (isNaN(totalCost)) {
        alert('Please ... Enter a Valid Number !!!');
        document.getElementById('totalCost').innerText = 0;
        document.getElementById('grandTotal').innerText = 0;

    } else {
        document.getElementById('totalCost').innerText = totalCost;
        document.getElementById('grandTotal').innerText = totalCost;
    }
})



document.getElementById('cuponField').addEventListener('keyup', function (e) {
    const text = e.target.value
    const btn = document.getElementById('cuppon-btn')
    if (text === 'DESC30') {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', true)
    }
})



document.getElementById('cuppon-btn').addEventListener('click', function () {
    const totalCost = document.getElementById('totalCost')
    const totalCostValue = parseFloat(totalCost.innerText)
    const cuponOffer = totalCostValue * 0.7
    document.getElementById('grandTotal').innerText = cuponOffer

})