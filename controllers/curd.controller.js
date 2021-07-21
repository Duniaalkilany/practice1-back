//create,read,update,delete

const DrinksModel=require('../models/mongoose.model')

const createFavDrink =(req,res)=>{
    const{id,name,img}=req.body
    DrinksModel.find({id:id},(error,data)=>{
        if(data.length>0){
            res.send('already exist')
        }else{
            const newDrinksModel= new DrinksModel({
                id:id,
                name:name,
                img:img,
            })
            newDrinksModel.save()
            res.send(newDrinksModel)

        }
    }
    
    
    
    )
}

/*===========================================grt(read) fav===============================================*/
const getFavDrink=(req,res)=>{
    DrinksModel.find({},(error,data)=>
    {
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}
/*---------------------------------------------------delete----------------------------------------------*/


const deleteFav=(req,res)=>{
     const id=req.params.id;
     DrinksModel.deleteOne({id:id},(error,data)=>{
         if(error){
             res.send(error.message)
         }else{
             res.send(data)
         }
     }
     )
}
/*=========================================update======================================*/

const updateFav=(req,res)=>{
   const updateId=req.params.id;
   const{name,img}=req.body
   DrinksModel.findOne({id:updateId},(error,data)=>{
       if(error){
           res.send(error.message)
       }else{
           data.name=name;
           data.img=img;
           data.save();
           res.send(data)
       }
   }


   )
}



module.exports={createFavDrink,getFavDrink,deleteFav,updateFav}