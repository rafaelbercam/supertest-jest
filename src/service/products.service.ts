import * as request from "supertest";
import * as dotenv from 'dotenv'
dotenv.config();

const conf = require('../config/index')

export async function getProducts() {
    return await request(conf.url)
                 .get("/produtos");
}

export async function getProductById(_id:String) {
    return await request(conf.url)
                 .get(`/produtos/${_id}`)
}

export async function postNewProduct(product:any, token:String) {
    return await request(conf.url)
                 .post("/produtos")
                 .set({'Authorization': token})
                 .send({
                    nome: product.nome,
                    preco: product.preco,
                    descricao: product.descricao,
                    quantidade: product.quantidade
                });
}

export async function putProduct(product:any, _id:String, token:String) {
    return await request(conf.url)
                 .put(`/produtos/${_id}`)
                 .set({'Authorization': token})
                 .send({
                    nome: product.nome,
                    preco: product.preco,
                    descricao: product.descricao,
                    quantidade: product.quantidade
                });
}

export async function deleteProduct(_id:String, token:String) {
    return await request(conf.url)
                 .delete(`/produtos/${_id}`)
                 .set({'Authorization': token});
}
