import dotenv from 'dotenv';

dotenv.config();


const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    maxPoolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME  ;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD ;




const SERVER_PORT = process.env.SERVER_PORT ;

const SERVER:any = {

    port: SERVER_PORT
};


const MONGO = {
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.bossj.mongodb.net/test?retryWrites=true&w=majority`
    // url: 'mongodb://localhost:27017/erpTest'
};



const config = {
    mongo: MONGO,
    server: SERVER
    
};

export default config;
