import ProductFactory from "../factory/product-facotory";
import UserFactory from "../factory/user-factory";
import { loginUser } from "../service/login.service";
import { deleteProduct, getProductById, getProducts, postNewProduct, putProduct } from "../service/products.service";
import { postNewUser } from "../service/users-service";

let newUser:any;
let user:any;
let response:any;
let _id:String;
let newProduct:any;
let token:String

describe("/product test scenarios", () => {
  beforeAll(async()=>{
    newUser = UserFactory.createUser();
    user = await postNewUser(newUser);
    expect(user.statusCode).toEqual(201);
    let login = await loginUser(newUser);
    token = login.body.authorization;
  })

  beforeEach(async()=>{
    newProduct = ProductFactory.createNewProduct();
    response = await postNewProduct(newProduct, token);
    expect(response.statusCode).toEqual(201);
    _id = response.body._id;
  })

  it("GET all products", async () => {
    response = await getProducts();
    expect(response.statusCode).toEqual(200);
  });

  it("POST new product",async () => {
    expect(response.body.message).toEqual('Cadastro realizado com sucesso');
  })


  it("GET user by _id",async () => {
    response = await getProductById(_id);
    expect(response.statusCode).toEqual(200);
    expect(response.body._id).toEqual(_id);
    expect(response.body.nome).toEqual(newProduct.nome)
  })


  it("PUT user new Data",async () => {
    let newProductData = ProductFactory.createNewProduct();
    response = await putProduct(newProductData, _id, token);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Registro alterado com sucesso");
  })


  it("DELETE user",async () => {
    response = await deleteProduct(_id, token);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Registro excluído com sucesso");
  })

});