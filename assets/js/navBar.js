// Função para mostrar/ocultar o menu hamburguer
function menuShow() {
    var navbarGroup = document.querySelector('.navbarGroup');
    navbarGroup.classList.toggle('active');
}

// Função para fechar o menu hamburguer se clicar fora dele
document.addEventListener('click', function(event) {
    var menuBtn = document.querySelector('.menuBtn');
    var navbarGroup = document.querySelector('.navbarGroup');
    var isClickInsideMenuBtn = menuBtn.contains(event.target);
    var isClickInsideNavbarGroup = navbarGroup.contains(event.target);

    if (!isClickInsideMenuBtn && !isClickInsideNavbarGroup) {
        navbarGroup.classList.remove('active');
    }
});