ig.module(
  'game.entities.human'
).requires(
  'impact.entity'
).defines(function() {

EntityHuman = ig.Entity.extend({
  size: {x: 10, y: 16}
  , animSheet: new ig.AnimationSheet('media/player.png', 15, 100)
  , accelWalk: 800
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]),
	this.addAnim( 'walkleft', 0.1, [1] );
	this.addAnim( 'walkright', 0.1, [1] );
	this.humanMove = Math.floor(Math.random() * 20) +1;
	this.timer = new ig.Timer(1);
	this.movin = 0; 

  }

	, update: function() {
	var accel = this.accelWalk,
		humanMove = Math.floor(Math.random() * 20) +1
		, $human = Math.floor(Math.random() * 3) +1;

	if (humanMove < 10 && this.timer.delta() < 1) {
		this.accel.x = -accel;
		humanMove = humanMove + $human;
		this.timer.reset();
	}

	else if (humanMove > 10 && this.timer.delta() < 1) {
		this.accel.x = accel;
		humanMove = humanMove - $human;
		this.timer.reset();
	}

	this.parent();
  }

  , check: function(other) {
	other.addInventory('HUE-MAN'); console.log(ig.player.inventory);
	this.kill();
  }


	});
});
