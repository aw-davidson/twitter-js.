const express = require( 'express' );
const app = express(); // creates an instance of an express application
const PORT = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
