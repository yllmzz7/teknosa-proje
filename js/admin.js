document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. SESSION AUTHENTICATION CHECK
    // ==========================================================================
    const session = JSON.parse(localStorage.getItem('teknosa_session')) || JSON.parse(sessionStorage.getItem('teknosa_session'));
    
    if (!session || session.role !== 'admin') {
        // Redirect unauthorized users to homepage
        window.location.href = 'index.html';
        return;
    }

    // Helper: Format currency
    const formatPrice = (value) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            maximumFractionDigits: 0
        }).format(value);
    };

    // ==========================================================================
    // 2. TAB SWITCHING LOGIC
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.profile-tab-btn');
    const tabContents = document.querySelectorAll('.profile-tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) targetContent.classList.add('active');

            // Trigger re-renders when entering specific tabs
            if (targetTab === 'adm-dashboard') renderDashboard();
            if (targetTab === 'adm-users') renderUsers();
            if (targetTab === 'adm-orders') renderOrders();
            if (targetTab === 'adm-tickets') renderTickets();
            if (targetTab === 'adm-products') renderProducts();
        });
    });

    // ==========================================================================
    // 3. RENDER DASHBOARD SUMMARY
    // ==========================================================================
    const renderDashboard = () => {
        const users = JSON.parse(localStorage.getItem('teknosa_users')) || [];
        const orders = JSON.parse(localStorage.getItem('teknosa_orders')) || [];
        const tickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];

        const totalUsers = users.length;
        const totalOrders = orders.length;
        const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'İptal Edildi' ? o.total : 0), 0);
        const pendingTickets = tickets.filter(t => t.status === 'Bekliyor').length;

        const elUsers = document.getElementById('stat-total-users');
        const elOrders = document.getElementById('stat-total-orders');
        const elRevenue = document.getElementById('stat-total-revenue');
        const elTickets = document.getElementById('stat-pending-tickets');

        if (elUsers) elUsers.textContent = totalUsers;
        if (elOrders) elOrders.textContent = totalOrders;
        if (elRevenue) elRevenue.textContent = formatPrice(totalRevenue);
        if (elTickets) elTickets.textContent = pendingTickets;
    };

    // ==========================================================================
    // 4. RENDER USERS LIST
    // ==========================================================================
    const renderUsers = () => {
        const container = document.getElementById('admin-users-list');
        if (!container) return;

        const users = JSON.parse(localStorage.getItem('teknosa_users')) || [];

        if (users.length === 0) {
            container.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">Kayıtlı kullanıcı bulunamadı.</td></tr>`;
            return;
        }

        container.innerHTML = '';
        users.forEach(user => {
            const roleBadge = user.role === 'admin' ? 
                `<span class="badge-status badge-blue">Yönetici (Admin)</span>` : 
                `<span class="badge-status" style="background-color:#718096;">Müşteri</span>`;

            const tr = `
                <tr>
                    <td style="padding: 12px 8px; font-weight:600; color:var(--secondary);">${user.fullName}</td>
                    <td style="padding: 12px 8px;">${user.email}</td>
                    <td style="padding: 12px 8px;">${roleBadge}</td>
                </tr>
            `;
            container.insertAdjacentHTML('beforeend', tr);
        });
    };

    // ==========================================================================
    // 5. RENDER ORDERS & STATUS MANAGEMENT
    // ==========================================================================
    const renderOrders = () => {
        const container = document.getElementById('admin-orders-list');
        if (!container) return;

        const orders = JSON.parse(localStorage.getItem('teknosa_orders')) || [];

        if (orders.length === 0) {
            container.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1rem;">Sistemde sipariş bulunmamaktadır.</td></tr>`;
            return;
        }

        container.innerHTML = '';
        orders.reverse().forEach(order => {
            // Find user name by email
            const users = JSON.parse(localStorage.getItem('teknosa_users')) || [];
            const user = users.find(u => u.email.toLowerCase() === order.userEmail.toLowerCase());
            const clientName = user ? user.fullName : order.userEmail;

            // Status select element options
            const statuses = ['Sipariş Alındı', 'Kargoya Verildi', 'Teslim Edildi', 'İptal Edildi'];
            const selectOptions = statuses.map(s => {
                const isSelected = order.status === s ? 'selected' : '';
                return `<option value="${s}" ${isSelected}>${s}</option>`;
            }).join('');

            const tr = `
                <tr>
                    <td style="padding: 12px 8px; font-weight:700; color:var(--primary);">${order.orderId}</td>
                    <td style="padding: 12px 8px;">
                        <strong style="color:var(--secondary);">${clientName}</strong><br>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${order.userEmail}</span>
                    </td>
                    <td style="padding: 12px 8px; font-size:0.8rem;">${order.date}</td>
                    <td style="padding: 12px 8px; font-weight:700;">${formatPrice(order.total)}</td>
                    <td style="padding: 12px 8px;">
                        <span class="badge-status ${getStatusBadgeClass(order.status)}">${order.status || 'Alındı'}</span>
                    </td>
                    <td style="padding: 12px 8px; text-align: center;">
                        <select class="admin-select-status" data-id="${order.orderId}">
                            ${selectOptions}
                        </select>
                    </td>
                </tr>
            `;
            container.insertAdjacentHTML('beforeend', tr);
        });

        // Bind Status Update Changes
        document.querySelectorAll('.admin-select-status').forEach(select => {
            select.addEventListener('change', (e) => {
                const orderId = select.getAttribute('data-id');
                const newStatus = e.target.value;

                let allOrders = JSON.parse(localStorage.getItem('teknosa_orders')) || [];
                const orderIdx = allOrders.findIndex(o => o.orderId === orderId);

                if (orderIdx !== -1) {
                    allOrders[orderIdx].status = newStatus;
                    localStorage.setItem('teknosa_orders', JSON.stringify(allOrders));
                    window.showToast(`${orderId} numaralı siparişin durumu "${newStatus}" olarak güncellendi.`, 'success');
                    renderOrders();
                }
            });
        });
    };

    const getStatusBadgeClass = (status) => {
        if (status === 'Sipariş Alındı') return 'badge-orange';
        if (status === 'Kargoya Verildi') return 'badge-blue';
        if (status === 'Teslim Edildi') return 'badge-green';
        if (status === 'İptal Edildi') return 'badge-red';
        return 'badge-orange';
    };

    // ==========================================================================
    // 6. RENDER SUPPORT MESSAGES & RESPONSE
    // ==========================================================================
    const renderTickets = () => {
        const container = document.getElementById('admin-tickets-container');
        if (!container) return;

        const tickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];

        if (tickets.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Müşteri destek talebi bulunmamaktadır.</p>`;
            return;
        }

        container.innerHTML = '';
        tickets.reverse().forEach(ticket => {
            const isResolved = ticket.status === 'Cevaplandı';

            let actionAreaHTML = '';
            if (!isResolved) {
                actionAreaHTML = `
                    <div class="admin-ticket-reply-box">
                        <textarea id="reply-text-${ticket.id}" rows="2" placeholder="Yanıtınızı buraya yazın..."></textarea>
                        <button class="btn btn-primary btn-reply-ticket" data-id="${ticket.id}" style="padding:0.4rem 1rem; font-size:0.8rem;">Yanıtı Gönder</button>
                    </div>
                `;
            } else {
                actionAreaHTML = `
                    <div style="margin-top: 1rem; padding: 0.75rem; background-color: rgba(46, 204, 113, 0.05); border-left: 3px solid #2ecc71; border-radius: 4px;">
                        <strong style="font-size:0.8rem; color:#27ae60; display:block; margin-bottom:2px;">Cevabınız:</strong>
                        <p style="font-size:0.85rem; color:var(--text-color);">${ticket.reply}</p>
                    </div>
                `;
            }

            const card = `
                <div class="admin-ticket-card">
                    <div class="admin-ticket-header">
                        <div>
                            <span class="badge-status ${isResolved ? 'badge-green' : 'badge-orange'}" style="font-size:0.7rem; padding:0.15rem 0.4rem;">${ticket.status}</span>
                            <h4 style="font-size:1.05rem; font-weight:700; color:var(--secondary); margin-top:4px;">${ticket.subject}</h4>
                        </div>
                        <div style="text-align:right; font-size:0.8rem; color:var(--text-muted);">
                            <strong>${ticket.userName}</strong> (${ticket.userEmail})<br>
                            <span>Tarih: ${ticket.date}</span>
                        </div>
                    </div>
                    <p style="font-size:0.9rem; color:var(--text-main); line-height:1.4;">${ticket.message}</p>
                    ${actionAreaHTML}
                </div>
            `;
            container.insertAdjacentHTML('beforeend', card);
        });

        // Bind Ticket Reply Buttons
        document.querySelectorAll('.btn-reply-ticket').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const replyText = document.getElementById(`reply-text-${id}`).value.trim();

                if (replyText === '') {
                    window.showToast('Lütfen yanıt alanını boş bırakmayınız.', 'error');
                    return;
                }

                let allTickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];
                const ticketIdx = allTickets.findIndex(t => t.id === id);

                if (ticketIdx !== -1) {
                    allTickets[ticketIdx].reply = replyText;
                    allTickets[ticketIdx].status = 'Cevaplandı';
                    localStorage.setItem('teknosa_support_messages', JSON.stringify(allTickets));
                    window.showToast('Destek talebine başarıyla yanıt verildi.', 'success');
                    renderTickets();
                }
            });
        });
    };

    // ==========================================================================
    // 7. PRODUCT CRUD MANAGEMENT (ADD / EDIT / DELETE)
    // ==========================================================================
    const renderProducts = () => {
        const container = document.getElementById('admin-products-list');
        if (!container) return;

        const products = window.PRODUCTS_DATA || [];

        if (products.length === 0) {
            container.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:1rem;">Katalogda ürün bulunmamaktadır.</td></tr>`;
            return;
        }

        container.innerHTML = '';
        products.forEach(p => {
            const tr = `
                <tr>
                    <td style="padding: 8px;">
                        <img src="${p.image}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                    </td>
                    <td style="padding: 12px 8px;">
                        <strong style="color:var(--secondary); font-size:0.9rem;">${p.name}</strong><br>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${p.brand}</span>
                    </td>
                    <td style="padding: 12px 8px; text-transform: capitalize; font-size:0.8rem;">${p.category}</td>
                    <td style="padding: 12px 8px; font-weight:700;">${formatPrice(p.priceCurrent)}</td>
                    <td style="padding: 12px 8px; text-align: center; white-space: nowrap;">
                        <button class="admin-action-btn edit-product-btn" data-id="${p.id}" title="Düzenle">
                            <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        </button>
                        <button class="admin-action-btn delete delete-product-btn" data-id="${p.id}" title="Sil">
                            <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </td>
                </tr>
            `;
            container.insertAdjacentHTML('beforeend', tr);
        });

        // Bind Edit buttons
        document.querySelectorAll('.edit-product-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                openProductFormModal(id);
            });
        });

        // Bind Delete buttons
        document.querySelectorAll('.delete-product-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
                    deleteProduct(id);
                }
            });
        });
    };

    const deleteProduct = (id) => {
        let products = [...window.PRODUCTS_DATA];
        products = products.filter(p => p.id !== id);
        
        window.PRODUCTS_DATA = products;
        localStorage.setItem('teknosa_products', JSON.stringify(products));
        
        window.showToast('Ürün başarıyla silindi.', 'error');
        renderProducts();
    };

    // Modal Control
    const productModal = document.getElementById('admin-product-modal');
    const productModalClose = document.getElementById('admin-product-modal-close');
    const productForm = document.getElementById('admin-product-form');
    const btnAddProduct = document.getElementById('btn-admin-add-product');
    const modalTitle = document.getElementById('admin-modal-title');

    if (btnAddProduct && productModal) {
        btnAddProduct.addEventListener('click', () => {
            openProductFormModal(); // Open as ADD
        });
    }

    if (productModalClose && productModal) {
        productModalClose.addEventListener('click', () => {
            productModal.classList.remove('open');
        });
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.classList.remove('open');
            }
        });
    }

    const openProductFormModal = (productId = null) => {
        productForm.reset();
        document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

        if (productId) {
            // EDIT MODE
            modalTitle.textContent = "Ürün Bilgilerini Düzenle";
            const product = window.PRODUCTS_DATA.find(p => p.id === productId);
            if (!product) return;

            document.getElementById('prod-form-id').value = product.id;
            document.getElementById('prod-name').value = product.name;
            document.getElementById('prod-brand').value = product.brand;
            document.getElementById('prod-category').value = product.category;
            document.getElementById('prod-price-orig').value = product.priceOriginal;
            document.getElementById('prod-price-curr').value = product.priceCurrent;
            document.getElementById('prod-img').value = product.image;
            document.getElementById('prod-desc').value = product.description || '';

            // Populate specs fields
            const specEntries = Object.entries(product.specs || {});
            for (let i = 1; i <= 3; i++) {
                const keyInput = document.getElementById(`spec-key-${i}`);
                const valInput = document.getElementById(`spec-val-${i}`);
                if (specEntries[i-1]) {
                    keyInput.value = specEntries[i-1][0];
                    valInput.value = specEntries[i-1][1];
                } else {
                    keyInput.value = '';
                    valInput.value = '';
                }
            }
        } else {
            // ADD MODE
            modalTitle.textContent = "Yeni Ürün Ekle";
            document.getElementById('prod-form-id').value = '';
            for (let i = 1; i <= 3; i++) {
                document.getElementById(`spec-key-${i}`).value = '';
                document.getElementById(`spec-val-${i}`).value = '';
            }
        }

        productModal.classList.add('open');
    };

    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const idVal = document.getElementById('prod-form-id').value;
            const nameInput = document.getElementById('prod-name');
            const brandInput = document.getElementById('prod-brand');
            const categorySelect = document.getElementById('prod-category');
            const priceOrigInput = document.getElementById('prod-price-orig');
            const priceCurrInput = document.getElementById('prod-price-curr');
            const imgInput = document.getElementById('prod-img');
            const descInput = document.getElementById('prod-desc');

            let hasErrors = false;

            const setError = (el, show, msg = '') => {
                const group = el.closest('.form-group');
                const err = group.querySelector('.form-error');
                if (show) {
                    group.classList.add('has-error');
                    if (err) {
                        err.textContent = msg;
                        err.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    group.classList.remove('has-error');
                    if (err) err.style.display = 'none';
                }
            };

            if (nameInput.value.trim() === '') setError(nameInput, true, 'Ürün adı boş bırakılamaz.');
            else setError(nameInput, false);

            if (brandInput.value.trim() === '') setError(brandInput, true, 'Marka boş bırakılamaz.');
            else setError(brandInput, false);

            if (priceOrigInput.value.trim() === '' || isNaN(priceOrigInput.value)) setError(priceOrigInput, true, 'Geçerli fiyat girin.');
            else setError(priceOrigInput, false);

            if (priceCurrInput.value.trim() === '' || isNaN(priceCurrInput.value)) setError(priceCurrInput, true, 'Geçerli fiyat girin.');
            else setError(priceCurrInput, false);

            if (imgInput.value.trim() === '') setError(imgInput, true, 'Resim bağlantısı girin.');
            else setError(imgInput, false);

            if (hasErrors) return;

            // Retrieve specs
            const specsObj = {};
            for (let i = 1; i <= 3; i++) {
                const k = document.getElementById(`spec-key-${i}`).value.trim();
                const v = document.getElementById(`spec-val-${i}`).value.trim();
                if (k !== '' && v !== '') {
                    specsObj[k] = v;
                }
            }

            let products = [...window.PRODUCTS_DATA];

            if (idVal !== '') {
                // EDIT UPDATE
                const productId = parseInt(idVal, 10);
                const idx = products.findIndex(p => p.id === productId);
                if (idx !== -1) {
                    products[idx].name = nameInput.value.trim();
                    products[idx].brand = brandInput.value.trim();
                    products[idx].category = categorySelect.value;
                    products[idx].priceOriginal = parseInt(priceOrigInput.value, 10);
                    products[idx].priceCurrent = parseInt(priceCurrInput.value, 10);
                    products[idx].image = imgInput.value.trim();
                    products[idx].description = descInput.value.trim();
                    products[idx].specs = specsObj;

                    window.showToast('Ürün başarıyla güncellendi.', 'success');
                }
            } else {
                // ADD SAVE
                const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
                const newProduct = {
                    id: newId,
                    name: nameInput.value.trim(),
                    brand: brandInput.value.trim(),
                    category: categorySelect.value,
                    priceOriginal: parseInt(priceOrigInput.value, 10),
                    priceCurrent: parseInt(priceCurrInput.value, 10),
                    image: imgInput.value.trim(),
                    description: descInput.value.trim(),
                    specs: specsObj,
                    rating: 5.0,
                    reviewsCount: 0
                };
                products.push(newProduct);
                window.showToast('Yeni ürün başarıyla eklendi.', 'success');
            }

            window.PRODUCTS_DATA = products;
            localStorage.setItem('teknosa_products', JSON.stringify(products));

            productModal.classList.remove('open');
            renderProducts();
        });
    }

    // ==========================================================================
    // 8. INITIALIZE VIEW
    // ==========================================================================
    renderDashboard();
});
