/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helper = require('../helpers.js'); // const disini untuk import

test('Jika QTY 1 ditambah 1 maka hasilnya adalah 2', () => {
    expect(helper.incrementQty(1)).toBe(2);
});

test('Jika QTY 5 dikurangi 1 maka hasilnya adalah 4', () => {
    expect(helper.decrementQty(5)).toBe(4);
});

test('Jika harga barang 25000 dikali Qty 3 maka Sub Totalnya adalah 75000', () => {
    expect(helper.recalculateSubTotal(25000, 3)).toBe(75000);
})

test('Jika harga barang Rp. 150.000 dengan Qty 2 jumlahnya adalah Rp 300.000 dengan menggunakan kode SEPTIANDA03 anda akan mendapat potongan Rp. 90.000 jadi Rp. 210.000 ', () => {
    expect(helper.discount(150000, 2, "SEPTIANDA03")).toBe(90000);
});

test('Jika total harga barang Rp. 550.000 Qty 1 dengan menggunakan kode SEPTIANDA04 cukup bayar Rp. 330.000', () => {
    expect(helper.totalAmount(550000, 1, "SEPTIANDA04")).toBe(330000);
});