import axios from "axios";
import { Router } from "express";

const marvelRoutes = Router();

marvelRoutes.get("/characters", async (req, res) => {
    const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?limit=25&ts=1627477497&apikey=e727c9747111b13e942697e461e47a93&hash=8c04fa1fdae445d5e184376ceebd65a2`
    );

    return res.json(response.data.data.results);
});

marvelRoutes.get("/characters/:name", async (req, res) => {
    const { name } = req.params;

    const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1627477497&apikey=e727c9747111b13e942697e461e47a93&hash=8c04fa1fdae445d5e184376ceebd65a2`
    );

    return res.json(response.data.data.results);
});

marvelRoutes.get("/comics/:title", async (req, res) => {
    const { title } = req.params;

    const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${title}&ts=1627477497&apikey=e727c9747111b13e942697e461e47a93&hash=8c04fa1fdae445d5e184376ceebd65a2`
    );

    return res.json(response.data.data.results);
});

export { marvelRoutes };
