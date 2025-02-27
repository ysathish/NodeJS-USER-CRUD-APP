const userRepository = require("../repositories/userRepository"); // Fixed typo

const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};

const createUser = async (name, email) => {  // Fixed function name
    if (!name || !email) {
        throw new Error("Name and email are required");
    }
    return await userRepository.addUser(name, email);
};

const deleteUser = async (id) => {
    const deleteCount = await userRepository.deleteUser(id);  // Ensure it returns row count
    if (!deleteCount || deleteCount === 0) {  // Improved check
        throw new Error("User not found");
    }
    return `User with ID ${id} deleted`;
};

module.exports = { getAllUsers, createUser, deleteUser };
