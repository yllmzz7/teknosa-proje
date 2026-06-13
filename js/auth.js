document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. INITIALIZE MINI DATABASE (LOCALSTORAGE)
    // ==========================================================================
    let usersDb = JSON.parse(localStorage.getItem('teknosa_users')) || [];
    
    // Seed database with a default test user if it doesn't exist
    const hasTestUser = usersDb.some(u => u.email.toLowerCase() === "ahmet@mail.com");
    if (!hasTestUser) {
        usersDb.push({
            fullName: "Ahmet Yılmaz",
            email: "ahmet@mail.com",
            password: "password123",
            role: "user"
        });
    }

    // Seed database with admin user if it doesn't exist
    const hasAdmin = usersDb.some(u => u.email.toLowerCase() === "admin@teknosa.com");
    if (!hasAdmin) {
        usersDb.push({
            fullName: "Teknosa Yönetici",
            email: "admin@teknosa.com",
            password: "admin123",
            role: "admin"
        });
    }

    localStorage.setItem('teknosa_users', JSON.stringify(usersDb));

    // Redirect to home if already logged in
    const activeSession = JSON.parse(localStorage.getItem('teknosa_session')) || JSON.parse(sessionStorage.getItem('teknosa_session'));
    if (activeSession) {
        window.location.href = 'index.html';
        return;
    }

    // ==========================================================================
    // 2. TAB TOGGLING LOGIC
    // ==========================================================================
    const tabLoginBtn = document.getElementById('tab-login-btn');
    const tabRegisterBtn = document.getElementById('tab-register-btn');
    const loginFormWrapper = document.getElementById('login-form-wrapper');
    const registerFormWrapper = document.getElementById('register-form-wrapper');
    const linkToRegister = document.getElementById('link-to-register');
    const linkToLogin = document.getElementById('link-to-login');

    const showLoginTab = () => {
        tabLoginBtn.classList.add('active');
        tabRegisterBtn.classList.remove('active');
        loginFormWrapper.classList.add('active');
        registerFormWrapper.classList.remove('active');
        // Reset forms when switching
        document.getElementById('login-form').reset();
        document.getElementById('register-form').reset();
        clearAllErrors();
    };

    const showRegisterTab = () => {
        tabRegisterBtn.classList.add('active');
        tabLoginBtn.classList.remove('active');
        registerFormWrapper.classList.add('active');
        loginFormWrapper.classList.remove('active');
        // Reset forms when switching
        document.getElementById('login-form').reset();
        document.getElementById('register-form').reset();
        clearAllErrors();
    };

    if (tabLoginBtn && tabRegisterBtn) {
        tabLoginBtn.addEventListener('click', showLoginTab);
        tabRegisterBtn.addEventListener('click', showRegisterTab);
    }

    if (linkToRegister) linkToRegister.addEventListener('click', (e) => { e.preventDefault(); showRegisterTab(); });
    if (linkToLogin) linkToLogin.addEventListener('click', (e) => { e.preventDefault(); showLoginTab(); });

    // ==========================================================================
    // 3. FORM INPUT VALIDATION HELPERS
    // ==========================================================================
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

    const clearAllErrors = () => {
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('has-error');
        });
        const loginErr = document.getElementById('login-summary-error');
        const regErr = document.getElementById('reg-summary-error');
        if (loginErr) loginErr.style.display = 'none';
        if (regErr) regErr.style.display = 'none';
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    // Live validation clearing
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
            const loginErr = document.getElementById('login-summary-error');
            const regErr = document.getElementById('reg-summary-error');
            if (loginErr) loginErr.style.display = 'none';
            if (regErr) regErr.style.display = 'none';
        });
    });

    // ==========================================================================
    // 4. REGISTRATION SUBMISSION LOGIC
    // ==========================================================================
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let hasErrors = false;
            const nameInput = document.getElementById('reg-name');
            const emailInput = document.getElementById('reg-email');
            const passwordInput = document.getElementById('reg-password');
            const confirmInput = document.getElementById('reg-password-confirm');
            const regSummaryError = document.getElementById('reg-summary-error');

            if (regSummaryError) regSummaryError.style.display = 'none';

            // Name
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Ad soyad alanı boş bırakılamaz.');
                hasErrors = true;
            } else if (nameInput.value.trim().length < 3) {
                showError(nameInput, 'Ad soyad en az 3 karakter olmalıdır.');
                hasErrors = true;
            } else {
                clearError(nameInput);
            }

            // Email
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'E-posta alanı boş bırakılamaz.');
                hasErrors = true;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Geçerli bir e-posta adresi giriniz.');
                hasErrors = true;
            } else {
                clearError(emailInput);
            }

            // Password
            if (passwordInput.value.trim() === '') {
                showError(passwordInput, 'Şifre alanı boş bırakılamaz.');
                hasErrors = true;
            } else if (passwordInput.value.trim().length < 6) {
                showError(passwordInput, 'Şifreniz en az 6 karakter olmalıdır.');
                hasErrors = true;
            } else {
                clearError(passwordInput);
            }

            // Confirm Password
            if (confirmInput.value.trim() === '') {
                showError(confirmInput, 'Şifre tekrarı alanı boş bırakılamaz.');
                hasErrors = true;
            } else if (confirmInput.value.trim() !== passwordInput.value.trim()) {
                showError(confirmInput, 'Şifreler eşleşmiyor.');
                hasErrors = true;
            } else {
                clearError(confirmInput);
            }

            if (hasErrors) return;

            // Database duplicate check
            const currentUsers = JSON.parse(localStorage.getItem('teknosa_users')) || [];
            const userExists = currentUsers.some(u => u.email.toLowerCase() === emailInput.value.trim().toLowerCase());

            if (userExists) {
                if (regSummaryError) {
                    regSummaryError.textContent = "Bu e-posta adresi zaten kullanımda!";
                    regSummaryError.style.display = 'block';
                }
                showError(emailInput, 'E-posta adresi kullanımda.');
                return;
            }

            // Save user to "database"
            const newUser = {
                fullName: nameInput.value.trim(),
                email: emailInput.value.trim().toLowerCase(),
                password: passwordInput.value.trim(),
                role: "user"
            };
            currentUsers.push(newUser);
            localStorage.setItem('teknosa_users', JSON.stringify(currentUsers));

            // Log them in immediately (by default, new signups go to sessionStorage unless remembered later)
            const session = {
                fullName: newUser.fullName,
                email: newUser.email,
                role: "user"
            };
            sessionStorage.setItem('teknosa_session', JSON.stringify(session));

            // Show Custom Toast & Redirect
            window.showToast('Üyeliğiniz başarıyla oluşturuldu! Hoş geldiniz.', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // ==========================================================================
    // 5. LOGIN SUBMISSION LOGIC
    // ==========================================================================
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let hasErrors = false;
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const loginSummaryError = document.getElementById('login-summary-error');

            if (loginSummaryError) loginSummaryError.style.display = 'none';

            // Email
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'E-posta alanı boş bırakılamaz.');
                hasErrors = true;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Geçerli bir e-posta adresi giriniz.');
                hasErrors = true;
            } else {
                clearError(emailInput);
            }

            // Password
            if (passwordInput.value === '') {
                showError(passwordInput, 'Şifre alanı boş bırakılamaz.');
                hasErrors = true;
            } else {
                clearError(passwordInput);
            }

            if (hasErrors) return;

            // Verify credentials against database
            const currentUsers = JSON.parse(localStorage.getItem('teknosa_users')) || [];
            const matchedUser = currentUsers.find(
                u => u.email.toLowerCase() === emailInput.value.trim().toLowerCase() && 
                     u.password === passwordInput.value
            );

            if (matchedUser) {
                const rememberMe = document.getElementById('login-remember') ? document.getElementById('login-remember').checked : false;
                const session = {
                    fullName: matchedUser.fullName,
                    email: matchedUser.email,
                    role: matchedUser.role || "user"
                };
                
                // If remember me is checked: localStorage, else: sessionStorage
                if (rememberMe) {
                    localStorage.setItem('teknosa_session', JSON.stringify(session));
                } else {
                    sessionStorage.setItem('teknosa_session', JSON.stringify(session));
                }
                
                window.showToast(`Giriş başarılı! Hoş geldiniz, ${matchedUser.fullName}.`, 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                if (loginSummaryError) {
                    loginSummaryError.textContent = "E-posta veya şifre hatalı!";
                    loginSummaryError.style.display = 'block';
                }
                if (window.showToast) {
                    window.showToast("E-posta veya şifre hatalı!", "error");
                }
            }
        });
    }
});
