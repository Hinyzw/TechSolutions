const botoesComprar = document.querySelectorAll('.comprar-btn');

botoesComprar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const produto = botao.getAttribute('data-produto');
        alert(`Você comprou ${produto}!`);
    });
});
