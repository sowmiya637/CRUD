import User from "../model/userModel.js";

// CREATE
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const savedUser = await userData.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// READ (Get All Users)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,          
      runValidators: true 
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
