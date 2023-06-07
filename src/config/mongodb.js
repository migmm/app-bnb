import * as dotenv from "dotenv";
dotenv.config();

const config = {
    origin:process.env.ORIGIN1,
    origin2:process.env.ORIGIN2,
    port: process.env.MONGODB_PORT,
    mongoURI: process.env.MONGODB_URI,
    googleClientId: process.env.CLIENT_ID,
    googleClientSecret: process.env.CLIENT_SECRET,
    googleRedirectUri: process.env.CLIENT_URL,
    accessTokenMercadoPago: process.env.ACCESS_TOKEN
};
export default config;