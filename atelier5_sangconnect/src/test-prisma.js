import prisma from "./database/prisma.js";

const donneurs = await prisma.donneur.findMany();
/* const donneur = await prisma.donneur.findUnique({
    where: {
        id: 1
    }
});*/

/*const donneur = await prisma.donneur.create({
    data: {
        nom: "Khelifi",
        prenom: "Yassine",
        groupeSanguin: "AB+"
    }
});*/

/*const donneur = await prisma.donneur.update({
    where: {
        id: 1
    },
    data: {
        nom: "Ben Salem"
    }
});*/

/*await prisma.donneur.delete({
    where: {
        id: 1
    }
});*/

console.log(donneurs);

await prisma.$disconnect();