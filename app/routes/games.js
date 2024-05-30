     const gamesRouter = require("express").Router(); 
     const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
     const { getAllGames, updateGamesFile,updateGamesArray,checkIsTitleInArray, findGameById } = require("../middlewares/games");
     
     gamesRouter.get("/games", getAllGames, sendAllGames);
     gamesRouter.delete("/games/:id", getAllGames, deleteGame, findGameById, updateGamesFile, sendUpdatedGames );
     gamesRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesFile, updateGamesArray, sendUpdatedGames);
     
     module.exports = gamesRouter;
     