const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// important! to get data in server side
app.use(express.json());

const users = [
  { id: 1, name: "Shabana", email: "sabana@gmail.con" },
  { id: 2, name: "Shabnor", email: "shabnor@gmail.con" },
  { id: 3, name: "Shanaj", email: "shanaj@gmail.con" },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  // get new user
  const newUser = req.body;
  // set id
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
