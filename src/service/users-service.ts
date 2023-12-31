import * as request from "supertest";
import * as dotenv from 'dotenv'
dotenv.config();

const conf = require('../config/index')

export async function getUsers() {
    return await request(conf.url)
                 .get("/usuarios");
}

export async function getUserById(_id:String) {
    return await request(conf.url)
                 .get(`/usuarios/${_id}`);
}

export async function postNewUser(user:any) {
    return await request(conf.url)
                 .post("/usuarios")
                 .send({
                    "nome": user.nome,
                    "email": user.email,
                    "password": user.password,
                    "administrador": user.administrador
                });
}

export async function putUser(user:any, _id:String) {
    return await request(conf.url)
                 .put(`/usuarios/${_id}`)
                 .send({
                    "nome": user.nome,
                    "email": user.email,
                    "password": user.password,
                    "administrador": user.administrador
                });
}

export async function deleteUser(_id:String) {
    return await request(conf.url)
                 .delete(`/usuarios/${_id}`);
}
