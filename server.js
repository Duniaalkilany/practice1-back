const express=require('express');
const cors = require('cors');
const axios=require('axios')
const mongoose= require('mongoose');
const app =express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
//define port
const PORT=process.env.PORT;
//connect mongoose

mongoose.connect('mongodb://localhost:27017/drinks',
                    {useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongodb is connected!');
});


//require functions

const apiData =require ('./controllers/ApiData.controller')
const {createFavDrink,getFavDrink,deleteFav,updateFav}=require('./controllers/curd.controller')


//endpoints

app.get('/',(req,res)=>
    {res.send('hello from BACK END')
});


app.get('/apiData',apiData);


//curd endpoints //make model 
app.post('/favourite',createFavDrink)
app.get('/favourite',getFavDrink)
app.delete('/favourite/:id',deleteFav)
app.put('/favourite/:id',updateFav)


app.listen(PORT,()=>
console.log(`running on port ${PORT}`)
)