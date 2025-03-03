const ballTypes = [
	"wing",
	"friend",
	"level",
	"feather",
	"safari",
	"net",
	"lure",
	"poke",
	"luxury",
	"ancient",
	"great",
	"jet",
	"heal",
	"premier",
	"park",
	"ancient_poke",
	"sport",
	"dive",
	"repeat",
	"heavy",
	"ancient_ultra",
	"ancient_heavy",
	"fast",
	"quick",
	"ultra",
	"love",
	"leaden",
	"gigaton",
	"nest",
	"timer",
	"dusk",
	"moon",
    "ancient_great",
    "master"
]


onEvent("recipes", event => {


    event.remove({output: 'pixelmon:poke_ball'})
    ballTypes.forEach(type => {
        event.remove({ id: 'pixelmon:pokeball/ball/' + type + "_ball" })
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AEA ",
            "AEEEA",
            "CCDCC",
            "ABBBA",
            " ABA "
        ],
        "key": {
            "B": {"item": "minecraft:white_wool"},
            "A": {"tag": "forge:ingots/iron"},
            "C": {"item": "minecraft:black_concrete"},
            "D": {"tag": "minecraft:buttons"},
            "E": {"item": "minecraft:red_wool"},

        },
        "result": {
            "item": "pixelmon:poke_ball",
            "nbt": { PokeBallID: "poke_ball" } // NBT personnalisé pour la variante 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AEA ",
            "AEEEA",
            "CCDCC",
            "ABBBA",
            " ABA "
        ],
        "key": {
            "B": {"item": "minecraft:white_wool"},
            "A": {"tag": "forge:ingots/iron"},
            "C": {"item": "minecraft:black_concrete"},
            "D": {"tag": "minecraft:buttons"},
            "E": {"item": "minecraft:red_wool"},

        },
        "result": {
            "item": "pixelmon:poke_ball",
            "nbt": { PokeBallID: "dusk_ball" } // NBT personnalisé pour la variante 1
        }
    })
   
})

