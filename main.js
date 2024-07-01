document.addEventListener("DOMContentLoaded", function() {
    const containerProject = document.querySelector('.container-project');

    function getApiGitHub() {
    fetch('https://api.github.com/users/jeanbressan/repos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os projetos do GitHub');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(repo => {
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.target = '_blank'; // Abre o link em uma nova aba

                const cardProject = document.createElement('div');
                cardProject.classList.add('card-project');

                const projectName = document.createElement('h3');
                projectName.textContent = repo.name;

                const projectDescription = document.createElement('div');
                projectDescription.classList.add('content-project');
                const description = document.createElement('p');
                description.textContent = repo.description || 'Sem descrição disponível';
                projectDescription.appendChild(description);

                cardProject.appendChild(projectName);
                cardProject.appendChild(projectDescription);

                link.appendChild(cardProject);
                containerProject.appendChild(link);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os projetos do GitHub:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Não foi possível carregar os projetos do GitHub.';
            containerProject.appendChild(errorMessage);
        });
    }

    getApiGitHub();

    // Função para exibir a hora local da máquina no site
    function displayCurrentDate() {
        const dataAtual = new Date();
        const dia = dataAtual.getDate().toString().padStart(2, '0');
        const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataAtual.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        document.getElementById("data-site").textContent = dataFormatada;
    }

    displayCurrentDate();

    const links = document.querySelectorAll('.conteudos a');
    
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
