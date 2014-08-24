ig.module(
  'game.entities.soldier'
).requires(
  'impact.entity'
).defines(function() {

EntitySoldier = ig.Entity.extend({
  size: {x: 128, y: 64}
  , animSheet: new ig.AnimationSheet('media/man_run.png', 64, 64)
  , accelWalk: 800
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', .2, [0, 1, 0]);
	this.addAnim( 'walkleft', 0.4, [0,1,0] );
	this.addAnim( 'walkright', 0.4, [0,1,0] );
	this.humanMove = Math.floor(Math.random() * 20) +1;
	this.timer = new ig.Timer(1);
	this.movin = 0;
  }

	, update: function() {
	var accel = this.accelWalk
		, playa = ig.player.pos.x
		, dist = this.distanceTo(ig.player)
		, soldier = this.pos.x;

	if (soldier > playa && dist > 300) {
		this.currentAnim = this.anims.walkleft;
		this.accel.x = -accel;
	}

	else if (soldier > playa && dist > 300) {
		this.currentAnim = this.anims.walkright;
		this.accel.x = accel;
	} else if (dist < 300) {
		this.currentAnim = this.anims.idle;
		this.accel.x = 0;
	}

	this.parent();
  }

  , check: function(other) {
	other.addInventory('HUE-MAN'); console.log(ig.player.inventory);
	this.kill();
  }


	});
});
