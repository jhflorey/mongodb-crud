const mongoose = require("mongoose");
const data = require("./data.json");

mongoose.connect("mongodb://localhost:27017/db-course", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connect to MongoDB successfully")) // arrow function
  .catch(err => console.log(err))

// Schema: dinh nghia bo khung: field, method
// Model: duoc tao ra tu Schema, thuc hien CRUD (create - read - update - delete)
// instance: duoc tao ra tu Model (chua luu xuong DB)
// document: da luu xuong DB
// Collection: tap hop nhieu document

const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String], // ['FE', 'BE']
  isPublished: Boolean,
  price: Number
})

const Course = mongoose.model("Course", CourseSchema, "Course")

// for in, for of
for (const c of data) {
  const newCourse = new Course({
    name: c.name,
    author: c.author,
    tags: c.tags,
    isPublished: c.isPublished,
    price: c.price
  })
  newCourse.save()
}