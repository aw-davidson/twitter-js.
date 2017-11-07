const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const PORT = 3000;

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

// nunjucks.render('index.html', function (err, output){
//   if (err) throw err;
//   console.log(output);
// });

app.use(function (req, res, next) {
  // do your logging here
  console.log(`${req.method}${req.path}`)
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  next();
})
app.post('/', (req, res) => {
  //body
})

app.get('/', (req, res) => {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people})
});


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
