function searchGames() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Filter and display results
  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchInput);
    const matchesCategory = categoryFilter === "All" || game.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (filteredGames.length === 0) {
    resultsContainer.innerHTML = "<p>We <mark>couldn't locate  any game</mark> that fit your criteria. You can also try other games</p>";
  } else {
    filteredGames.forEach(game => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("result-item");
      gameElement.innerHTML = `
      <div class="card-data">
          
          <div class="container-result">
        <h3>${game.name}</h3>
        <p><strong>Description:</strong> ${game.description}</p>
        <p><strong>How to Play:</strong> ${game.howToPlay}</p>
        <p class="time">Just now</p>
        </div>
      </div>
`;
      resultsContainer.appendChild(gameElement);
    });
  }
}
