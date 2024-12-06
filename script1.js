// Seleciona todos os elementos com a classe "elemento"
const elementos = document.querySelectorAll('.elemento');

// Função para verificar se os elementos estão na área visível
function verificarVisibilidade() {
    elementos.forEach((elemento) => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        const posicaoTela = window.innerHeight;

        // Verifica se o elemento está visível na tela
        if (posicaoElemento < posicaoTela && posicaoElemento > 0) {
            // Adiciona a classe 'in-view' quando o elemento está visível
            elemento.classList.add('in-view');
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', verificarVisibilidade);

// Chama a função assim que a página for carregada para garantir que a visibilidade seja verificada imediatamente
verificarVisibilidade();


