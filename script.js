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
    const accordionItem = document.querySelectorAll('.accordion-item h3');
    accordionItem.forEach(item => {
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

const openModal = (src) => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
}

const closeModal = () => {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#pricing').scrollIntoView({
        behavior: 'smooth'
    });
});
</script>
