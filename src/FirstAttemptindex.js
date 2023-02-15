let gameList = document.querySelector("#game-list");

fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((games) => {
    addGames(games);
  });

function addGames(games) {
    games.forEach(game => {
  const gameNameAndManufacturer = document.createElement("h5");
  gameNameAndManufacturer.textContent =
    game.name + " (" + game.manufacturer_name + ")";
  gameList.append(gameNameAndManufacturer);
  gameNameAndManufacturer.addEventListener("click", () => {
    renderDetails(games);
  });
}

function renderDetails(games) {}

/*let section = document.querySelector("#game-details");
let image = document.querySelector("#detail-image");
let title = document.querySelector("#detail-title");
let highScore = document.querySelector("#detail-highscore");*/

/*function addFirstGameDetails(games) {
  image.src = games.image;
  img.append(image);
  title.textContent = games.name;
  h2.append(title);
  highScore.textContent = games.high_score;
  h3.append(highScore);
}*/

/*function addFirstGameDetails(games) {
  const firstNameImage = document.querySelector("#detail-image");
  firstGameImage.src = games.image;
  const firstGameName = document.querySelector("#detail-title");
  firstGameName.textContent = games.name;
  const firstGameHighScore = querySelector("detail-highscore");
  firstGameHighScore.textContent = games.high_score;
  section.append(firstGameImage, firstGameName, firstGameHighScore);
}*/

/*function 
firstGameImage.src = game.image;
const firstGameName = document.createElement("p");
firstGameName.textContent = game.name;
const firstGameHighScore = document.createElement("p");
firstGameHighScore.textContent = game.high_score;
section.append(firstGameImage, firstGameName, firstGameHighScore);*/
