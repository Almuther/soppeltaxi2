document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle (قائمة الجوال)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // تغيير أيقونة القائمة بين البرجر و X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            }
        });
    }

    // 2. Sticky Header Effect (تأثير الهيدر عند التمرير)
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg', 'bg-brand-bg/95');
                header.classList.remove('bg-brand-bg/80');
            } else {
                header.classList.remove('shadow-lg', 'bg-brand-bg/95');
                header.classList.add('bg-brand-bg/80');
            }
        });
    }

    // 3. FAQ Accordion (الأسئلة الشائعة)
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // إغلاق باقي الأسئلة
            document.querySelectorAll('.faq-content').forEach(item => {
                if(item !== content) {
                    item.classList.add('hidden');
                    const prevIcon = item.previousElementSibling ? item.previousElementSibling.querySelector('i') : null;
                    if(prevIcon) prevIcon.style.transform = 'rotate(0deg)';
                }
            });

            // فتح أو إغلاق السؤال الحالي
            if (content) {
                content.classList.toggle('hidden');
                if (icon) {
                    icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            }
        });
    });

});