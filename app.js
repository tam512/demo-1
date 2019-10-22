const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from ICPA 3.0.0.0 !");
});
 
module.exports.app = app;
