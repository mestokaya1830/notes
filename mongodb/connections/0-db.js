import mongoose from "mongoose";

//PROMISE
const db = mongoose.connect('mongodb://mesto:mk1972mk@localhost:27017/blog?authSource=blog')
.then(() => console.log('Connected with Promise'))
.catch((err) => console.log(err))
export default  db

//ASYNC
// const db = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://mesto:mk1972mk@localhost:27017/blog?authSource=blog");
//     console.log(conn.connection.host);
// 		console.log('Connected with Async')
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default db;
