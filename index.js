import express from "express"
import con from "./db.js";

const app = express();
const PORT = 3000

app.use(express.json());

app.get("/currentWeekLeaderboard", async (req, res) => {
    try {
        const currentDate = new Date();
        const data = await con.query(`SELECT * FROM scoreData WHERE DATEDIFF(Date('${currentDate.toISOString()}'), Date(timeStamp)) < 7 order by score DESC LIMIT 200`)
        
        res.send(data[0]);
    }
    catch (err) {
        console.log("error: ", err);
        res.send(err);
    }
})


app.post("/lastWeekLeaderboard", async (req, res) => {
    try {
        const currentDate = new Date();
        const data = await con.query(`SELECT * FROM scoreData WHERE DATEDIFF(Date('${currentDate.toISOString()}'), Date(timeStamp)) >= 7 AND DATEDIFF(Date('${currentDate.toISOString()}'), Date(timeStamp)) < 14 AND CountryCode = "${req.body.CountryCode}" ORDER BY score DESC LIMIT 200`)
        res.send(data[0]);
    }
    catch (err) {
        console.log("error: ", err);
        res.send(err);
    }
})



app.post("/rank", async (req, res) => {
    try{
        const data = await con.query(`SELECT COUNT(*) + 1 AS user_rank FROM scoreData WHERE Score > (SELECT Score FROM scoreData WHERE UID = ${req.body.UID})`)
        
        
        res.send(data[0]);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})




app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server running at ${PORT}`);
    }
    else console.log(err);
})