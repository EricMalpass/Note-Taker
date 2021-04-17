/*const path = require('path');
const router = require('express').Router();
// ROUTING


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;

*/

const path = require('path');

module.exports = (app) => {


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
}
