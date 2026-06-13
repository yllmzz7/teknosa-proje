const PRODUCTS_DATA = window.PRODUCTS_DATA;

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const searchInput = document.getElementById('search-input');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const resultsCountText = document.getElementById('results-count-text');

    let currentCategory = 'all';
    let searchQuery = '';

    // Check URL hash for category filter
    const checkUrlHashCategory = () => {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#category=')) {
            const catParam = hash.replace('#category=', '');
            const matchingBtn = Array.from(categoryBtns).find(btn => btn.getAttribute('data-category') === catParam);
            if (matchingBtn) {
                categoryBtns.forEach(b => b.classList.remove('active'));
                matchingBtn.classList.add('active');
                currentCategory = catParam;
            }
        }
    };

    // Initialize counts on category sidebar buttons
    const updateCategoryCounts = () => {
        categoryBtns.forEach(btn => {
            const cat = btn.getAttribute('data-category');
            const countSpan = btn.querySelector('.count');
            if (countSpan) {
                if (cat === 'all') {
                    countSpan.textContent = PRODUCTS_DATA.length;
                } else {
                    const count = PRODUCTS_DATA.filter(p => p.category === cat).length;
                    countSpan.textContent = count;
                }
            }
        });
    };

    // Render Star Icons Based on Rating
    const getStarsHTML = (rating) => {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starsHTML += `
                    <svg viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>`;
            } else if (i === fullStars + 1 && hasHalf) {
                starsHTML += `
                    <svg viewBox="0 0 24 24">
                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2.27V2l2.58 6.01L22 9.24z"/>
                    </svg>`;
            } else {
                starsHTML += `
                    <svg viewBox="0 0 24 24" style="opacity:0.3;">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>`;
            }
        }
        return starsHTML;
    };

    // Format Currency to TL (TRY)
    const formatPrice = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            maximumFractionDigits: 0
        }).format(value);
    };

    // Render Products Grid
    const renderProducts = () => {
        if (!productsGrid) return;
        
        // Filter
        const filtered = PRODUCTS_DATA.filter(product => {
            const matchesCategory = (currentCategory === 'all' || product.category === currentCategory);
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  product.brand.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Update count text
        if (resultsCountText) {
            resultsCountText.textContent = `${filtered.length} ürün listeleniyor`;
        }

        // Clear grid
        productsGrid.innerHTML = '';

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    <h3>Arama Sonucu Bulunamadı</h3>
                    <p>Aradığınız kriterlere uygun ürün bulunmamaktadır. Lütfen farklı anahtar kelimeler veya filtreler deneyin.</p>
                </div>
            `;
            return;
        }

        // Generate card items
        filtered.forEach(product => {
            const discountPercentage = Math.round(((product.priceOriginal - product.priceCurrent) / product.priceOriginal) * 100);
            
            const cardHTML = `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-img-wrapper">
                        ${product.tag ? `<span class="badge badge-orange product-tag">${product.tag}</span>` : ''}
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-details">
                        <div class="product-brand">${product.brand}</div>
                        <h3 class="product-name" title="${product.name}">${product.name}</h3>
                        
                        <div class="product-rating">
                            <div class="rating-stars">
                                ${getStarsHTML(product.rating)}
                            </div>
                            <span class="rating-text">(${product.reviewsCount})</span>
                        </div>
                        
                        <div class="product-footer">
                            <div class="product-price">
                                <span class="price-original">${formatPrice(product.priceOriginal)}</span>
                                <span class="price-current">${formatPrice(product.priceCurrent)}</span>
                            </div>
                             <button class="buy-btn" title="Sepete Ekle" onclick="window.addToCart(${product.id})">
                                 <svg viewBox="0 0 24 24">
                                     <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.9 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                                 </svg>
                             </button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    };

    // Category button click handler
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class
            btn.classList.add('active');
            
            currentCategory = btn.getAttribute('data-category');
            renderProducts();
        });
    });

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        checkUrlHashCategory();
        renderProducts();
    });

    // Run setup
    checkUrlHashCategory();
    updateCategoryCounts();
    renderProducts();
});
