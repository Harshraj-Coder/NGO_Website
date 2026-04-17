const prisma = require("../config/db");

exports.getProfile = async (email) => {
  return prisma.user.findUnique({
    where: { Email: email },
    select: {
      Email: true,
      Role: true,
    },
  });
};

exports.getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      Email: true,
      Role: true,
    },
  });
};