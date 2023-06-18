import { faker } from "@faker-js/faker";
const UserFactory = {

    createUser(){

        let firstName: string = faker.person.firstName();
        let lastName: string = faker.person.lastName();
        let nome = `${firstName} ${lastName}`
        let email = `${firstName.toLocaleLowerCase()}.${lastName.toLocaleLowerCase()}@email.com`
        let password = faker.internet.password();
        let administrador = 'true'

        return {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
        }
    }
}

export default UserFactory;