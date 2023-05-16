const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://BOOKSTORE:BOOKSTORE@cluster0.nlmpaev.mongodb.net/crudapp?retryWrites=true&w=majority"
)
.then(() => console.log("connected"));