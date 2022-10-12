// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // ELementos
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subtotal = product.querySelector('.subtotal span')
  console.log(price)
  // Valores
  let priceValue = Number(price.textContent)
  let quantityValue = Number(quantity.value)  //VALUE PARA INPUTS
 // console.log(priceValue)
  //console.log(quantityValue)
  // Total
  let subTotal = priceValue * quantityValue 

  subtotal.textContent = subTotal

  return subTotal

  //console.log(subTotal)
  //console.log(subtotal)
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let result = 0
  for (let i = 0; i < products.length; i++){
    let subtotal = updateSubtotal(products[i])
    result += subtotal
  }
console.log(result)
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  total.textContent = result
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
