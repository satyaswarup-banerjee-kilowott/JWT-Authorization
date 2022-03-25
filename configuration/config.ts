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

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'admin';



const SERVER_HOSTNAME:string = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT:string|number = process.env.SERVER_PORT || 5000;

const SERVER:any = {
    hostname: SERVER_HOSTNAME,
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
