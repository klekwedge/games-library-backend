import { configDotenv } from "dotenv";
import axios from "axios";
configDotenv();

export const getGames = async (req, res) => {
    try {
        const API_KEY = process.env.API_KEY;
        let basicUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=${API_KEY}`;
        basicUrl += req.query.genre ? `&category=${req.query.genre}` : ''
        basicUrl += req.query.platform ? `&platform=${req.query.platform}` : ''
        basicUrl += req.query.sort ? `&sort-by=${req.query.sort}` : ''

        const response = await axios.get(basicUrl);

        res.json(response.data);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Не удалось получить игры",
        });
    }
};

export const getGame = async (req, res) => {
    try {
        const API_KEY = process.env.API_KEY;
        const basicUrl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${req.query.id}&rapidapi-key=${API_KEY}`;

        const response = await axios.get(basicUrl);

        res.json(response.data);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Не удалось получить игры",
        });
    }
};