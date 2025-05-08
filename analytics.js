// Rastreia cliques em links externos
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', function() {
    console.log('Clique registrado:', this.href);
    // Adicione aqui integração com Google Analytics
  });
});

// Monitora tempo de sessão
let startTime = new Date();
window.addEventListener('beforeunload', () => {
  let sessionDuration = Math.round((new Date() - startTime) / 1000);
  console.log('Tempo na página:', sessionDuration + 's');
});