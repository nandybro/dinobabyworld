/**
 * Dinobaby World - Main JavaScript
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
// Your WhatsApp Number (include country code, without '+' or spaces)
const WHATSAPP_NUMBER = "919659967486";

// ============================================================================
// PRODUCT LIST
// ============================================================================
// INSTRUCTIONS: 
// 1. Upload your photos to the 'images/' folder.
// 2. Add an entry for each product below.
// 'filename' must match the exact file name you uploaded.
// 'name' is the professional display name shown on the website.
const productImages = [
    { filename: "WhatsApp Image 2026-07-08 at 3.41.30 PM.jpeg", name: "Premium Baby Nest Mosquito net" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.23 PM (2).jpeg", name: "Classic Baby Chair" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.27 PM (1).jpeg", name: "Classic Baby holder" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.27 PM (2).jpeg", name: "Premium Baby Bed" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.27 PM.jpeg", name: "Special Pregnancy Pillow" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.28 PM (2).jpeg", name: "Modern Baby Chair" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.34 PM (1).jpeg", name: "Comfort Baby Bed" },
    { filename: "WhatsApp Image 2026-07-08 at 3.41.23 PM.jpeg", name: "Comfort Baby King Chair" },
];

// ============================================================================
// APP LOGIC
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const noProductsMessage = document.getElementById('no-products-message');

    // Check if we have any products listed
    if (productImages.length === 0) {
        noProductsMessage.classList.remove('d-none');
        return;
    }

    // SVG icon for WhatsApp button
    const whatsappIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
    `;

    // Render each product
    productImages.forEach(product => {
        const displayName = product.name;
        const imageFilename = product.filename;

        // 1. Create the WhatsApp URL with pre-filled message
        let message = `Hi, I am interested in the ${displayName}. Could you please provide more details?`;
        let encodedMessage = encodeURIComponent(message);
        let whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // 2. Create the Bootstrap Card HTML
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-4 col-lg-3';

        colDiv.innerHTML = `
            <div class="product-card h-100">
                <div class="product-image-container">
                    <img src="images/${imageFilename}" alt="${displayName}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x250?text=Image+Not+Found'">
                </div>
                <div class="card-body">
                    <h3 class="card-title text-center">${displayName}</h3>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp mt-3">
                        ${whatsappIcon} I'm interested
                    </a>
                </div>
            </div>
        `;

        productsContainer.appendChild(colDiv);
    });
});
