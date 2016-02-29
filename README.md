# Create-RESTful-API-Using-Node.js-Express-4
Create RESTful API Using Node.js &amp; Express 4

##Tutorial
http://code.ciphertrick.com/2015/02/27/create-restful-api-using-node-js-express-4/

##Requirements
* Node and npm w/express, bodyParser and pg[-native]
* PostgreSQL

##Mac
* homebrew install postgresql
* homebrew install npm
* npm install nodejs

##Arch
* pacman -S postgresql
* pacman -S npm
* npm install nodejs

##OpenSolaris, illumos, OpenIndiana, SmartOS, etc
* pkgin in postgresql
* pkgin in nodejs

##All ( optional )
* sudo npm install json -g
* This is not exactly tidy for xml, but cating a json file through json: cat package.json | json

##Installation( lines 1 and 2 are suggestions )

* If you do not have your own dev spot: mkdir /opt/dev
* Go to location: cd /opt/dev/
* Clone the repo: git clone https://github.com/TyrfingMjolnir/Create-RESTful-API-Using-Node.js-Express-4.git
* Based on this MySQL template: https://github.com/Inaamhusain/Create-RESTful-API-Using-Node.js-Express-4.git
* cd Create-RESTful-API-Using-Node.js-Express-4
* Install dependencies: npm install  
* Start the server: ./server.js&

Notice that the method of logging in to postgreSQL is logging in to the user that runs the script. As such 1 user pr project would be a possibility.
