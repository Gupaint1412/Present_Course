document.addEventListener('DOMContentLoaded', () => {
    const menuToggleButton = document.querySelector('.menu-toggle-btn');
    const navbar = document.querySelector('.navbar');

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            // สลับคลาส 'menu-open' เพื่อเปิด/ปิดเมนู
            navbar.classList.toggle('menu-open');
            
            // สลับไอคอนจาก Hamburger เป็น X หรือกลับกัน (ถ้าใช้ Font Awesome)
            const icon = menuToggleButton.querySelector('i');
            if (navbar.classList.contains('menu-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // 'fa-times' คือรูปกากบาท (X)
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});