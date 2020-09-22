const incrementQty = (qty) => parseInt(qty) + 1; // Anonymous function dimana hasil returnya qty +1 
const decrementQty = (qty) => qty - 1; // Anonymous function dimana hasil returnya qty +1 

function recalculateSubTotal(price, qty) { // Membuat fungsi sum
    return price * qty; 
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubTotal //Menambah fungsi recalculate agar tidak error
};
