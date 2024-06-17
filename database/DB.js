import pg from "pg";
const {Pool} = pg;
import "dotenv/config";

const database = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    max: 20,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000,
});

const connectionDB = async () => {
    try{
        await database.query("SELECT NOW()");
        console.log("DB CONNECTED");
    } catch(error){
        console.log("DB ERROR")
    }
    
};

export default connectionDB;