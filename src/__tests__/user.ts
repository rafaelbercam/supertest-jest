import { getUsers } from "../service/users-service";


describe("User endpoint Serverest", () => {
  it("GET all users", async () => {
    const response = await getUsers();
    expect(response.statusCode).toEqual(200);
  });
});