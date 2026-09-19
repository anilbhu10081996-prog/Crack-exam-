const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Home / Test Route
app.get("/", (req, res) => {
  res.json({
    message: "CrackExam Server is running 🚀"
  });
});


// Register
app.post("/api/auth/register", (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  res.json({
    message: "Registration successful",
    user: {
      name: name,
      email: email
    }
  });

});


// Login
app.post("/api/auth/login", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  // Temporary login
  // Real database authentication will be added next

  res.json({
    message: "Login successful",
    token: "temporary-token-123",
    user: {
      name: "Student",
      email: email,
      role: "student"
    }
  });

});


// Forgot Password
app.post("/api/auth/forgot-password", (req, res) => {

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }

  res.json({
    message: "If this email exists, password reset instructions will be sent."
  });

});


// Start Server
app.listen(PORT, () => {

  console.log(
    `CrackExam server running on http://localhost:${PORT}`
  );

});
