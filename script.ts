import { PrismaClient } from "@prisma/client";
import { data } from "./data";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: data,
  });
  const user = await prisma.user.findMany({
    where: {
      age: 29,
    },
    skip: 1,
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
