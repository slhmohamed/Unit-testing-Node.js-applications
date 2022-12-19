const Book = require("../models/bookModel");
const chai = require("chai");
const chaiHttp = require("chai-http");
let app = require("../index");
chai.should();

chai.use(chaiHttp);

describe("Book", () => {
    beforeEach((done) => {
        Book.deleteMany({}, (err) => {
        done();
      });
    });

describe("/Get book",()=>{
    it("it should GET all the books", (done) => {
        chai.request(app)
        .get("/api")
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.data.should.be.a("array");
            res.body.data.length.should.be.eql(0);
            done();

        })
    })
})

describe("/POST book",()=>{
    it("it should new POST a book", (done) => {
        let book= {
                title:"Force",
                author: "med salah",
                year: 2022,
                pages:10
        };
        chai.request(app)
        .post("/api")
        .send(book)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();

        })
    })
})

describe("/GET/:id book", () => {
    it("it should GET a book by the id", (done) => {
        let book= new Book({
                title:"dev web",
                author: "mohamed salah",
                year: 2022,
                pages:15
        });
        book.save((err, book) => {
            chai
              .request(app)
              .get("/api/" + book.id)
              .send(book)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
      });
      describe("/PUT/:id book", () => {
        it("it should UPDATE a book given the id", (done) => {
            let book= new Book({
                title:"dev web",
                author: "mohamed salah",
                year: 2022,
                pages:15
        });
        book.save((err, book) => {
            console.log(book.id);
            chai
              .request(app)
              .put("/api/" + book.id)
              .send({
                title:"dev web updtaed",
                author: "mohamed salah updated",
                year: 2022,
                pages:15    
             })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
      });
      describe.skip("/DELETE/:id book", () => {
        it("it should DELETE a book given the id", (done) => {
            let book= new Book({
                title:"dev web",
                author: "mohamed salah",
                year: 2022,
                pages:15
        });
        book.save((err, book) => {
            chai
              .request(app)
              .delete("/api/" + book.id)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.status.should.be.eql("success");
                done();
              });
          });
        });
      });
});
