//Função para que seja mostrado a hora local da máquina no site
function hour(){
    let dataAtual = new Date();
    document.getElementById("data-publi").innerHTML = dataAtual.toDateString();
}

//Função para que o site seja interativo, clicando nos Conteúdos e indo diretamente a eles.
document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll('.conteudos');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 
            
            if (targetElement) {
                
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


