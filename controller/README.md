Controller.js – User Management

The controller acts as the bridge between the database (via the User model) and the API routes.
It contains the core CRUD functions (create, getAllUsers, updateUser, deleteUser) and ensures that every request is processed with proper validation, error handling, and responses.

Functions in Detail
1. create(req, res)

Takes user input from req.body → expects { name, email, address }.

Validates email uniqueness: checks if a user with the same email already exists in MongoDB.

If duplicate, responds with 400 Bad Request.

If new, saves the user to the database and responds with 201 Created along with the saved record.

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



2. getAllUsers(req, res)

Fetches all users using User.find().

If no records exist, returns 404 Not Found.

Otherwise, responds with 200 OK and an array of all users.

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



3. updateUser(req, res)

Accepts :id from req.params to identify the user.

Accepts new fields in req.body (e.g., updating name or address).

Uses findByIdAndUpdate() with:

new: true → returns the updated document instead of the old one.

runValidators: true → enforces schema validation on updates.

If user not found, returns 404 Not Found.

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



4. deleteUser(req, res)

Accepts :id from req.params.

First checks if the user exists.

If not found, returns 404 Not Found.

If found, deletes using findByIdAndDelete() and responds with 200 OK + confirmation message.
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

