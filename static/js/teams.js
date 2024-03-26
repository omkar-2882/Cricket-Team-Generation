const teams = [
    {
        "teamName": "Mumbai Indians",
        "teamID": "MI",
        "imgURL": "../static/assets/ipl-card/mi.png",
        "img2URL": "../static/assets/ipl-cardhover/mi-hardik.png",
    },
    {
        "teamName": "CSK",
        "teamID": "CSK",
        "imgURL": "../static/assets/ipl-card/csk.png",
        "img2URL": "../static/assets/ipl-cardhover/csk-ms.png",
    },
    {
        "teamName": "DELHI",
        "teamID": "DC",
        "imgURL": "../static/assets/ipl-card/dc.png",
        "img2URL": "../static/assets/ipl-cardhover/dc-david.png",
    },
    {
        "teamName": "KKR",
        "teamID": "KKR",
        "imgURL": "../static/assets/ipl-card/kkr.png",
        "img2URL": "../static/assets/ipl-cardhover/kkr-shreyash.png",
    },
    {
        "teamName": "LSG",
        "teamID": "LSG",
        "imgURL": "../static/assets/ipl-card/lsg.png",
        "img2URL": "../static/assets/ipl-cardhover/lsg-kl.png",
    },
    {
        "teamName": "PBKS",
        "teamID": "PBKS",
        "imgURL": "../static/assets/ipl-card/pbks.png",
        "img2URL": "../static/assets/ipl-cardhover/pbks-shikhar.png",
    },
    {
        "teamName": "RCB",
        "teamID": "RCB",
        "imgURL": "../static/assets/ipl-card/rcb.png",
        "img2URL": "../static/assets/ipl-cardhover/rcb-duplesi.png",
    },
    {
        "teamName": "SRH",
        "teamID": "SRH",
        "imgURL": "../static/assets/ipl-card/srh.png",
        "img2URL": "../static/assets/ipl-cardhover/srh-patcummins.png",
    },
    {
        "teamName": "GT",
        "teamID": "GT",
        "imgURL": "../static/assets/ipl-card/gt.png",
        "img2URL": "../static/assets/ipl-cardhover/gt-shubhamangill.png",
    },
    {
        "teamName": "RR",
        "teamID": "RR",
        "imgURL": "../static/assets/ipl-card/rr.png",
        "img2URL": "../static/assets/ipl-cardhover/rr-samson.png",
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
                <div class="myCard" id=${team.teamID}  >
                    <button type="button" class="teamBtn" onClick="handleOnClick('${team.teamID}')">
                        <div class="frontFace">
                            <img src=${team.imgURL} alt="">
                        </div>
                        <div class="backFace">
                            <img src=${team.img2URL} alt="">
                        </div>
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
        const team1Card = document.getElementById(teamID);
        team1Card.style.border = "2px solid red";
        team1Card.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
    }
    else if(team2.length == 0){
        team2 = teamID;
        const team2Input = document.getElementById("selectedTeam2");
        team2Input.setAttribute('value', team2);
        const team2Card = document.getElementById(teamID);
        team2Card.style.border = "2px solid red";
        team2Card.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
    }
    console.log(team1);
    console.log(team2);
}

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleReset = () => {
    const team1Card = document.getElementById(team1);
    team1Card.style.border = "none";
    team1Card.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    team1 = "";

    const team2Card = document.getElementById(team2);
    team2Card.style.border = "none";
    team2Card.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    team2 = "";
}



window.addEventListener("load", () => {
    buildTeamSection(teams);
});


