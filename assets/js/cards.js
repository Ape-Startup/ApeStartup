document.querySelectorAll('.btnIcon').forEach(icon => {
    icon.addEventListener('click', function () {
        const card = icon.closest('.card'); // Encontra o card pai do ícone clicado
        const cardVerso = card.querySelector('.cardVerso'); // Encontra o card verso dentro do card pai

        if (icon.classList.contains('fa-arrow-right')) {
            cardVerso.classList.add('open'); // Abre o card verso correspondente
        } else if (icon.classList.contains('fa-arrow-left')) {
            cardVerso.classList.remove('open'); // Fecha o card verso correspondente
        }
    });
});