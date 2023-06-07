import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import authRouter from "./routes/auth.route.js"
import routerUsers from "./routes/users.js";
import paymentRouter from "./routes/payment.route.js";
import routerFavs from "./routes/favs.js";
import { connectDB } from './database.js';
import routerAcc from "./routes/accommodation.js";

const app = express();

app.use(cors({
    origin: function(origin, callback){
        // Permitir todas las URLs
        return callback(null, origin);
    },
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", routerUsers);
app.use('/api/auth', authRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/accommodation', routerAcc)
app.use('/api/favourites', routerFavs);

// En caso de usar otra ruta
app.all("*", (req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});

const PORT = process.env.PORT;

connectDB().then(() => {
    const server = app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    });

    server.on("error", (error) => {
        console.log("Error starting Express server: " + error.message);
        process.exit(1);
    });
}).catch((error) => {
    console.error("Error connecting to database: " + error.message);
    process.exit(1);
});