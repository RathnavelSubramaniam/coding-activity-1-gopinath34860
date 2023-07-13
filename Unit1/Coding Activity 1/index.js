const express = require("express");
const port = 1003;

const app= express();


  app.get('/', (req, res) => {
      res.send("JAVASCRIPT");
    
    })
  
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })