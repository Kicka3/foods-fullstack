import { PrismaClient } from "@prisma/client";
import { categories } from "./constants";
import { hashSync } from "bcrypt";

const prisma = new PrismaClient();

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "John Doe",
        email: "john@gmail.com",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "Admin@gmail.com",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({ data: categories });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log("Ошибка генерации данных", e);
  }
}

main().then(async () => {
  await prisma.$disconnect();
});
