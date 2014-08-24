ig.module( 'game.levels.test1' )
.requires( 'impact.image','game.entities.player','game.entities.human' )
.defines(function(){
LevelTest1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 72,
			"y": 512,
			"settings": {
				"health": 30
			}
		},
		{
			"type": "EntityHuman",
			"x": 452,
			"y": 460
		}
	],
	"layer": [
		{
			"name": "building",
			"width": 16,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/two-room.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,2,0,1,2,0,0,0,0,0,0,0,0,0]
			]
		},
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
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,12,12,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,12,12,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,12,12,0,0,0,0,12,12,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelTest1Resources=[new ig.Image('media/two-room.png')];
});