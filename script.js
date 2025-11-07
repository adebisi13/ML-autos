// ==== THEME TOGGLE ====
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  icon.className = isLight ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  toggleBtn.classList.toggle('btn-outline-dark', isLight);
  toggleBtn.classList.toggle('btn-outline-light', !isLight);
});

// ==================== HANDLE ALL CAR CARDS ====================

// Select every .product-card (from both Featured Cars and Best-Selling Cars)
const allCarCards = document.querySelectorAll('.product-card');

// Loop through each card
allCarCards.forEach(card => {
  card.addEventListener('click', () => {
    // Try to get the car's name and image from the card itself
    const carName =
      card.querySelector('h3')?.innerText ||
      card.querySelector('.car-name')?.innerText ||
      'Unknown Car';

    const carImage =
      card.querySelector('img')?.getAttribute('src') || 'img.folder/default.jpg';

    // Get the price (either .price or .car-price or .new)
    const priceElement =
      card.querySelector('.new') ||
      card.querySelector('.car-price') ||
      card.querySelector('.price span') ||
      card.querySelector('p');

    const carPrice = priceElement ? priceElement.innerText : 'Price not listed';

    // ==================== INSERT INTO MODAL ====================
    document.getElementById('carName').innerText = carName;
    document.getElementById('carImage').src = carImage;
    document.getElementById('carPrice').innerHTML = `<strong>Price:</strong> ${carPrice}`;

    // Just show some quick placeholder details since you said we can’t use new info
    const carSpecs = [
      "High performance engine",
      "Comfortable leather interior",
      "Advanced safety system",
      "Fuel-efficient and reliable",
      "Warranty and maintenance included"
    ];

    const specsList = document.getElementById('carSpecs');
    specsList.innerHTML = carSpecs.map(spec => `<li>• ${spec}</li>`).join('');

    // Pass the car name into hidden input for the form
    document.getElementById('formCarName').value = carName;

    // ==================== SHOW MODAL ====================
    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    modal.show();
  });
});

// ==================== FORM SUBMISSION CONFIRMATION ====================

// Optional: Show confirmation alert after Formspree submission redirect
document.getElementById('purchaseForm').addEventListener('submit', function (e) {
  alert('Thank you! Your purchase request has been sent.');
});
