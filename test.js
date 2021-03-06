const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("./server");
chai.should();
const peoples = require("./db/data/peoplesData.json");
const server = setupServer();

describe("peoples API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/peoples", () => {
    it("Should return the full list of peoples", async () => {
      // setup
      const response = await request.get("/api/peoples");
      // assert
      JSON.parse(response.text).should.deep.equal(peoples);
    });

    describe("POST /api/peoples", () => {
      it("should add new person", async () => {
        //setup
        const expected = {
          first_name: "miku",
          last_name: "sano",
          gender: "x",
          city: "tokyo",
        };
        //excute
        const response = await request.post("/api/peoples").send(expected);
        //assert
        response.should.be.json;
        JSON.parse(response.text).should.deep.equal(expected);
      });
    });

    describe("PATCH /api/peoples/:last_name", () => {
      it("should allow you to make partial modification to a person", async () => {
        //setup
        const update = {
          first_name: "Hewet",
          last_name: "Geek",
          gender: "Male",
          city: "Farsta",
        };
        //excute
        try {
          await request.patch("/api/peoples/Mattiazzi").send(update).done();
          //assert
          console.log(peoples.peoples[0]);
          peoples.peoples[0].last_name.should.equal("Geek");
        } catch {
          (e) => console.log(e);
        }
      });
    });

    describe("DELETE /api/peoples/:first_name", () => {
      it("should delete a info of the person", async () => {
        //setup
        //excute
        try {
          await request.delete("/api/peoples/Hewet").done();
          //assert
          peoples.peoples[0].first_name.should.equal("Elijah");
        } catch {
          (e) => console.log(e);
        }
      });
    });

    describe("PUT /api/peoples/:first_name", () => {
      it("should allow you to make replace whole info about the person", async () => {
        //setup
        const update = {
          first_name: "takahisa",
          last_name: "sano",
          gender: "Male",
          city: "fukushima",
        };
        //excute
        try {
          await request.patch("/api/peoples/Mattiazzi").send(update).done();
          //assert
          console.log(peoples.peoples[0]);
          peoples.peoples[0].last_name.should.equal("sano");
        } catch {
          (e) => console.log(e);
        }
      });
    });
  });
});
