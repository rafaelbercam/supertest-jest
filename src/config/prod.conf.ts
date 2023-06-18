import * as dotenv from 'dotenv'
dotenv.config();

module.exports = {
    url: `${process.env.PROD}`
}