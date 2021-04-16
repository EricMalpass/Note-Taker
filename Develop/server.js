const express = require('express');

const app = express();

const htmlRoute = require('./routes/htmlroutes')
const apiRoute = require('./routes/apiroutes')

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//require('./htmlroutes.js')(app);
//require('./apiroutes.js')(app);

app.use('/api', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});