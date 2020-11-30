console.log("script.js loaded");

let player1 = {name: "Jankos", team: "G2", position: "Jungler", picture: `<img src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c8/G2_Jankos_2020_WC.png/revision/latest?cb=20201003064135" width="300">`}
let player2 = {name: "Perkz", team: "Cloud9", position: "Mid Laner", picture: `<img src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f3/G2_Perkz_2020_WC.png/revision/latest?cb=20201003064142" width="300">` }

let state = {
  headerText: 'League of Legends Hall of Fame',
  players: [player1, player2],
  sortBy: "name",
};

const addPlayer = () => {
  console.log("add a player");
  let name = prompt("Player Name:");
  let team = prompt("Player Team:");
  let position = prompt("Player Position:");
  let picture = prompt("Player Picture url:");
  let newPlayer = {name: name, team: team, position: position, picture: `<img src=${picture} Width="300"`};
  state.players.push(newPlayer);
  render();
};

const removePlayer = (index) => {
  console.log(index);
  console.log("deletin");
  const filteredPlayer = state.players.filter((player, currentindex) => {
    return currentindex !== index;
  });
  state.players = filteredPlayer;
  render();
};

const updatePlayer = (index) => {
  console.log("update player clicked");
  console.log(index);
  let name = prompt("Enter new name");
  let team = prompt("Enter new team");
  let position = prompt("Enter new position");
  state.players[index].name = name;
  state.players[index].team = team;
  state.players[index].position = position;
  render();
};

const updatePicture = (index) => {
  console.log("Picture update");
  console.log(index);
  let url = prompt("Enter picture url");
  state.players[index].picture = `<img src="${url}" width="300">`;
  render();
};

const renderPlayers = () => {
  // dostuff
  let htmlString = `<div class='list'>`;
  // loop over user add each user to htmlstring
  state.players.forEach((person, index) => {
    //do stuff
    htmlString += `<div class='person'>
                    <div onclick='updatePlayer(${index})'>${index+1}). ${person.name} Team:${person.team} Position:${person.position}</div>
                    <div onclick='updatePicture(${index})'>${person.picture}</div>
                    <button onclick='removePlayer(${index})'>Delete</button>
                   </div>`;
  });
  htmlString += `</div>`;
  return htmlString;
};
const render = () => {
  console.log("render called");
  let root = document.getElementById("root");
  let htmlString = `<h1 class="header">${state.headerText}</h1><br/>`;
  htmlString += `<button id='add' onclick='addPlayer()'>Add Player</button>`;
  htmlString += renderPlayers();
  root.innerHTML = htmlString;
};

render();