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
