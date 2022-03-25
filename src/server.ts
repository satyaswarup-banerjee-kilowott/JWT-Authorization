import express, { response } from 'express';
import mongoose from 'mongoose';
import apiRouter from "./router/ApiRoute";
import userRouter from './router/userRouter';
import authRouter from './router/auth';
import cors from 'cors';
import passport from 'passport';
import config from './configuration/config';




//Express configuration
const app:express.Application = express();



//Config express to receive form data
app.use(express.json());


//Config CORS
app.use(cors());





//Connect to MongoDB
mongoose.connect(config.mongo.url , config.mongo.options);
mongoose.pluralize(null);
mongoose.connection.on('connected',() => console.log('Connected'));
mongoose.connection.on('error',() => console.log('No connection'));


// app.get('/',(req:express.Request,res:express.Response) =>{

//     res.status(200).send(`<h3 style="color: blue">Welcome to Express Js</h3>`);


// });

//Router config
app.use('/', userRouter);
app.use(passport.initialize());




app.listen(config.server.port, config.server.hostname,()=>{

    console.log(`Express Server is started at http://${config.server.hostname}:${config.server.port}`);
});