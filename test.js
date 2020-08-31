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
          first_name: "Miku",
          last_name: "Sano",
        };
        //excute
        const response = await request.post("/api/peoples").send(expected);
        //assert
        response.should.be.json;
        JSON.parse(response.text).should.deep.equal(expected);
      });
    });

    describe("PATCH /api/people/:last_nameOrCity", () => {
      it("should allow you to make partial modification to a person", async () => {
        //setup
        const update = { last_name: "Geek" };
        //excute
        await request.patch("/api/people/Mattiazzi").send(update);
        //assert
        peoples.people[0].last_name.should.equal("Geek");
      });
    });

    // describe("string", () => {
    //   it("should", () => {
    //     //setup
    //     //excute
    //     //assert
    //   });
    // });
    //     describe("string", () => {
    //       it("should", () => {
    //         //setup
    //         //excute
    //         //assert
    //       });
    //     });
  });
});
