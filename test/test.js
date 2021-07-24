const request = require("supertest")
const app = require ("../index");

describe("Get /", ()=>{
    it("responds with Hello Heroku!", (done)=>{
        request(app).get("/").expect("Hello Everyone!!", done);
    })
})