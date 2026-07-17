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

            // Simulate server request
            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.textContent = langData[currentLang]['form-send'];
                btnIcon.className = 'fa-solid fa-paper-plane btn-icon';
                
                // Show Success Feedback
                formFeedback.textContent = langData[currentLang]['form-success'];
                formFeedback.className = 'form-feedback success';
                
                // Clear Form
                contactForm.reset();
                
                // Remove floating labels behavior
                contactForm.querySelectorAll('.form-control').forEach(input => {
                    input.blur();
                });
                
                // Hide feedback after 5 seconds
                setTimeout(() => {
                    formFeedback.className = 'form-feedback hidden';
                }, 5000);
            }, 1800);
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

    // --- INITIALIZE DEFAULT LANGUAGE STATE ---
    setLanguage(currentLang);
});
