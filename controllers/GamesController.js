import { configDotenv } from "dotenv";
import axios from "axios";
configDotenv();

export const getGames = async (req, res) => {
    try {
        const API_KEY = process.env.API_KEY;
        let basicUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=${API_KEY}`;
        basicUrl += req.body.genre ? `&category=${genre}` : ''
        basicUrl += req.body.platform ? `&platform=${platform}` : ''
        basicUrl += req.body.sort ? `&sort-by=${sort}` : ''

        const response = await axios.get(basicUrl);

        res.json(response.data);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Не удалось получить игры",
        });
    }
};
