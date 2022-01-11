const express = require("express");

const app = express();

const port = 5000;


const JSON_CART = require('./cart_info_url.json')
const JSON_CATEGORY = require('./category_info_url.json')
const JSON_PRODUCT = require('./product_info_url.json')

const fs = require("fs");

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
});

app.use(express.static(__dirname + "/static"))

app.get('/cart', (req, res) => {
    res.json(JSON_CART)
})

app.get('/category', (req, res) => {
    res.json(JSON_CATEGORY)
})

app.get('/product', (req, res) => {
    res.json(JSON_PRODUCT)
})

app.use((req, res, next) => {
    res.status(404).send('<h3>ERROR 404</h3>')
})

app.get("/", (req, res) => {
    res.send("servidor funcionando")
});



app.listen(port, () => {
    console.log("escuchando a http://localhost:" + port)
});