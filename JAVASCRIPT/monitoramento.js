const toggleButton = document.getElementById('toggleNavBar');
const navBarContent = document.getElementById('navbarContent');

toggleButton.addEventListener('click', function () {
    if (navBarContent.style.display === 'none') {
        navBarContent.style.display = 'block';
    } else {
        navBarContent.style.display = 'none';
    }
});