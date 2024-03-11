const teams = [
    {
        "teamName": "Mumbai Indians",
        "teamID": "MI",
        "imgURL": "../assets/ipl-card/mi.png"
    },
    {
        "teamName": "CSK",
        "teamID": "CSK",
        "imgURL": "../assets/ipl-card/csk.png"
    },
    {
        "teamName": "DELHI",
        "teamID": "DC",
        "imgURL": "../assets/ipl-card/dc.png"
    },
    {
        "teamName": "KKR",
        "teamID": "KKR",
        "imgURL": "../assets/ipl-card/kkr.png"
    },
    {
        "teamName": "LSG",
        "teamID": "LSG",
        "imgURL": "../assets/ipl-card/lsg.png"
    },
    {
        "teamName": "PBKS",
        "teamID": "PBKS",
        "imgURL": "../assets/ipl-card/pbks.png"
    },
    {
        "teamName": "RCB",
        "teamID": "RCB",
        "imgURL": "../assets/ipl-card/rcb.png"
    },
    {
        "teamName": "SRH",
        "teamID": "SRH",
        "imgURL": "../assets/ipl-card/srh.png"
    },
    {
        "teamName": "GT",
        "teamID": "GT",
        "imgURL": "../assets/ipl-card/gt.png"
    },
    {
        "teamName": "RR",
        "teamID": "RR",
        "imgURL": "../assets/ipl-card/rr.png"
    }
]

let team1 = "";
let team2 = "";

// const form = document.getElementById("myForm");
// form.

function buildTeamSection(teams) {
    const teamCont = document.getElementById("teamDiv");

    const teamImgHtml = teams.map((team) => {
        return `
            <div class="card-wrapper">
                <div class="myCard">
                    <button type="button" id=${team.teamID} class="teamBtn" onClick="handleOnClick('${team.teamID}')"}>
                        <img src=${team.imgURL} alt="">
                    </button>
                </div>
            </div>
        `;
    })
    .join(" ");

    const div = document.createElement("div");
    div.className = "cards";
    div.innerHTML = teamImgHtml;
    teamCont.append(div);
}

const handleOnClick = (teamID) => {
    if(team1.length == 0){
        team1 = teamID;
        const team1Input = document.getElementById("selectedTeam1");
        team1Input.setAttribute('value', team1);
    }
    else{
        team2 = teamID;
        const team2Input = document.getElementById("selectedTeam2");
        team2Input.setAttribute('value', team2);
    }
    console.log(team1);
    console.log(team2);
}

const handleSubmit = (e) => {
    e.preventDefault();
}



window.addEventListener("load", () => {
    buildTeamSection(teams);
});


