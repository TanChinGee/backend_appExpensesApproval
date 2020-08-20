const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("Welcome to JT application.", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res.body.message).to.equals("Welcome to JT application.");
        done();
      });
  });
})