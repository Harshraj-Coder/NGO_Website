const bcrypt = require("bcrypt");
const prisma = require("../config/db");
const { generateToken } = require("../utils/jwt");

exports.register = async ({ email, password }) => {
  const existingUser = await prisma.user.findUnique({
    where: { Email: email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      Email: email,
      Password: hashedPassword,
      Role: "user",
    },
  });

  return { message: "User created successfully" };
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { Email: email },
  });

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.Password);
  if (!valid) throw new Error("Invalid password");

  const token = generateToken(user);

  return { token };
};