import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Check if all required fields are provided
    if (!fullName || !username || !password || !confirmPassword || !gender)
      return res.status(400).json({ message: "All fields are required" });

    // Trim username to remove leading/trailing spaces and check for internal spaces
    const sanitizedUsername = username.trim();
    if (/\s/.test(sanitizedUsername)) {
      return res.status(400).json({ message: "Username cannot contain spaces" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const user = await User.findOne({ username: sanitizedUsername });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Profile Photo URLs
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${sanitizedUsername}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${sanitizedUsername}`;

    // Create the user
    await User.create({
      fullName,
      username: sanitizedUsername, // Use sanitized username
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
