require('dotenv').config();
const { Router } = require('express');
const { YOUR_API_KEY} = process.env;
const axios = require('axios');
const {Diet,Recipe} = require('../db');
const {Op} = require("sequelize");
const {getAllRecipes,getIdRecipe,loadDietsInDb} = require("../controllers/index")
//const cors = require("cors")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/francoesun",(req,res)=>{
    res.send("es un puto").status(200)
})
router.get("/",(req,res)=>{
    res.send("server on").status(200)
})
router.get("/destroy", async(req,res)=>{
    const ejemplo = await Recipe.destroy({
        where:{title:"COMIDA"}
    })
    res.send("tapronto").status(200)
});
router.get("/ej", async(req,res)=>{
    const ejemplo = await Recipe.create({
        title:"COMIDA",
        summary:"esto es un resumen esto es un resumen esto es un resumenesto es un resumenesto es un resumenesto es un resumenesto es un resumenesto es un resumenesto es un resumenesto es un resumenv",
        spoonacularScore: 90,
        healthScore:30,
        instructions:"estas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instrucionesestas son instruciones",
    })
    res.send("tapronto").status(200)
});
router.get("/recipes",getAllRecipes);
router.get("/recipes/:id",getIdRecipe);
router.get("/types",loadDietsInDb);
router.get("/")

router.post("/create",async (req,res,next) => {
    try {
        const {title, summary, spoonacularScore, healthScore, instructions, image, diets} = req.body

        const recipeCreate = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            instructions,
            image
        })

        const proms = diets.map(diet => recipeCreate.addDiet(diet));
        await Promise.all(proms)

        res.status(200).send({ msg: "Recipe successfully created" })

    } catch (error) {
        next(error)
    }
});

 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
