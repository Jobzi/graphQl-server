const { model, Schema } = require("mongoose");
/*
 name: String!
    phone: String
    street: String!
    city: String! */
const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true},
  street: { type: String, required: true },
  city: { type: String, required: true },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const user = model("users", userSchema);

module.exports = user;
