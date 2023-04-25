const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

describe("Test Team API", () => {
  /* Connecting to the database before each test. */
  beforeEach(async () => {
    await mongoose
      .connect(process.env.DATABASE_URI)
      .then(() => console.log("Mongoose Connected!"))
      .catch((e) => {
        console.log("Mongoose not working");
      });
  });

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("Should get all teams", async () => {
    const response = await request(app).get("/api/getall");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("Should create a new team", async () => {
    const data = {
      name: "team MouseBaddy",
      country: "Sweden",
    };
    const response = await request(app).post("/api/add").send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(data.name);
    expect(response.body.country).toBe(data.country);
  });

  it("Should not return team with a random correct format id", async () => {
    const response = await request(app).get("/api/60d235f8d10f131bc825b880");
    expect(response.statusCode).toBe(404);
  });

  it("Should not return team with a short id", async () => {
    const response = await request(app).get("/api/OwO");
    expect(response.statusCode).toBe(500);
  });

  it("Should return team with a correct id", async () => {
    const response = await request(app).get("/api/6448307eaa10c9d444256c96");
    expect(response.statusCode).toBe(200);
  });

  //
});
