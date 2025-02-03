import request from "supertest";
import app from "../src/server";

describe("API Tests", () => {
  it("should return items", async () => {
    const res = await request(app).get("/app/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ]);
  });

  it("should return a item by id", async () => {
    const res = await request(app).get("/app/items/1").send({});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Item 1" });
  });

  it("should return a item not found if id is not found", async () => {
    const res = await request(app).get("/app/items/123").send({});
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({
      message: "Not found",
      error: "Item is not found",
    });
  });

  it("should create a item", async () => {
    const res = await request(app).post("/app/items").send({ name: "Item 4" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: 4 });
  });

  it("should update an item", async () => {
    const res = await request(app)
      .put("/app/items/3")
      .send({ name: "My Item 4" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: 3 });
  });

  it("should return item not found if update an item is not found", async () => {
    const res = await request(app)
      .put("/app/items/123")
      .send({ name: "My Item 122" });
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({
      message: "Not found",
      error: "Item is not found",
    });
  });

  it("delete item", async () => {
    const res = await request(app).delete("/app/items/3").send({});
    expect(res.statusCode).toBe(204);
    expect(res.body).toEqual({});
  });
});
