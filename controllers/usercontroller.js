const userService = require("../services/userService");  // Ensure consistent naming

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await userService.createUser(name, email);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller: Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await userService.deleteUser(id);
        res.json({ message });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = { getAllUsers, createUser, deleteUser };
