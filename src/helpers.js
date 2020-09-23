const incrementQty = (qty) => parseInt(qty) + 1; // Anonymous function dimana hasil returnya qty +1 
const decrementQty = (qty) => parseInt(qty) - 1; // Anonymous function dimana hasil returnya qty +1 

function recalculateSubTotal(price, qty) { // Membuat fungsi sum
    return price * qty; 
}

function totalAmount(price, qty, kode) { // Membuat fungsi totalAmount dimana akan menjumlahkan hasil setelah diberi diskon
    return recalculateSubTotal(price, qty) - discount(price, qty, kode);
}

function defaultQty(qty) { // Membuat fungsi defaultQty , disini untuk mengatasi bug jika qty <1 maka print 1
    return (parseInt(qty) < 1) ? 1 : qty;
}

function discount(price, qty, kode) { // Membuat fungsi discount untuk kode promo
    const subTotal = recalculateSubTotal(price, qty);
    switch(kode) { // Untuk percabangan kode program dimana kondisi yang diperiksa hanya ada 1 namun memiliki banyak opsi
        case "SEPTIANDA01":
            result = subTotal * 0.10;
            break;
        case "SEPTIANDA02":
            result = subTotal * 0.20;
            break;
        case "SEPTIANDA03":
            result = subTotal * 0.30;
            break;
        case "SEPTIANDA04":
            result = subTotal * 0.40;
            break;
        case "SEPTIANDA05":
            result = subTotal * 0.50;
            break;
        default: // default disini jika tidak ada ada opsi dari case-case yang ada maka akan masuk ke case default
            result = 0;
            break;
    }
    return result;
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubTotal, //Menambah fungsi recalculate agar tidak error / terkenali
    defaultQty, //Menambah fungsi defaultQty agar tidak error / terkenali
    discount, // Menambah fungsi discount agar tidak error / terkenali
    totalAmount // Menambah fungsi totalAmount agar tidak error / terkenali
};
