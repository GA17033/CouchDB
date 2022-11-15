const express = require('express');
const fs = require('fs');
const Router = express.Router();

const PATh_ROUTES = __dirname;
const removeExtension = (fileName) =>{
    return fileName.split('.').shift();
}

const routes = fs.readdirSync(PATh_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if(name !== 'index'){
       console.log(name);
       Router.use(`/${name}`,require(`./${file}`));
    
    }
}
)

module.exports = Router;