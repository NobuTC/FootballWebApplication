const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

describe("Test Team API", () => {
  let team;

  /* Connecting to the database before all test. */
  beforeAll(async () => {
    await mongoose
      .connect(process.env.DATABASE_URI)
      .then(() => console.log("Mongoose Connected!"))
      .catch((e) => {
        console.log("Mongoose not working");
      });
  });

  /* Closing database connection after all test. */
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Should get all teams", async () => {
    const response = await request(app).get("/api/getall");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("Should create, update, delete a new team", async () => {
    const data = {
      name: "team MouseBaddy",
      country: "Sweden",
    };
    const createResponse = await request(app).post("/api/add").send(data);
    team = createResponse.body;
    expect(createResponse.statusCode).toBe(200);
    expect(createResponse.body.name).toBe(data.name);
    expect(createResponse.body.country).toBe(data.country);

    const editResponse = await request(app).put(`/api/update/${team.id}`).send({
      name: "BufferFish",
      country: "Australia",
    });
    expect(editResponse.statusCode).toBe(200);

    const deleteResponse = await request(app).delete(`/api/delete/${team.id}`);
    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Should not update team when no data is sent", async () => {
    const response = await request(app).put("/api/update/woww");
    expect(response.statusCode).toBe(400);
  });

  it("Should not update team when id is short", async () => {
    const response = await request(app).put("/api/update/woww").send({
      name: "BufferFish",
      country: "Australia",
    });
    expect(response.statusCode).toBe(500);
  });

  it("Should not update team with not exist ID", async () => {
    const response2 = await request(app)
      .put("/api/update/60d235f8d10f131bc825b998")
      .send({
        name: "BufferFish",
        country: "Australia",
      });
    expect(response2.statusCode).toBe(404);
  });

  it("Should not delete team with a not exist ID", async () => {
    const response = await request(app).delete(
      "/api/delete/60d235f8d10f131bc825b882"
    );
    expect(response.statusCode).toBe(404);
  });

  it("Should not delete team with a short id", async () => {
    const response = await request(app).delete("/api/delete/woww");
    expect(response.statusCode).toBe(500);
  });

  it("Should not return team with a random correct format id", async () => {
    const response = await request(app).get("/api/60d235f8d10f131bc825b883");
    expect(response.statusCode).toBe(404);
  });

  it("Should not return team with a short id", async () => {
    const response = await request(app).get("/api/OwO");
    expect(response.statusCode).toBe(500);
  });
});
