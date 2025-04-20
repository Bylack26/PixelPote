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
            "A": { "item": "pixelmon:ruby" },
            "B": { "item": "minecraft:blaze_powder" },
            "C": { "item": "pixelmon:orb" },
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
            "A": { "item": "pixelmon:amethyst" },
            "B": { "item": "pixelmon:black_sludge" },
            "C": { "item": "pixelmon:orb" },
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
            "CABAC",
            "CCDCC",
            "CDEDC",
            " CDC "
        ],
        "key": {
            "A": { "item": "pixelmon:protein" },
            "B": { "item": "pixelmon:muscle_band" },
            "C": { "item": "minecraft:white_wool" },
            "D": { "item": "pixelmon:sapphire" },
            "E": { "item": "pixelmon:ruby" }
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
            "DABAD",
            "CDCDC",
            "DEEED",
            " CEC "
        ],
        "key": {
            "A": { "item": "pixelmon:carbos" },
            "B": { "item": "pixelmon:silk_scarf" },
            "C": { "item": "minecraft:white_wool" },
            "D": { "item": "minecraft:cyan_wool" },
            "E": { "item": "pixelmon:sapphire" },
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
            "CABAC",
            "CCCCC",
            "CDCDC",
            " CCC "
        ],
        "key": {
            "A": { "item": "pixelmon:calcium" },
            "B": { "item": "pixelmon:wise_glasses" },
            "C": { "item": "minecraft:blaze_rod" },
            "D": { "item": "pixelmon:ruby" },
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
            "A": { "item": "minecraft:paper" },
            "B": { "item": "minecraft:ink_sac" },
            "C": { "item": "pixelmon:protein" },
            "D": { "item": "pixelmon:calcium" },
        },
        "result": {
            "item": "pixelmon:weakness_policy",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " KKK ",
            "KABCK",
            "KDEFK",
            "KGHIK",
            " KJK ",
        ],
        "key": {
            "A": { "item": "pixelmon:cheri_berry" },
            "B": { "item": "pixelmon:chesto_berry" },
            "C": { "item": "pixelmon:pecha_berry" },
            "D": { "item": "pixelmon:rawst_berry" },
            "E": { "item": "pixelmon:aspear_berry" },
            "F": { "item": "pixelmon:leppa_berry" },
            "G": { "item": "pixelmon:oran_berry" },
            "H": { "item": "pixelmon:persim_berry" },
            "I": { "item": "pixelmon:lum_berry" },
            "J": { "item": "pixelmon:sitrus_berry" },
            "K": { "item": "minecraft:apple" }
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
            "A": { "item": "minecraft:red_dye" },
            "B": { "item": "minecraft:stick" },
            "C": { "item": "minecraft:paper" },
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
            "A": { "item": "minecraft:white_dye" },
            "B": { "item": "minecraft:stick" },
            "C": { "item": "minecraft:paper" },
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
            "A": { "item": "minecraft:light_blue_dye" },
            "B": { "item": "minecraft:stick" },
            "C": { "item": "minecraft:paper" },
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
            "A": { "item": "pixelmon:silicon" },
            "B": { "item": "pixelmon:crystal" },
            "C": { "item": "minecraft:diamond" },
            "D": { "item": "minecraft:green_dye" },
            "E": { "item": "minecraft:golden_helmet" },
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
            "A": { "item": "minecraft:iron_ingot" },
            "B": { "item": "minecraft:gold_ingot" },
            "C": { "item": "pixelmon:wide_lens" },
            "D": { "item": "pixelmon:silicon" },
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
            "A": { "item": "pixelmon:crystal" },
            "B": { "item": "minecraft:diamond" },
            "C": { "item": "minecraft:black_wool" },
            "D": { "item": "pixelmon:ruby" },
            "E": { "item": "minecraft:leather_boots" },
            "F": { "item": "pixelmon:aluminium_plate" },
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
            "A": { "item": "pixelmon:iron" },
            "B": { "item": "pixelmon:silicon" },
            "C": { "item": "pixelmon:zinc" },
            "D": { "item": "pixelmon:amethyst" },
            "E": { "item": "minecraft:diamond" },
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
            "A": { "item": "pixelmon:silicon" },
            "B": { "item": "minecraft:slime_ball" },
            "C": { "item": "pixelmon:iron" },
            "D": { "item": "pixelmon:zinc" },
            "E": { "item": "minecraft:clay_ball" },
        },
        "result": {
            "item": "pixelmon:light_clay",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "BACAB",
            "BCDCB",
            "BACAB",
            " AAA "
        ],
        "key": {
            "A": { "item": "minecraft:gold_ingot" },
            "B": { "item": "pixelmon:aluminium_plate" },
            "C": { "item": "pixelmon:amethyst" },
            "D": { "item": "minecraft:diamond" },
        },
        "result": {
            "item": "pixelmon:booster_energy",
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
            "A": { "item": "minecraft:black_dye" },
            "B": { "item": "minecraft:slime_ball" },
            "C": { "item": "minecraft:shulker_box" },
        },
        "result": {
            "item": "pixelmon:loaded_dice",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABCBA",
            "ADEDA",
            "ACBCA",
            " AAA "
        ],
        "key": {
            "A": { "item": "pixelmon:amethyst" },
            "B": { "item": "pixelmon:calcium" },
            "C": { "item": "pixelmon:protein" },
            "D": { "item": "minecraft:gold_ingot" },
            "E": { "item": "pixelmon:orb" },
        },
        "result": {
            "item": "pixelmon:life_orb",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABCDA",
            "ACECA",
            "ADCBA",
            " AAA "
        ],
        "key": {
            "A": { "item": "minecraft:red_wool" },
            "B": { "item": "pixelmon:focus_sash" },
            "C": { "item": "minecraft:diamond" },
            "D": { "item": "pixelmon:black_belt" },
            "E": { "item": "pixelmon:expert_belt" },
        },
        "result": {
            "item": "pixelmon:destiny_knot",
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
            "A": { "item": "minecraft:lime_wool" },
            "B": { "item": "pixelmon:hp_up" },
            "C": { "item": "pixelmon:focus_band" },
        },
        "result": {
            "item": "pixelmon:power_weight",
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
            "A": { "item": "minecraft:red_wool" },
            "B": { "item": "pixelmon:protein" },
            "C": { "item": "pixelmon:focus_band" },
        },
        "result": {
            "item": "pixelmon:power_bracer",
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
            "A": { "item": "minecraft:orange_wool" },
            "B": { "item": "pixelmon:iron" },
            "C": { "item": "pixelmon:focus_band" },
        },
        "result": {
            "item": "pixelmon:power_belt",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " AAA ",
            "ABBBA",
            "DBCBD",
            "ABBBA",
            " AAA "
        ],
        "key": {
            "A": { "item": "minecraft:purple_wool" },
            "B": { "item": "pixelmon:calcium" },
            "C": { "item": "pixelmon:focus_band" },
            "D": { "item": "minecraft:light_blue_wool" },
        },
        "result": {
            "item": "pixelmon:power_lens",
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
            "A": { "item": "minecraft:yellow_wool" },
            "B": { "item": "pixelmon:zinc" },
            "C": { "item": "pixelmon:focus_band" },
        },
        "result": {
            "item": "pixelmon:power_band",
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
            "A": { "item": "minecraft:light_blue_wool" },
            "B": { "item": "pixelmon:carbos" },
            "C": { "item": "pixelmon:focus_band" },
        },
        "result": {
            "item": "pixelmon:power_anklet",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "ACBCA",
            "BBDBB",
            "ACBCA",
            " ABA "
        ],
        "key": {
            "A": { "item": "pixelmon:silicon" },
            "B": { "item": "minecraft:gold_ingot" },
            "C": { "item": "minecraft:diamond" },
            "D": { "item": "minecraft:iron_helmet" },
        },
        "result": {
            "item": "pixelmon:exp_share",
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "pattern": [
            " ABA ",
            "ACBCA",
            "BBDBB",
            "ACBCA",
            " ABA "
        ],
        "key": {
            "A": { "item": "pixelmon:silicon" },
            "B": { "item": "minecraft:emerald" },
            "C": { "item": "minecraft:diamond" },
            "D": { "item": "pixelmon:exp_share" },
        },
        "result": {
            "item": "pixelmon:exp_all",
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

    event.shaped('1x pixelmon:expert_belt', [
        'A  ',
        ' B ',
        '  A'
    ], {
        A: 'minecraft:shears',
        B: 'pixelmon:black_belt'
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

    event.shaped('1x pixelmon:air_balloon', [
        'AA ',
        'AA ',
        ' BB'
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:string'
    })

    event.shaped('1x pixelmon:red_card', [
        'AB ',
        'AB ',
        '   '
    ], {
        A: 'minecraft:paper',
        B: 'minecraft:red_dye'
    })

    event.shaped('1x pixelmon:heat_rock', [
        '  A',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:blaze_rod',
        B: 'minecraft:granite'
    })

    event.shaped('1x pixelmon:damp_rock', [
        'AAA',
        ' B ',
        '   '
    ], {
        A: 'minecraft:water_bucket',
        B: 'minecraft:granite'
    })

    event.shaped('1x pixelmon:icy_rock', [
        ' A ',
        ' B ',
        'A A'
    ], {
        A: 'minecraft:ice',
        B: 'minecraft:granite'
    })

    event.shaped('1x pixelmon:smooth_rock', [
        '  A',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:sand',
        B: 'minecraft:granite'
    })

    event.shaped('1x pixelmon:gold_hourglass', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'minecraft:sand'
    })

    event.shaped('1x pixelmon:wise_glasses', [
        'ABA',
        'CAC',
        '   '
    ], {
        A: 'pixelmon:aluminium_ingot',
        B: 'minecraft:book',
        C: 'minecraft:glass_pane',
    })

    event.shaped('1x pixelmon:muscle_band', [
        '  A',
        'AAA',
        'B B'
    ], {
        A: 'minecraft:yellow_wool',
        B: 'pixelmon:power_herb',
    })

    event.shaped('1x pixelmon:magnet', [
        'AAA',
        'ABA',
        'CBD'
    ], {
        A: 'minecraft:stone',
        B: 'minecraft:redstone',
        C: 'minecraft:red_wool',
        D: 'minecraft:blue_wool',
    })

    event.shaped('1x pixelmon:charcoal', [
        '   ',
        'AAA',
        '   '
    ], {
        A: 'minecraft:coal_block',
    })

    event.shaped('1x pixelmon:dragon_fang', [
        '  A',
        ' AA',
        'AA '
    ], {
        A: 'minecraft:diorite',
    })

    event.shaped('1x pixelmon:twisted_spoon', [
        '  A',
        ' AA',
        'BA '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:bowl',
    })

    event.shaped('1x pixelmon:never_melt_ice', [
        ' A ',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:ice',
    })

    event.shaped('1x pixelmon:miracle_seed', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:wheat_seeds',
    })

    event.shaped('1x pixelmon:metal_coat', [
        '   ',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'pixelmon:aluminium_plate',
    })

    event.shaped('1x pixelmon:poison_barb', [
        '  A',
        ' A ',
        'B  '
    ], {
        A: 'minecraft:stick',
        B: 'pixelmon:black_sludge',
    })

    event.shaped('1x pixelmon:hard_stone', [
        ' A ',
        'AAA',
        ' A '
    ], {
        A: 'minecraft:stone',
    })

    event.shaped('1x pixelmon:silver_powder', [
        '   ',
        ' A ',
        'BBB'
    ], {
        A: 'minecraft:sugar',
        B: 'minecraft:green_carpet',
    })

    event.shaped('1x pixelmon:soft_sand', [
        '   ',
        'BAB',
        'BBB'
    ], {
        A: 'minecraft:sand',
        B: 'minecraft:purple_carpet',
    })

    event.shaped('1x pixelmon:spell_tag', [
        'ABA',
        'CBC',
        'CBC'
    ], {
        A: 'minecraft:red_dye',
        B: 'minecraft:paper',
        C: 'minecraft:black_dye',
    })

    event.shaped('1x pixelmon:spell_tag', [
        'ABA',
        'CBC',
        'CBC'
    ], {
        A: 'minecraft:red_dye',
        B: 'minecraft:paper',
        C: 'minecraft:black_dye',
    })

    event.shaped('1x pixelmon:fairy_wand', [
        '  A',
        'BCB',
        'CB '
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:pink_dye',
        C: 'minecraft:stick',
    })

    event.shaped('1x pixelmon:sharp_beak', [
        'AAA',
        'A A',
        ' AA'
    ], {
        A: 'minecraft:gold_ingot',
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

    event.shaped('1x pixelmon:mystic_water', [
        'AAA',
        'AAA',
        ' B '
    ], {
        A: 'minecraft:string',
        B: 'minecraft:potion'
    })

    event.shaped('1x pixelmon:black_belt', [
        'AAA',
        'BAB',
        'AAA'
    ], {
        A: 'pixelmon:silk_scarf',
        B: 'minecraft:black_dye'
    })

    event.shaped('1x pixelmon:silk_scarf', [
        '   ',
        'AAA',
        'BBB'
    ], {
        A: 'minecraft:white_wool',
        B: 'pixelmon:crystal'
    })

    event.shaped('1x pixelmon:safety_goggles', [
        'ABA',
        'CDC',
        'AAA'
    ], {
        A: 'minecraft:green_dye',
        B: 'pixelmon:black_belt',
        C: "pixelmon:ruby",
        D: "pixelmon:wise_glasses",
    })

    event.shaped(
        "create:creative_motor",
        [
            "ABA",
            "B B",
            "ABA"
        ],
        {
            A: "create:copper_sheet",
            B: "minecraft:redstone"

        }
    )

    event.shapeless('1x kubejs:lemon_pie', ['pamhc2trees:lemonitem', 'minecraft:sugar', 'minecraft:egg'])

    event.remove({ output: 'pamhc2foodextended:lemonpieitem' })

    event.shapeless(Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1), [
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',
        'minecraft:diamond_sword'
    ])

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "forge:cobblestone"
            }
        ],
        "results": [
            {
                "item": "minecraft:iron_ingot",
                "count": 3,
                "chance": 0.2
            },
            {
                "item": "pixelmon:aluminium_ingot",
                "count": 3,
                "chance": 0.2
            },
            {
                "item": "minecraft:silver_ingot",
                "count": 3,
                "chance": 0.2
            },
            {
                "item": "pixelmon:platinum_ingot",
                "count": 3,
                "chance": 0.2
            }
        ],
        "processingTime": 300
    })
})

