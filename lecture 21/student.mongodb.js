use("web_dev");
// db.createCollection("students");

// create operations
// db.students.insertOne({
//   rollno: 1,
//   name: "John",
//   age: 20,
//   course: "Computer Science",
// });
// db.students.insertMany([
//   {
//     rollno: 2,
//     name: "Alice",
//     age: 21,
//     course: "Mathematics",
//   },
//   {
//     rollno: 3,
//     name: "Bob",
//     age: 22,
//     course: "Physics",
//   },
//   {
//     rollno: 4,
//     name: "Charlie",
//     age: 23,
//     course: "Chemistry",
//   },
// ]);

// db.students.findOne();
// db.students.find();

// db.students.updateOne({ name: "Bob" }, { $set: { age: 20 } });

// db.students.deleteOne({ name: "Alice" });
// db.students.find({}, { name: 1, rollno: 1, age: 1, course: 1 });
// db.students.find().skip(1).limit(2);

//question: find student where age 20 or course computer science and sort in desending order by his marks and limit it to 2 with skipping one value.

db.students
  .find({ age: 20, course: "Computer Science" })
  .sort({ marks: -1 })
  .limit(2);
