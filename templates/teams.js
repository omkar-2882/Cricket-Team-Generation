const teams = [
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    },
    {
        "teamName": "MI",
        "teamsID": 1,
        "imgURL": ""
    }
]


function buildTeamSection(teams) {
    const teamCont = document.getElementById("teamDiv");

    const teamImgHtml = teams.map((team) => {
        return `
            <div class="myCard">
                <img src=${team.img} alt="">
                <p>${team.teamName}</p>
            </div>
        `;
    })
    .join(" ");

    // const cards = `
    //     <div class="cards">
    //         ${teamImgHtml}
    //     </div>
    // `;

    const div = document.createElement("div");
    div.className = "cards";
    div.innerHTML = teamImgHtml;
    teamCont.append(div);
}

window.addEventListener("load", () => {
    buildTeamSection(teams);
});


