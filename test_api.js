const baseUrl = 'http://localhost:5000/api/products';
let productId;

async function runTests() {
  try {
    // 1. Create
    let res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Product',
        description: 'This is a test product',
        price: 99.99,
        category: 'Test',
        inStock: true
      })
    });
    let data = await res.json();
    console.log('--- 1. CREATED ---');
    console.log(data);
    productId = data._id;

    // 2. Read All
    res = await fetch(baseUrl);
    data = await res.json();
    console.log('\n--- 2. READ ALL ---');
    console.log(`Found ${data.length} products.`);

    // 3. Read Single
    res = await fetch(`${baseUrl}/${productId}`);
    data = await res.json();
    console.log('\n--- 3. READ SINGLE ---');
    console.log(data);

    // 4. Update
    res = await fetch(`${baseUrl}/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: 79.99 })
    });
    data = await res.json();
    console.log('\n--- 4. UPDATED ---');
    console.log(`New price is ${data.price}`);

    // 5. Delete
    res = await fetch(`${baseUrl}/${productId}`, {
      method: 'DELETE'
    });
    data = await res.json();
    console.log('\n--- 5. DELETED ---');
    console.log(data);

  } catch (error) {
    console.error('Test failed:', error);
  }
}

runTests();
