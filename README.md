# Item Catalog

Simple CRUD operations using MEAN minus Angular.

---

## Description
This project creates a RESTful API using Mongodb, Node.js/Express, and MongoJS.

Makes GET, POST, PUT, and DELETE requests to API

## Dependencies

Express - Web server framework that works on top of Node.js. It is designed for building web applications and APIs.

Body-Parser - Extracts information from field requests

MongoJS - Node.js module that interacts with MongoDB

(*Optional*) Nodemon - a utility that will monitor for any changes in your source and automatically restart your server.
    To install nodemon, in your terminal run: `$ npm install -g nodemon`

### Download:

* [MongoDB](https://docs.mongodb.com/manual/installation)
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) - Application that creates and sends  HTTP requests

## Getting Started

1. Clone repository.

        $ git clone https://github.com/egarcia410/MEAN-Item-Catalog.git

2. Moved into project folder.

        $ cd MEAN-Item-Catalog

3. Open mongo shell.

        $ mongo

4. In mongo shell, add the products from the `products.txt` file.

5. Exit mongo shell, `CTRL-C`.

6. Start application.

        $ node app

    >Note: `nodemon app` if using nodemon.

5. Use Postman to test the different routes(GET, POST, PUT, DELETE).

    | REQUEST| URL| RESPONSE |
    |--------|----|----------|
    |GET     | http://localhost:3000/ | 'Hello World!'|
    |GET     | http://localhost:3000/products/ | Retreives all products|
    |GET     | http://localhost:3000/products/:id | Retreives one product|
    |POST    | http://localhost:3000/products/ | Creates a product |
    |PUT     | http://localhost:3000/products/:id | Updates a product |
    |DELETE  | http://localhost:3000/products/:id | Removes a product |

## Setting up your own project directory from scratch

1. Inside your terminal, create a project folder.

        $ mkdir item-catalog

2. Move into the newly created folder.

        $ cd item-catalog

3. Install Express.

        $ npm install express

    >Note: Once installed, a nodes_modules folder will be placed inside your project's directory

4. Create a package.json file.

        $ npm init

    >Note: You will be prompted to fill in fields. Give the project a name and press enter for other entries.

5. Open up package.json file in text editor and add dependencies. The dependency section should look similar to below:

        "dependencies": {
        "express": "^4.14.0",
        "body-parser": "*",
        "mongojs": "*"
        }

6. Create an app.js file.

        $ touch app.js

7. Using your text editor, open up the app.js file and add this below:

        var express = require('express');
        var app = express();

        app.get('/', function(req, res){
            res.send('Hello World!');
        });

        app.listen(3000);
        console.log('Creating Magic on Port 3000');

8. In terminal, start application.

        $ node app

    >Note: If installed nodemon, run `$ nodemon app`

9. Open up web browser, go to `http://localhost:3000/`
