// Check if the comparison list already exists in localStorage
function addToCompare() {
    let comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');

    // Product information to be added to the comparison list
    const product = {
        name: document.getElementById('product-name').textContent,
        price: document.getElementById('product-price').textContent,
        description: document.getElementById('product-description').textContent,
        link: window.location.href
    };

    // Add the product to the comparison list if it's not already in the list
    if (!comparisonList.some(item => item.name === product.name)) {
        comparisonList.push(product);
        localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
        alert('Product added to comparison list!');
    } else {
        alert('This product is already in the comparison list!');
    }
}

// Optional: Show the comparison list in another page or on the console
function showComparisonList() {
    const comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');
    console.log(comparisonList);  // Show comparison list in the console
}
