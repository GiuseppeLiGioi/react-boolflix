require ("dotenv").config(); //serve per caricare il file .env 
const express = require ('express');
const app = express();

const cors = require ('cors');
const port = 3000;


app.use(cors({
origin: process.env.URL
}));


app.use(express.static('public'));

app.use(express.json());




app.listen(port, () => {
    console.log("server in ascolto sulla porta" + port);
})