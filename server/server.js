const express = require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const Connection = require('./database/db.js');
const Routes = require('./Router/Route.js');

dotenv.config({path:'.env'});
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const PORT=process.env.PORT||8080
const app = express();


Connection(username,password)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('tiny'));


app.use('/',Routes)



app.listen(PORT,()=>{
    console.log(`Server runnin on http://localhost:${PORT}`);
})