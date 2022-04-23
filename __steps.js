/**
 * 1. create a folder (manually or mkdir)
 * 2. open command line to that folder
 * 3. npm init (yes all)
 * 4. npm install express
 * 5. create index.js
 * --------------
 * For express/node server
 * --------------
 * 1. const express=require('express');
 * 2. const app =express();
 * 3. const port = process.env.PORT || 5000;
 * 4. app.get('/', (req,res)=>{
        res.send('Look mama i can code in node js now!!')
      });
 * 5. app.listen(port,()=>{
        console.log('Listening to port', port)
    })
* 6. run the app using command(node index.js)
* 7. check your browser for that port > localhost:5000
 */