import UserFactory from "../factory/user-factory";
import { getUsers, postNewUser } from "../service/users-service";

let newUser:any;
let response:any;
let _id:String;

describe("User endpoint Serverest", () => {
  it("GET all users", async () => {
    response = await getUsers();
    expect(response.statusCode).toEqual(200);
  });
  it("POST new user",async () => {
    newUser = UserFactory.createUser();
    response = await postNewUser(newUser);
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual('Cadastro realizado com sucesso');
    _id = response.body._id
  })
});