const params = new URLSearchParams(window.location.search);
const prodId = parseInt(params.get('id'));

const prod = merchandise.find(function(b) { return b.id === prodId; });

if (prod) {
  document.querySelector('.prod-title').textContent  = prod.title;
  document.querySelector('.prod-image').src          = prod.image;
  document.querySelector('.prod-image').alt          = prod.title;
  document.querySelector('.prod-info p').textContent = prod.description;
  document.getElementById('prod-price').textContent  = `$${prod.price.toFixed(2)} USD`;
}  else {
  document.getElementById('prodbuy-bg').innerHTML = `
    <div id="shop-back">
      <a href="Merchandise.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
        Back
      </a>
    </div>
    <p style="margin: 50px; font-family: M PLUS 1p;">Product not found.</p>
  `;
}

const qtyInput = document.querySelector('#item-qty input');
const minusBtn = document.querySelectorAll('#item-qty button')[0]; // first button = minus
const plusBtn  = document.querySelectorAll('#item-qty button')[1]; // second button = plus

minusBtn.addEventListener('click', function() {
  // parseInt reads the input's current value as a number
  let current = parseInt(qtyInput.value);
  if (current > 1) {
    qtyInput.value = current - 1;
  }
});

plusBtn.addEventListener('click', function() {
  let current = parseInt(qtyInput.value);
  if (current < 10) {
    qtyInput.value = current + 1;
  }
});