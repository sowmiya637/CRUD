User Model Explanation (Mongoose)

This code defines the User schema and model for a MongoDB database using Mongoose. It is a critical part of the backend for a User Management System, handling how user data is structured, validated, and stored.

Schema Fields
1. name

Type: String

Required: true → Every user must have a name.

Trim: true → Removes leading/trailing whitespace.

Purpose: Stores the full name of the user. This field ensures that every user record is identifiable by name.

2. email

Type: String

Required: true → Each user must provide an email.

Unique: true → Prevents duplicate emails, ensuring one user per email.

Lowercase: true → Automatically converts email to lowercase for consistency.

Trim: true → Removes extra spaces before or after the email.

Purpose: Acts as a primary identifier for login or contact. The unique constraint ensures that no two users can register with the same email.

3. address

Type: String

Required: true → Every user must have an address.

Trim: true → Cleans up extra whitespace.

Purpose: Stores the location or residential address of the user. Useful for delivery apps, location-based services, or user profiling.

Schema Options

timestamps: true

Automatically adds createdAt and updatedAt fields.

createdAt → Records when the user was first added.

updatedAt → Updates whenever the user data changes.


Enables CRUD operations:

User.create() → Add new user

User.find() → Get all users

User.findByIdAndUpdate() → Update user

User.findByIdAndDelete() → Remove user

Exports the model with export default User to be used in controllers, routes, and services across the backend.


Field Validation:

All fields are required, so no user can be created with missing information.

Email uniqueness prevents duplication errors.
