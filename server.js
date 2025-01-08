const express = require('express');
const app = express();

const first = require('./Controllers/UserControllers');
const second = require('./Controllers/UserControllers');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect("mongodb+srv://krunalpadsala30:ReMfy9KMGfKF0mGJ@school-db.oizs5.mongodb.net/?retryWrites=true&w=majority&appName=school-db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const User= require('./Models/UserModel');

async function insert(){
  await User.create({name:"nirmal",email:"nirmal@123gmail.com"},
    
  );
}
insert();
// require('dotenv').config();
// const PORT = process.env.PORT || 1111;
app.use(express.json());

app.post('/add-user', async (req, res) => {
  try {
      const { name, email } = req.body;
      const newUser = await User.create({ name, email });
      res.status(201).json({ message: 'User added successfully', data: newUser });
  } catch (error) {
      res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});

app.get('/',function (req, res)  {
    res.send('Hello World!');
})

app.post('/post',first);

app.get('/login',second)

app.listen(3000, () => {
console.log("Server is running on PORT ");
})