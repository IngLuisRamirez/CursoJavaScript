function calculeDiscountePrice(price, dicountePercentege){
    const discount = (price * dicountePercentege) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount.toFixed(2)
}


const originalPrice = 1000 
const dicountePercentege = 15
const finalPrice = calculeDiscountePrice(originalPrice ,dicountePercentege)


console.log(`Original price $${originalPrice} - discount ${dicountePercentege}% = Price wit discount: $ ${finalPrice} `);