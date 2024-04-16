// Substitua 'SUA_CHAVE_AQUI' pela chave de API gerada no Google Cloud Console
const apiKey = 'SUA_CHAVE_AQUI';

// Substitua 'SEU_PLACE_ID_AQUI' pelo Place ID do seu perfil no Google Meu Neg�cio
const placeId = 'SEU_PLACE_ID_AQUI';

const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

// Fun��o para carregar as avalia��es
function loadAvaliacoes() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const avaliacoes = data.result.reviews;
            const avaliacoesDiv = document.getElementById('avaliacoes');

            avaliacoes.forEach(avaliacao => {
                const reviewDiv = document.createElement('div');
                reviewDiv.innerHTML = `
                        <p>Nome: ${avaliacao.author_name}</p>
                        <p>Avalia��o: ${avaliacao.rating} estrelas</p>
                        <p>Coment�rio: ${avaliacao.text}</p>
                    `;
                avaliacoesDiv.appendChild(reviewDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar avalia��es:', error);
        });
}

// Carrega as avalia��es quando a p�gina estiver pronta
document.addEventListener('DOMContentLoaded', loadAvaliacoes);
