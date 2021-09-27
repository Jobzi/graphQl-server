const moongose = require("mongoose");

const connectionString =
  "mongodb+srv://dbUser:Ib3IamQHxWxt4ZOq@cluster0.mjeri.mongodb.net/todo_database?retryWrites=true&w=majority";
const db = moongose
  .connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
