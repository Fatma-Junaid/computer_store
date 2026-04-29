const form = document.getElementById('productForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const product = {
    name: document.getElementById('name').value,
    brand: document.getElementById('brand').value,
    price: document.getElementById('price').value,
    description: document.getElementById('description').value,
    image: document.getElementById('image').value,
    stock: document.getElementById('stock').value,
  };

  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

    const data = await res.json();
    alert(data.message);

  } catch (err) {
    console.error(err);
  }
});