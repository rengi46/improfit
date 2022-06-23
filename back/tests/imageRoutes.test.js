const {app,server} = require('../index') // Link to your server file
const supertest = require('supertest')
const { default: mongoose } = require('mongoose')
const request = supertest(app)

describe("Image list",()=>{
  test("take a list data ", async(done)=>{
    await request
      .get("imageList")
      .expect(200)
    done()
  })

  afterAll(()=>{
      mongoose.connection.close()
      server.close()
  })
})

