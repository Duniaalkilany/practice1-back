const mongoose=require ('mongoose');
const Schema=mongoose.Schema;

//when you make new Schema data inside = data send from api (name, id,img )(same names as you send or use in front end when you use un main and send to maincard)
const DrinksSchema= new Schema({
    id:{
type:Number,
unique:true,

    },
    name:{type:String

    },
    img:{
        type:String
    }
})

// This creates our model from the above schema, using mongoose's model method
//name of schema and my model is caspital 
const DrinksModel=mongoose.model('favdrinks',DrinksSchema)
// Export the Article model
module.exports=DrinksModel