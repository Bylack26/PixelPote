// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('lemon_pie')
		.displayName('Lemon Pie')
		.food(food => {
			food.hunger(8)
			food.saturation(0.4)
			food.alwaysEdible(false)
			food.fastToEat(false)
		})
		.model('minecraft:item/pumpkin:pie')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})