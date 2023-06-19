import UserFactory from "../factory/user-factory";
import { deleteUser, getUserById, getUsers, postNewUser, putUser } from "../service/users-service";

let newUser:any;
let response:any;
let _id:String;

describe("/user test scenarios", () => {
  beforeEach(async()=>{
    newUser = UserFactory.createUser();
    response = await postNewUser(newUser);
    _id = response.body._id
  }) 
  it("GET all users", async () => {
    response = await getUsers();
    expect(response.statusCode).toEqual(200);
  });
  it("POST new user",async () => {
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual('Cadastro realizado com sucesso');
  })
  it("GET user by _id",async () => {
    response = await getUserById(_id);
    expect(response.statusCode).toEqual(200);
    expect(response.body._id).toEqual(_id);
    expect(response.body.nome).toEqual(newUser.nome)
  })
  it("PUT user new Data",async () => {
    let newDataUser = UserFactory.createUser();
    response = await putUser(newDataUser, _id);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Registro alterado com sucesso");
  })
  it("DELETE user",async () => {
    response = await deleteUser(_id);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Registro excluído com sucesso");
  })
});