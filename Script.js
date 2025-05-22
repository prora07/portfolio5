document.createElement('div');
    cartItemDiv.classList.add('flex', 'justify-between', 'items-center');
    cartItemDiv.innerHTML = `
      <span>${item.name} - $${item.price} x ${item.quantity}</span>
      <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">Remove</button>
    `;
    cartItems.appendChild(cartItemDiv);
  });
}

// Toggle Cart Sidebar
function toggleCart() {
  cartSidebar.classList.toggle("hidden");
}

// Handle Checkout
function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart.length = 0; // Clear the cart
    updateCart(); // Refresh the cart
    toggleCart(); // Hide the cart
  }
}

// Filter Products by Price
priceFilter.addEventListener('change', function(e) {
  const selectedValue = e.target.value;
  let filteredProducts = products;

  if (selectedValue === '0-500') {
    filteredProducts = products.filter(product => product.price <= 500);
  } else if (selectedValue === '500-1000') {
    filteredProducts = products.filter(product => product.price > 500 && product.price <= 1000);
  } else if (selectedValue === '1000+') {
    filteredProducts = products.filter(product => product.price > 1000);
  }

  renderProducts(filteredProducts);
});

// Initial Rendering of Products
renderProducts();