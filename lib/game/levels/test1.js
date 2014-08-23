ig.module( 'game.levels.test1' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelTest1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 64,
			"y": 508
		}
	],
	"layer": [
		{
			"name": "building",
			"width": 8,
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
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,1,2,0,1,2,0]
			]
		},
		{
			"name": "collision",
			"width": 8,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 128,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[1,1,0,0,1,0,0,1]
			]
		}
	]
}/*]JSON*/;
LevelTest1Resources=[new ig.Image('media/two-room.png')];
});