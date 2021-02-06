const db = require('../models/index')
const Inventory = require('../models/Inventory');
const Order = require ('../models/Order')
const Basket = require('../models/Basket')
const User = require('../models/User')

var faker = require('faker');
let seeded = false; 
module.exports = {
    index,
    addToBasket,
    
    // addToBasket
  };
/**
 * every time server r/s
 * search the collection for baskets if there is one dont make another one
 * have to handle the basket for every user
 * erase basket when user donea
 * 
 */



function index(req, res,next) {
    
    console.log("INDEX FUNCTION OF THE MARKETPLACE JS CONTROLLER")
    Inventory.find({}, function(err, inventory ) {
                     if(err) return console.log(err)
                     
                     
                    
                     User.findById(req.user._id).populate('basket').exec(function(err, foundUser){
                        // console.log("Found User in addbasket:" , foundUser)
                       if(err) return console.log(err)
                       
                       foundUser.save()
                       
    if(seeded===false){
         seed();}
         res.render('user/marketplace', { inventory,foundUser});
    })
    });
    
}



/**TODO
 * basket is creating over and over and over
 * 
 */

  function addToBasket(req,res){
    //   console.log("req.user" , req.user)
     Inventory.find({}, function(err, inventory ) {
         if(err) return console.log(err)
         User.findById(req.user._id).populate('basket').exec(function(err, foundUser){
            //  console.log("Found User in addbasket:" , foundUser)
            if(err) return console.log(err)
            foundUser.basket.push(req.body.itemID)

            foundUser.save()
            
            res.render('user/marketplace', {inventory, foundUser});
           })
     })
  }



 



  function renderBasket(req,res){
    console.log(req.body)

  
}



  const seed = function(){
      
      let invent;
      

    for(let i = 0;i<10;i++){

       invent = new Inventory()
        invent.price = faker.random.number(150)
        invent.quantity = faker.random.number(50)
        invent.name = faker.commerce.productName()
        invent.description = faker.commerce.productDescription()
        // console.log(invent)
  

       
        Inventory.create(invent, function(err, result) {
            if (err) {
              console.log(err)
            } else {
             
            }
          });
        
    }
    
  seeded=true;
   
  }


  const  clear = function(){
    
    Inventory.deleteMany(function(err, p){
        if(err){ 
            throw err;
        } else{
            console.log("cleared");
        }
    });
  }