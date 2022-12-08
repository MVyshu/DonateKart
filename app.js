const express= require('express');
const app=express();
app.use(express.json());


// endpoint to donate
app.post('/donate', async (req,res) => {
     try{
      // database functionality to be implemented.
      console.log(req.body)
      res.status(201).json({
        id: 10, //dummy id to be replaced
      });
     }
     catch(err){
      res.status(400).json({
       err
      });
     }
})


// endpoint to fetch items for particular type
app.get('/items/:type', async (req,res) => {
    try{
        console.log(req.params.type)
        // database functionality to be implemented.
        res.status(200).json({
          id: 10, //dummy id to be replaced
        });
       }
       catch(err){
        res.status(404).json({
         err
        });
       }
})

// endpoint to fetch particular item
app.get('/item/:id', async (req,res) => {
    try{
        console.log(req.params.id)
        // database functionality to be implemented.
        res.status(200).json({
          id: 10, //dummy id to be replaced
        });
       }
       catch(err){
        res.status(404).json({
         err
        });
       }
})

// endpoint for taker to request for donated item
app.post('/item/:id', async (req,res) => {
    try{
        console.log(req.params.id)
        console.log(req.body)

        // database functionality to be implemented.
        res.status(201).json({
          id: 10, //dummy id to be replaced
        });
       }
       catch(err){
        res.status(400).json({
         err
        });
       }
})


const PORT= 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));