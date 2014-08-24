ig.module( 'game.levels.test2' )
.requires( 'impact.image','game.entities.player','game.entities.levelTimer','game.entities.healthMeter','game.entities.bodyMeter','game.entities.soldier','game.entities.enemySpawner' )
.defines(function(){
LevelTest2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 108,
			"y": 572
		},
		{
			"type": "EntityLevelTimer",
			"x": 76,
			"y": 68,
			"settings": {
				"limit": 60
			}
		},
		{
			"type": "EntityHealthMeter",
			"x": 76,
			"y": 112
		},
		{
			"type": "EntityBodyMeter",
			"x": 76,
			"y": 160
		},
		{
			"type": "EntitySoldier",
			"x": 988,
			"y": 628
		},
		{
			"type": "EntityEnemySpawner",
			"x": 1040,
			"y": 40
		}
	],
	"layer": [
		{
			"name": "skyline",
			"width": 1,
			"height": 1,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/bg_sky.jpg",
			"repeat": false,
			"preRender": false,
			"distance": "9",
			"tilesize": 1024,
			"foreground": false,
			"data": [
				[1]
			]
		},
		{
			"name": "building",
			"width": 20,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/buildings.png",
			"repeat": false,
			"preRender": false,
			"distance": " 1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,14,14,14,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,14,14,7,7,7,5,0,5,5,5,5,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,1,1,0,4,4,4,9,14,14,6,5,13,0,0],
				[0,0,0,0,5,9,1,1,0,13,5,1,1,14,14,1,1,1,0,0],
				[0,0,0,0,4,4,4,4,15,1,1,1,4,14,1,1,1,1,1,0],
				[0,0,0,0,1,1,7,8,15,7,8,1,1,14,1,9,1,1,1,0],
				[0,0,0,0,1,1,1,1,14,1,1,1,1,0,1,1,1,1,13,0],
				[0,0,0,0,6,6,1,7,0,8,8,7,8,0,7,7,1,1,1,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "street_tile",
			"width": 20,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/streetTile.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 20,
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
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,12,12,12,12,0,12,12,12,12,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,12,12,0,0,0,0,12,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,12,12,0,12,12,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,12,12,0,12,0,12,12,12,12,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelTest2Resources=[new ig.Image('media/bg_sky.jpg'), new ig.Image('media/buildings.png'), new ig.Image('media/streetTile.png')];
});