const express=require('express');
const mongoose=require('mongoose');
const port =process.env.PORT||8001 ;
const app=express();
const db=require('./config/mongoose');
const Routes=require('./Routes/index');

//to read form data
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./');
//routes
app.use('/',Routes);

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error in setting up server`);
        return ;
    }
    console.log(`server is running on port :${port}`);
});