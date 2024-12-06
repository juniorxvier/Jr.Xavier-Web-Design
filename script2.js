// Detecta o scroll da página
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;

    // Quando o footer estiver visível na tela
    if (footerPosition <= window.innerHeight) {
      footer.classList.add('footer-visible');
    } else {
      footer.classList.remove('footer-visible');
    }
  });