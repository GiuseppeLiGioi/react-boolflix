require ("dotenv").config(); //serve per caricare il file .env 
const express = require ('express');
const app = express();

const cors = require ('cors');
const port = 3000;


app.use(cors({
origin: "http://localhost:5173"
}));


app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})


app.listen(port, () => {
    console.log("server in ascolto sulla porta" + port);
})