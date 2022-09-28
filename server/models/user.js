import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please provide email'],
    unique: true,
  },
  password: { type: String, required: [true, 'please provide password'] },
  name: {
    type: String,
    required: [true, 'please provide name'],
  },
});

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(this.password, salt);
  this.password = password;
});
userSchema.method('createJWT', function () {
  return jwt.sign(
    { email: this.email, password: this.password },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRY }
  );
});
userSchema.method('verifyPassword', async function (password) {
  return await bcrypt.compare(password, this.password);
});
export default mongoose.model('User', userSchema);
