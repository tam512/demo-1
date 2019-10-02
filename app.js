const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from ICPA !");
});
 
module.exports.app = app;
