const express = require('express');
const path = require('path');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT,()=>console.log(`Now serving fools on port ${PORT}`));