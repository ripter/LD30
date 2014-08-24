ig.module( 'game.levels.belly' )
.requires( 'impact.image','game.entities.babyzilla','game.entities.fallSpawner','game.entities.babyPain','game.entities.healthMeter' )
.defines(function(){
LevelBelly=/*JSON[*/{
	"entities": [
		{
			"type": "EntityBabyzilla",
			"x": 200,
			"y": 464
		},
		{
			"type": "EntityFallSpawner",
			"x": 64,
			"y": 4,
			"settings": {
				"size": {
					"x": 900
				}
			}
		},
		{
			"type": "EntityBabyPain",
			"x": 108,
			"y": 724,
			"settings": {
				"size": {
					"x": 800
				}
			}
		},
		{
			"type": "EntityHealthMeter",
			"x": 64,
			"y": 100
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 16,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,24,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1]
			]
		}
	]
}/*]JSON*/;
});