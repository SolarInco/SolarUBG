const homepage = document.getElementById('homepage');
const loading = document.getElementById('loading');
const games = document.getElementById('games');
const startText = document.querySelector('.start-text');

startText.addEventListener('click', () => {
    homepage.classList.add('hidden');
    loading.classList.remove('hidden');
    
    setTimeout(() => {
        loading.classList.add('hidden');
        games.classList.remove('hidden');
    }, 2500);
});

startText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startText.click();
    }
});