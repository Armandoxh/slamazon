# slamazon

Place an order, view the order details, and edit your orders. Will your order get delivered? Maybe. Our delivery guys  are on strike. Something about unpaid wages. 

Technologies used: 
-html
-js
-nodejs
-express
-mongodb
-mongoose
-ejs


project URL: https://dry-tor-81352.herokuapp.com/


User Stories

- 1. A User logs in with Google Auth

As a user, the purpose of me using this app is to place orders for inventory for my company and check their delivery status. 

Story 1: User goes on home page and views all of their pending and completed orders


Story 2: User goes on home page and wants to place a new order
---The user is then redirected to the Marketplace where they can select the items they want to buy  and add them to their cart.
---The user can finalize the order which then will be given an estimated arrival time and be placed on the Home Page.
---[The user would then enter payment details]


Story 3: User goes on home page and wants to cancel an order.
---User can click the order they want to edit and open the order-details page. 
---They then have the option to delete the order now from this page.

Story 4: The user wants to check the status of a specific order, They will need the Order ID Number.
---They can enter it on the top of the page to check the order's details page.
--- On this page they can delete or edit the contents of the order.

Story 5: The user wants to log out they can hit the logout button at the top of the page. 

Story 6: User wants to edit an order: 
---First if there is less than 3 days left for the order to be delivered you can not edit the order.
---The user goes to the order's detail page, which has an option to remove items, or add items to the order. 
---If they want to add, the shopping cart becomes that order - then the user goes back to the marketplace

