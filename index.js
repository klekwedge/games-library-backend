import express from "express";
import cors from "cors";
import * as Controller from './controllers/GamesController.js'

const app = express();

app.use(express.json());
app.use(cors()); 

app.get(
    "/games",
    Controller.getGames
);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server Ok");
});
