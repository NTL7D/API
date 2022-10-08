import express from "express";
import cors from "cors";
import router from "./api/router";

const main = async () => {
    const app = express();
    require("dotenv").config();
    const port = process.env.PORT || 5001;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", router);

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

main().catch((error) => {
    console.log(error);
});
