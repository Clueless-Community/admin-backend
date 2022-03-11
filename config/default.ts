import 'dotenv/config'

export default{
    port: 1337,
    host: 'localhost',
    dbURI: process.env.dbURI,
}