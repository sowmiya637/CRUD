User Routes

This file defines the API routes for the User Management system using Express Router, linking each endpoint to the corresponding controller function for CRUD operations.

1. Create User
route.post("/create", create);
Adds a new user with name, email, and address.
Validates input and prevents duplicate emails.

2. Get All Users
route.get("/getAllUsers", getAllUsers);
Fetches all users from the database.
Returns JSON array for displaying in frontend tables.

3. Update User
route.put("/update/:id", updateUser);
Updates user details by MongoDB _id.
Accepts name, email, and address.

4. Delete User
route.delete("/delete/:id", deleteUser);
Deletes a user by _id.
Handles errors if user does not exist.

