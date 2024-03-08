// UsersController.js
const User = require("../../models/users");

exports.getAll = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener Users" });
  }
};

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await User.findOne({ id });
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const usuario = await User.create({ name, email });
    res.json({ mensaje: "Usuario agregado correctamente", usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al agregar usuario" });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    await User.update({ name, email }, { where: { id } });
    res.json({ mensaje: "Usuario actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar usuario" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar usuario" });
  }
};
