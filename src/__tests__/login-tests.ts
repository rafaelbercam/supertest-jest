import UserFactory from "../factory/user-factory";
import { loginFail, loginUser } from "../service/login.service";
import { postNewUser } from "../service/users-service";

let newUser:any;
let response:any;

describe('/login test scenarios', ()=>{


    beforeEach(async()=>{
        newUser = UserFactory.createUser();
        let user = await postNewUser(newUser);
        expect(user.statusCode).toEqual(201);
      }) 
    it('POST Login success', async ()=>{
        response = await loginUser(newUser);
        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual('Login realizado com sucesso');
    })
    it('POST Login fail', async ()=>{
        response = await loginFail(newUser);
        expect(response.statusCode).toEqual(401);
        expect(response.body.message).toEqual('Email e/ou senha inválidos')
        
    })
})