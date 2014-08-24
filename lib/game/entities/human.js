ig.module(
  'game.entities.human'
).requires(
  'impact.entity'
).defines(function() {

EntityHuman = ig.Entity.extend({
  size: {x: 10, y: 16}
  , animSheet: new ig.AnimationSheet('media/man_run.png', 128, 64)
  , accelWalk: 800
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]),
	this.addAnim( 'walkleft', 0.1, [1,2] );
	this.addAnim( 'walkright', 0.1, [1,2] );
	this.humanMove = Math.floor(Math.random() * 20) +1;
	this.timer = new ig.Timer(1);
	this.movin = 0; 
//	this.distanceTo(ig.player);
  }

	, update: function() {
	var accel = this.accelWalk
		, dist = this.distanceTo(ig.player)
		, soldier = this.pos;

	if (humanMove < 10) {
		this.accel.x = -accel;
	}

	else if (humanMove > 10) {
		this.accel.x = accel;
	}

	this.parent();
  }

  , check: function(other) {
	other.addInventory('HUE-MAN'); console.log(ig.player.inventory);
	this.kill();
  }


	});
});
