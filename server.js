const express = require('express');
const routes = require('./routes');

const app = express();
app.set('view engine', 'ejs');

//body parser koji je ugradjen u sam express
app.use(express.urlencoded({extended: false}))

app.use(routes);

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})