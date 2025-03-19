// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')
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


onEvent('jei.hide.items', event => {
	event.hide('pamhc2foodextended:lemonpieitem')
})

onEvent('jei.add.items', event => {
	ballTypes.forEach(type => {
		event.add(Item.of('pixelmon:poke_ball', {PokeBallID: type + "_ball"}))
		event.add(Item.of("pixelmon:poke_ball_lid", {PokeBallID: type + "_ball"}))
	});
	
})