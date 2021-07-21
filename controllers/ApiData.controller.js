const axios=require('axios');
require('dotenv').config();

const apiData=(req,res)=>{
axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(response=>{res.send(response.data.drinks)}).catch(error=>res.send(error.message))
}

module.exports=apiData