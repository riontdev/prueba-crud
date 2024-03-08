const express = require("express");
const usersController = require("./src/controllers/userController");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Rutas
app.get("/users", usersController.getAll);
app.get("/users/:id", usersController.get);
app.post("/users", usersController.createUser);
app.put("/users/:id", usersController.updateUser);
app.delete("/users/:id", usersController.deleteUser);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
