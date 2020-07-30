import * as express from "express";
import gamesRouter from './routes/games'
const morgan = require('morgan')
import {createConnection} from "typeorm";


const app = express();

app.use(morgan('tiny'))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use('/games', gamesRouter)


createConnection().then(connection => {
    // here you can start to work with your entities
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log(`Server is running in http://localhost:${PORT}`)
    })

}).catch(error => console.log(error));



