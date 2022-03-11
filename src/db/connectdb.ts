import mongoose from "mongoose";
import config from 'config';
import {logger} from "../logger";

async function connect(): Promise<void> {
    logger.info("Connecting to database...")
    const dbURI = config.get("dbURI") as string;

    try {
        await mongoose.connect(dbURI);
        logger.info("Connected to CosmosDB cluster.");
    } catch (error) {
        logger.error("Error while connecting to CosmosDB cluster.", error);
        process.exit(1);
    }
}

export default connect;