const db = require('../models/index')
const Inventory = require('../models/Inventory');
const Order = require ('../models/Order')
const Basket = require('../models/Basket')

var faker = require('faker');
let seeded = false; 
module.exports = {
    index,
    // addToBasket
  };
/**
 * every time server r/s
 * search the collection for baskets if there is one dont make another one
 * have to handle the basket for every user
 * erase basket when user done
 * 
 */



function index(req, res,next) {

    Inventory.find({}, function(err, inventory ) {
                     if(err) return console.log(err)

    if(seeded===false){
         seed();}
             
             
// 

         res.render('user/marketplace', { inventory});

        //  Basket.create(...[], function(err, createdBasket){
        //      if(err) return console.log(err)

        //      const basket = createdBasket
        //     //  createdBasket.save()
        //      console.log(createdBasket, "createdBasket")
            
        //  });
      
    });
  }


/**TODO
 * basket is creating over and over and over
 * 
 */

  function addToBasket(req,res){
      console.log(req.body)

    //   const basket = new db.Basket();
    
      db.Basket.find({},function(err, foundBasket){
        if(err) return console.log(err)
    
        // foundBasket.items.push(req.body.itemID)
        // foundBasket.save()
        console.log("FOUND BASKET ITEMS: ", foundBasket)
        console.log("req - body: ", req.body, )
        res.redirect('/marketplace');
    
      })
    //   basket.save(function(err) {
    //       // one way to handle errors
    //       if (err) return res.redirect('/users/marketplace');
    //       console.log(basket);
    //       // for now, redirect right back to new.ejs
    //       res.redirect('/users/marketplace');
    //     });
  
    // res.redirect('user/marketplace')
      

    
  }

  function renderBasket(req,res){
    console.log(req.body)

  
}



  const seed = function(){
      
      let invent;
      

    for(let i = 0;i<10;i++){

       invent = new Inventory()
        invent.price = faker.random.number(150)
        invent.quantity = faker.random.number(1500)
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