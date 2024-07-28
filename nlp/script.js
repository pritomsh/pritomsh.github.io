// Toggle sidebar for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const navToggle = document.getElementById('navToggle');

    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Toggle submenu
    const submenuToggles = document.querySelectorAll('.submenu > a');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const subnav = toggle.nextElementSibling;
            if (subnav.classList.contains('show')) {
                subnav.classList.remove('show');
            } else {
                document.querySelectorAll('.subnav').forEach(sub => sub.classList.remove('show'));
                subnav.classList.add('show');
            }
        });
    });
});
