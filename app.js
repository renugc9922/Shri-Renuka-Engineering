import * as React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';

const e = React.createElement;

const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Projects', href: '#projects' },
    { label: 'Training & Careers', href: '#training' },
    { label: 'Inquiry', href: '#inquiry' },
    { label: 'Contact', href: '#contact' }
];

function joinClasses(...parts) {
    return parts.filter(Boolean).join(' ');
}

function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('top');

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const renderNavLink = (item) =>
        e(
            'a',
            {
                key: item.label,
                className: joinClasses(
                    'nav-link',
                    activeSection === item.href.replace('#', '') && 'active-link'
                ),
                href: item.href,
                onClick: closeMenu
            },
            item.label
        );

    return e(
        'header',
        { className: joinClasses('site-header', scrolled && 'is-scrolled') },

        e(
            'div',
            { className: 'industrial-container nav-row' },

            e(
                'div',
                { className: 'brand' },

                e('img', {
                    src: 'images/REW Logo new_page-0001.jpg',
                    alt: 'Shri Renuka Engineering Works logo',
                    className: 'brand-logo'
                }),

                e(
                    'div',
                    { className: 'brand-copy' },
                    e('span', { className: 'brand-kicker' }, 'Industrial Excellence'),
                    e('strong', null, 'Shri Renuka Engineering Works')
                )
            ),

            e(
                'nav',
                {
                    className: 'desktop-nav',
                    'aria-label': 'Primary navigation'
                },
                navItems.map(renderNavLink)
            ),

            e(
                'div',
                { className: 'nav-meta' },
                e(
                    'button',
                    {
                        className: 'menu-button',
                        type: 'button',
                        onClick: () => setMenuOpen((value) => !value)
                    },
                    menuOpen ? 'Close' : 'Menu'
                )
            )
        ),

        e(
            'div',
            {
                className: joinClasses(
                    'industrial-container',
                    'mobile-drawer',
                    menuOpen && 'is-open'
                ),
                id: 'mobile-menu'
            },
            navItems.map(renderNavLink)
        )
    );
}

function App() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('✅ Form Submitted Successfully!');
        event.target.reset();
    };

    React.useEffect(() => {
        const elements = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return e(
        'div',
        { className: 'app-shell', id: 'top' },

        e(Navbar),

        e(
            'main',
            { className: 'page-main' },

            e(
                'section',
                { className: 'hero-section' },
                e(
                    'div',
                    { className: 'hero-visual' },
                    e('div', {
                        className: 'hero-image',
                        style: { backgroundImage: "url('images/hero.jpg')" }
                    }),
                    e('div', { className: 'hero-overlay' })
                ),
                e(
                    'div',
                    { className: 'hero-content reveal' },
                    e(
                        'div',
                        { className: 'industrial-container' },
                        e('p', { className: 'hero-kicker' }, 'Precision • Innovation • Industrial Excellence Since 1995'),
                        e('h1', { className: 'hero-title' }, 'Shri Renuka Engineering Works'),
                        e(
                            'p',
                            { className: 'hero-description' },
                            'Delivering precision manufacturing, industrial innovation, CNC machining, and practical engineering training with over 30 years of trusted industrial experience.'
                        ),
                        e(
                            'div',
                            { className: 'hero-actions' },
                            e('a', { href: '#services', className: 'cta-button' }, 'Explore Capabilities'),
                            e('a', { href: '#training', className: 'secondary-button' }, 'Training & Career Opportunities')
                        )
                    )
                )
            ),

            e(
                'section',
                { className: 'about-section', id: 'about' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'about-grid' },
                        e(
                            'div',
                            { className: 'about-image-wrapper reveal' },
                            e('img', {
                                src: 'images/hero.jpg',
                                alt: 'Shri Renuka Engineering Works factory and machinery',
                                className: 'about-image'
                            })
                        ),
                        e(
                            'div',
                            { className: 'about-content reveal' },
                            e('p', { className: 'about-label' }, 'About the Company'),
                            e('h2', { className: 'about-heading' }, 'Built Through Experience, Precision & Industrial Commitment'),
                            e(
                                'p',
                                { className: 'about-description' },
                                'Shri Renuka Engineering Works has been delivering trusted industrial manufacturing, fabrication, machining, and engineering solutions since 1995. With decades of practical industry experience, the company has grown through quality work, technical expertise, and long-term client trust.'
                            ),
                            e(
                                'div',
                                { className: 'about-stats' },
                                e('div', { className: 'stat-card' }, e('div', { className: 'stat-number' }, '30+'), e('div', { className: 'stat-label' }, 'Years of Experience')),
                                e('div', { className: 'stat-card' }, e('div', { className: 'stat-number' }, '100+'), e('div', { className: 'stat-label' }, 'Industrial Projects')),
                                e('div', { className: 'stat-card' }, e('div', { className: 'stat-number' }, 'Real-World'), e('div', { className: 'stat-label' }, 'Training & Engineering'))
                            )
                        )
                    )
                )
            ),

            e(
                'section',
                { className: 'services-section', id: 'services' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Our Services'),
                        e('h2', { className: 'section-title' }, 'Engineering Solutions Built For Industrial Performance'),
                        e('p', { className: 'section-description' }, 'We provide precision engineering, fabrication, machining, industrial manufacturing, and technical training solutions designed to meet modern industrial standards.')
                    ),
                    e(
                        'div',
                        { className: 'services-grid' },
                        [
                            { title: 'CNC Machining', text: 'High-precision CNC machining solutions for industrial components and manufacturing.' },
                            { title: 'Industrial Fabrication', text: 'Reliable fabrication services with strong structural and mechanical accuracy.' },
                            { title: 'Engineering Training', text: 'Practical industrial and engineering training for students and professionals.' },
                            { title: 'Machine Maintenance', text: 'Industrial machinery maintenance and operational support services.' },
                            { title: 'Custom Manufacturing', text: 'Tailored manufacturing solutions designed according to client requirements.' },
                            { title: 'Project Consultation', text: 'Technical consultation and industrial project execution assistance.' }
                        ].map((service) =>
                            e(
                                'div',
                                { className: 'service-card reveal', key: service.title },
                                e('h3', { className: 'service-title' }, service.title),
                                e('p', { className: 'service-text' }, service.text)
                            )
                        )
                    )
                )
            ),

            e(
                'section',
                { className: 'machinery-section', id: 'machinery' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Industrial Machinery'),
                        e('h2', { className: 'section-title' }, 'Advanced Machinery & Engineering Infrastructure'),
                        e('p', { className: 'section-description' }, 'Our workshop is equipped with industrial-grade machinery designed for precision manufacturing, fabrication, and engineering production.')
                    ),
                    e(
                        'div',
                        { className: 'machinery-grid' },
                        [
                            { image: '', title: 'CNC Turning Machine' },
                            { image: '', title: 'Industrial Milling Machine' },
                            { image: '', title: 'Precision Fabrication Unit' },
                            { image: '', title: 'Mechanical Workshop Setup' }
                        ].map((machine) =>
                            e(
                                'div',
                                { className: 'machine-card reveal', key: machine.title },
                                e('div', {
                                    className: 'machine-image',
                                    style: { backgroundImage: machine.image ? `url('${machine.image}')` : 'none' }
                                }),
                                e('div', { className: 'machine-content' }, e('h3', { className: 'machine-title' }, machine.title))
                            )
                        )
                    )
                )
            ),

            e(
                'section',
                { className: 'projects-section', id: 'projects' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Projects & Work'),
                        e('h2', { className: 'section-title' }, 'Industrial Projects Built With Precision & Reliability'),
                        e('p', { className: 'section-description' }, 'Our engineering projects reflect years of industrial expertise, manufacturing quality, and practical engineering execution.')
                    ),
                    e(
                        'div',
                        { className: 'projects-grid' },
                        [
                            { image: '', title: 'Industrial Machinery Setup', category: 'Manufacturing' },
                            { image: '', title: 'Precision Fabrication Work', category: 'Fabrication' },
                            { image: '', title: 'Engineering Training Workshop', category: 'Training' }
                        ].map((project) =>
                            e(
                                'div',
                                { className: 'project-card reveal', key: project.title },
                                e('div', {
                                    className: 'project-image',
                                    style: { backgroundImage: project.image ? `url('${project.image}')` : 'none' }
                                }),
                                e(
                                    'div',
                                    { className: 'project-content' },
                                    e('p', { className: 'project-category' }, project.category),
                                    e('h3', { className: 'project-title' }, project.title)
                                )
                            )
                        )
                    )
                )
            ),

            e(
                'section',
                { className: 'training-section', id: 'training' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Training & Careers'),
                        e('h2', { className: 'section-title' }, 'Build Skills & Explore Career Opportunities'),
                        e('p', { className: 'section-description' }, 'We provide industrial training, internships, practical exposure, and career opportunities for engineering students and professionals.')
                    ),
                    e(
                        'div',
                        { className: 'training-grid' },
                        [
                            { title: 'Industrial Training', text: 'Hands-on learning with industrial machinery and real engineering processes.' },
                            { title: 'Student Internship', text: 'Industry exposure for engineering students through guided practical work.' },
                            { title: 'Career Development', text: 'Improve technical and professional skills through real project participation.' }
                        ].map((item) =>
                            e(
                                'div',
                                { className: 'training-card reveal', key: item.title },
                                e('h3', { className: 'training-title' }, item.title),
                                e('p', { className: 'training-text' }, item.text)
                            )
                        )
                    )
                )
            ),
            e(
                'section',
                { className: 'inquiry-section', id: 'inquiry' },
                e(
                    'div',
                    { className: 'industrial-container inquiry-box' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Inquiry Form'),
                        e('h2', { className: 'section-title' }, 'Reach Out For Work, Training Or Career Opportunities'),
                        e('p', { className: 'section-description' }, 'Select the purpose of your inquiry and share your details. Our team will connect with you for the next steps.')
                    ),
                    e(
                        'form',
                        { className: 'inquiry-form reveal', onSubmit: handleSubmit },
                        e('input', { type: 'text', placeholder: 'Full Name', required: true }),
                        e('input', { type: 'tel', placeholder: 'Phone Number', required: true }),
                        e('input', { type: 'email', placeholder: 'Email Address' }),
                        e(
                            'select',
                            { required: true },
                            e('option', { value: '' }, 'Select Inquiry Type'),
                            e('option', { value: 'quotation' }, 'Quotation Request'),
                            e('option', { value: 'internship' }, 'Internship Application'),
                            e('option', { value: 'training' }, 'Training Registration'),
                            e('option', { value: 'career' }, 'Career / Job Application'),
                            e('option', { value: 'supplier' }, 'Supplier / Business Inquiry')
                        ),
                        e('textarea', { placeholder: 'Write your message or requirement...', rows: 5 }),
                        e('button', { type: 'submit', className: 'cta-button' }, 'Submit Inquiry')
                    )
                )
            ),

            e(
                'section',
                { className: 'contact-section', id: 'contact' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e(
                        'div',
                        { className: 'section-heading reveal' },
                        e('p', { className: 'section-label' }, 'Get In Touch'),
                        e('h2', { className: 'section-title' }, 'Let’s Build Something Together'),
                        e('p', { className: 'section-description' }, 'Connect with Shri Renuka Engineering Works for manufacturing, projects, industrial solutions, and training opportunities.')
                    ),
                    e(
                        'div',
                        { className: 'contact-grid' },
                        e('div', { className: 'contact-card' }, e('h3', null, '📍 Location'), e('p', null, 'Plot No. E 92-5/7, Robotex Park, Akkalkot Road MIDC, Solapur')),
                        e('div', { className: 'contact-card' }, e('h3', null, '📞 Contact'), e('p', null, '+91 9822249304 / +91 9763137419')),
                        e('div', { className: 'contact-card' }, e('h3', null, '✉ Email'), e('p', null, 'rew22795@gmail.com'))
                    )
                )
            ),

            
            e(
                'a',
                {
                    className: 'whatsapp-float',
                    href: 'https://wa.me/919822249304?text=Hello%20Shri%20Renuka%20Engineering%20Works%2C%20I%20want%20to%20know%20more.',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                'WhatsApp'
            ),
            e(
'button',
{
className:'back-top',

onClick:()=>{

window.scrollTo({
top:0,
behavior:'smooth'
});

}

},

'↑'

),

            e(
                'footer',
                { className: 'footer' },
                e(
                    'div',
                    { className: 'industrial-container' },
                    e('p', null, '© 2026 Shri Renuka Engineering Works • Built with Precision')
                )
            )
        )
    );
}

createRoot(document.getElementById('root')).render(e(App));