const request = require("supertest");
const app = require("../server");

describe("TWS Shop Routes", () => {

  test("GET / should return index page", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("GET /product should return product page", async () => {
    const res = await request(app).get("/product");
    expect(res.statusCode).toBe(200);
  });

});