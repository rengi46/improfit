const {newCommentsByImage,addCommentToDB,getCommentListToDB} = require("../services/comments-store");
const {addImageToDB, getImageListToDB} = require("../services/image-strore");

let imageId 
describe("image DB",()=>{
	test("get image",async()=>{
		const image = await getImageListToDB()
		expect(image).toBeDefined()
		expect(image._id).toBeDefined()
		expect(image.title).toBe("Test")
		expect(image.url).toBe(url)
		expect(image.rank).toBe(1)
		expect(image.date).toBeDefined()
	})
	test("created image",async()=>{
		const url = "https://pruebatechimprofit.s3.eu-central-1.amazonaws.com/digimon.jpg"
		const image = await addImageToDB("Test", url,1,new Date())
		imageId= image._id
		expect(image._id).toBeDefined()
		expect(image.title).toBe("Test")
		expect(image.url).toBe(url)
		expect(image.rank).toBe(1)
		expect(image.date).toBeDefined()
	})
})



describe("comments DB",()=>{
  test("crate array to save comments",async()=>{
		const id = imageId
		const commentArray = await newCommentsByImage(id)
		expect(commentArray.imageId).toBe(id)
		expect(commentArray.comments).toHaveLength(0)
	})
})