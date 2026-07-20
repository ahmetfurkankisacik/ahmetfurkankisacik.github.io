/* ==========================================================================
   AHMET FURKAN KISACIK - PERSONAL WEBSITE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- LANGUAGE DICTIONARY ---
    const langData = {
        'tr': {
            // Nav
            'nav-about': 'Hakkımda',
            'nav-skills': 'Yetenekler',
            'nav-experience': 'Deneyim',
            'nav-projects': 'Projeler',
            'nav-seminars': 'Seminerler',
            'nav-blog': 'Blog',
            'nav-contact': 'İletişim',
            
            // Hero
            'hero-greeting': 'Merhaba, Ben',
            'hero-subtitle': 'Bilgisayar Mühendisi & Yazılım Geliştirici',
            'hero-desc': 'Yazılım eğitimi sektöründeki eğitmenlik tecrübemin ardından, aktif yazılım dünyasında modern ve ölçeklenebilir çözümler geliştiriyorum. Mikroservis mimarileri ve bulut teknolojileri üzerine odaklanıyorum.',
            'hero-btn-projects': 'Projeleri Gör',
            'hero-btn-contact': 'İletişime Geç',
            
            // About
            'about-title': 'Hakkımda',
            'about-welcome': 'Kodla Geleceği Şekillendiren Bir Yazılımcı',
            'about-p1': 'Burdur Mehmet Akif Ersoy Üniversitesi\'nde Bilgisayar Mühendisliği öğrencisiyim. Teorik mühendislik altyapımı yazılım eğitimi sektöründeki uzun süreli eğitmenlik tecrübemle birleştirerek, yazılım dünyasında sürdürülebilir ve yüksek kaliteli uygulamalar geliştiriyorum.',
            'about-p2': 'Teknolojik gelişmeleri yakından takip ederek topluluk seminerlerinde ve konferanslarda aktif konuşmacı olarak yer alıyor, bilgi paylaşımına değer veriyorum. Bugün, sektörel standartlarda temiz kod prensiplerine sadık kalarak modern yazılım projeleri üretmeye ve sistemleri optimize etmeye devam ediyorum.',
            'about-focus-title': 'Yakın Hedefim:',
            'about-focus-text': 'Mikroservislerde event-driven mimariler (Kafka/RabbitMQ) ve Kubernetes tabanlı bulut-yerli (cloud-native) orkestrasyon süreçlerinde uzmanlaşarak GitOps pratiklerini (ArgoCD) kurumsal sistemlere entegre etmek.',
            'stat-exp': 'Yıl Eğitmenlik Deneyimi',
            'stat-students': 'Eğitilen Öğrenci',
            'stat-projects': 'Geliştirilen Proje',
            'stat-seminars': 'Verilen Seminer',
            
            // Skills
            'skills-title': 'Yetenekler',
            'skills-cat-backend': 'Backend Geliştirme',
            'skills-cat-frontend': 'Frontend Geliştirme',
            'skills-cat-db': 'Veritabanı & Bulut',
            'skills-tools-title': 'Araçlar & Metodolojiler',
            
            // Experience / Timeline
            'experience-title': 'Deneyim & Eğitim',
            'exp-0-date': '10.2025 - Devam Ediyor',
            'exp-0-title': 'Yazılım Mühendisi Stajyeri',
            'exp-0-desc': 'Pegas Turizm bünyesinde kurumsal turizm teknolojileri, rezervasyon sistemleri ve aktif yazılım projelerinin geliştirilmesinde stajyer yazılım mühendisi olarak rol alıyorum.',
            'exp-1-title': 'HangiKredi Teknoloji Okulu',
            'exp-1-desc': 'Fintech alanında geliştirilen 3 aylık kapsamlı bir projede yer alarak finansal teknolojiler, mikroservis mimarileri ve güvenli ödeme sistemleri üzerine hem eğitim aldım hem de pratik geliştirme süreçlerinde aktif rol aldım.',
            'exp-2-title': 'Full Stack Developer Instructor',
            'exp-2-desc': 'Full Stack programları kapsamında Java, Spring Boot, React ve veritabanı sistemleri üzerine eğitmenlik yaptım. Eylül 2025\'te ayrılarak aktif sektöre geçiş yaptım.',
            'exp-3-title': 'Bootcamp Katılımcısı',
            'exp-3-desc': 'Yazılıma profesyonel başlangıcımı yaptığım 14 aylık yoğun program süresince 3 mini proje ve 1 staj (internship) projesini başarıyla tamamlayarak Full Stack geliştirici yeteneklerinin temelini attım.',
            'exp-4-title': 'Bilgisayar Mühendisliği Lisansı',
            'exp-4-desc': 'Bilgisayar bilimleri teorisi, algoritmalar, veri yapıları ve yazılım mühendisliği metodolojileri üzerine akademik eğitim alarak mühendislik yaklaşımımı güçlendirdim.',
            
            // Projects
            'projects-title': 'Projeler',
            'filter-all': 'Hepsi',
            'filter-springboot': 'Spring Boot',
            'filter-nextjs': 'Next.js',
            'filter-java': 'Pure Java',
            'project-view': 'Detayları Gör',
            'projects-more-git': 'Daha fazla projeye ve kod reposuna GitHub adresimden ulaşabilirsiniz.',
            'proj-pretier-desc': 'Modern gayrimenkul kiralama ve satın alma süreçlerini yöneten, tam kapsamlı emlak otomasyon web uygulaması.',
            'proj-cert-desc': 'Excel dosyalarından katılımcı listelerini okuyup toplu olarak özelleştirilmiş başarı ve katılım sertifikaları üreten web otomasyon sistemi.',
            'proj-school-desc': 'Öğrenci, öğretmen ve yönetim panellerini barındıran OOP prensiplerine sadık kalınarak yazılmış Java masaüstü/konsol uygulaması.',
            'proj-insurance-desc': 'Araç sigorta poliçesi hesaplama, müşteri yönetimi ve REST API servislerini sunan kurumsal altyapılı Spring Boot uygulaması.',
            'proj-ticket-desc': 'Çok kanallı bilet rezervasyonu, koltuk seçimi ve koltuk durum takibini yöneten Java veri yapıları tabanlı algoritma sistemi.',
            
            // Seminars
            'seminars-title': 'Seminerler & Konferanslar',
            'sem-1-title': 'ALKÜ Siber Güvenlik Semineri',
            'sem-1-desc': 'Alanya Alaaddin Keykubat Üniversitesi Siber Güvenlik Topluluğu öğrencilerine yönelik siber güvenlik yaklaşımları ve güvenli kod geliştirme üzerine bir seminer verdim.',
            'sem-2-title': 'TBD GBYF Çalıştayı & Seminer',
            'sem-2-desc': 'Türkiye Bilişim Derneği Genç Beyinler Yeni Fikirler etkinliğinde 12 farklı üniversiteden gelen projeleri inceleyip değerlendirdim ve öğrencilere yazılım kariyeri hakkında seminer verdim.',
            'sem-3-title': 'İstanbul Üni. 100. Yıl Bilişim Çalıştayı',
            'sem-3-desc': 'İstanbul Üniversitesi Matematik Kulübü öğrencilerine bilişim dünyası, yazılım mühendisliğinde çalışma modelleri ve öğrenme yol haritaları hakkında seminer verdim.',
            'sem-4-title': 'Bilkent Üni. TEDx Katılımı',
            'sem-4-desc': 'TEDx Bilkent Üniversitesi programına katılarak inovasyon, liderlik ve teknolojik gelişimler üzerine farklı vizyonları takip etme şansı buldum.',
            
            // Blog
            'blog-title': 'Blog & Makaleler',
            'article-1-title': 'Spring Boot 3 ve Spring Security 6 ile Rol Tabanlı Yetkilendirme (RBAC) ve JWT Mimarisi',
            'article-1-desc': 'Bir eğitmen ve yazılım mühendisinin gözünden: Pretier Homes projesinde katmanlı güvenlik, JWT token yönetimi ve rol tabanlı erişim kontrolünün adım adım kurgulanması.',
            'blog-read-btn': 'Medium\'da Oku',
            
            // References
            'references-title': 'Referanslar',
            'ref-role-data': 'Data Scientist & Profesör',
            'ref-role-dev': 'Developer',
            'ref-role-prof': 'Profesör',
            'ref-role-instructor': 'Eğitmen & İş Güvenliği Uzmanı',
            
            // Contact
            'contact-title': 'İletişime Geç',
            'contact-head': 'Birlikte Neler Yapabiliriz?',
            'contact-desc': 'Projeler, eğitimler, konuşmacı davetleri veya iş teklifleri için benimle dilediğiniz kanal üzerinden iletişime geçebilirsiniz. En kısa sürede dönüş sağlayacağım.',
            'contact-phone': 'Telefon',
            'contact-location': 'Konum',
            
            // Form
            'form-name': 'Adınız Soyadınız',
            'form-email': 'E-posta Adresiniz',
            'form-msg': 'Mesajınız',
            'form-send': 'Mesajı Gönder',
            'form-sending': 'Gönderiliyor...',
            'form-success': 'Mesajınız başarıyla iletildi! En kısa zamanda döneceğim.',
            'form-error': 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.',
            
            // Footer
            'footer-text': 'Süreçleri kodlayarak, geleceği şekillendiriyoruz.',
            
            // Modal
            'modal-tech': 'Kullanılan Teknolojiler:',
            'modal-role': 'Rolüm:'
        },
        'en': {
            // Nav
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-experience': 'Experience',
            'nav-projects': 'Projects',
            'nav-seminars': 'Seminars',
            'nav-blog': 'Blog',
            'nav-contact': 'Contact',
            
            // Hero
            'hero-greeting': 'Hello, I am',
            'hero-subtitle': 'Computer Engineer & Software Developer',
            'hero-desc': 'Following my training experience in the software education sector, I develop modern and scalable solutions in the active software world. Focusing on microservices and cloud technologies.',
            'hero-btn-projects': 'View Projects',
            'hero-btn-contact': 'Contact Me',
            
            // About
            'about-title': 'About Me',
            'about-welcome': 'A Developer Shaping the Future with Code',
            'about-p1': 'I am a Computer Engineering student at Burdur Mehmet Akif Ersoy University. Combining my theoretical engineering background with extensive teaching experience in the software education sector, I develop sustainable and high-quality applications in the software industry.',
            'about-p2': 'Constantly following tech trends, I actively speak at community seminars and conferences, highly valuing knowledge sharing. Today, I continue to build modern software projects and optimize systems while adhering to clean code standards.',
            'about-focus-title': 'Near-term Goal:',
            'about-focus-text': 'To master event-driven architectures (Kafka/RabbitMQ) and Kubernetes-based cloud-native orchestration for high availability (HA) and scalability in microservices, integrating GitOps practices (ArgoCD) into enterprise systems.',
            'stat-exp': 'Years Teaching Experience',
            'stat-students': 'Students Mentored',
            'stat-projects': 'Projects Built',
            'stat-seminars': 'Seminars Given',
            
            // Skills
            'skills-title': 'Skills',
            'skills-cat-backend': 'Backend Development',
            'skills-cat-frontend': 'Frontend Development',
            'skills-cat-db': 'Database & Cloud',
            'skills-tools-title': 'Tools & Methodologies',
            
            // Experience / Timeline
            'experience-title': 'Experience & Education',
            'exp-0-date': '10.2025 - Present',
            'exp-0-title': 'Software Engineer Intern',
            'exp-0-desc': 'Working as a Software Engineer Intern at Pegas Turizm. Participating in development workflows for enterprise-scale web applications and tourism technologies.',
            'exp-1-title': 'HangiKredi Technology School',
            'exp-1-desc': 'Participated in a comprehensive 3-month project in Fintech, obtaining education and hands-on experience in financial systems, microservices, and secure payment architectures.',
            'exp-2-title': 'Full Stack Developer Instructor',
            'exp-2-desc': 'Taught Java, Spring Boot, React, and database systems. Left in September 2025 to transition into the active software sector.',
            'exp-3-title': 'Bootcamp Graduate',
            'exp-3-desc': 'Began my professional software journey with an intensive 14-month bootcamp, successfully finishing 3 mini projects and 1 internship project, forming a strong foundation in Full Stack development.',
            'exp-4-title': 'B.S. in Computer Engineering',
            'exp-4-desc': 'Studying computer science theory, algorithms, data structures, and software engineering methodologies to reinforce analytical engineering approaches.',
            
            // Projects
            'projects-title': 'Projects',
            'filter-all': 'All',
            'filter-springboot': 'Spring Boot',
            'filter-nextjs': 'Next.js',
            'filter-java': 'Pure Java',
            'project-view': 'View Details',
            'projects-more-git': 'You can find more projects and repositories on my GitHub page.',
            'proj-pretier-desc': 'A comprehensive real-estate automation web application managing modern property rentals and buying lifecycles.',
            'proj-cert-desc': 'A web automation system that reads attendee lists from Excel files and generates customized achievement and participation certificates in bulk.',
            'proj-school-desc': 'A desktop/console application designed around strict OOP principles, facilitating student, teacher, and class registries.',
            'proj-insurance-desc': 'An enterprise-oriented Spring Boot app calculating dynamic vehicle insurance policy quotes, exposed via REST APIs.',
            'proj-ticket-desc': 'A Java data-structure-based reservation system managing movie and bus ticket booking, checking seat overlaps.',
            
            // Seminars
            'seminars-title': 'Seminars & Conferences',
            'sem-1-title': 'ALKU Cyber Security Seminar',
            'sem-1-desc': 'Delivered a seminar on secure coding and modern cyber security strategies to Alanya Alaaddin Keykubat University students.',
            'sem-2-title': 'TBD GBYF Workshop & Seminar',
            'sem-2-desc': 'Evaluated software projects presented by groups from 12 universities at the TBD GBYF event and lectured on IT career paths.',
            'sem-3-title': 'Istanbul Uni. 100th Year IT Workshop',
            'sem-3-desc': 'Gave a seminar to Mathematics Club students covering computing trends, development methodologies, and learning paths.',
            'sem-4-title': 'Bilkent Uni. TEDx Event',
            'sem-4-desc': 'Participated in the TEDx Bilkent University program, capturing perspectives on innovation, leadership, and tech growth.',
            
            // Blog
            'blog-title': 'Blog & Articles',
            'article-1-title': 'Role-Based Access Control (RBAC) and JWT Architecture with Spring Boot 3 & Spring Security 6',
            'article-1-desc': 'From the perspective of an instructor and software engineer: Step-by-step setup of layered security, JWT token management, and role-based access control in the Pretier Homes project.',
            'blog-read-btn': 'Read on Medium',
            
            // References
            'references-title': 'References',
            'ref-role-data': 'Data Scientist & Professor',
            'ref-role-dev': 'Developer',
            'ref-role-prof': 'Professor',
            'ref-role-instructor': 'Instructor & Safety Specialist',
            
            // Contact
            'contact-title': 'Get In Touch',
            'contact-head': 'What can we do together?',
            'contact-desc': 'Feel free to contact me for projects, courses, speaker invitations, or business proposals. I will get back to you as soon as possible.',
            'contact-phone': 'Phone',
            'contact-location': 'Location',
            
            // Form
            'form-name': 'Your Name',
            'form-email': 'Your Email',
            'form-msg': 'Your Message',
            'form-send': 'Send Message',
            'form-sending': 'Sending...',
            'form-success': 'Your message has been sent successfully! I will reply soon.',
            'form-error': 'Error sending message. Please try again.',
            
            // Footer
            'footer-text': 'Coding processes to shape the future.',
            
            // Modal
            'modal-tech': 'Technologies Used:',
            'modal-role': 'My Role:'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'tr';

    // Apply Language
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Update elements with data-key attributes
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (langData[lang][key]) {
                // If it's an input or textarea with placeholder, update placeholder instead
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = ' '; // Float label relies on space placeholder
                } else if (el.classList.contains('form-label')) {
                    el.textContent = langData[lang][key];
                } else {
                    el.innerHTML = langData[lang][key];
                }
            }
        });

        // Set Language toggle button text (show the opposite/next language text)
        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.querySelector('.lang-text').textContent = lang === 'tr' ? 'EN' : 'TR';
        }

        // Dynamically retype hero subtitle if lang changes
        resetTypingEffect();
    };

    // --- LANGUAGE TOGGLE EVENT ---
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const nextLang = currentLang === 'tr' ? 'en' : 'tr';
            setLanguage(nextLang);
        });
    }

    // --- THEME TOGGLE (DARK / LIGHT) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const setSelectionTheme = (theme) => {
        if (theme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Initial theme check
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setSelectionTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            setSelectionTheme(isDark ? 'light' : 'dark');
        });
    }

    // --- SCROLL EFFECT ON HEADER ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Navigation Highlight
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSectionId = '';
        
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            const sectionHeight = sec.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // --- HERO TYPING EFFECT ---
    const wordsDict = {
        'tr': ['Bilgisayar Mühendisi', 'Full Stack Developer Eğitmeni', 'DevOps Meraklısı'],
        'en': ['Computer Engineer', 'Full Stack Developer Instructor', 'DevOps Enthusiast']
    };
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer = null;
    const typingEl = document.querySelector('.typing-text');

    const typeWord = () => {
        const words = wordsDict[currentLang];
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 40 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            // Wait before starting delete
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 400; // Small delay before typing next word
        }
        
        typingTimer = setTimeout(typeWord, typeSpeed);
    };

    const resetTypingEffect = () => {
        if (typingTimer) clearTimeout(typingTimer);
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (typingEl) typeWord();
    };

    if (typingEl) {
        typeWord();
    }

    // --- CANVAS PARTICLES ANIMATION ---
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 120 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 15;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                // Determine colors based on theme
                const isLightTheme = body.classList.contains('light-theme');
                ctx.fillStyle = isLightTheme ? 'rgba(124, 58, 237, 0.45)' : 'rgba(6, 182, 212, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Drift
                this.x += this.vx;
                this.y += this.vy;

                // Bounce walls
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interactivity
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = dx / distance;
                        let directionY = dy / distance;
                        // Pull slightly towards mouse
                        this.x += directionX * force * 1.5;
                        this.y += directionY * force * 1.5;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();
        window.addEventListener('resize', initParticles);

        const connectParticles = () => {
            const maxDistance = 140;
            const isLightTheme = body.classList.contains('light-theme');
            const lineColor = isLightTheme ? 'rgba(124, 58, 237, ' : 'rgba(168, 85, 247, ';
            
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < maxDistance) {
                        let opacity = (1 - (distance / maxDistance)) * 0.15;
                        ctx.strokeStyle = lineColor + opacity + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- PROJECTS FILTERING ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    // Trigger reflow for transition
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.85)';
                    // Delay hiding to let transitions finish
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // --- PROJECT MODAL DATA & CONTROLS ---
    const projectDetails = {
        'pretierhomes': {
            title: 'Pretier Homes',
            tech: 'Java, Spring Boot, Spring Security, Hibernate, PostgreSQL, React.js, Bootstrap',
            role: {
                'tr': 'Backend Geliştirici & Takım Lideri',
                'en': 'Lead Backend Developer & Team Architect'
            },
            desc: {
                'tr': 'Gayrimenkul kiralama ve satın alma süreçlerini otomatikleştiren, rol tabanlı güvenlik mimarisine (Admin, Emlakçı, Müşteri) sahip kurumsal seviyede bir web uygulamasıdır. İlan arama filtreleri, gelişmiş rezervasyon takvimi ve performans raporlama paneli gibi kritik bileşenleri barındırır.',
                'en': 'An enterprise-grade web application automating real-estate rental and purchasing workflows, featuring role-based access security (Admin, Agent, Customer). It includes critical modules such as custom listing search parameters, booking calendar integration, and agency reporting tools.'
            },
            img: 'images/pretier_homes.jpg',
            liveLink: 'https://www.pretierhomes.com/'
        },
        'sertifikasistemi': {
            title: 'Toplu Sertifika Sistemi',
            tech: 'Next.js, TypeScript, Prisma, SQLite/PostgreSQL, TailwindCSS, xlsx (Excel Parser)',
            role: {
                'tr': 'Full-Stack Yazılım Geliştirici',
                'en': 'Full-Stack Developer'
            },
            desc: {
                'tr': 'Kurumsal eğitimlerin ardından katılımcılara toplu sertifika üretmek için tasarlanmış bir Next.js uygulamasıdır. Kullanıcılar bir Excel dosyası yükleyerek yüzlerce katılımcı için aynı anda logo, imza ve özel unvanlar içeren PDF/Baskı formatında sertifikalar üretebilir.',
                'en': 'A Next.js application designed to generate bulk certificates for participants following corporate trainings. Users can upload an Excel sheet to simultaneously output PDF/Print-ready certificates containing custom logos, signatures, and titles for hundreds of attendees.'
            },
            img: 'images/sertifika_sistemi.jpg',
            liveLink: 'http://31.77.112.28/'
        },
        'schoolmanagement': {
            title: 'School Management App',
            tech: 'Java, OOP Principles, Layered Architecture, File Systems',
            role: {
                'tr': 'Bireysel Java Geliştiricisi',
                'en': 'Solo Java Developer'
            },
            desc: {
                'tr': 'Okul yönetim süreçlerini (öğrenci, öğretmen, ders kayıtları) en optimum düzeyde modellemek amacıyla yazılmış Java konsol uygulamasıdır. OOP kuralları (Miras alma, Kapsülleme, Çok biçimlilik) en derin seviyede kullanılmış ve katmanlı yazılım yapısı (controller, service, repository) uygulanmıştır.',
                'en': 'A Java console application demonstrating clean software architecture applied to academic management procedures. Showcases deep implementation of Object Oriented Programming principles (Inheritance, Encapsulation, Polymorphism) and a multi-tiered structural system (controller, service, repository).'
            },
            img: 'images/software_engineering.jpg',
            liveLink: null
        },
        'vehicleinsurance': {
            title: 'Vehicle Insurance App',
            tech: 'Java, Spring Boot, Spring Data JPA, Thymeleaf, MySQL, REST APIs',
            role: {
                'tr': 'Backend Mühendisi',
                'en': 'Backend Engineer'
            },
            desc: {
                'tr': 'Araç özellikleri (yaş, marka, kaza geçmişi) ve sürücü verilerine dayanarak sigorta primlerini hesaplayan Spring Boot uygulamasıdır. Form tabanlı web arayüzünün yanı sıra, dış servislerin entegre olabilmesi için kapsamlı REST API uç noktaları sunar.',
                'en': 'A Spring Boot application calculating dynamic auto-insurance premium rates based on vehicle profiles (age, make, claim history) and client records. Delivers a responsive Thymeleaf-rendered web client along with secure, documentation-ready RESTful endpoints.'
            },
            img: 'images/backend_systems.jpg',
            liveLink: null
        },
        'ticketreservation': {
            title: 'Ticket Reservation System',
            tech: 'Java, Custom Search Algorithms, Data Structures',
            role: {
                'tr': 'Geliştirici',
                'en': 'Developer'
            },
            desc: {
                'tr': 'Sinema salonları ve otobüs seferleri için biletleme otomasyonudur. Çakışan koltuk atamalarını önlemek için özelleştirilmiş kuyruk ve haritalama veri yapıları kullanılmıştır. Arama algoritmaları ile kullanıcıların en uygun boş koltuğu bulmasını hedefler.',
                'en': 'A ticketing and seating booking simulator for cinema theaters and coach trips. Features customized queue structures and hashing algorithms to prevent concurrency-related seat booking issues, maximizing seat allocation efficiency.'
            },
            img: 'images/software_engineering.jpg',
            liveLink: null
        }
    };

    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTag = document.getElementById('modal-tag');
    const modalDesc = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech-list');
    const modalRole = document.getElementById('modal-role-text');
    const modalLiveLink = document.getElementById('modal-live-link');
    const backdrop = modal ? modal.querySelector('.modal-backdrop') : null;

    const openModal = (projId) => {
        const details = projectDetails[projId];
        if (!details) return;

        modalImg.src = details.img;
        modalTitle.textContent = details.title;
        modalTag.textContent = details.tech.split(',')[0];
        modalDesc.textContent = details.desc[currentLang];
        modalTech.textContent = details.tech;
        modalRole.textContent = details.role[currentLang];
        
        if (details.liveLink) {
            modalLiveLink.href = details.liveLink;
            modalLiveLink.classList.remove('hidden');
        } else {
            modalLiveLink.classList.add('hidden');
        }

        modal.classList.remove('hidden');
        body.style.overflow = 'hidden'; // Stop page scrolling
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        body.style.overflow = ''; // Re-enable page scrolling
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projId = card.getAttribute('data-project-id');
            openModal(projId);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Escape Key to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // --- CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('#submit-btn');
            const btnText = submitBtn.querySelector('.lang-text') || submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('i');
            
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            // Basic check
            if (!name || !email || !message) return;

            // UI Loading state
            submitBtn.disabled = true;
            btnText.textContent = langData[currentLang]['form-sending'];
            btnIcon.className = 'fa-solid fa-circle-notch fa-spin btn-icon';
            formFeedback.className = 'form-feedback hidden';

            // Web3Forms Integration (E-posta Gönderimi)
            const formData = new FormData(contactForm);
            
            // Buraya https://web3forms.com/ sitesinden ücretsiz alacağınız Access Key'i yapıştırmanız yeterlidir:
            formData.append('access_key', 'b2205855-5f0c-4297-82bf-5a142ceaf702');

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    formFeedback.textContent = langData[currentLang]['form-success'];
                    formFeedback.className = 'form-feedback success';
                    contactForm.reset();
                    contactForm.querySelectorAll('.form-control').forEach(input => {
                        input.blur();
                    });
                } else {
                    formFeedback.textContent = json.message || langData[currentLang]['form-error'];
                    formFeedback.className = 'form-feedback error';
                }
            })
            .catch(error => {
                formFeedback.textContent = langData[currentLang]['form-error'];
                formFeedback.className = 'form-feedback error';
            })
            .finally(() => {
                submitBtn.disabled = false;
                btnText.textContent = langData[currentLang]['form-send'];
                btnIcon.className = 'fa-solid fa-paper-plane btn-icon';
                
                setTimeout(() => {
                    formFeedback.className = 'form-feedback hidden';
                }, 5000);
            });
        });
    }

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.scroll-animate');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Specific trigger for skill bars when parent container animates
                    if (entry.target.id === 'skills') {
                        const progresses = entry.target.querySelectorAll('.progress');
                        progresses.forEach(prog => {
                            // Let the CSS width transition execute
                            prog.style.width = prog.parentElement.dataset.width || prog.style.width;
                        });
                    }
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => el.classList.add('animated'));
    }

    // --- INTERACTIVE DEVELOPER TERMINAL LOGIC ---
    const terminalToggleBtn = document.getElementById('terminal-toggle-btn');
    const terminalModal = document.getElementById('terminal-modal');
    const terminalBackdrop = document.getElementById('terminal-backdrop');
    const terminalClose = document.getElementById('terminal-close');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');

    let cmdHistory = [];
    let historyIndex = -1;

    const openTerminal = () => {
        if (terminalModal) {
            terminalModal.classList.remove('hidden');
            terminalModal.style.display = 'flex';
            setTimeout(() => {
                if (terminalInput) terminalInput.focus();
            }, 100);
        }
    };

    const closeTerminal = () => {
        if (terminalModal) {
            terminalModal.classList.add('hidden');
            terminalModal.style.display = 'none';
        }
    };

    if (terminalToggleBtn) terminalToggleBtn.addEventListener('click', openTerminal);
    if (terminalClose) terminalClose.addEventListener('click', closeTerminal);
    if (terminalBackdrop) terminalBackdrop.addEventListener('click', closeTerminal);

    // Keyboard shortcut (Ctrl + ~ or Cmd + ~)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '`') {
            e.preventDefault();
            if (terminalModal && terminalModal.classList.contains('hidden')) {
                openTerminal();
            } else {
                closeTerminal();
            }
        }
    });

    const appendTerminalLine = (htmlContent) => {
        const line = document.createElement('div');
        line.innerHTML = htmlContent;
        terminalOutput.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    const escapeHtml = (text) => {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    const processCommand = (rawCmd) => {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        // Add command line to history output
        appendTerminalLine(`<div class="term-line-cmd"><span class="prompt">afk@portfolio:~$</span> <span class="cmd-text">${escapeHtml(rawCmd)}</span></div>`);

        cmdHistory.push(rawCmd);
        historyIndex = cmdHistory.length;

        switch (cmd) {
            case 'help':
                appendTerminalLine(`
                    <div class="term-line-info">Kullanılabilir komutlar:</div>
                    <div class="term-table"><span class="cmd-name">help</span> - Tüm komutların listesini gösterir.</div>
                    <div class="term-table"><span class="cmd-name">about</span> - Ahmet'in mühendislik biyografisini yazar.</div>
                    <div class="term-table"><span class="cmd-name">skills</span> - Yetenekler ve teknolojileri listeler.</div>
                    <div class="term-table"><span class="cmd-name">projects</span> - Geliştirilen projeleri gösterir.</div>
                    <div class="term-table"><span class="cmd-name">contact</span> - İletişim ve sosyal medya bağlantıları.</div>
                    <div class="term-table"><span class="cmd-name">sudo hire ahmet</span> - 🟢 Şirketinize transfer edin! (Easter Egg)</div>
                    <div class="term-table"><span class="cmd-name">clear</span> - Terminal ekranını temizler.</div>
                `);
                break;

            case 'about':
                appendTerminalLine(`
                    <div class="term-line-info">
                        <strong>Ahmet Furkan Kısacık</strong> - Bilgisayar Mühendisi &amp; Yazılım Geliştirici<br/>
                        Burdur Mehmet Akif Ersoy Üniversitesi Bilgisayar Mühendisliği öğrencisi. 
                        Akademik altyapısını yazılım eğitimi tecrübesi ve aktif bilişim sektöründeki saha deneyimi ile birleştirerek 
                        sürdürülebilir ve yüksek kaliteli uygulamalar geliştiriyor.
                    </div>
                `);
                break;

            case 'skills':
                appendTerminalLine(`
                    <div class="term-line-info">
                        <span style="color:#a855f7; font-weight:bold;">[Backend]</span> Java, Spring Boot, Spring Security, Hibernate, Node.js<br/>
                        <span style="color:#06b6d4; font-weight:bold;">[Frontend]</span> Next.js, React, TypeScript, JavaScript, HTML5/CSS3<br/>
                        <span style="color:#22c55e; font-weight:bold;">[Cloud &amp; DevOps]</span> Docker, Kubernetes, AWS, GitOps (ArgoCD), CI/CD<br/>
                        <span style="color:#eab308; font-weight:bold;">[Database]</span> PostgreSQL, MySQL, Prisma ORM, SQLite
                    </div>
                `);
                break;

            case 'projects':
                appendTerminalLine(`
                    <div class="term-line-info">
                        1. <strong style="color:#06b6d4;">Toplu Sertifika Sistemi</strong> (Next.js, Prisma, Excel Parser) - Canlı: http://31.77.112.28/<br/>
                        2. <strong style="color:#a855f7;">Pretier Homes</strong> (Spring Boot 3, React, JWT Security)<br/>
                        3. <strong style="color:#22c55e;">School Management App</strong> (Java, Layered Architecture)<br/>
                        4. <strong style="color:#eab308;">Vehicle Insurance App</strong> (Spring Boot REST API)
                    </div>
                `);
                break;

            case 'contact':
                appendTerminalLine(`
                    <div class="term-line-info">
                        📧 E-posta: ahmetfurkankisacik@gmail.com<br/>
                        📱 Telefon / WhatsApp: +90 533 928 09 96<br/>
                        🌐 Web: https://ahmetfurkankisacik.com<br/>
                        💻 GitHub: https://github.com/ahmetfurkankisacik<br/>
                        👔 LinkedIn: https://www.linkedin.com/in/afkdev
                    </div>
                `);
                break;

            case 'sudo hire ahmet':
            case 'hire ahmet':
            case 'hire':
                appendTerminalLine(`
                    <div class="term-line-success" style="font-size:1rem; font-weight:bold;">
                        🟢 PERMISSION GRANTED! Mükemmel bir seçim yaptınız.<br/>
                        Kahveniz taze demleniyor ☕... İletişim bölümüne yönlendiriliyorsunuz!
                    </div>
                `);
                setTimeout(() => {
                    closeTerminal();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 1800);
                break;

            case 'clear':
                terminalOutput.innerHTML = '';
                break;

            case 'matrix':
                appendTerminalLine(`<div class="term-line-success">01000001 01000110 01001011 00100000 01000011 01001111 01000100 01000101 01010011</div>`);
                break;

            default:
                appendTerminalLine(`<div class="term-line-error">command not found: ${escapeHtml(cmd)}. Type '<span style="color:#06b6d4;">help</span>' for available commands.</div>`);
                break;
        }
    };

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = terminalInput.value;
                processCommand(val);
                terminalInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (cmdHistory.length > 0 && historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = cmdHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < cmdHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = cmdHistory[historyIndex];
                } else {
                    historyIndex = cmdHistory.length;
                    terminalInput.value = '';
                }
            }
        });
    }

    // --- EASTER EGG #1: KONAMI CODE (Up Up Down Down Left Right Left Right B A) ---
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    window.addEventListener('keydown', (e) => {
        // Ignore if user is typing in form inputs or terminal
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (key === konamiCode[konamiIndex].toLowerCase()) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                triggerKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    const triggerKonamiEasterEgg = () => {
        let konamiBanner = document.getElementById('konami-banner');
        if (!konamiBanner) {
            konamiBanner = document.createElement('div');
            konamiBanner.id = 'konami-banner';
            konamiBanner.className = 'konami-banner';
            konamiBanner.innerHTML = `
                <div class="konami-content">
                    <span class="konami-icon">🎮</span>
                    <div class="konami-text">
                        <strong>GAMER &amp; DEVELOPER UNLOCKED!</strong>
                        <p>Gizli Geliştirici Modunu Buldunuz! Tebrikler! 🎉</p>
                    </div>
                </div>
            `;
            document.body.appendChild(konamiBanner);
        }

        konamiBanner.classList.add('active');
        launchConfetti();

        setTimeout(() => {
            konamiBanner.classList.remove('active');
        }, 5000);
    };

    // Lightweight Confetti Particle Canvas Burst
    const launchConfetti = () => {
        let canvas = document.getElementById('confetti-canvas');
        if (canvas) canvas.remove();

        canvas = document.createElement('canvas');
        canvas.id = 'confetti-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '99999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#a855f7', '#06b6d4', '#22c55e', '#eab308', '#ef4444', '#ffffff'];

        for (let i = 0; i < 120; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 5 + 3,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10
            });
        }

        let animationFrame;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activeCount = 0;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotSpeed;

                if (p.y < canvas.height) activeCount++;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });

            if (activeCount > 0) {
                animationFrame = requestAnimationFrame(render);
            } else {
                cancelAnimationFrame(animationFrame);
                canvas.remove();
            }
        };

        render();

        setTimeout(() => {
            cancelAnimationFrame(animationFrame);
            if (canvas) canvas.remove();
        }, 6000);
    };

    // --- INITIALIZE DEFAULT LANGUAGE STATE ---
    setLanguage(currentLang);
});
