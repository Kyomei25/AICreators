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

let scrollPosition = 0;

const scrollGallery = (direction) => {
    const gallery = document.getElementById('scrollGallery');
    const galleryWidth = gallery.offsetWidth;
    const maxScroll = gallery.scrollWidth - galleryWidth;
    const scrollAmount = galleryWidth / 3 * direction;

    scrollPosition = Math.max(0, Math.min(maxScroll, scrollPosition + scrollAmount));
    gallery.style.transform = `translateX(-${scrollPosition}px)`;
}
