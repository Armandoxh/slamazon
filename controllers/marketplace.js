const db = require('../models/index')
const Inventory = require('../models/Inventory');
var faker = require('faker');
let seeded = false; 
module.exports = {
    index,
   
  };

function index(req, res) {
    Inventory.find({}, function(err, inventory) {
    if(seeded===false){
         seed();}
      res.render('user/marketplace', { inventory });
    });
  }



  const seed = function(){
      
      let invent;
      

    for(let i = 0;i<150;i++){

       invent = new Inventory()
        invent.price = faker.random.number(150)
        invent.quantity = faker.random.number(1500)
        invent.name = faker.commerce.productName()
        invent.description = faker.commerce.productDescription()
        console.log(invent)
  

       
        Inventory.create(invent, function(err, result) {
            if (err) {
              console.log(err)
            } else {
              console.log("check db")
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