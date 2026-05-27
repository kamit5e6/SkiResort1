document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SkiResort Script Loaded');

    // ==========================================
    // 1. БАЗА ДАННЫХ ТОВАРОВ (24 шт)
    // ==========================================
    const defaultProducts = [
        { id: 1, title: "Ски-пасс (1 день)", price: 2500, oldPrice: 3200, desc: "Безлимитный доступ ко всем 120 км трасс курорта.", img: "../img/Ski-pass.png", hasSizes: false, category: "products" },
        { id: 2, title: "Урок с инструктором", price: 4000, desc: "Индивидуальное занятие для любого уровня подготовки (2 часа).", img: "../img/Lesson-instructor.png", hasSizes: false, category: "services" },
        { id: 3, title: "Шлем горнолыжный", price: 5200, oldPrice: 6500, desc: "Легкий вентилируемый шлем с системой защиты MIPS.", img: "../img/Ski-helmet.png", hasSizes: true, category: "products" },
        { id: 4, title: "Ботинки горные", price: 12000, oldPrice: 15000, desc: "Профессиональные ботинки с карбоновой рамой, жесткость 80.", img: "../img/Mountain-boots.png", hasSizes: true, category: "products" },
        { id: 5, title: "Маска защитная", price: 3800, oldPrice: 4500, desc: "Двойная линза с антизапотевающим покрытием UV400.", img: "..//img/Protective-mask.png", hasSizes: true, category: "products" },
        { id: 6, title: "SPA-комплекс", price: 3500, desc: "Бассейн с подогревом, финская сауна и сеанс массажа (1.5 часа).", img: "../img/SPA-complex.jpg", hasSizes: false, category: "services" },
        { id: 7, title: "Перчатки Pro", price: 1500, desc: "Водонепроницаемые тёплые перчатки с мембраной Gore-Tex.", img: "../img/Pro-Gloves.png", hasSizes: true, category: "products" },
        { id: 8, title: "Прокат лыж", price: 1200, desc: "Современное оборудование от ведущих брендов (в день).", img: "../img/Ski-rental.png", hasSizes: false, category: "services" },
        { id: 9, title: "Носки термо", price: 800, desc: "Термоноски из шерсти мериноса с антибактериальной обработкой.", img: "../img/Thermo-socks.png", hasSizes: true, category: "products" },
        { id: 10, title: "Палки лыжные", price: 2100, oldPrice: 2800, desc: "Лёгкие алюминиевые палки с карбоновыми вставками.", img: "../img/Ski-poles.png", hasSizes: false, category: "products" },
        { id: 11, title: "Фестиваль снега", price: 0, desc: "Ежегодный фестиваль с живой музыкой и фуд-кортами (15.02.2026).", img: "..//img/Snow-Festival.jpg", hasSizes: false, category: "news" },
        { id: 12, title: "Фотосессия", price: 5000, desc: "Профессиональная съемка на фоне гор. 50 фото в обработке.", img: "../img/session.jpg", hasSizes: false, category: "services" },
        { id: 13, title: "Мазь для лыж", price: 600, desc: "Универсальная мазь скольжения. Работает до -5°C.", img: "../img/Ski-ointment.jpg", hasSizes: false, category: "products" },
        { id: 14, title: "Рюкзак лавинный", price: 15000, oldPrice: 18000, desc: "Рюкзак с системой безопасности ABS. Объем 30л.", img: "../img/Avalanche-backpack.jpg", hasSizes: false, category: "products" },
        { id: 15, title: "Трансфер", price: 3000, desc: "Комфортный трансфер из аэропорта на микроавтобусе.", img: "../img/Transfer.jpg", hasSizes: false, category: "services" },
        { id: 16, title: "Балаклава", price: 900, desc: "Защита от ветра и холода. Дышащий флис.", img: "../img/Balaclava.jpg", hasSizes: true, category: "products" },
        { id: 17, title: "Крем SPF 50+", price: 1100, desc: "Специальный крем для высокогорья. Водостойкий.", img: "../img/SPF-Cream.jpg", hasSizes: false, category: "products" },
        { id: 18, title: "Термос 1л", price: 2200, oldPrice: 2800, desc: "Двухстенный термос из нержавеющей стали. Держит тепло 12ч.", img: "../img/thermos.jpg", hasSizes: false, category: "products" },
        { id: 19, title: "Куртка мембранная", price: 4500, oldPrice: 6000, desc: "Дышащая ветрозащитная куртка с мембраной 10000 мм.", img: "../img/Membrane-jacket.jpg", hasSizes: true, category: "products" },
        { id: 20, title: "Ремонт снарядов", price: 1500, desc: "Профессиональная заточка кантов и нанесение парафина.", img: "../img/Repair-shells.jpg", hasSizes: false, category: "services" },
        { id: 21, title: "Камера хранения", price: 800, desc: "Индивидуальный сейф для хранения ценностей 24/7.", img: "../img/Luggage-storage.jpg", hasSizes: false, category: "services" },
        { id: 22, title: "Детская школа", price: 3200, desc: "Групповые занятия для детей 4-7 лет с опытными инструкторами.", img: "../img/Childrens-school.png", hasSizes: false, category: "services" },
        { id: 23, title: "Открытие трассы «Орёл»", price: 0, desc: "Новая черная трасса с перепадом 600м. Вход свободный.", img: "../img/Eagle.png", hasSizes: false, category: "news" },
        { id: 24, title: "Прогноз снега", price: 0, desc: "Актуальный прогноз выпадения снега на неделю.", img: "../img/Snow-forecast.jpg", hasSizes: false, category: "news" }
    ];

    // ==========================================
    // 2. БАЗА ДАННЫХ ОТЕЛЕЙ (7 шт)
    // ==========================================
    const defaultHotels = [
        {
            id: 1,
            title: "Alpine Resort Hotel 5*",
            price: 8500,
            oldPrice: 11000,
            desc: "Роскошный отель в самом центре курорта. Номера с видом на горы.",
            img: "../img/alpine-2.jpg",
            badge: "⭐ 5.0",
            specs: {
                "Wi-Fi": "Бесплатно",
                "Завтрак": "Шведский стол",
                "Бассейн": "Подогреваемый",
                "SPA": "Полный комплекс",
                "Ски-ин/Ски-аут": "Да",
                "Парковка": "Бесплатная"
            },
            gallery: [
                "../img/alpine-2.jpg"
            ]
        },
        {
            id: 2,
            title: "Mountain Lodge 4*",
            price: 6200,
            oldPrice: 7500,
            desc: "Уютный отель в стиле шале. Идеален для семейного отдыха.",
            img: "../img/lodge-1.png",
            badge: "-15%",
            specs: {
                "Wi-Fi": "Бесплатно",
                "Камин": "В каждом номере",
                "Завтрак": "Континентальный",
                "Парковка": "Охраняемая",
                "С животными": "Разрешено",
                "Расстояние до трасс": "500 м"
            },
            gallery: [
                "../img/lodge-1.png"
            ]
        },
        {
            id: 3,
            title: "Ski Chalet 3*",
            price: 4100,
            desc: "Бюджетный вариант для активных туристов.",
            img: "../img/Ski-Chalet.png",
            specs: {
                "Wi-Fi": "В лобби",
                "Кухня": "Общая",
                "Парковка": "Уличная",
                "Завтрак": "Нет",
                "Расстояние до трасс": "1 км",
                "Тип номера": "Стандарт"
            },
            gallery: [
                "../img/Ski-Chalet.png"
            ]
        },
        {
            id: 4,
            title: "Grand Summit 5*",
            price: 15000,
            oldPrice: 18000,
            desc: "Премиум отель с собственным SPA-центром и рестораном высокой кухни.",
            img: "../img/summit-1.jpg",
            badge: "💎 Luxury",
            specs: {
                "Класс": "Люкс",
                "Ресторан": "Мишлен",
                "SPA": "Private",
                "Бассейн": "Infinity с видом",
                "Личный консьерж": "24/7",
                "Трансфер": "Личный вертолет"
            },
            gallery: [
                "../img/summit-1.jpg"
            ]
        },
        {
            id: 5,
            title: "Медвежья Лапа",
            price: 3500,
            desc: "Аутентичный деревянный домик у подножия горы. Тишина и покой.",
            img: "../img/bear-1.jpg",
            specs: {
                "Тип": "Деревянный дом",
                "Камин": "Дровяной",
                "Завтрак": "Нет",
                "Вместимость": "До 4 чел",
                "Природа": "В лесу",
                "Интернет": "Нет (Digital Detox)"
            },
            gallery: [
                "../img/bear-1.jpg"
            ]
        },
        {
            id: 6,
            title: "Ice & Fire Glamping",
            price: 7500,
            oldPrice: 9000,
            desc: "Глэмпинг с панорамными окнами. Ночуйте под звездами в тепле.",
            img: "../img/IceFireGlamping.png",
            badge: "ХИТ",
            specs: {
                "Тип": "Геодезический купол",
                "Обогрев": "Пол",
                "Вид": "На звезды",
                "Ужин": "Барбекю зона",
                "Баня": "Общая",
                "Романтика": "100%"
            },
            gallery: [
                "../img/IceFireGlamping.png"
            ]
        },
        {
            id: 7,
            title: "Nordic Spa Hotel",
            price: 9200,
            desc: "Скандинавский минимализм и лучшие банные традиции.",
            img: "../img/Nordic.jpg",
            specs: {
                "Стиль": "Скандинавский",
                "Сауна": "Финская + Хаммам",
                "Бассейн": "С подогревом",
                "Завтрак": "Органик",
                "Массаж": "Включен",
                "Дизайн": "Минимализм"
            },
            gallery: [
                "../img/Nordic.jpg"
            ]
        }
    ];

    // ==========================================
    // 3. КОРЗИНА (ЯДРО)
    // ==========================================
    let cart = [];
    try {
        const saved = localStorage.getItem('skiResort_cart');
        cart = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(cart)) cart = [];
    } catch (e) {
        console.error('Cart load error', e);
        cart = [];
    }

    function updateCartCounter() {
        const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        const el = document.getElementById('cartCount');
        if (el) {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
            el.style.animation = 'none';
            setTimeout(() => el.style.animation = 'countUp 0.3s ease-out', 10);
        }
    }

    function saveCart() {
        localStorage.setItem('skiResort_cart', JSON.stringify(cart));
        updateCartCounter();
    }

    function renderCart() {
        const container = document.getElementById('cartItems');
        const totalEl = document.getElementById('cartTotalPrice');
        const footer = document.getElementById('cartFooter');
        if (!container) return;

        container.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Корзина пуста</p>';
            if (footer) footer.style.display = 'none';
            if (totalEl) totalEl.textContent = '0 ₽';
            updateCartCounter();
            return;
        }

        if (footer) footer.style.display = 'block';

        cart.forEach((item, idx) => {
            const price = Number(item.price) || 0;
            const qty = Number(item.qty) || 1;
            total += price * qty;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.style.animation = 'fadeInUp 0.3s ease-out';
            div.innerHTML = `
                <img src="${item.img || ''}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;">
                <div style="flex:1;min-width:0;">
                    <h4 style="margin:0 0 4px;font-size:14px;">${item.title}</h4>
                    <p style="margin:0;font-size:12px;color:var(--text-muted);">${item.size || ''}</p>
                    <div style="font-weight:700;color:var(--primary);margin-top:4px;">${(price * qty).toLocaleString('ru-RU')} ₽</div>
                </div>
                <div style="display:flex;flex-direction:column;gap:8px;">
                    <div style="display:flex;align-items:center;gap:8px;background:var(--bg);padding:4px 8px;border-radius:6px;">
                        <button onclick="window.cartMinus(${idx})" style="width:20px;height:20px;border:none;background:transparent;cursor:pointer;font-weight:bold;">−</button>
                        <span>${qty}</span>
                        <button onclick="window.cartPlus(${idx})" style="width:20px;height:20px;border:none;background:transparent;cursor:pointer;font-weight:bold;">+</button>
                    </div>
                    <button onclick="window.cartRemove(${idx})" style="background:transparent;border:none;color:red;cursor:pointer;font-size:18px;">×</button>
                </div>
            `;
            container.appendChild(div);
        });

        if (totalEl) totalEl.textContent = total.toLocaleString('ru-RU') + ' ₽';
        updateCartCounter();
    }

    window.cartMinus = (i) => { cart[i].qty--; if (cart[i].qty < 1) cart.splice(i, 1); saveCart(); renderCart(); };
    window.cartPlus = (i) => { cart[i].qty++; saveCart(); renderCart(); };
    window.cartRemove = (i) => { cart.splice(i, 1); saveCart(); renderCart(); };
    // ==========================================
    // 4. АККОРДЕОН
    // ==========================================
    document.querySelectorAll('.accordion__header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion__content');
            const isActive = item.classList.contains('active');

            // Закрываем все
            document.querySelectorAll('.accordion__item').forEach(i => {
                i.classList.remove('active');
                const accContent = i.querySelector('.accordion__content');
                if (accContent) accContent.style.maxHeight = null;
            });

            // Открываем текущий если не был активен
            if (!isActive && content) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    // ==========================================
    // 5. ТАБЫ (КОНТАКТЫ И ДРУГИЕ)
    // ==========================================
    document.querySelectorAll('.tabs__nav').forEach(group => {
        const btns = group.querySelectorAll('.tabs__btn');
        const panels = group.parentElement.querySelectorAll('.tabs__panel');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Убираем active у всех кнопок
                btns.forEach(b => {
                    b.classList.remove('tabs__btn--active');
                    b.style.background = 'transparent';
                    b.style.color = 'var(--text-muted)';
                });

                // Добавляем active нажатой кнопке
                btn.classList.add('tabs__btn--active');
                btn.style.background = 'var(--bg-card)';
                btn.style.color = 'var(--text-main)';

                // Показываем нужную панель
                const target = btn.getAttribute('data-tab');
                panels.forEach(panel => {
                    const panelTarget = panel.getAttribute('data-panel');
                    if (panelTarget === target) {
                        panel.classList.add('tabs__panel--active');
                        panel.style.display = 'block';
                    } else {
                        panel.classList.remove('tabs__panel--active');
                        panel.style.display = 'none';
                    }
                });
            });
        });
    });

    // Обработка формы контактов
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Сообщение отправлено! Мы свяжемся с вами soon.');
        e.target.reset();
    });
    // ==========================================
    // 4. ГЛОБАЛЬНЫЙ UI
    // ==========================================
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.querySelector('.icon-sun')?.classList.add('hidden');
        document.querySelector('.icon-moon')?.classList.remove('hidden');
    }

    document.getElementById('themeToggle')?.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        document.querySelector('.icon-sun')?.classList.toggle('hidden', !isDark);
        document.querySelector('.icon-moon')?.classList.toggle('hidden', isDark);
    });

    document.getElementById('burgerMenu')?.addEventListener('click', () => {
        document.getElementById('burgerMenu')?.classList.toggle('active');
        document.getElementById('navMenu')?.classList.toggle('open');
    });

    const openModal = (id) => {
        const m = document.getElementById(id);
        if (m) {
            if (id === 'cartModal') renderCart();
            m.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = (id) => {
        const m = document.getElementById(id);
        if (m) {
            m.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    document.getElementById('cartIcon')?.addEventListener('click', () => openModal('cartModal'));
    document.getElementById('cartModalClose')?.addEventListener('click', () => closeModal('cartModal'));
    document.getElementById('cartModalOverlay')?.addEventListener('click', () => closeModal('cartModal'));
    document.getElementById('openAuthModal')?.addEventListener('click', () => openModal('authModal'));
    document.getElementById('authModalClose')?.addEventListener('click', () => closeModal('authModal'));
    document.getElementById('authModalOverlay')?.addEventListener('click', () => closeModal('authModal'));

    // ==========================================
    // 5. АВТОРИЗАЦИЯ
    // ==========================================
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginForm) loginForm.classList.add('hidden');
            if (registerForm) {
                registerForm.classList.remove('hidden');
                document.getElementById('showRegister').parentElement.classList.add('hidden');
                document.getElementById('showLogin').parentElement?.classList.remove('hidden');
            }
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (registerForm) registerForm.classList.add('hidden');
            if (loginForm) {
                loginForm.classList.remove('hidden');
                document.getElementById('showLogin').parentElement.classList.add('hidden');
                document.getElementById('showRegister').parentElement?.classList.remove('hidden');
            }
        });
    }

    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('regName').value;
        const phone = document.getElementById('regPhone').value;
        const email = document.querySelector('#registerForm input[type="email"]').value;
        localStorage.setItem('userFullName', fullName);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
        closeModal('authModal');
        if (window.location.pathname.includes('account.html')) {
            window.location.reload();
        } else {
            alert('✅ Вы успешно зарегистрировались!');
        }
    });

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        closeModal('authModal');
        if (window.location.pathname.includes('account.html')) {
            window.location.reload();
        } else {
            alert('✅ Вы успешно вошли в аккаунт!');
        }
    });

    document.getElementById('goToLoginBtn')?.addEventListener('click', () => {
        closeModal('authRequiredModal');
        openModal('authModal');
    });
    document.getElementById('authRequiredClose')?.addEventListener('click', () => closeModal('authRequiredModal'));
    document.getElementById('authRequiredOverlay')?.addEventListener('click', () => closeModal('authRequiredModal'));
    // ==========================================
    // 6.1 ДИНАМИЧЕСКАЯ ПОДГРУЗКА ТОВАРОВ В КАТАЛОГЕ
    // ==========================================
    function renderCatalog() {
        const grid = document.querySelector('.product-grid');
        if (!grid) return;

        const products = JSON.parse(localStorage.getItem('skiResort_products')) || defaultProducts;
        console.log('📦 Рендерим каталог, товаров:', products.length);

        grid.innerHTML = '';

        products.forEach((product, index) => {
            const card = document.createElement('a');
            card.href = `product.html?id=${product.id}`;
            card.className = 'product-card';
            card.setAttribute('data-category', product.category || 'products');
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;

            const oldPriceHtml = product.oldPrice ?
                `<span class="old-price">${product.oldPrice.toLocaleString('ru-RU')} ₽</span>` : '';

            // Определяем бейдж
            let badgeHtml = '';
            if (product.oldPrice) {
                const discount = Math.round((1 - product.price / product.oldPrice) * 100);
                badgeHtml = `<span class="badge badge--sale">-${discount}%</span>`;
            } else if (product.category === 'news' && product.price === 0) {
                badgeHtml = `<span class="badge badge--hot">🎉 БЕСПЛАТНО</span>`;
            } else if (product.category === 'services') {
                badgeHtml = `<span class="badge badge--hot">⭐ ХИТ</span>`;
            }

            // Исправляем путь к картинке
            const imgUrl = product.img || `https://via.placeholder.com/400x400/06b6d4/ffffff?text=${encodeURIComponent(product.title)}`;

            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${imgUrl}" 
                         alt="${product.title}" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400/1e293b/06b6d4?text=No+Image'; console.error('❌ Не загрузилось:', '${product.title}', '${imgUrl}');"
                         style="width: 100%; height: 100%; object-fit: cover;">
                    ${badgeHtml}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-desc">${product.desc || ''}</p>
                    <div class="product-price">
                        <span>${product.price.toLocaleString('ru-RU')} ₽</span>
                        ${oldPriceHtml}
                    </div>
                    <button class="btn btn--primary btn--sm btn--full add-to-cart" 
                            data-id="${product.id}" 
                            data-title="${product.title}" 
                            data-price="${product.price}" 
                            data-img="${imgUrl}"
                            data-category="${product.category || 'products'}"
                            onclick="event.stopPropagation(); event.preventDefault();">
                        В корзину
                    </button>
                </div>
            `;

            grid.appendChild(card);
        });

        // Перепривязываем кнопки "В корзину"
        setTimeout(() => {
            const products = JSON.parse(localStorage.getItem('skiResort_products')) || defaultProducts;

            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    const id = parseInt(btn.getAttribute('data-id'));
                    const product = products.find(p => p.id === id);  // ✅ Берём из продуктов, которые только что отрендерили

                    if (!product) return;

                    const existing = cart.find(item => item.title === product.title);
                    if (existing) {
                        existing.qty++;
                    } else {
                        cart.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            qty: 1,
                            img: product.img || imgUrl,  // ✅ Используем imgUrl, который определён выше
                            size: '-',
                            type: 'product'
                        });
                    }
                    saveCart();

                    const cartIcon = document.getElementById('cartIcon');
                    cartIcon.style.animation = 'bounce 0.5s ease-out';
                    setTimeout(() => cartIcon.style.animation = '', 500);

                    alert(`✅ ${product.title} добавлен в корзину!`);
                });
            });
        }, 100);
        // === ВОССТАНАВЛИВАЕМ ФИЛЬТРЫ ===
        initFilters();
    }

    // Функция инициализации фильтров
    function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        console.log('🔧 Инициализируем фильтры, кнопок:', filterBtns.length);

        filterBtns.forEach(btn => {
            // Удаляем старые обработчики (клонированием)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                newBtn.classList.add('active');

                const filter = newBtn.getAttribute('data-filter');
                console.log('🔍 Фильтр:', filter);

                productCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    // Слушатель для обновления в реальном времени
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
        window.dispatchEvent(new Event('storage'));
        originalSetItem.apply(this, arguments);
    };

    // Вызываем рендер при загрузке каталога
    if (window.location.pathname.includes('catalog.html')) {
        renderCatalog();

        // Слушаем изменения в localStorage (когда админ добавляет товар)
        window.addEventListener('storage', (e) => {
            if (e.key === 'skiResort_products') {
                console.log('🔄 Товары обновлены, перерисовываем каталог...');
                renderCatalog();
            }
        });
    }

    // ==========================================
    // 7. СТРАНИЦА ТОВАРА
    // ==========================================
    if (window.location.pathname.includes('product.html')) {
        
        // 1. Получаем ID товара из URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id')) || 1;

        // 2. Загружаем данные из Админки (Цена, Описание - если меняли)
        const storageProducts = JSON.parse(localStorage.getItem('skiResort_products')) || [];
        const liveProduct = storageProducts.find(p => p.id === id) || {};

        // 3. Загружаем базовые данные (Название, Картинка - если в админке пусто)
        const baseProduct = defaultProducts.find(p => p.id === id) || {};

        // 4. БАЗА ХАРАКТЕРИСТИК И ГАЛЕРЕИ (Статичные данные)
        // Это нужно, чтобы при обновлении цены не пропадали характеристики
        const productDetails = {
            1: { 
                gallery: ["../img/Ski-pass.png", "../img/Ski-pass2.png"], 
                specs: {"Тип": "Электронный RFID", "Время работы": "08:30-16:30", "Действие": "1 день", "Трассы": "Все 120 км", "Подъемники": "Неограниченно"} 
            },
            2: { 
                gallery: ["../img/Lesson-instructor.png", "../img/Lesson-instructor2.jpg"], 
                specs: {"Длительность": "2 часа", "Формат": "Индивидуально", "Уровень": "Любой", "Язык": "Русский/Английский", "Включено": "Оборудование"} 
            },
            3: { 
                gallery: ["../img/Ski-helmet.png", "../img/Ski-helmet2.png"], 
                specs: {"Тип": "Горнолыжный", "Защита": "MIPS", "Вес": "450 г", "Материал": "ABS/EPS", "Вентиляция": "12 отверстий", "Сертификация": "CE EN1077"} 
            },
            4: { 
                gallery: ["../img/Mountain-boots.png", "../img/Mountain-boots2.png"], 
                specs: {"Тип": "Горнолыжные", "Жесткость": "80", "Материал": "Карбон", "Застежка": "4 клипсы", "Колодка": "100 мм", "Сезон": "2025/2026"} 
            },
            5: { 
                gallery: ["../img/Protective-mask.png", "../img/Protective-mask2.png"], 
                specs: {"Линза": "Двойная", "Защита": "UV400", "Покрытие": "Anti-Fog", "Угол обзора": "180°", "Совместимость": "С любыми шлемами"} 
            },
            6: { 
                gallery: ["../img/SPA-complex.jpg", "../img/SPA-complex2.jpg"], 
                specs: {"Время": "1.5 часа", "Услуги": "Комплекс", "Бассейн": "Подогреваемый", "Сауна": "Финская", "Массаж": "30 минут"} 
            },
            7: { 
                gallery: ["../img/Pro-Gloves.png", "../img/Pro-Gloves2.png"], 
                specs: {"Материал": "Gore-Tex", "Сезон": "Зима", "Водонепроницаемость": "10000 мм", "Утеплитель": "Thinsulate", "Защита": "Запястья"} 
            },
            8: { 
                gallery: ["../img/Ski-rental.png", "../img/Ski-rental2.png"], 
                specs: {"Комплект": "Лыжи+ботинки", "Залог": "5000₽", "Бренды": "Atomic, Salomon", "Время": "С 8:00 до 20:00", "Шлем": "Включен"} 
            },
            9: { 
                gallery: ["../img/Thermo-socks.png", "../img/Thermo-socks2.png"], 
                specs: {"Состав": "70% шерсть мериноса", "Высота": "25 см", "Антибактериальная": "Да", "Влагоотвод": "Да", "Размеры": "36-47"} 
            },
            10: { 
                gallery: ["../img/Ski-poles.png", "../img/Ski-poles2.jpeg"], 
                specs: {"Длина": "100-130 см", "Вес": "180 г", "Материал": "Алюминий/Карбон", "Ручка": "Пробковая", "Темляк": "Регулируемый"} 
            },
            11: { 
                gallery: ["../img/Snow-Festival.jpg", "../img/Snow-Festival2.jpg"], 
                specs: {"Дата": "15.02.2026", "Вход": "Свободный", "Время": "12:00-22:00", "Место": "Центральная площадь", "Программа": "Концерты, конкурсы"} 
            },
            12: { 
                gallery: ["../img/session.jpg", "../img/session2.jpg"], 
                specs: {"Время": "1 час", "Фото": "50 шт", "Обработка": "Цветокоррекция", "Срок": "3 дня", "Формат": "JPEG+RAW"} 
            },
            13: { 
                gallery: ["../img/Ski-ointment.jpg", "../img/Ski-ointment.jpg"], 
                specs: {"Температура": "До -5°C", "Объем": "100 г", "Тип": "Универсальная", "Применение": "Все типы лыж", "Производитель": "Swix"} 
            },
            14: { 
                gallery: ["../img/Avalanche-backpack.jpg", "../img/Avalanche-backpack2.jpg"], 
                specs: {"Объем": "30 л", "Система": "ABS", "Вес": "2.1 кг", "Отделения": "5", "Гидратор": "Включен"} 
            },
            15: { 
                gallery: ["../img/Transfer.jpg", "../img/Transfer2.jpg"], 
                specs: {"Время": "1.5 часа", "Мест": "8", "Комфорт": "Кондиционер", "Встреча": "В аэропорту", "Багаж": "Неограниченно"} 
            },
            16: { 
                gallery: ["../img/Balaclava.jpg", "../img/Balaclava2.jpg"], 
                specs: {"Материал": "Флис", "Размер": "Uni", "Защита": "Ветер/Холод", "Дышащий": "Да", "Цвет": "Черный"} 
            },
            17: { 
                gallery: ["../img/SPF-Cream.jpg", "../img/SPF-Cream3.jpg"], 
                specs: {"SPF": "50+", "Объем": "100 мл", "Водостойкий": "Да", "Высокогорье": "Специально", "UV защита": "UVA/UVB"} 
            },
            18: { 
                gallery: ["../img/thermos.jpg", "../img/thermos2.png"], 
                specs: {"Объем": "1 л", "Время": "12 ч", "Материал": "Нерж. сталь", "Двухстенный": "Да", "Крышка": "Чашка"} 
            },
            19: { 
                gallery: ["../img/Membrane-jacket.jpg", "../img/Membrane-jacket2.jpg"], 
                specs: {"Мембрана": "10000 мм", "Размеры": "S-XL", "Водонепроницаемость": "10000 мм", "Капюшон": "Регулируемый", "Карманы": "4"} 
            },
            20: { 
                gallery: ["../img/Repair-shells.jpg", "../img/Repair-shells2.jpg"], 
                specs: {"Услуги": "Комплекс", "Срок": "2 часа", "Заточка": "Канты", "Парафин": "Нанесение", "Гарантия": "7 дней"} 
            },
            21: { 
                gallery: ["../img/Luggage-storage.jpg", "../img/Luggage-storage2.jpg"], 
                specs: {"Размер": "40x30x50", "Доступ": "24/7", "Охрана": "Видеонаблюдение", "Сейф": "Индивидуальный", "Цена": "За сутки"} 
            },
            22: { 
                gallery: ["../img/Childrens-school.png", "../img/Childrens-school2.jpeg"], 
                specs: {"Возраст": "4-7 лет", "Время": "4 ч", "Группа": "До 6 человек", "Инструктор": "Опытный", "Питание": "Включено"} 
            },
            23: { 
                gallery: ["../img/Eagle.png", "../img/Eagle2.jpg"], 
                specs: {"Сложность": "Черная", "Длина": "3.2 км", "Перепад": "600 м", "Открытие": "01.12.2025", "Вход": "Свободный"} 
            },
            24: { 
                gallery: ["../img/Snow-forecast.jpg", "../img/Snow-forecast2.jpg"], 
                specs: {"Прогноз": "+40 см", "Период": "7 дней", "Обновление": "Каждый час", "Точность": "95%", "Источник": "Метеослужба"} 
            }
        };

        // 5. ОБЪЕДИНЯЕМ ВСЕ ДАННЫЕ
        // Берем статику (характеристики), накладываем базу (название), а сверху админку (цену)
        const details = productDetails[id] || {};
        const product = {
            ...details, // Характеристики и галерея
            ...baseProduct, // Название и описание по умолчанию
            ...liveProduct  // Цена и изменения из админки (ПРИОРИТЕТ)
        };

        console.log('📦 Товар загружен:', product.title, '| Цена:', product.price);

        // ==========================================
        // ОТРИСОВКА СТРАНИЦЫ
        // ==========================================

        // Заполнение данных
        document.getElementById('prodTitle') && (document.getElementById('prodTitle').textContent = product.title);
        document.getElementById('prodPrice') && (document.getElementById('prodPrice').textContent = product.price.toLocaleString('ru-RU') + ' ₽');
        document.getElementById('prodOldPrice') && (document.getElementById('prodOldPrice').textContent = product.oldPrice ? product.oldPrice.toLocaleString('ru-RU') + ' ₽' : '');
        document.getElementById('prodDesc') && (document.getElementById('prodDesc').textContent = product.desc);
        document.getElementById('mainProductImg') && (document.getElementById('mainProductImg').src = product.img);
        
        // Характеристики
        const specsList = document.getElementById('prodSpecs');
        if (specsList && product.specs) {
            specsList.innerHTML = Object.entries(product.specs).map(([key, value]) => `
                <li><span>${key}:</span> ${value}</li>
            `).join('');
        } else if (specsList) {
            specsList.innerHTML = '<li><span>Категория:</span> Товар</li><li><span>Наличие:</span> В наличии</li>';
        }
        
        // Размеры
        const sizeWrap = document.getElementById('sizeSelector');
        if (sizeWrap) {
            sizeWrap.style.display = product.hasSizes ? 'block' : 'none';
        }
        
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Кнопка в корзину
        document.getElementById('addToCartBtn')?.addEventListener('click', () => {
            const size = product.hasSizes ? document.querySelector('.size-btn.active')?.textContent || 'M' : '-';
            const existing = cart.find(i => i.title === product.title && i.size === size);
            if (existing) existing.qty++;
            else cart.push({ title: product.title, price: product.price, size, qty: 1, img: product.img, type: 'product' });
            saveCart(); 
            renderCart(); 
            openModal('cartModal');
        });

        // === ГАЛЕРЕЯ ТОВАРА ===
        const galleryContainer = document.getElementById('productGallery');
        const dotsContainer = document.getElementById('productGalleryDots');

        if (galleryContainer && dotsContainer && product.gallery && product.gallery.length > 0) {
            // 1. Заполняем картинками
            galleryContainer.innerHTML = product.gallery.map(src => `
                <div class="gallery-item">
                    <img src="${src}" alt="${product.title}">
                </div>
            `).join('');

            // 2. Заполняем точками
            dotsContainer.innerHTML = product.gallery.map((_, i) => `
                <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
            `).join('');

            // 3. Логика переключения
            let currentSlide = 0;
            const slides = galleryContainer.querySelectorAll('.gallery-item');
            const dots = dotsContainer.querySelectorAll('.dot');

            function showSlide(index) {
                galleryContainer.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
                currentSlide = index;
            }

            // Автопрокрутка
            setInterval(() => {
                let next = (currentSlide + 1) % product.gallery.length;
                showSlide(next);
            }, 3000);

            // Клик по точкам
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    showSlide(parseInt(dot.dataset.index));
                });
            });
        } else if (galleryContainer) {
            // Если нет галереи, показываем главное фото
            galleryContainer.innerHTML = `<div class="gallery-item"><img src="${product.img}" alt="${product.title}"></div>`;
        }

        // Отзывы
        const revForm = document.getElementById('reviewForm');
        const revList = document.getElementById('reviewsList');
        
        if (revForm && revList) {
            const stars = document.querySelectorAll('.star-rating .star');
            const ratingInput = document.getElementById('reviewRating');
            
            stars.forEach(s => s.addEventListener('click', () => {
                const val = +s.dataset.value; 
                ratingInput.value = val;
                stars.forEach(st => st.classList.toggle('active', +st.dataset.value <= val));
            }));

            // Загрузка сохраненных отзывов
            const saved = JSON.parse(localStorage.getItem(`rev_prod_${id}`) || '[]');
            if (saved.length > 0) {
                revList.innerHTML = saved.map(r => `
                    <div class="review-card">
                        <div class="review-header">
                            <span class="review-author">${r.name}</span>
                            <span class="review-date">${r.date}</span>
                        </div>
                        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                        <p class="review-text">${r.text}</p>
                    </div>
                `).join('');
            } else {
                revList.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Пока нет отзывов. Будьте первым!</p>';
            }

            // Отправка отзыва
            revForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('reviewName').value.trim();
                const text = document.getElementById('reviewText').value.trim();
                const rating = +ratingInput.value;
                const date = new Date().toLocaleDateString('ru-RU');
                
                if (!name || !text || !rating) {
                    alert('Заполните все поля!');
                    return;
                }
                
                const data = JSON.parse(localStorage.getItem(`rev_prod_${id}`) || '[]');
                data.unshift({ name, rating, text, date });
                localStorage.setItem(`rev_prod_${id}`, JSON.stringify(data));
                
                // Добавляем отзыв на страницу
                const el = document.createElement('div'); 
                el.className = 'review-card';
                el.innerHTML = `
                    <div class="review-header">
                        <span class="review-author">${name}</span>
                        <span class="review-date">${date}</span>
                    </div>
                    <div class="review-stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div>
                    <p class="review-text">${text}</p>
                `;
                
                if (revList.querySelector('p')) {
                    revList.innerHTML = '';
                }
                revList.insertBefore(el, revList.firstChild);
                
                revForm.reset(); 
                ratingInput.value = 5;
                stars.forEach(s => s.classList.toggle('active', +s.dataset.value <= 5));
                alert('✅ Спасибо за отзыв!');
            });
        }
    }
    // ==========================================
    // 8. СТРАНИЦА ОТЕЛЯ (HOTEL-BOOKING.HTML)
    // ==========================================
    if (window.location.pathname.includes('hotel-booking.html')) {
        
        // 1. Получаем ID отеля из URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id')) || 1;

        // 2. Загружаем динамические данные из Админки (Цена, Описание, Картинка)
        const storageHotels = JSON.parse(localStorage.getItem('skiResort_hotels')) || [];
        const liveHotel = storageHotels.find(h => h.id === id) || {};

        // 3. Загружаем базовые данные (Название, дефолтная цена)
        const baseHotel = defaultHotels.find(h => h.id === id) || {};

        // 4. БАЗА ГАЛЕРЕИ И УДОБСТВ (Статичные данные для каждого отеля)
        const hotelDetails = {
            1: { 
                gallery: ["../img/alpine-2.jpg"], 
                specs: {"Wi-Fi": "Бесплатно", "Завтрак": "Шведский стол", "Бассейн": "Подогреваемый", "SPA": "Полный комплекс", "Ски-ин/Ски-аут": "Да", "Парковка": "Бесплатная"} 
            },
            2: { 
                gallery: ["../img/lodge-1.png"], 
                specs: {"Wi-Fi": "Бесплатно", "Камин": "В каждом номере", "Завтрак": "Континентальный", "Парковка": "Охраняемая", "С животными": "Разрешено", "Расстояние до трасс": "500 м"} 
            },
            3: { 
                gallery: ["../img/Ski-Chalet.png"], 
                specs: {"Wi-Fi": "В лобби", "Кухня": "Общая", "Парковка": "Уличная", "Завтрак": "Нет", "Расстояние до трасс": "1 км", "Тип номера": "Стандарт"} 
            },
            4: { 
                gallery: ["../img/summit-1.jpg"], 
                specs: {"Класс": "Люкс", "Ресторан": "Мишлен", "SPA": "Private", "Бассейн": "Infinity с видом", "Личный консьерж": "24/7", "Трансфер": "Личный вертолет"} 
            },
            5: { 
                gallery: ["../img/bear-1.jpg"], 
                specs: {"Тип": "Деревянный дом", "Камин": "Дровяной", "Завтрак": "Нет", "Вместимость": "До 4 чел", "Природа": "В лесу", "Интернет": "Нет (Digital Detox)"} 
            },
            6: { 
                gallery: ["../img/IceFireGlamping.png"], 
                specs: {"Тип": "Геодезический купол", "Обогрев": "Пол", "Вид": "На звезды", "Ужин": "Барбекю зона", "Баня": "Общая", "Романтика": "100%"} 
            },
            7: { 
                gallery: ["../img/Nordic.jpg"], 
                specs: {"Стиль": "Скандинавский", "Сауна": "Финская + Хаммам", "Бассейн": "С подогревом", "Завтрак": "Органик", "Массаж": "Включен", "Дизайн": "Минимализм"} 
            }
        };

        // 5. ОБЪЕДИНЯЕМ ВСЕ ДАННЫЕ (Приоритет: Админка > База > Статика)
        const details = hotelDetails[id] || {};
        const hotel = {
            ...details,      // Галерея и Удобства
            ...baseHotel,    // Название и дефолтные данные
            ...liveHotel     // Цена, описание, картинка из Админки (ПЕРЕПИСЫВАЕТ СВЕРХУ)
        };

        console.log('🏨 Отель загружен:', hotel.title, '| Цена:', hotel.price);

        // ==========================================
        // ОТРИСОВКА ИНТЕРФЕЙСА ОТЕЛЯ
        // ==========================================

        // Заполнение основных полей
        document.getElementById('hotelTitle') && (document.getElementById('hotelTitle').textContent = hotel.title);
        document.getElementById('hotelPrice') && (document.getElementById('hotelPrice').textContent = hotel.price.toLocaleString('ru-RU') + ' ₽');
        document.getElementById('hotelOldPrice') && (document.getElementById('hotelOldPrice').textContent = hotel.oldPrice ? hotel.oldPrice.toLocaleString('ru-RU') + ' ₽' : '');
        document.getElementById('hotelDesc') && (document.getElementById('hotelDesc').textContent = hotel.desc || 'Описание отсутствует');
        document.getElementById('hotelMainImg') && (document.getElementById('hotelMainImg').src = hotel.img);

        // === ГАЛЕРЕЯ ОТЕЛЯ ===
        const galleryContainer = document.getElementById('hotelGallery');
        const dotsContainer = document.getElementById('hotelDots');

        if (galleryContainer && dotsContainer && hotel.gallery && hotel.gallery.length > 0) {
            galleryContainer.innerHTML = hotel.gallery.map(src => `
                <div class="gallery-item">
                    <img src="${src}" alt="${hotel.title}">
                </div>
            `).join('');

            dotsContainer.innerHTML = hotel.gallery.map((_, i) => `
                <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
            `).join('');

            let currentSlide = 0;
            const slides = galleryContainer.querySelectorAll('.gallery-item');
            const dots = dotsContainer.querySelectorAll('.dot');

            function showHotelSlide(index) {
                galleryContainer.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
                currentSlide = index;
            }

            setInterval(() => {
                let next = (currentSlide + 1) % hotel.gallery.length;
                showHotelSlide(next);
            }, 3500);

            dots.forEach(dot => {
                dot.addEventListener('click', () => showHotelSlide(parseInt(dot.dataset.index)));
            });
        } else if (galleryContainer) {
            galleryContainer.innerHTML = `<div class="gallery-item"><img src="${hotel.img}" alt="${hotel.title}"></div>`;
        }

        // === УДОБСТВА (ХАРАКТЕРИСТИКИ) ===
        const specsList = document.getElementById('hotelSpecs');
        if (specsList && hotel.specs) {
            specsList.innerHTML = Object.entries(hotel.specs).map(([key, value]) => `
                <li><span>${key}:</span> ${value}</li>
            `).join('');
        } else if (specsList) {
            specsList.innerHTML = '<li><span>Категория:</span> Отель</li><li><span>Наличие:</span> Доступно</li>';
        }

        // === ОТЗЫВЫ ОБ ОТЕЛЕ ===
        const revForm = document.getElementById('hotelReviewForm');
        const revList = document.getElementById('hotelReviewsList');
        
        if (revForm && revList) {
            const stars = revForm.querySelectorAll('.star-rating .star');
            const ratingInput = document.getElementById('hotelReviewRating');
            
            stars.forEach(s => s.addEventListener('click', () => {
                const val = +s.dataset.value; 
                ratingInput.value = val;
                stars.forEach(st => st.classList.toggle('active', +st.dataset.value <= val));
            }));

            const saved = JSON.parse(localStorage.getItem(`hotel_rev_${id}`) || '[]');
            if (saved.length > 0) {
                revList.innerHTML = saved.map(r => `
                    <div class="review-card">
                        <div class="review-header">
                            <span class="review-author">${r.name}</span>
                            <span class="review-date">${r.date}</span>
                        </div>
                        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                        <p class="review-text">${r.text}</p>
                    </div>
                `).join('');
            } else {
                revList.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Пока нет отзывов. Будьте первым!</p>';
            }

            revForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('hotelReviewName').value.trim();
                const text = document.getElementById('hotelReviewText').value.trim();
                const rating = +ratingInput.value;
                const date = new Date().toLocaleDateString('ru-RU');
                
                if (!name || !text || !rating) { alert('Заполните все поля!'); return; }
                
                const data = JSON.parse(localStorage.getItem(`hotel_rev_${id}`) || '[]');
                data.unshift({ name, rating, text, date });
                localStorage.setItem(`hotel_rev_${id}`, JSON.stringify(data));
                
                const el = document.createElement('div'); 
                el.className = 'review-card';
                el.innerHTML = `
                    <div class="review-header"><span class="review-author">${name}</span><span class="review-date">${date}</span></div>
                    <div class="review-stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div>
                    <p class="review-text">${text}</p>
                `;
                
                if (revList.querySelector('p')) revList.innerHTML = '';
                revList.insertBefore(el, revList.firstChild);
                revForm.reset(); 
                alert('✅ Спасибо за отзыв об отеле!');
            });
        }

        // === КНОПКА БРОНИРОВАНИЯ ===
        document.getElementById('bookHotelBtn')?.addEventListener('click', () => {
            const d1 = document.getElementById('checkIn').value;
            const d2 = document.getElementById('checkOut').value;
            
            if (!d1 || !d2) { alert('Выберите даты заезда и выезда!'); return; }
            
            const nights = Math.ceil(Math.abs(new Date(d2) - new Date(d1)) / 864e5);
            if (nights <= 0) { alert('Дата выезда должна быть позже даты заезда!'); return; }
            
            const totalPrice = hotel.price * nights; // ✅ Берет актуальную цену!
            
            cart.push({
                title: `🏨 ${hotel.title}`,
                price: totalPrice,
                size: `${nights} ночей (${d1} → ${d2})`,
                qty: 1,
                img: hotel.img,
                type: 'hotel'
            });
            
            saveCart();
            renderCart();
            openModal('cartModal');
            alert(`🏨 Отель забронирован на ${nights} ночей!`);
        });
    }
    // ==========================================
    // 9. ОФОРМЛЕНИЕ ЗАКАЗА (РАБОТАЕТ ВЕЗДЕ)
    // ==========================================

    // Функция проверки авторизации (доступна на всех страницах)
    window.checkAuthAndCheckout = () => {
        console.log('🔍 Проверка авторизации...');

        if (cart.length === 0) {
            alert('Корзина пуста! Добавьте товары.');
            return false;
        }

        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn !== 'true') {
            console.log('⛔ Требуется авторизация');

            // Открываем модалку авторизации
            const authModal = document.getElementById('authRequiredModal');
            if (authModal) {
                authModal.classList.add('open');
                document.body.style.overflow = 'hidden';
                console.log('✅ Модалка авторизации открыта');
            } else {
                console.error('❌ Модалка authRequiredModal не найдена в HTML!');
                alert('Пожалуйста, войдите в аккаунт для оформления заказа.');
            }
            return false;
        }

        return true;
    };

    // Обработка кнопки "Войти в аккаунт" в модалке
    document.getElementById('goToLoginBtn')?.addEventListener('click', () => {
        console.log('🔑 Переход к авторизации');
        closeModal('authRequiredModal');
        openModal('authModal');
    });

    document.getElementById('authRequiredClose')?.addEventListener('click', () => {
        closeModal('authRequiredModal');
    });

    document.getElementById('authRequiredOverlay')?.addEventListener('click', () => {
        closeModal('authRequiredModal');
    });

    // Кнопка оформления заказа (работает на всех страницах)
    setTimeout(() => {
        const checkoutBtn = document.getElementById('checkoutBtn');

        if (checkoutBtn) {
            console.log('✅ Кнопка checkoutBtn найдена');

            checkoutBtn.addEventListener('click', () => {
                console.log('🛒 Нажата кнопка "Оформить заказ"');

                // Проверяем авторизацию
                if (!window.checkAuthAndCheckout()) {
                    return;
                }

                // Если авторизован — оформляем заказ
                console.log('✅ Авторизован, оформляем заказ...');

                const currentUser = localStorage.getItem('currentUserEmail');
                const now = new Date().toLocaleDateString('ru-RU');
                const num = 'ORD-' + Math.floor(1000 + Math.random() * 9000);

                let orders = JSON.parse(localStorage.getItem('skiResort_history_orders')) || [];
                let bookings = JSON.parse(localStorage.getItem('skiResort_history_bookings')) || [];

                cart.forEach(item => {
                    const baseData = {
                        id: num,
                        title: item.title,
                        price: (item.price || 0) * (item.qty || 1),
                        qty: item.qty,
                        date: now,
                        user: currentUser
                    };

                    if (item.type === 'hotel') {
                        bookings.push({ ...baseData, dates: item.size });
                    } else {
                        orders.push({ ...baseData, size: item.size });
                    }
                });

                localStorage.setItem('skiResort_history_orders', JSON.stringify(orders));
                localStorage.setItem('skiResort_history_bookings', JSON.stringify(bookings));

                cart = [];
                saveCart();
                renderCart();

                const cartModal = document.getElementById('cartModal');
                if (cartModal) {
                    cartModal.classList.remove('open');
                    document.body.style.overflow = '';
                }

                alert(`✅ Заказ ${num} успешно оформлен!`);
            });
        } else {
            console.warn('⚠️ Кнопка checkoutBtn не найдена на этой странице');
        }
    }, 100);
    // ==========================================
    // ==========================================
    // 10. СТРАНИЦА АККАУНТА
    // ==========================================
    if (window.location.pathname.includes('account.html')) {
        console.log('👤 Страница аккаунта загружена');

        const profileContent = document.getElementById('profileContent');
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (!isLoggedIn) {
            if (profileContent) profileContent.classList.add('hidden');
            setTimeout(() => openModal('authModal'), 400);
        } else {
            if (profileContent) profileContent.classList.remove('hidden');
            renderAccountData();
        }

        // === ПЕРЕКЛЮЧЕНИЕ ТАБОВ (Заказы/Бронирования) ===
        const tabs = document.querySelectorAll('.account-tab');
        const ordersSection = document.getElementById('ordersSection');
        const bookingsSection = document.getElementById('bookingsSection');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Убираем active у всех табов
                tabs.forEach(t => t.classList.remove('active'));
                // Добавляем active нажатому табу
                tab.classList.add('active');

                // Показываем нужную секцию
                const tabType = tab.getAttribute('data-tab');
                if (tabType === 'orders') {
                    if (ordersSection) ordersSection.style.display = 'block';
                    if (bookingsSection) bookingsSection.style.display = 'none';
                } else if (tabType === 'bookings') {
                    if (ordersSection) ordersSection.style.display = 'none';
                    if (bookingsSection) bookingsSection.style.display = 'block';
                }
            });
        });

        function renderAccountData() {
            const savedName = localStorage.getItem('userFullName');
            const savedPhone = localStorage.getItem('userPhone');
            const currentUser = localStorage.getItem('currentUserEmail');

            const profileCard = document.querySelector('.card[style*="margin-bottom: 24px"]');
            if (savedName && profileCard) {
                const nameElement = profileCard.querySelector('h2');
                const phoneElement = profileCard.querySelector('p:nth-of-type(2)');
                if (nameElement) nameElement.textContent = savedName;
                if (phoneElement && savedPhone) phoneElement.textContent = `📞 ${savedPhone}`;
            }

            const ordersListEl = document.getElementById('ordersList');
            const bookingsListEl = document.getElementById('bookingsList');
            const statOrdersEl = document.getElementById('statOrders');
            const statBookingsEl = document.getElementById('statBookings');

            const allOrders = JSON.parse(localStorage.getItem('skiResort_history_orders')) || [];
            const allBookings = JSON.parse(localStorage.getItem('skiResort_history_bookings')) || [];

            const orderHistory = allOrders.filter(order => order.user === currentUser);
            const bookingHistory = allBookings.filter(booking => booking.user === currentUser);

            if (statOrdersEl) statOrdersEl.textContent = orderHistory.length;
            if (statBookingsEl) statBookingsEl.textContent = bookingHistory.length;

            if (ordersListEl) {
                ordersListEl.innerHTML = orderHistory.length ? orderHistory.reverse().map(order => `
                    <div class="history-item" style="animation: fadeInUp 0.3s ease-out;">
                        <div class="history-item-info">
                            <h4>${order.title}</h4>
                            <p>📅 ${order.date} • ${order.qty} шт. • №${order.id}</p>
                        </div>
                        <div class="history-item-price">${order.price.toLocaleString('ru-RU')} ₽</div>
                    </div>
                `).join('') : '<p style="text-align:center; color:var(--text-muted); padding:30px;">У вас пока нет заказов</p>';
            }

            if (bookingsListEl) {
                bookingsListEl.innerHTML = bookingHistory.length ? bookingHistory.reverse().map(booking => `
                    <div class="history-item" style="animation: fadeInUp 0.3s ease-out;">
                        <div class="history-item-info">
                            <h4>${booking.title}</h4>
                            <p>📅 ${booking.dates} • №${booking.id}</p>
                        </div>
                        <div class="history-item-price">${booking.price.toLocaleString('ru-RU')} ₽</div>
                    </div>
                `).join('') : '<p style="text-align:center; color:var(--text-muted); padding:30px;">У вас пока нет бронирований</p>';
            }
        }

        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            alert('👋 Вы успешно вышли из аккаунта');
            window.location.href = '../../index.html';
        });
    }

    // ==========================================
    // 11. АДМИН-ПАНЕЛЬ (ИСПРАВЛЕННАЯ)
    // ==========================================
    if (window.location.pathname.includes('admin.html')) {
        console.log('✅ Админ-панель загружена');

        const loginScreen = document.getElementById('adminLogin');
        const adminPanel = document.getElementById('adminPanel');
        const loginForm = document.getElementById('adminLoginForm');
        const logoutBtn = document.getElementById('adminLogout');
        const errorEl = document.getElementById('adminError');

        // Проверка авторизации
        if (localStorage.getItem('adminAuth') === 'true') {
            if (loginScreen) loginScreen.classList.add('hidden');
            if (adminPanel) adminPanel.classList.remove('hidden');
            setTimeout(initAdminData, 100);
        } else {
            if (loginScreen) loginScreen.classList.remove('hidden');
            if (adminPanel) adminPanel.classList.add('hidden');
        }

        // Вход
        loginForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('adminUser').value;
            const pass = document.getElementById('adminPass').value;
            if (user === 'admin' && pass === 'admin2026') {
                localStorage.setItem('adminAuth', 'true');
                location.reload();
            } else {
                if (errorEl) {
                    errorEl.textContent = '❌ Неверный логин или пароль';
                    errorEl.style.display = 'block';
                }
            }
        });

        // Выход
        logoutBtn?.addEventListener('click', () => {
            localStorage.removeItem('adminAuth');
            window.location.href = '../../index.html';
        });

        // Переключение табов
        document.querySelectorAll('.admin-nav button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.admin-nav button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
                btn.classList.add('active');
                const section = document.getElementById('tab-' + btn.dataset.tab);
                if (section) section.classList.add('active');
            });
        });

        // Инициализация данных
        function initAdminData() {
            console.log('🔄 Загрузка данных...');
            // Используем defaultProducts и defaultHotels из начала файла main.js
            if (!localStorage.getItem('skiResort_products') || localStorage.getItem('skiResort_products') === '[]') {
                localStorage.setItem('skiResort_products', JSON.stringify(defaultProducts));
                console.log('✅ Загружено товаров:', defaultProducts.length);
            }
            if (!localStorage.getItem('skiResort_hotels') || localStorage.getItem('skiResort_hotels') === '[]') {
                localStorage.setItem('skiResort_hotels', JSON.stringify(defaultHotels));
                console.log('✅ Загружено отелей:', defaultHotels.length);
            }
            renderAll();
        }

        function renderAll() {
            renderProducts();
            renderHotels();
            renderUsers();
            renderOrders();
            renderBookings();
        }

        // === РЕНДЕР ТОВАРОВ ===
        function renderProducts() {
            const products = JSON.parse(localStorage.getItem('skiResort_products') || '[]');
            const grid = document.getElementById('productsGrid');
            if (!grid) return;

            grid.innerHTML = products.length ? products.map((p, i) => `
                <div class="admin-card" style="animation: fadeInUp 0.3s ease-out;">
                    <img src="${p.img}" alt="${p.title}" onerror="this.style.display='none'">
                    <h4>${p.title}</h4>
                    <p style="font-size:18px;font-weight:700;color:var(--primary);margin:10px 0;">
                        ${p.price.toLocaleString('ru-RU')} ₽
                        ${p.oldPrice ? `<span style="text-decoration:line-through;color:var(--text-muted);font-size:14px;"> ${p.oldPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
                    </p>
                    <p style="font-size:13px;color:var(--text-muted);margin-bottom:15px;">${p.desc || ''}</p>
                    <div style="display:flex; gap:10px;">
                        <button onclick="window.openProductModal(${i})" style="flex:1; background:#3b82f6; color:white; border:none; padding:10px; border-radius:8px; cursor:pointer;">✏️</button>
                        <button onclick="window.deleteProduct(${i})" style="flex:1; background:#ef4444; color:white; border:none; padding:10px; border-radius:8px; cursor:pointer;">🗑️</button>
                    </div>
                </div>
            `).join('') : '<p class="empty-state">Нет товаров</p>';
        }

        // === РЕНДЕР ОТЕЛЕЙ ===
        function renderHotels() {
            const hotels = JSON.parse(localStorage.getItem('skiResort_hotels') || '[]');
            const grid = document.getElementById('hotelsGrid');
            if (!grid) return;

            grid.innerHTML = hotels.length ? hotels.map((h, i) => `
                <div class="admin-card" style="animation: fadeInUp 0.3s ease-out;">
                    <img src="${h.img}" alt="${h.title}" onerror="this.style.display='none'">
                    <h4>${h.title}</h4>
                    <p style="font-size:18px;font-weight:700;color:var(--primary);margin:10px 0;">
                        ${h.price.toLocaleString('ru-RU')} ₽ / ночь
                        ${h.oldPrice ? `<span style="text-decoration:line-through;color:var(--text-muted);font-size:14px;"> ${h.oldPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
                    </p>
                    <p style="font-size:13px;color:var(--text-muted);margin-bottom:15px;">${h.desc || ''}</p>
                    <div style="display:flex; gap:10px;">
                        <button onclick="window.openHotelModal(${i})" style="flex:1; background:#3b82f6; color:white; border:none; padding:10px; border-radius:8px; cursor:pointer;">✏️</button>
                        <button onclick="window.deleteHotel(${i})" style="flex:1; background:#ef4444; color:white; border:none; padding:10px; border-radius:8px; cursor:pointer;">🗑️</button>
                    </div>
                </div>
            `).join('') : '<p class="empty-state">Нет отелей</p>';
        }

        // === РЕНДЕР ОСТАЛЬНОГО ===
        function renderUsers() {
            const users = JSON.parse(localStorage.getItem('skiResort_users') || '[]');
            const tbody = document.querySelector('#usersTable tbody');
            if (!tbody) return;
            tbody.innerHTML = users.length ? users.map((u, i) => `
                <tr style="animation: fadeInUp 0.3s ease-out;">
                    <td>${u.name || '-'}</td><td>${u.phone || '-'}</td><td>${u.email || '-'}</td><td>${u.date || '-'}</td>
                    <td><button onclick="window.deleteUser(${i})" style="background:#ef4444;color:white;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">Удалить</button></td>
                </tr>
            `).join('') : '<tr><td colspan="5" class="empty-state">Нет пользователей</td></tr>';
        }

        function renderOrders() {
            const orders = JSON.parse(localStorage.getItem('skiResort_history_orders') || '[]');
            const grid = document.getElementById('ordersGrid');
            if (!grid) return;
            grid.innerHTML = orders.length ? orders.map((o, i) => `
                <div class="order-card" style="animation: fadeInUp 0.3s ease-out;">
                    <h4>📦 ${o.title}</h4>
                    <p>Клиент: ${o.user || 'Гость'}</p>
                    <p>Сумма: ${o.price.toLocaleString('ru-RU')} ₽</p>
                    <p>Дата: ${o.date}</p>
                    <button onclick="window.deleteOrder(${i})" style="background:#ef4444;color:white;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;margin-top:10px;">Удалить</button>
                </div>
            `).join('') : '<p class="empty-state">Нет заказов</p>';
        }

        function renderBookings() {
            const bookings = JSON.parse(localStorage.getItem('skiResort_history_bookings') || '[]');
            const grid = document.getElementById('bookingsGrid');
            if (!grid) return;
            grid.innerHTML = bookings.length ? bookings.map((b, i) => `
                <div class="booking-card" style="animation: fadeInUp 0.3s ease-out;">
                    <h4>🏨 ${b.title}</h4>
                    <p>Клиент: ${b.user || 'Гость'}</p>
                    <p>Даты: ${b.dates}</p>
                    <p>Сумма: ${b.price.toLocaleString('ru-RU')} ₽</p>
                    <button onclick="window.deleteBooking(${i})" style="background:#ef4444;color:white;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;margin-top:10px;">Удалить</button>
                </div>
            `).join('') : '<p class="empty-state">Нет бронирований</p>';
        }

        // === ГЛОБАЛЬНЫЕ ФУНКЦИИ (ЧТОБЫ КНОПКИ РАБОТАЛИ) ===

        // Открыть модалку товара (Добавление или Редактирование)
        window.openProductModal = (index) => {
            const modal = document.getElementById('productModal');
            const titleEl = document.getElementById('productModalTitle');
            const form = document.getElementById('productForm');

            if (!modal) return console.error('❌ Модалка продукта не найдена!');

            form.reset();
            document.getElementById('editProductId').value = '';

            if (index !== undefined && index !== null) {
                // Режим редактирования
                titleEl.textContent = 'Редактировать товар';
                const products = JSON.parse(localStorage.getItem('skiResort_products') || '[]');
                const p = products[index];
                if (p) {
                    document.getElementById('editProductId').value = index;
                    document.getElementById('pTitle').value = p.title || '';
                    document.getElementById('pPrice').value = p.price || '';
                    document.getElementById('pOldPrice').value = p.oldPrice || '';
                    document.getElementById('pDesc').value = p.desc || '';
                    document.getElementById('pImg').value = p.img || '';
                    // ✅ ИСПРАВЛЕНО: корректно подставляем значение hasSizes
                    document.getElementById('pHasSizes').value = p.hasSizes ? 'true' : 'false';
                }
            } else {
                // Режим добавления
                titleEl.textContent = 'Добавить товар';
                document.getElementById('pHasSizes').value = 'false'; // значение по умолчанию
            }
            modal.classList.remove('hidden');
        };

        window.closeProductModal = () => {
            document.getElementById('productModal')?.classList.add('hidden');
        };

        // Открыть модалку отеля
        window.openHotelModal = (index) => {
            const modal = document.getElementById('hotelModal');
            const titleEl = document.getElementById('hotelModalTitle');
            const form = document.getElementById('hotelForm');

            if (!modal) return console.error('❌ Модалка отеля не найдена!');

            form.reset();
            document.getElementById('editHotelId').value = '';

            if (index !== undefined && index !== null) {
                titleEl.textContent = 'Редактировать отель';
                const hotels = JSON.parse(localStorage.getItem('skiResort_hotels') || '[]');
                const h = hotels[index];
                if (h) {
                    document.getElementById('editHotelId').value = index;
                    document.getElementById('hTitle').value = h.title || '';
                    document.getElementById('hPrice').value = h.price || '';
                    document.getElementById('hOldPrice').value = h.oldPrice || '';
                    document.getElementById('hDesc').value = h.desc || '';
                    document.getElementById('hImg').value = h.img || '';
                }
            } else {
                titleEl.textContent = 'Добавить отель';
            }
            modal.classList.remove('hidden');
        };

        window.closeHotelModal = () => {
            document.getElementById('hotelModal')?.classList.add('hidden');
        };

        // Удаление
        window.deleteProduct = (i) => { if (confirm('Удалить?')) { let arr = JSON.parse(localStorage.getItem('skiResort_products') || '[]'); arr.splice(i, 1); localStorage.setItem('skiResort_products', JSON.stringify(arr)); renderProducts(); } };
        window.deleteHotel = (i) => { if (confirm('Удалить?')) { let arr = JSON.parse(localStorage.getItem('skiResort_hotels') || '[]'); arr.splice(i, 1); localStorage.setItem('skiResort_hotels', JSON.stringify(arr)); renderHotels(); } };
        window.deleteUser = (i) => { if (confirm('Удалить?')) { let arr = JSON.parse(localStorage.getItem('skiResort_users') || '[]'); arr.splice(i, 1); localStorage.setItem('skiResort_users', JSON.stringify(arr)); renderUsers(); } };
        window.deleteOrder = (i) => { if (confirm('Удалить?')) { let arr = JSON.parse(localStorage.getItem('skiResort_history_orders') || '[]'); arr.splice(i, 1); localStorage.setItem('skiResort_history_orders', JSON.stringify(arr)); renderOrders(); } };
        window.deleteBooking = (i) => { if (confirm('Удалить?')) { let arr = JSON.parse(localStorage.getItem('skiResort_history_bookings') || '[]'); arr.splice(i, 1); localStorage.setItem('skiResort_history_bookings', JSON.stringify(arr)); renderBookings(); } };

        // Обработка формы товара
        // Обработка формы товара
        document.getElementById('productForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = document.getElementById('editProductId').value;
            let products = JSON.parse(localStorage.getItem('skiResort_products') || '[]');

            const productData = {
                id: index ? products[index].id : Date.now(),
                title: document.getElementById('pTitle').value,
                price: parseInt(document.getElementById('pPrice').value) || 0,
                oldPrice: parseInt(document.getElementById('pOldPrice').value) || null,
                desc: document.getElementById('pDesc').value,
                img: document.getElementById('pImg').value,
                hasSizes: document.getElementById('pHasSizes').value === 'true', // ✅ ИСПРАВЛЕНО: теперь корректно сохраняется
                category: 'products' // ✅ Добавлена категория
            };

            if (index && index !== '') {
                // Режим редактирования
                products[index] = productData;
                console.log('✏️ Товар обновлён:', productData);
            } else {
                // Режим добавления
                products.push(productData);
                console.log('➕ Новый товар добавлен:', productData);
            }

            localStorage.setItem('skiResort_products', JSON.stringify(products));
            console.log('💰 Новая цена:', productData.price);
            console.log('📦 Всего товаров в хранилище:', products.length);

            window.closeProductModal();
            renderProducts(); // Перерисовываем админ-панель

            // ✅ ВАЖНО: ОБНОВЛЯЕМ КАТАЛОГ НА ВСЕХ СТРАНИЦАХ
            window.dispatchEvent(new Event('storage'));

            // ✅ ДОПОЛНИТЕЛЬНО: если мы на странице каталога, обновляем её
            if (window.location.pathname.includes('catalog.html')) {
                renderCatalog(); // Функция renderCatalog уже есть в вашем коде
            }
        });

        // Обработка формы отеля
        document.getElementById('hotelForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = document.getElementById('editHotelId').value;
            let hotels = JSON.parse(localStorage.getItem('skiResort_hotels') || '[]');

            const hotelData = {
                id: index ? hotels[index].id : Date.now(),
                title: document.getElementById('hTitle').value,
                price: parseInt(document.getElementById('hPrice').value) || 0,
                oldPrice: parseInt(document.getElementById('hOldPrice').value) || null,
                desc: document.getElementById('hDesc').value,
                img: document.getElementById('hImg').value,
                badge: ''
            };

            if (index) hotels[index] = hotelData;
            else hotels.push(hotelData);

            localStorage.setItem('skiResort_hotels', JSON.stringify(hotels));
            window.closeHotelModal();
            renderHotels();
        });
        // После успешного сохранения товара
        localStorage.setItem('skiResort_products', JSON.stringify(products));

        // Добавь эту строку для обновления каталога
        window.dispatchEvent(new Event('storage'));
        // Слушатель для обновления в реальном времени
        window.addEventListener('storage', (e) => {
            if (e.key === 'skiResort_products') {
                console.log('🔄 Товары изменились, обновляем каталог...');
                if (window.location.pathname.includes('catalog.html')) {
                    renderCatalog();
                }
                if (window.location.pathname.includes('admin.html')) {
                    renderProducts();
                }
            }
        });
    }

    // ==========================================
    // 12. АНИМАЦИИ ПРИ СКРОЛЛЕ
    // ==========================================

    // Анимация появления секций при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Наблюдаем за секциями
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Наблюдаем за элементами с классом animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Добавляем класс visible для уже видимых элементов при загрузке
    window.addEventListener('load', () => {
        document.querySelectorAll('.section').forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 100);
        });
    });

    // Эффект для шапки при скролле
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Параллакс эффект для hero секции
    const heroVideo = document.querySelector('.hero__video-bg');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Анимация счетчиков
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Анимация чисел при появлении
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const finalValue = parseInt(entry.target.textContent);
                if (!isNaN(finalValue)) {
                    animateValue(entry.target, 0, finalValue, 2000);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-animate-number]').forEach(el => {
        numberObserver.observe(el);
    });

    // Эффект частиц при клике (опционально)
    document.addEventListener('click', (e) => {
        // Создаем эффект ripple на кнопках
        if (e.target.classList.contains('btn')) {
            const ripple = document.createElement('span');
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            e.target.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Эффект свечения для карточек при движении мыши
    document.querySelectorAll('.product-card, .admin-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    // ==========================================
    // 13. СТРАНИЦА ОТЕЛЕЙ (HOTELS.HTML)
    // ==========================================
    if (window.location.pathname.includes('hotels.html')) {
        console.log('🏨 Страница отелей загружена');

        const grid = document.getElementById('hotelsGrid');
        if (!grid) {
            console.error('❌ Элемент #hotelsGrid не найден!');
            return;
        }

        // Берём отели из localStorage или используем defaultHotels
        const hotels = JSON.parse(localStorage.getItem('skiResort_hotels')) || defaultHotels;

        console.log('✅ Загружено отелей:', hotels.length);

        // Рендерим карточки
        grid.innerHTML = hotels.map(h => `
            <a href="hotel-booking.html?id=${h.id}" class="product-card" style="animation: fadeInUp 0.5s ease-out;">
                <div class="product-img-wrapper">
                    <img src="${h.img}" alt="${h.title}" onerror="this.src='https://via.placeholder.com/400x400/06b6d4/ffffff?text=Hotel'">
                    ${h.badge ? `<span class="badge badge--hot">${h.badge}</span>` : ''}
                    ${h.oldPrice ? `<span class="badge badge--sale">-${Math.round((1 - h.price / h.oldPrice) * 100)}%</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${h.title}</h3>
                    <p class="product-desc">${h.desc || ''}</p>
                    <div class="product-price" style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:18px;font-weight:800;color:var(--primary);">
                            ${h.price.toLocaleString('ru-RU')} ₽
                        </span>
                        <span style="font-size:12px;font-weight:400;color:var(--text-muted)">/ ночь</span>
                    </div>
                    ${h.oldPrice ? `
                        <div style="font-size:12px;color:var(--text-muted);text-decoration:line-through;margin-bottom:8px;">
                            ${h.oldPrice.toLocaleString('ru-RU')} ₽
                        </div>
                    ` : ''}
                    <button class="btn btn--primary btn--sm btn--full">Подробнее</button>
                </div>
            </a>
        `).join('');
    }
    // ФИНАЛЬНЫЙ ВЫЗОВ КАТАЛОГА
    // ==========================================
    if (window.location.pathname.includes('catalog.html')) {
        // Ждём немного, чтобы гарантировать загрузку DOM
        setTimeout(() => {
            renderCatalog();
            console.log('✅ Каталог отрендерен');
        }, 100);
    }

    console.log('✅ Анимации загружены и работают!');
});