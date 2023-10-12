const express = require("express");
// for load data others port
const cors = require("cors");
// to dynamic changes and start
const app = express();
// set dynamic port
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

// for home route
app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

// for users route
app.get("/users", (req, res) => {
  res.send(users);
});

// to get data in client in side
app.post("/users", (req, res) => {
  console.log("post api hitting");
  // new user data
  console.log(req.body);
  // get new user
  const newUser = req.body;
  // set id
  newUser.id = users.length + 1;
  // add newUsers in all users
  users.push(newUser);
  // send new users data to client side
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
