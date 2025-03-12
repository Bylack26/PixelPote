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

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            " AAA "
        ],
        "key": {
            "A": {"item": "pixelmon:ruby"},
            "B": {"item": "minecraft:blaze_powder"},
            "C": {"item": "pixelmon:orb"},
        },
        "result": {
            "item": "pixelmon:flame_orb",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            " AAA "
        ],
        "key": {
            "A": {"item": "pixelmon:amethyst"},
            "B": {"item": "pixelmon:black_sludge"},
            "C": {"item": "pixelmon:orb"},
        },
        "result": {
            "item": "pixelmon:toxic_orb",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            " AAA "
        ],
        "key": {
            "A": {"item": "pixelmon:amethyst"},
            "B": {"item": "pixelmon:black_sludge"},
            "C": {"item": "pixelmon:orb"},
        },
        "result": {
            "item": "pixelmon:life_orb",
        }
    })

    event.shaped('1x pixelmon:focus_band', [
        '   ',
        'AAA',
        'BBB'
    ], {
        A: 'minecraft:red_wool',
        B: 'minecraft:blaze_powder'
    })
   
    event.shaped('1x pixelmon:silk_scarf', [
        '   ',
        'AAA',
        'BBB'
    ], {
        A: 'minecraft:white_wool',
        B: 'pixelmon:crystal'
    })
    
    event.shaped('1x pixelmon:black_glasses', [
        'AAA',
        'B B',
        'CCC'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:black_stained_glass_pane',
        C: 'pixelmon:amethyst',
    })
    
    event.shaped('1x pixelmon:black_sludge', [
        'AAA',
        'BBB',
        'CCC'
    ], {
        A: 'minecraft:red_mushroom',
        B: 'minecraft:brown_mushroom',
        C: 'minecraft:slime_ball'
    })
    
    event.shaped('1x pixelmon:orb', [
        'AAA',
        'BBB',
        'CDE'
    ], {
        A: 'minecraft:glass',
        B: 'minecraft:diamond',
        C: 'pixelmon:crystal',
        D: 'pixelmon:ruby',
        E: 'pixelmon:sapphire'
    })
})

