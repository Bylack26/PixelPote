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
            " ABA ",
            "CCDCC",
            " DED ",
            "  D  "
        ],
        "key": {
            "A": {"item": "pixelmon:protein"},
            "B": {"item": "pixelmon:focus_band"},
            "C": {"item": "minecraft:white_wool"},
            "D": {"item": "pixelmon:sapphire"},
            "E": {"item": "pixelmon:ruby"}
        },
        "result": {
            "item": "pixelmon:choice_band",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            " ABA ",
            "CDCDC",
            " EEE ",
            "  E  "
        ],
        "key": {
            "A": {"item": "pixelmon:carbos"},
            "B": {"item": "pixelmon:silk_scarf"},
            "C": {"item": "minecraft:white_wool"},
            "D": {"item": "minecraft:cyan_wool"},
            "E": {"item": "pixelmon:sapphire"},
        },
        "result": {
            "item": "pixelmon:choice_scarf",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            " ABA ",
            "CCCCC",
            " DCD ",
            "  C  "
        ],
        "key": {
            "A": {"item": "pixelmon:calcium"},
            "B": {"item": "pixelmon:black_glasses"},
            "C": {"item": "minecraft:blaze_rod"},
            "D": {"item": "pixelmon:ruby"},
        },
        "result": {
            "item": "pixelmon:choice_specs",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " BDB ",
            "BAAAB",
            "CAAAC",
            "BAAAB",
            " BDB "
        ],
        "key": {
            "A": {"item": "minecraft:paper"},
            "B": {"item": "minecraft:ink_sac"},
            "C": {"item": "pixelmon:protein"},
            "D": {"item": "pixelmon:calcium"},
        },
        "result": {
            "item": "pixelmon:weakness_policy",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABC ",
            " DEF ",
            " GHI ",
            "  J  ",
            "     "
        ],
        "key": {
            "A": {"item": "pixelmon:cheri_berry"},
            "B": {"item": "pixelmon:chesto_berry"},
            "C": {"item": "pixelmon:pecha_berry"},
            "D": {"item": "pixelmon:rawst_berry"},
            "E": {"item": "pixelmon:aspear_berry"},
            "F": {"item": "pixelmon:leppa_berry"},
            "G": {"item": "pixelmon:oran_berry"},
            "H": {"item": "pixelmon:persim_berry"},
            "I": {"item": "pixelmon:lum_berry"},
            "J": {"item": "pixelmon:sitrus_berry"},
        },
        "result": {
            "item": "pixelmon:leftovers",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "AABAA",
            "ACCCA",
            "ACCCA",
            " ACA "
        ],
        "key": {
            "A": {"item": "minecraft:red_dye"},
            "B": {"item": "minecraft:stick"},
            "C": {"item": "minecraft:paper"},
        },
        "result": {
            "item": "pixelmon:power_herb",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "AABAA",
            "ACCCA",
            "ACCCA",
            " ACA "
        ],
        "key": {
            "A": {"item": "minecraft:white_dye"},
            "B": {"item": "minecraft:stick"},
            "C": {"item": "minecraft:paper"},
        },
        "result": {
            "item": "pixelmon:white_herb",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "AABAA",
            "ACCCA",
            "ACCCA",
            " ACA "
        ],
        "key": {
            "A": {"item": "minecraft:light_blue_dye"},
            "B": {"item": "minecraft:stick"},
            "C": {"item": "minecraft:paper"},
        },
        "result": {
            "item": "pixelmon:mental_herb",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "ACDCA",
            "BDEDB",
            "ACDCA",
            " ABA "
        ],
        "key": {
            "A": {"item": "pixelmon:silicon"},
            "B": {"item": "pixelmon:crystal"},
            "C": {"item": "minecraft:diamond"},
            "D": {"item": "minecraft:green_dye"},
            "E": {"item": "minecraft:golden_helmet"},
        },
        "result": {
            "item": "pixelmon:rocky_helmet",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABABA",
            "BCBCB",
            "ABDBA",
            " DDD "
        ],
        "key": {
            "A": {"item": "minecraft:iron_ingot"},
            "B": {"item": "minecraft:gold_ingot"},
            "C": {"item": "pixelmon:wide_lens"},
            "D": {"item": "pixelmon:silicon"},
        },
        "result": {
            "item": "pixelmon:scope_lens",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "BCCCB",
            "DCECD",
            "BFFFB",
            " FFF "
        ],
        "key": {
            "A": {"item": "pixelmon:crystal"},
            "B": {"item": "minecraft:diamond"},
            "C": {"item": "minecraft:black_wool"},
            "D": {"item": "pixelmon:ruby"},
            "E": {"item": "minecraft:leather_boots"},
            "F": {"item": "pixelmon:aluminium_plate"},
        },
        "result": {
            "item": "pixelmon:heavy_duty_boots",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABC ",
            "CDDDA",
            "BCECB",
            "ADDDC",
            " CBA "
        ],
        "key": {
            "A": {"item": "pixelmon:iron"},
            "B": {"item": "pixelmon:silicon"},
            "C": {"item": "pixelmon:zinc"},
            "D": {"item": "pixelmon:amethyst"},
            "E": {"item": "minecraft:diamond"},
        },
        "result": {
            "item": "pixelmon:eviolite",
        }
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABCBA",
            "ADEDA",
            "ABCBA",
            " AAA "
        ],
        "key": {
            "A": {"item": "pixelmon:silicon"},
            "B": {"item": "minecraft:slime_ball"},
            "C": {"item": "pixelmon:iron"},
            "D": {"item": "pixelmon:zinc"},
            "E": {"item": "minecraft:clay_ball"},
        },
        "result": {
            "item": "pixelmon:light_clay",
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

    event.shaped('1x pixelmon:wide_lens', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:glass_pane'
    })

    event.shaped('1x pixelmon:mystic_water', [
        'AAA',
        'AAA',
        ' B '
    ], {
        A: 'minecraft:string',
        B: 'minecraft:potion'
    })

    event.shaped('1x pixelmon:expert_belt', [
        'AAA',
        'BAB',
        'AAA'
    ], {
        A: 'pixelmon:silk_scarf',
        B: 'minecraft:black_dye'
    })
    
    event.shaped('1x pixelmon:focus_sash', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:blaze_powder',
        B: 'pixelmon:expert_belt'
    })
    
    event.shaped('1x pixelmon:assault_vest', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pixelmon:zinc',
        B: 'minecraft:brick',
        C: 'minecraft:leather_chestplate'
    })
})

