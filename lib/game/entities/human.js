ig.module(
  'game.entities.human'
).requires(
  'impact.entity'
).defines(function() {

	EntityHuman = ig.Entity.extend({
		size: {x: 10, y: 16}
		, animSheet: new ig.AnimationSheet('media/player.png', 15, 20)
		, accelWalk: 800

		, init: function(x, y, settings) {
		this.parent(x, y, settings);

		this.addAnim('idle', 1, [1])
		, this.addAnim('walk', 2, [1]);
		}

		, update: function() {
		var accel = this.accelWalk
		, humanMove = Math.floor(Math.random() * 100) + 1;

		if (humanMove > 50) {
				this.accel.x = -accel;
		}

		else if (humanMove < 50) {
			  this.accel.x = accel;
		}

		else {
			this.accel.x = 2
			, this.accel.y = 10001;
		}

		this.parent();
	  }


	});
});
