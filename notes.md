notes

storing stuff in the database:
  a) data.js - products and stock levels
  b) orders made 

steps for a):
1) move data.js from public to server
2) server imports it from the file, offers it as an api
3) the client instead of importing data.js, use fetch to get it from the server, 
   then puts the products in the page -script function 
4) create a database that contains the same data as data.js, delete data.js
5) in the api from step 3, server asks the DB for the data instead 
   of getting it from data.js


requirements for b):
- client needs to submit the order to the server when an order is made
- server needs to store that order in the DB and decrease the stocks appropriately
- store owner wants to view orders

steps for b):
1) make page for store owner to see orders (follow steps 1-5 above) orders.html + orders.js
2) when an order is made on the main page, submit it with fetch and POST simple stage message board 
3) the server needs to offer a POST API to accept orders, puts them in the database