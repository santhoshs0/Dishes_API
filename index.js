const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // replace with your React app's URL
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "dish_manager",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");
});

app.get("/dishes", (req, res) => {
  const sql = "SELECT * FROM dishes";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put("/dishes/:id/toggle/:isPublished", (req, res) => {
  const { id, isPublished } = req.params;
  console.log(req.params);
  const sql = "UPDATE dishes SET is_published =? WHERE dish_id = ?";
  db.query(sql, [isPublished, id], (err, results) => {
    if (err) throw err;
    io.emit("dishUpdated");
    res.json({ message: "Dish status updated" });
  });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
