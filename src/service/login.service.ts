import * as request from "supertest";
import * as dotenv from 'dotenv'
dotenv.config();

const conf = require('../config/index')

export async function loginUser(user:any) {
    return await request(conf.url)
                 .post("/login")
                 .send({
                    "email": user.email,
                    "password": user.password,
                });
}

export async function loginFail(user:any) {
    return await request(conf.url)
                 .post("/login")
                 .send({
                    "email": user.email,
                    "password": 'xpto',
                });
}
