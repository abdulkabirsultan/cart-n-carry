import { UnauthorizedError } from '../middlewares/customError.js';
import User from '../models/user.js';
export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.json({ token, name: user.name, email: user.email });
};
export const loginUser = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthorizedError(`invalid email: ${email}`);
  }
  const isPassword = await user.verifyPassword(password);
  if (!isPassword) {
    throw new UnauthorizedError(`invalid password`);
  }
  const token = user.createJWT();
  res.json({ token, name: user.name, email: user.email });
};
