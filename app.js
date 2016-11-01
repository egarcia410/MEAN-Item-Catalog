var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('catalog', ['products']);

// Assists in making POST/PUT requests
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello World!');
});

// Retreive all products
app.get('/products', function(req, res){
    db.products.find(function(err, results){
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
});

// Retreive one specific product
app.get('/products/:id', function(req, res){
    db.products.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// Create a product
app.post('/products', function(req, res){
    db.products.insert(req.body, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// Update a product
app.put('/products/:id', function(req, res){
    db.products.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},
        update: {$set: {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description
        }},
        new: true
    }, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// Delete a product
app.delete('/products/:id', function(req, res){
    db.products.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3000);
console.log('Creating Magic on Port 3000');