document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. SESSION VERIFICATION & REDIRECT
    // ==========================================================================
    const session = JSON.parse(localStorage.getItem('teknosa_session')) || JSON.parse(sessionStorage.getItem('teknosa_session'));
    
    if (!session) {
        // Redirect to login if guest tries to access profile page
        window.location.href = 'giris.html';
        return;
    }

    // Populate Sidebar & Inputs
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarEmail = document.getElementById('sidebar-user-email');
    const inputName = document.getElementById('profile-name');
    const inputEmail = document.getElementById('profile-email');

    if (sidebarName) sidebarName.textContent = session.fullName;
    if (sidebarEmail) sidebarEmail.textContent = session.email;
    if (inputName) inputName.value = session.fullName;
    if (inputEmail) inputEmail.value = session.email;

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
            
            // Toggle active classes
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) targetContent.classList.add('active');
        });
    });

    // ==========================================================================
    // 3. SEEDING MOCK CARD & ADDRESS FOR AHMET YILMAZ (If empty)
    // ==========================================================================
    let cardsDb = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
    let addressesDb = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];

    if (session.email === 'ahmet@mail.com') {
        if (cardsDb.filter(c => c.userEmail === session.email).length === 0) {
            cardsDb.push({
                userEmail: session.email,
                id: 'card-' + Date.now(),
                holder: "Ahmet Yılmaz",
                number: "4355229048113940",
                expiry: "12/28",
                cvc: "305"
            });
            localStorage.setItem('teknosa_cards', JSON.stringify(cardsDb));
        }
        if (addressesDb.filter(a => a.userEmail === session.email).length === 0) {
            addressesDb.push({
                userEmail: session.email,
                id: 'addr-' + Date.now(),
                title: "Evim (Kadıköy)",
                city: "İstanbul",
                district: "Kadıköy",
                phone: "05551234567",
                detail: "Moda Caddesi, Huzur Apartmanı No: 15 Daire: 4, Caferağa Mah."
            });
            localStorage.setItem('teknosa_addresses', JSON.stringify(addressesDb));
        }
    }

    // ==========================================================================
    // 4. PROFILE INFO & PASSWORD UPDATE
    // ==========================================================================
    const infoForm = document.getElementById('profile-info-form');
    if (infoForm) {
        infoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameVal = inputName.value.trim();
            const nameError = inputName.nextElementSibling;

            if (nameVal === '' || nameVal.length < 3) {
                inputName.closest('.form-group').classList.add('has-error');
                if (nameError) nameError.style.display = 'block';
                return;
            }

            inputName.closest('.form-group').classList.remove('has-error');
            if (nameError) nameError.style.display = 'none';

            // Update user in users database
            const users = JSON.parse(localStorage.getItem('teknosa_users')) || [];
            const userIndex = users.findIndex(u => u.email.toLowerCase() === session.email.toLowerCase());
            
            if (userIndex !== -1) {
                users[userIndex].fullName = nameVal;
                localStorage.setItem('teknosa_users', JSON.stringify(users));
                
                // Update active session
                session.fullName = nameVal;
                if (localStorage.getItem('teknosa_session')) {
                    localStorage.setItem('teknosa_session', JSON.stringify(session));
                } else {
                    sessionStorage.setItem('teknosa_session', JSON.stringify(session));
                }
                
                // Update sidebar and show success
                if (sidebarName) sidebarName.textContent = nameVal;
                window.showToast('Profil bilgileriniz başarıyla güncellendi.', 'success');
            }
        });
    }

    const passwordForm = document.getElementById('profile-password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const currentPass = document.getElementById('profile-current-password');
            const newPass = document.getElementById('profile-new-password');
            const confirmPass = document.getElementById('profile-confirm-password');
            let hasErrors = false;

            // Helper to show/hide errors
            const setFieldError = (el, show, msg = '') => {
                const group = el.closest('.form-group');
                const errSpan = group.querySelector('.form-error');
                if (show) {
                    group.classList.add('has-error');
                    if (errSpan) {
                        errSpan.textContent = msg;
                        errSpan.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    group.classList.remove('has-error');
                    if (errSpan) errSpan.style.display = 'none';
                }
            };

            // Get user record
            const users = JSON.parse(localStorage.getItem('teknosa_users')) || [];
            const userIndex = users.findIndex(u => u.email.toLowerCase() === session.email.toLowerCase());
            const userObj = users[userIndex];

            // 1. Current Pass Validation
            if (currentPass.value === '') {
                setFieldError(currentPass, true, 'Mevcut şifrenizi giriniz.');
            } else if (userObj && userObj.password !== currentPass.value) {
                setFieldError(currentPass, true, 'Mevcut şifreniz hatalı.');
            } else {
                setFieldError(currentPass, false);
            }

            // 2. New Pass Validation
            if (newPass.value === '') {
                setFieldError(newPass, true, 'Yeni şifrenizi giriniz.');
            } else if (newPass.value.length < 6) {
                setFieldError(newPass, true, 'Şifre en az 6 karakter olmalıdır.');
            } else {
                setFieldError(newPass, false);
            }

            // 3. Confirm Pass Validation
            if (confirmPass.value === '') {
                setFieldError(confirmPass, true, 'Şifre tekrarı alanı boş bırakılamaz.');
            } else if (confirmPass.value !== newPass.value) {
                setFieldError(confirmPass, true, 'Şifreler eşleşmiyor.');
            } else {
                setFieldError(confirmPass, false);
            }

            if (hasErrors) return;

            // Save new password
            if (userIndex !== -1) {
                users[userIndex].password = newPass.value;
                localStorage.setItem('teknosa_users', JSON.stringify(users));
                passwordForm.reset();
                window.showToast('Şifreniz başarıyla değiştirildi.', 'success');
            }
        });
    }

    // ==========================================================================
    // 5. RENDER ORDERS HISTORY
    // ==========================================================================
    const renderOrders = () => {
        const container = document.getElementById('orders-list-container');
        if (!container) return;

        const allOrders = JSON.parse(localStorage.getItem('teknosa_orders')) || [];
        const userOrders = allOrders.filter(o => o.userEmail === session.email);

        if (userOrders.length === 0) {
            container.innerHTML = `
                <div class="cart-empty-state" style="padding: 3rem 1rem;">
                    <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: var(--text-muted); opacity: 0.7;">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <p style="margin-top: 1rem;">Henüz bir siparişiniz bulunmamaktadır.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        userOrders.reverse().forEach(order => {
            let itemsHTML = '';
            order.items.forEach(item => {
                itemsHTML += `
                    <div class="order-detail-row" style="display:flex; align-items:center; justify-content:space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
                        <div style="display:flex; align-items:center; gap:0.75rem;">
                            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                            <div>
                                <h5 style="font-size:0.9rem; font-weight:700; color:var(--secondary);">${item.name}</h5>
                                <span style="font-size:0.8rem; color:var(--text-muted);">${item.quantity} Adet x ${formatPrice(item.price)}</span>
                            </div>
                        </div>
                        <span style="font-size:0.9rem; font-weight:700; color:var(--primary);">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `;
            });

            const orderHTML = `
                <div class="profile-order-card" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem; background-color: var(--card-bg);">
                    <div class="order-card-header" style="display:flex; align-items:center; justify-content:space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.75rem; flex-wrap:wrap; gap: 0.5rem;">
                        <div>
                            <span style="font-size:0.85rem; color:var(--text-muted);">Sipariş Numarası: </span>
                            <strong style="color:var(--secondary);">${order.orderId}</strong>
                        </div>
                        <div>
                            <span style="font-size:0.85rem; color:var(--text-muted);">Tarih: </span>
                            <strong style="color:var(--secondary);">${order.date}</strong>
                        </div>
                        <span class="badge badge-orange">${order.status || 'Sipariş Alındı'}</span>
                    </div>
                    
                    <div class="order-card-items">
                        ${itemsHTML}
                    </div>
                    
                    <div class="order-card-footer" style="display:flex; align-items:center; justify-content:space-between; margin-top: 0.75rem; padding-top: 0.5rem;">
                        <span style="font-size:0.9rem; font-weight:700; color:var(--secondary);">Toplam Tutar:</span>
                        <strong style="font-size:1.2rem; color:var(--primary);">${formatPrice(order.total)}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', orderHTML);
        });
    };

    // ==========================================================================
    // 6. SAVED CARDS MANAGEMENT
    // ==========================================================================
    const renderCards = () => {
        const container = document.getElementById('saved-cards-list');
        if (!container) return;

        const allCards = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
        const userCards = allCards.filter(c => c.userEmail === session.email);

        if (userCards.length === 0) {
            container.innerHTML = `<p style="grid-column: span 2; text-align: center; color: var(--text-muted);">Kayıtlı kartınız bulunmamaktadır.</p>`;
            return;
        }

        container.innerHTML = '';
        userCards.forEach(card => {
            // Mask card number: **** **** **** 1234
            const maskedNum = '•••• •••• •••• ' + card.number.slice(-4);
            const cardHTML = `
                <div class="credit-card-item" style="background: linear-gradient(135deg, var(--secondary) 0%, #0c4383 100%); color: #fff; padding: 1.5rem; border-radius: var(--radius-md); position: relative; min-height: 150px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                            <span style="font-size:0.75rem; text-transform:uppercase; opacity:0.8; letter-spacing:1px;">Kredi / Banka Kartı</span>
                            <h4 style="font-size:1rem; margin-top:0.25rem; font-weight:700;">${card.holder}</h4>
                        </div>
                        <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: var(--primary);"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                    </div>
                    <div>
                        <div style="font-family: monospace; font-size: 1.2rem; letter-spacing: 2px; margin-bottom: 0.75rem;">${maskedNum}</div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <span style="font-size:0.6rem; text-transform:uppercase; opacity:0.8; display:block;">SKT</span>
                                <span style="font-size:0.85rem; font-weight:700;">${card.expiry}</span>
                            </div>
                            <button class="btn btn-outline delete-card-btn" data-id="${card.id}" style="color:#fff; border-color:rgba(255,255,255,0.3); padding:0.25rem 0.5rem; font-size:0.75rem;">Kartı Sil</button>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Bind Card Delete Buttons
        document.querySelectorAll('.delete-card-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                let cards = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
                cards = cards.filter(c => c.id !== id);
                localStorage.setItem('teknosa_cards', JSON.stringify(cards));
                renderCards();
                window.showToast('Kredi kartınız başarıyla silindi.', 'error');
            });
        });
    };

    const addCardForm = document.getElementById('add-card-form');
    if (addCardForm) {
        addCardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const holderInput = document.getElementById('card-holder');
            const numInput = document.getElementById('card-number');
            const expiryInput = document.getElementById('card-expiry');
            const cvcInput = document.getElementById('card-cvc');
            let hasErrors = false;

            const setFieldError = (el, show, msg = '') => {
                const group = el.closest('.form-group');
                const errSpan = group.querySelector('.form-error');
                if (show) {
                    group.classList.add('has-error');
                    if (errSpan) {
                        errSpan.textContent = msg;
                        errSpan.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    group.classList.remove('has-error');
                    if (errSpan) errSpan.style.display = 'none';
                }
            };

            // Holder Name
            if (holderInput.value.trim() === '') {
                setFieldError(holderInput, true, 'Kart sahibinin adını yazınız.');
            } else if (holderInput.value.trim().length < 3) {
                setFieldError(holderInput, true, 'Geçerli bir ad giriniz.');
            } else {
                setFieldError(holderInput, false);
            }

            // Card Number
            if (numInput.value === '') {
                setFieldError(numInput, true, 'Kart numarasını yazınız.');
            } else if (numInput.value.length !== 16 || isNaN(numInput.value)) {
                setFieldError(numInput, true, '16 haneli kart numarası girmelisiniz.');
            } else {
                setFieldError(numInput, false);
            }

            // Expiry
            if (expiryInput.value === '') {
                setFieldError(expiryInput, true, 'AA/YY formatında SKT giriniz.');
            } else if (!/^\d{2}\/\d{2}$/.test(expiryInput.value)) {
                setFieldError(expiryInput, true, 'Tarih formatı geçersiz (Örn: 12/28).');
            } else {
                setFieldError(expiryInput, false);
            }

            // CVC
            if (cvcInput.value === '') {
                setFieldError(cvcInput, true, 'CVC giriniz.');
            } else if (cvcInput.value.length !== 3 || isNaN(cvcInput.value)) {
                setFieldError(cvcInput, true, '3 hane olmalıdır.');
            } else {
                setFieldError(cvcInput, false);
            }

            if (hasErrors) return;

            // Save Card
            let cards = JSON.parse(localStorage.getItem('teknosa_cards')) || [];
            cards.push({
                userEmail: session.email,
                id: 'card-' + Date.now(),
                holder: holderInput.value.trim(),
                number: numInput.value,
                expiry: expiryInput.value,
                cvc: cvcInput.value
            });
            localStorage.setItem('teknosa_cards', JSON.stringify(cards));
            
            addCardForm.reset();
            renderCards();
            window.showToast('Kartınız başarıyla kaydedildi.', 'success');
        });
    }

    // ==========================================================================
    // 7. SAVED ADDRESSES MANAGEMENT
    // ==========================================================================
    const renderAddresses = () => {
        const container = document.getElementById('saved-addresses-list');
        if (!container) return;

        const allAddresses = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];
        const userAddresses = allAddresses.filter(a => a.userEmail === session.email);

        if (userAddresses.length === 0) {
            container.innerHTML = `<p style="grid-column: span 2; text-align: center; color: var(--text-muted);">Kayıtlı adresiniz bulunmamaktadır.</p>`;
            return;
        }

        container.innerHTML = '';
        userAddresses.forEach(addr => {
            const addrHTML = `
                <div class="address-item-card" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; background-color: var(--card-bg); display: flex; flex-direction: column; justify-content: space-between; min-height: 140px;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                            <h4 style="font-size:1rem; font-weight:700; color:var(--primary);">${addr.title}</h4>
                            <span style="font-size:0.75rem; color:var(--text-muted); background-color:var(--section-bg); padding:0.15rem 0.4rem; border-radius:3px;">${addr.district} / ${addr.city}</span>
                        </div>
                        <p style="font-size:0.85rem; color:var(--text-color); margin-bottom:0.5rem; line-height:1.4;">${addr.detail}</p>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem; padding-top:0.5rem; border-top:1px solid var(--border-color);">
                        <span style="font-size:0.8rem; color:var(--text-muted);">${addr.phone}</span>
                        <button class="delete-address-btn" data-id="${addr.id}" style="color:var(--warning-red); background:none; border:none; cursor:pointer; font-size:0.8rem; font-weight:500;">Sil</button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', addrHTML);
        });

        // Bind Address Delete Buttons
        document.querySelectorAll('.delete-address-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                let addresses = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];
                addresses = addresses.filter(a => a.id !== id);
                localStorage.setItem('teknosa_addresses', JSON.stringify(addresses));
                renderAddresses();
                window.showToast('Adresiniz başarıyla silindi.', 'error');
            });
        });
    };

    const addAddressForm = document.getElementById('add-address-form');
    if (addAddressForm) {
        addAddressForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const titleInput = document.getElementById('address-title');
            const cityInput = document.getElementById('address-city');
            const distInput = document.getElementById('address-district');
            const phoneInput = document.getElementById('address-phone');
            const detailInput = document.getElementById('address-detail');
            let hasErrors = false;

            const setFieldError = (el, show, msg = '') => {
                const group = el.closest('.form-group');
                const errSpan = group.querySelector('.form-error');
                if (show) {
                    group.classList.add('has-error');
                    if (errSpan) {
                        errSpan.textContent = msg;
                        errSpan.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    group.classList.remove('has-error');
                    if (errSpan) errSpan.style.display = 'none';
                }
            };

            // Address Title
            if (titleInput.value.trim() === '') {
                setFieldError(titleInput, true, 'Adres başlığı giriniz (Örn: Evim).');
            } else {
                setFieldError(titleInput, false);
            }

            // City
            if (cityInput.value.trim() === '') {
                setFieldError(cityInput, true, 'Şehir giriniz.');
            } else {
                setFieldError(cityInput, false);
            }

            // District
            if (distInput.value.trim() === '') {
                setFieldError(distInput, true, 'İlçe giriniz.');
            } else {
                setFieldError(distInput, false);
            }

            // Phone
            if (phoneInput.value.trim() === '') {
                setFieldError(phoneInput, true, 'Telefon numarası giriniz.');
            } else if (phoneInput.value.trim().length < 10) {
                setFieldError(phoneInput, true, 'Geçerli bir telefon numarası giriniz.');
            } else {
                setFieldError(phoneInput, false);
            }

            // Detail
            if (detailInput.value.trim() === '') {
                setFieldError(detailInput, true, 'Lütfen detaylı adresinizi yazınız.');
            } else {
                setFieldError(detailInput, false);
            }

            if (hasErrors) return;

            // Save Address
            let addresses = JSON.parse(localStorage.getItem('teknosa_addresses')) || [];
            addresses.push({
                userEmail: session.email,
                id: 'addr-' + Date.now(),
                title: titleInput.value.trim(),
                city: cityInput.value.trim(),
                district: distInput.value.trim(),
                phone: phoneInput.value.trim(),
                detail: detailInput.value.trim()
            });
            localStorage.setItem('teknosa_addresses', JSON.stringify(addresses));

            addAddressForm.reset();
            renderAddresses();
            window.showToast('Adresiniz başarıyla kaydedildi.', 'success');
        });
    }

    // ==========================================================================
    // 8. SUPPORT TICKET SUBMISSION
    // ==========================================================================
    const supportForm = document.getElementById('support-ticket-form');
    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const subjectInput = document.getElementById('ticket-subject');
            const msgInput = document.getElementById('ticket-message');
            let hasErrors = false;

            const setFieldError = (el, show, msg = '') => {
                const group = el.closest('.form-group');
                const errSpan = group.querySelector('.form-error');
                if (show) {
                    group.classList.add('has-error');
                    if (errSpan) {
                        errSpan.textContent = msg;
                        errSpan.style.display = 'block';
                    }
                    hasErrors = true;
                } else {
                    group.classList.remove('has-error');
                    if (errSpan) errSpan.style.display = 'none';
                }
            };

            // Subject
            if (subjectInput.value.trim() === '') {
                setFieldError(subjectInput, true, 'Lütfen destek konusunu yazınız.');
            } else {
                setFieldError(subjectInput, false);
            }

            // Message
            if (msgInput.value.trim() === '') {
                setFieldError(msgInput, true, 'Lütfen mesajınızı yazınız.');
            } else if (msgInput.value.trim().length < 10) {
                setFieldError(msgInput, true, 'Destek talebiniz en az 10 karakter olmalıdır.');
            } else {
                setFieldError(msgInput, false);
            }

            if (hasErrors) return;

            // Save support message
            const allTickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];
            const newTicket = {
                id: 'ticket-' + Date.now(),
                userEmail: session.email,
                userName: session.fullName,
                subject: subjectInput.value.trim(),
                message: msgInput.value.trim(),
                date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                status: 'Bekliyor',
                reply: ''
            };
            allTickets.push(newTicket);
            localStorage.setItem('teknosa_support_messages', JSON.stringify(allTickets));

            window.showToast('Destek talebiniz başarıyla oluşturuldu.', 'success');
            supportForm.reset();
            renderTickets();
        });
    }

    // ==========================================================================
    // 9. RENDER MY SUPPORT TICKETS
    // ==========================================================================
    const renderTickets = () => {
        const container = document.getElementById('my-tickets-container');
        if (!container) return;

        const allTickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];
        const userTickets = allTickets.filter(t => t.userEmail === session.email);

        if (userTickets.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">Henüz destek talebiniz bulunmamaktadır.</p>`;
            return;
        }

        container.innerHTML = '';
        userTickets.reverse().forEach(ticket => {
            const replyHTML = ticket.reply ? `
                <div style="margin-top:0.75rem; padding:0.75rem; background-color:rgba(46, 204, 113, 0.08); border-left:3px solid #2ecc71; border-radius:3px;">
                    <strong style="font-size:0.85rem; color:#27ae60; display:block; margin-bottom:2px;">Yönetici Yanıtı:</strong>
                    <p style="font-size:0.85rem; color:var(--text-color);">${ticket.reply}</p>
                </div>
            ` : '';

            const ticketHTML = `
                <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1rem; background-color: var(--card-bg);">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
                        <div>
                            <span style="font-size:0.75rem; color:var(--text-muted);">${ticket.date}</span>
                            <h4 style="font-size:0.95rem; font-weight:700; color:var(--secondary); margin-top:2px;">${ticket.subject}</h4>
                        </div>
                        <span class="badge" style="background-color: ${ticket.status === 'Cevaplandı' ? '#2ecc71' : 'var(--primary)'}; color:#fff; font-size:0.75rem; padding:0.15rem 0.4rem; border-radius:3px; font-weight:600;">${ticket.status}</span>
                    </div>
                    <p style="font-size:0.85rem; color:var(--text-color);">${ticket.message}</p>
                    ${replyHTML}
                </div>
            `;
            container.insertAdjacentHTML('beforeend', ticketHTML);
        });
    };

    // Initialize lists
    renderOrders();
    renderCards();
    renderAddresses();
    renderTickets();
});
