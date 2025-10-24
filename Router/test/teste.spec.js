const request = require("supertest");
const app = require("../../index")
// DESCRIBE
// IT OR TEST
// EXPECT 

describe("Testes da rota /feriados", () => {
  it("Deve retornar todos os feriados", async () => {
    const res = await request(app).get("/domes?mes=1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeGreaterThan(0)
  })
})