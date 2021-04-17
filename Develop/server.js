const express = require('express');
const path = require('path');

const app = express();

const htmlRoute = require('./routes/htmlroutes')
const apiRoute = require('./routes/apiroutes')

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

require('./routes/htmlroutes')(app);
require('./routes/apiroutes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
