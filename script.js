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

    function adjustHeroImage() {
        const hero = document.getElementById('hero');
        const img = hero.querySelector('.hero-image');
        const windowRatio = window.innerWidth / window.innerHeight;
        const imgRatio = img.naturalWidth / img.naturalHeight;
    
        if (windowRatio > imgRatio) {
            img.style.width = '100%';
            img.style.height = 'auto';
        } else {
            img.style.width = 'auto';
            img.style.height = '100%';
        }
    }
    
    window.addEventListener('load', adjustHeroImage);
    window.addEventListener('resize', adjustHeroImage);

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

const openModal = (imgSrc) => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

const closeModal = () => {
    document.getElementById('imageModal').style.display = "none";
}