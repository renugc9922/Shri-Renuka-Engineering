// ===== CONSTANTS =====
const themeStorageKey = 'srew-theme-preference';
const emailjsPublicKey = 'YOUR_PUBLIC_KEY';
const emailjsServiceId = 'YOUR_SERVICE_ID';
const emailjsTemplateId = 'YOUR_TEMPLATE_ID';

// Safe EmailJS initialization
try {
    if (window.emailjs && emailjsPublicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(emailjsPublicKey);
    }
} catch (error) {
    console.warn('EmailJS not available:', error);
}

function showToast(message, type = 'success') {
    const formToast = document.getElementById('formToast');

    if (!formToast) {
        return;
    }

    formToast.textContent = message;
    formToast.className = `form-toast show ${type}`;
}

function hideToast() {
    const formToast = document.getElementById('formToast');

    if (!formToast) {
        return;
    }

    formToast.className = 'form-toast';
    formToast.textContent = '';
}

function setFieldError(fieldName, message) {
    const errorElement = document.querySelector(`[data-error-for="${fieldName}"]`);

    if (errorElement) {
        errorElement.textContent = message || '';
    }
}

function clearFieldErrors() {
    document.querySelectorAll('.field-error').forEach(errorElement => {
        errorElement.textContent = '';
    });
}

function validateCareerForm() {
    const careerForm = document.getElementById('careerForm');
    
    if (!careerForm) {
        return false;
    }

    clearFieldErrors();
    hideToast();

    const fullName = careerForm.fullName;
    const emailAddress = careerForm.emailAddress;
    const phoneNumber = careerForm.phoneNumber;
    const positionApplyingFor = careerForm.positionApplyingFor;
    const message = careerForm.message;
    const resume = careerForm.resume;

    // Null checks for form fields
    if (!fullName || !emailAddress || !phoneNumber || !positionApplyingFor || !message || !resume) {
        return false;
    }

    let isValid = true;

    if (!fullName.value.trim()) {
        setFieldError('fullName', 'Please enter your full name.');
        isValid = false;
    }

    if (!emailAddress.value.trim()) {
        setFieldError('emailAddress', 'Please enter your email address.');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.value.trim())) {
        setFieldError('emailAddress', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!phoneNumber.value.trim()) {
        setFieldError('phoneNumber', 'Please enter your phone number.');
        isValid = false;
    }

    if (!positionApplyingFor.value) {
        setFieldError('positionApplyingFor', 'Please select the position you are applying for.');
        isValid = false;
    }

    if (!message.value.trim()) {
        setFieldError('message', 'Please share a short message about yourself.');
        isValid = false;
    }

    if (!resume.files || resume.files.length === 0) {
        setFieldError('resume', 'Please upload your resume.');
        isValid = false;
    } else {
        const fileName = resume.files[0].name.toLowerCase();
        const allowedExtensions = ['.pdf', '.doc', '.docx'];
        const hasAllowedExtension = allowedExtensions.some(extension => fileName.endsWith(extension));

        if (!hasAllowedExtension) {
            setFieldError('resume', 'Resume must be a PDF, DOC, or DOCX file.');
            isValid = false;
        }
    }

    return isValid;
}

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    // ===== THEME TOGGLE =====
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const themeToggle = document.getElementById('themeToggle');
    
    function applyTheme(theme) {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-mode', isDark);

        if (themeToggleIcon) {
            themeToggleIcon.textContent = isDark ? '☀️' : '🌙';
        }
    }

    applyTheme(localStorage.getItem(themeStorageKey) || 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem(themeStorageKey, nextTheme);
        });
    }

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu on click
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FADE-IN ANIMATION =====
    const fadeElements = document.querySelectorAll(
        '.hero-content, .hero-buttons, .section-intro, .feature-item, .highlight-card, .infra-item, .achievement-item, .contact-item, .about-intro, .about-content-box, .founder-content, .division-content-box, .gallery-grid img'
    );

    const revealFadeElement = (element) => {
        if (!element) {
            return;
        }

        element.classList.add('fade-in');
        element.classList.add('visible');
    };

    if ('IntersectionObserver' in window) {
        try {
            const observer = new IntersectionObserver((entries, observerInstance) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observerInstance.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            fadeElements.forEach(el => {
                if (el) {
                    el.classList.add('fade-in');
                    observer.observe(el);
                }
            });
        } catch (error) {
            fadeElements.forEach(revealFadeElement);
        }
    } else {
        fadeElements.forEach(revealFadeElement);
    }

    // ===== DIVISIONS TAB CONTENT =====
    const divisionsContent = {
        works: {
            title: 'Engineering Works',
            items: [
                'CNC & VMC Machining',
                'Precision Grinding',
                'Assembly Components',
                'Export Quality Manufacturing',
                'Industrial Production'
            ]
        },
        services: {
            title: 'Engineering Services',
            items: [
                'Technical Consultation',
                'Industrial Maintenance',
                'Fabrication Solutions',
                'Engineering Support',
                'Custom Industrial Services'
            ]
        },
        training: {
            title: 'Training Hub',
            items: [
                'Internship Programs',
                'Industrial Training',
                'CNC Learning',
                'Technical Workshops',
                'Skill Development'
            ]
        }
    };

    function updateDivisionContent(tabKey) {
        const content = divisionsContent[tabKey];
        const contentBox = document.getElementById('divisionContent');
        
        if (!content || !contentBox) return;
        
        // Fade out
        contentBox.classList.add('fade-out');
        
        setTimeout(() => {
            const itemsList = content.items.map(item => `<li>${item}</li>`).join('');
            contentBox.innerHTML = `
                <h3>${content.title}</h3>
                <p>Specialized division delivering excellence in ${content.title.toLowerCase()}</p>
                <ul>${itemsList}</ul>
            `;
            
            // Fade in
            contentBox.classList.remove('fade-out');
        }, 200);
    }

    function initDivisions() {
        const tabs = document.querySelectorAll('.division-tab');
        
        if (tabs.length === 0) return;
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabKey = this.getAttribute('data-tab');
                
                if (!tabKey) return;
                
                // Remove active class from all tabs
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                
                // Update content
                updateDivisionContent(tabKey);
            });
        });
        
        // Initialize with first tab
        updateDivisionContent('works');
    }

    initDivisions();

    // ===== SAFE FORM HANDLING =====
    const careerForm = document.getElementById('careerForm');
    const careerSubmitBtn = document.getElementById('careerSubmitBtn');
    
    if (careerForm) {
        careerForm.addEventListener('input', (event) => {
            const target = event.target;
            if (target && target.name) {
                setFieldError(target.name, '');
            }
        });

        careerForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (!validateCareerForm()) {
                showToast('Please fix the highlighted fields and try again.', 'error');
                return;
            }

            if (!window.emailjs || emailjsPublicKey === 'YOUR_PUBLIC_KEY') {
                showToast('EmailJS is not configured yet. Add your public key, service ID, and template ID.', 'error');
                return;
            }

            if (careerSubmitBtn) {
                careerSubmitBtn.disabled = true;
                careerSubmitBtn.textContent = 'Sending...';
            }

            try {
                await emailjs.sendForm(emailjsServiceId, emailjsTemplateId, careerForm);
                careerForm.reset();
                clearFieldErrors();
                showToast('Application sent successfully. We will get back to you soon.', 'success');
            } catch (error) {
                console.error('EmailJS submission failed:', error);
                showToast('Submission failed. Please try again after a moment.', 'error');
            } finally {
                if (careerSubmitBtn) {
                    careerSubmitBtn.disabled = false;
                    careerSubmitBtn.textContent = 'Submit Application';
                }
            }
        });
    }

    // ===== ACTIVE NAV LINK =====
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section').forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // ===== SCROLL TO TOP BUTTON =====
    try {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: orange;
            color: white;
            border: none;
            display: none;
            cursor: pointer;
            z-index: 999;
        `;

        if (document.body) {
            document.body.appendChild(scrollBtn);

            window.addEventListener('scroll', () => {
                scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
            });

            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    } catch (error) {
        console.warn('Scroll to top button failed:', error);
    }
});
