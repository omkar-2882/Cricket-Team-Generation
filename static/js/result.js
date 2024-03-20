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
                // console.log(player)
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player p-tooltip';

                let roleText = player.Role;
                let batSR = Math.round(player.next_SR);
                let wkts = player.next_wkts;
                let fours = player.fours_Scored;
                let sixes = player.six_Scored;
                let runs_given = player.next_runs_given;
                const tooltipText = `
                    <div id="" class="p-tooltiptext card">
                        <div class="card-header">
                            <h3 class="">${roleText}</h3>
                        </div>
                        <div class="card-body">
                            <div class="row row-cols-2">
                                <div class="col">S/R: ${batSR}</div>
                                <div class="col">Runs Given: ${runs_given}</div>
                                <div class="col">Wickets: ${wkts}</div>
                            </div>
                        </div>
                    </div>`
                
                playerDiv.innerHTML = tooltipText;

                // if (player.Role == "Batsman")
                //     popBtn.setAttribute("data-content", player.next_SR);
                // else
                //     popBtn.setAttribute("data-content", player.next_wkts);

                const imgCont = document.createElement('div');
                imgCont.className = 'imgCont';

                const img = document.createElement('img');
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

                // playerDiv.appendChild(popBtn);

                if (index == 0) {
                    topDiv.appendChild(playerDiv);
                }
                else {
                    bottomDiv.appendChild(playerDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching player data:', error));
}

window.addEventListener("load", () => {
    fetchPlayers();
});

