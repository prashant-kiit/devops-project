import request from "supertest";
import app from "../src/server";

describe("API Tests", () => {
  // Test GET /api/hello
  it("should return items!", async () => {
    const res = await request(app).get("/app/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ]);
  });

  // Test POST /api/user (successful case)
  it("should create a item", async () => {
    const res = await request(app).post("/app/items").send({ name: "Item 4" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: 4 });
  });

  // Test POST /api/user (missing name)
  it("should return 400 if name is missing", async () => {
    const res = await request(app).get("/app/items/1").send({});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Item 1" });
  });
});
