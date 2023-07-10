const express = require("express");
const port = 1001;

const app= express();


  app.get('/', (req, res) => {
      res.sendFile("JAVASCRIPT");
    
    })
  
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })