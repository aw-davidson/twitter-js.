const express = require( 'express' );
const app = express(); // creates an instance of an express application
const PORT = 3000;
app.use(function (req, res, next) {
  // do your logging here
  console.log(`${req.method}${req.path}`)
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  next();
})
app.post('/modernism', (req, res) => {
  res.send('post request to homepage');
  // console.log(`$`)
})
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
