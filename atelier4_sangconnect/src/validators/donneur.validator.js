import { z } from "zod";

export const donneurSchema = z.object({

    nom: z.string().min(2),

    prenom: z.string().min(2),

    groupeSanguin: z.enum([
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
    ])

});

/*const donneur = {
    nom: "Ben Ali",
    prenom: "Ahmed",
    groupeSanguin: "A+"
};*/

/*const donneur = {
    nom: "",
    prenom: "Ahmed",
    groupeSanguin: "XYZ"
};*/

/*const resultat = donneurSchema.safeParse(donneur);
console.log(resultat.success);*/

/*const resultat = donneurSchema.safeParse(donneur);

if (!resultat.success) {
    console.log(resultat.error);
}*/

export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});

export const donneurQuerySchema = z.object({
    groupeSanguin: z.enum([
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
    ]).optional()
});

export const updateDonneurSchema =
    donneurSchema.partial();