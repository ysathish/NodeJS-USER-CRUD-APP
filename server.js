const express=require("express");
const control=require("./controllers/usercontroller");
const app=express();
const PORT=3000;
app.use(express.json());

app.get("/users",control.getAllUsers);
app.post("/users",control.createUser);
app.delete("/users/:id",control.deleteUser);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });