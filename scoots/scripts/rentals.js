document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rentals.json') 
        .then(response => response.json())
        .then(data => {
            displayRentals(data.rentals);
            displayRentalAgreements(data.agreements);
        })
        .catch(error => console.error('Failed to load rental data:', error));
});


function displayRentals(rentals) {
    const container = document.getElementById('rentalsContainer');
    rentals.forEach(category => {
        const section = document.createElement('section');
        section.innerHTML = `<h2>${category.category}</h2>`;
        category.options.forEach(option => {
            const item = document.createElement('div');
            item.className = 'rental-item';
            
            const imageHTML = option.img ? `<img src="${option.img}" alt="${option.name} loading= "lazy" style="width: 200px; height: auto;">` : '';
            item.innerHTML = `
                ${imageHTML}
                <h3>${option.name} - ${option.capacity}</h3>
                <div class="rental-pricing">
                    Reservation: Half Day $${option.pricing.reservation.halfDay}, Full Day $${option.pricing.reservation.fullDay}<br>
                    Walk-In: Half Day $${option.pricing.walkIn.halfDay}, Full Day $${option.pricing.walkIn.fullDay}
                </div>
            `;
            section.appendChild(item);
        });
        container.appendChild(section);
    });
}


function displayRentalAgreements(agreements) {
    const list = document.getElementById('agreementsList');
    agreements.forEach(agreement => {
        const item = document.createElement('li');
        item.textContent = agreement;
        list.appendChild(item);
    });
}
