let gameList = document.querySelector("#game-list");
let image = document.querySelector("#detail-image");
let title = document.querySelector("#detail-title");
let highScore = document.querySelector("#detail-high-score");
let newForm = document.querySelector("#high-score-form");
//let newScore = document.querySelector("#score-input");
//let newHighScore = document.querySelector("#detail-high-score");
let currentGame;

fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((games) => {
    games.forEach((games) => {
      addGames(games);
    });
    addDetails(games[0]);
  });

function addGames(games) {
  const gameNameAndManufacturer = document.createElement("h5");
  gameList.append(gameNameAndManufacturer);
  gameNameAndManufacturer.textContent = `${games.name} ${games.manufacturer_name}`;
  gameNameAndManufacturer.addEventListener("click", () => {
    addDetails(games);
  });
}

function addDetails(games) {
  currentGame = games;
  image.src = games.image;
  title.textContent = games.name;
  highScore.textContent = games.high_score;
  currentGames = games;
}

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  highScore.textContent = e.target["score-input"].value;
  e.target.reset(); //this will reset the form to 0 when you toggle to another game
  currentGame.high_score = e.target["score-input"].value;
  // console.log(e.target["score-input"].value);
  //then grab those inputs from the form
  //and them somewhere
  //because we are submitting on the newForm, the newForm will be our target, so when we do e.target we are getting the element target (with the submission infor we need from the form) from the e object that we have available to us whenever we are doing an event
  //when we do e.target it shows you two inputs the submit input and the text input, use the idea of the text input to target it, do that with e.target["score-input"]
  //we then are grabbing the html tag input with the score input id but we need its value, so we add .value

  //newHighScore.textContent = e.target["score-input"].value;
  //currentGames.high_score = e.target["score-input"].value;
});

//bill's correct answer below
/*form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    score.textContent = scoreInput.value;
    currentGame.high_score = scoreInput.value;
    e.target.reset();
  });
  */
