document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションのスムーススクロール
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    

    // ハンバーガーメニューの動作
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menu-toggle');
        const navList = document.getElementById('nav-list');
        const body = document.body;
    
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    });

    // アコーディオンの動作
    const accordionItems = document.querySelectorAll('.accordion-item h3');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // スクロールに応じてナビゲーションバーを固定
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('imageCarousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// オプション: 自動スライド
setInterval(() => moveCarousel(1), 5000);

// モーダル機能を維持する場合
items.forEach(item => {
    item.addEventListener('click', function() {
        openModal(this.src);
    });
});