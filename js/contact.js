document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const modalOverlay = document.getElementById('success-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!contactForm) return;

    // Helper functions for validation
    const showError = (inputElement, message) => {
        const group = inputElement.closest('.form-group');
        if (group) {
            group.classList.add('has-error');
            const errorSpan = group.querySelector('.form-error');
            if (errorSpan) {
                errorSpan.textContent = message;
            }
        }
    };

    const clearError = (inputElement) => {
        const group = inputElement.closest('.form-group');
        if (group) {
            group.classList.remove('has-error');
        }
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const isValidPhone = (phone) => {
        // Turkish phone validation (matches: 05xxxxxxxxx, 5xxxxxxxxx, +905xxxxxxxxx)
        const re = /^(?:\+90|0)?5[0-9]{9}$/;
        return re.test(phone.replace(/\s+/g, ''));
    };

    // Real-time validation listeners on input change
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
    });

    // Form submit validation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let hasErrors = false;
        
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const phoneInput = document.getElementById('form-phone');
        const subjectInput = document.getElementById('form-subject');
        const messageInput = document.getElementById('form-message');

        // Name validation
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Adınız ve soyadınız alanı boş bırakılamaz.');
            hasErrors = true;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, 'Ad soyad en az 3 karakter olmalıdır.');
            hasErrors = true;
        } else {
            clearError(nameInput);
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'E-posta adresiniz alanı boş bırakılamaz.');
            hasErrors = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Geçerli bir e-posta adresi giriniz.');
            hasErrors = true;
        } else {
            clearError(emailInput);
        }

        // Phone validation
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Telefon numaranız alanı boş bırakılamaz.');
            hasErrors = true;
        } else if (!isValidPhone(phoneInput.value.trim())) {
            showError(phoneInput, 'Geçerli bir telefon numarası giriniz (Örn: 05551234567).');
            hasErrors = true;
        } else {
            clearError(phoneInput);
        }

        // Subject validation
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Konu alanı boş bırakılamaz.');
            hasErrors = true;
        } else {
            clearError(subjectInput);
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Mesajınız alanı boş bırakılamaz.');
            hasErrors = true;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Mesajınız en az 10 karakter olmalıdır.');
            hasErrors = true;
        } else {
            clearError(messageInput);
        }

        // If no errors, show modal, save message to admin tickets database, and reset form
        if (!hasErrors) {
            // Save to local database (so it's visible in Admin Panel under Destek Mesajları)
            const allTickets = JSON.parse(localStorage.getItem('teknosa_support_messages')) || [];
            const newTicket = {
                id: 'ticket-' + Date.now(),
                userEmail: emailInput.value.trim().toLowerCase(),
                userName: nameInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim() + " (Telefon: " + phoneInput.value.trim() + ")",
                date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
                status: 'Bekliyor',
                reply: ''
            };
            allTickets.push(newTicket);
            localStorage.setItem('teknosa_support_messages', JSON.stringify(allTickets));

            modalOverlay.classList.add('open');
            contactForm.reset();
        }
    });

    // Close Modal event listeners
    if (modalCloseBtn && modalOverlay) {
        modalCloseBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('open');
        });
        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });
    }
});
