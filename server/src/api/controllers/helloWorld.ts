import express from "express";

export function helloWorld(req: express.Request, res: express.Response) {
    return res.send("Hello World from API");
}
