import { faker } from "@faker-js/faker";

const ProductFactory = {

    createNewProduct(){


        let nome = faker.commerce.productName()+faker.number.int({ min: 10, max: 100 });
        let preco = parseFloat(faker.commerce.price());
        let descricao = faker.commerce.productMaterial();
        let quantidade = faker.number.int({ min: 10, max: 100 });

        return {
            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
        }
    }
}

export default ProductFactory;