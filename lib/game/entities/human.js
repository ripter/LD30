ig.module(
  'game.entities.human'
).requires(
  'impact.entity'
).defines(function() {

EntityHuman = ig.Entity.extend({
  size: {x: 10, y: 16}
  , animSheet: new ig.AnimationSheet('media/player.png', 15, 20)
  , accelWalk: 800
  , type: ig.Entity.TYPE.B
  , checkAgainst: ig.Entity.TYPE.A

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [1]),
	this.addAnim( 'walkleft', 0.1, [1] );
	this.addAnim( 'walkright', 0.1, [1] );
	this.humanMove = Math.floor(Math.random() *100) +1;
	this.timer = new ig.Timer();
	this.endTimer = this.timer.set(3);
  }

	  	, update: function() {
	  	var accel = this.accelWalk
	  	, humanMove = this.humanMove
		, timer = this.timer
		, endTimer = this.endTimer;

	  	if (humanMove > 50) {
			if (timer.delta() < .5) {
		  		this.accel.x = - accel;
			}
	  	}

	  	else if (humanMove < 50) {
			if (timer.delta() < .5) {
				this.accel.x = accel;
			} 

	  	}

	  	this.parent();
	  }

	  , check: function(other) {
		other.addInventory('HUE-MAN'); console.log(ig.player.inventory);
		this.kill();
	  }


	});
});
