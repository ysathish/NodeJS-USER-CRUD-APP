const pool = require("../db");

const getAllUsers = async () => {
    try {
        const result = await pool.query("SELECT * FROM sathish");
        return result.rows;
    } catch (err) {
        console.error("Error fetching users:", err);
        throw new Error("Database error while fetching users");
    }
};

const addUser = async (name, email) => {
    if (!name || !email) {
        throw new Error("Name and email are required");
    }

    try {
        const result = await pool.query(
            "INSERT INTO sathish (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );
        return result.rows[0];
    } catch (err) {
        console.error("Error adding user:", err);
        throw new Error("Database error while adding user");
    }
};

const deleteUser = async (id) => {
    if (!id || isNaN(id)) {
        throw new Error("Invalid user ID");
    }

    try {
        const result = await pool.query("DELETE FROM sathish WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            throw new Error("User not found");
        }

        return { message: `User with ID ${id} deleted successfully` };
    } catch (err) {
        console.error("Error deleting user:", err);
        throw new Error("Database error while deleting user");
    }
};

module.exports = { getAllUsers, addUser, deleteUser };
