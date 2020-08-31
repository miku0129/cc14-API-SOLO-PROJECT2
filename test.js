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

    describe("string", () => {
      it("should", () => {
        //setup
        //excute
        //assert
      });
    });

    describe("string", () => {
      it("should", () => {
        //setup
        //excute
        //assert
      });
    });

    describe("string", () => {
      it("should", () => {
        //setup
        //excute
        //assert
      });
    });
//     describe("string", () => {
//       it("should", () => {
//         //setup
//         //excute
//         //assert
//       });
//     });
//   });
});
