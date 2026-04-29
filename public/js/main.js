const productList = document.getElementById('product-list');

async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    const products = await res.json();

    productList.innerHTML = '';

    products.forEach(product => {
      const card = `
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.brand}</p>
              <p class="card-text">${product.description}</p>
              <h6>$${product.price}</h6>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += card;
    });

  } catch (error) {
    console.error('Error loading products:', error);
  }
}

loadProducts();