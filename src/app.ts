import express, { Request, Response } from 'express'
import config from 'config'
import cors from 'cors'
import { logger } from './logger';
import connectiondb from './db/connectdb';

// App Reciving Config
const port: number  = config.get('port') as number;
const host: string = config.get('host') as string;

//Config Express APP
 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));
 app.use(cors({
     origin: "http://localhost:1338"
 }))

 app.get('/', (req: Request , res: Response) => {
     res.send(`Hello, server is running on Port ${port}`)
 })

 app.listen(port, host, () => {
    logger.info(`Server running on http://${host}:${port}`);
    connectiondb();
 })