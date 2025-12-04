// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if(query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
});

// Game card click functionality
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
  card.addEventListener('click', () => {
    const gameId = card.dataset.game;
    alert(`Opening ${gameId}...`);
    // Example: window.open(`https://example.com/${gameId}`, '_blank');
  });
});
