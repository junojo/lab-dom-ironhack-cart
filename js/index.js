// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;

  const newSubtotal = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = newSubtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  // const priceElement = getElementByClassName('price');
  // const quantityElement = getElementByClassName('quanity');
  // const subtotalElement = getElementByClassName('.subtotal');
  const subtotalProduct1 =
    document.getElementsByClassName('subtotal')[0].innerHTML;
  updateSubtotal(singleProduct1);

  const subtotalProduct2 =
    document.getElementsByClassName('subtotal')[1].innerHTML;
  console.log(subtotalProduct1, subtotalProduct2);
  updateSubtotal(singleProduct2);

  // ITERATION 3
  //... your code goes here
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
