import * as request from "supertest";
import * as dotenv from 'dotenv'
dotenv.config();

const conf = require('../config/index')

export async function getUsers() {
    return await request(conf.url)
                 .get("/usuarios");
}