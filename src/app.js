import { 
  incrementQty, 
  decrementQty,
  recalculateSubTotal // import recalculate
} from './helpers.js';

const incrButton = document.querySelector('#incr'); //querySelector disini mencari elemen berdasarkan id 
const decrButton = document.querySelector('#decr'); //querySelector disini mencari elemen berdasarkan id 
const qtyInput = document.querySelector('#qty'); //querySelector disini mencari elemen berdasarkan id 
const price = document.querySelector('#price'); //querySelector disini mencari elemen berdasarkan id 
const subTotal = document.querySelector('#subtotal'); //querySelector disini mencari elemen berdasarkan id 

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); // textcontent ini merubah isi Rpnya
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); // textcontent ini merubah isi Rpnya
});