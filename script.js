document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');

    console.log('DOMContentLoaded disparado.');
    console.log('loaderWrapper encontrado:', loaderWrapper);

    if (loaderWrapper) {
        setTimeout(function() {
            console.log('Adicionando a classe loader-hidden...');
            loaderWrapper.classList.add('loader-hidden');

            loaderWrapper.addEventListener('transitionend', function() {
                console.log('Transição do loader finalizada. Removendo elemento.');
                if (loaderWrapper.parentNode) {
                    loaderWrapper.parentNode.removeChild(loaderWrapper);
                }
            }, { once: true });
        }, 1000); // 1 segundo de atraso
    } else {
        console.warn('Elemento #loader-wrapper não encontrado no DOM. Verifique o ID no HTML.');
    }
});

