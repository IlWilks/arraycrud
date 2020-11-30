console.log("script.js loaded");

let player1 = {name: "Jankos", team: "G2", position: "Jungler" }
let player2 = {name: "Perkz", team: "Cloud9", position: "Mid Laner" }

let state = {
  headerText: 'Hall of Fame',
  players: [player1, player2],
  sortBy: "name",
};

const addPlayer = () => {
  console.log("add a player");
  let name = prompt("Player Name:");
  let team = prompt("Player Team:");
  let position = prompt("Player Position:");
  let newPlayer = {name: name, team: team, position: position};
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

const renderPlayers = () => {
  // dostuff
  let htmlString = `<div class='list'>`;
  // loop over user add each user to htmlstring
  state.players.forEach((person, index) => {
    //do stuff
    htmlString += `<div class='person'>
                    <div onclick='updatePlayer(${index})'>${index+1}). ${person.name} Team:${person.team} Position:${person.position}</div>
                    <button onclick='removePlayer(${index})'>delete</button>
                   </div>`;
  });
  htmlString += `</div>`;
  return htmlString;
};
const render = () => {
  console.log("render called");
  let root = document.getElementById("root");
  let htmlString = `<h1>${state.headerText}</h1><br/>`;
  htmlString += `<button id='add' onclick='addPlayer()'>Add Player</button>`;
  htmlString += renderPlayers();
  root.innerHTML = htmlString;
};

render();