function fetchPlayers() {
    // Make an API call to fetch player data
    fetch('/get_players_data')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Get the container element
            const container = document.getElementById('playersContainer');
            const topDiv = document.createElement('div');
            topDiv.className = "topImage"
            const bottomDiv = document.createElement('div');
            bottomDiv.className = "bottomImage"
            container.appendChild(topDiv)
            container.appendChild(bottomDiv)

            // Iterate through the player data and create HTML elements
            data.forEach((player, index) => {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                
                const imgCont = document.createElement('div');
                imgCont.className = 'imgCont';

                const img = document.createElement('img');
                // const link = "Players Link";
                img.src = player.Players_Link;
                img.alt = player.Player; 
                imgCont.appendChild(img);
                playerDiv.appendChild(imgCont);
                
                const playerName = document.createElement('div');
                playerName.className = 'playerName';

                const p = document.createElement('p');
                p.textContent = player.Player; 
                playerName.appendChild(p);
                playerDiv.appendChild(playerName);

                if(index == 0){
                    topDiv.appendChild(playerDiv);
                }
                else{
                    bottomDiv.appendChild(playerDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching player data:', error));
}

window.addEventListener("load", () => {
    fetchPlayers();
});

