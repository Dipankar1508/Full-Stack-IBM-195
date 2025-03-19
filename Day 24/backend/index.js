require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profile = require("./models/profile.js");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Enable JSON parsing
app.use(express.static("public"));

const port = 4001;

mongoose.connect('mongodb://127.0.0.1:27017/profile')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Use environment variables for security

// Register User
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await Profile.findOne({ username });
        if (existingUser) {
            console.log("User already exists:", username);
            return res.status(400).send("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Profile({ username, password: hashedPassword });
        await newUser.save();

        console.log("User registered:", newUser);
        res.send(200).send("User has been registered");
        // res.render("protected")
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).send("Error registering user");
    }
});

const authenticateJWT = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(403).send("Access Denied!");

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send("Invalid Token");
    }
};

// Login User & Generate JWT
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Profile.findOne({ username });
        if (!user) return res.status(400).send("User not found!");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials!");

        const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
        // res.render("protected");
        res.json({ token });
        console.log(`Token : ${token}`);


    } catch (err) {
        console.error(err);
        res.status(500).send("Error logging in user");
    }
});

// Protected Route Example
app.get("/dashboard", authenticateJWT, (req, res) => {
    res.send(`Welcome, ${req.user.username}! This is a protected route.`);
});

app.get("/", (req, res) => {
    res.render("Home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});
