import { prisma } from "@/prisma";

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Rodrigo Gonçalves",
                email: "rodrigo@email.com",
            },
            {
                name: "Mayk Brito",
                email: "mayk@email.com"
            }
        ]
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})