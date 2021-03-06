const express = require('express');
const path = require('path');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// app.configure(function(){
//     app.use(express.bodyParser());
// });
app.use(express.static(path.join(__dirname,'app/public')));
app.use('/static',express.static(path.join(__dirname,'app/data/images')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT,()=>console.log(`Now serving fools on port ${PORT}`));