fetch('games.json')
    .then(response => response.json())
    .then(data => {
        const gamesList = document.getElementById('games-list');
        
        if (data.games && data.games.length > 0) {
            data.games.forEach(game => {
                const gameElement = document.createElement('div');
                gameElement.className = 'game-card';
                gameElement.innerHTML = `<h3>${game.name}</h3><p>${game.description}</p>`;
                gamesList.appendChild(gameElement);
            });
        } else {
            gamesList.innerHTML = '<p class="no-games">No games right now.</p>';
        }
    })
    .catch(error => {
        console.log('No games.json found yet');
        document.getElementById('games-list').innerHTML = '<p class="no-games">No games right now.</p>';
    });
