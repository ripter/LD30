ig.module(
  'game.entities.tank'
).requires(
  'impact.entity'
  , 'game.entities.score'
  , 'game.entities.explosion'
).defines(function() {
EntityTank = ig.Entity.extend({
  size: {x: 128, y: 64}
  , maxVel: {x: 20, y: 20}
  , animSheet: new ig.AnimationSheet('media/tank-damage.png', 128, 64)
  , type: ig.Entity.TYPE.B
  , collides: ig.Entity.COLLIDES.PASSIVE
  , flip: true
  , speed: 10
  , points: 500
  , damage: 5
  , fireTimer: new ig.Timer()
  , fireRate: 5

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
    this.currentAnim.flip.x = this.flip;

    // travel in one direction the entire time
    if (!this.flip) {
			this.speed = -this.speed;;
		}

		this.fireTimer.set(1);
  }

  , update: function() {
		var x = this.pos.x;
	  var y = this.pos.y;
    var speed = this.speed;

    // always face the player
    this.flip = ig.player.pos.x > x;

    if (this.flip) {
      x += this.size.x;
    } else {
			speed = -speed;
    }

    this.fire(x, y);
		this.accel.x = speed;
    this.currentAnim.flip.x = this.flip;

    this.parent();
  }

  , fire: function(x, y) {
    var delta = this.fireTimer.delta();
    var isLoaded = ig.game.rollDice('1d4', [1, 2]);

    if (delta < 1) {
			return;
		}

    if (isLoaded) {
      ig.game.spawnEntity('EntityBullet', x, y, {
				damage: this.damage
			});
    }

		this.fireTimer.set(this.fireRate);
  }

  // , checkBounds: function() {
  //   var x = this.pos.x;
  //   var size = this.size.x;
  //   var width = ig.game.collisionMap.width * ig.game.collisionMap.tilesize;

  //   if (x - size < 0) {
  //     this.kill();
  //   } else if (x > width) {
	// 		this.kill();
	// 	}
  // }

  , kill: function() {
    var x = this.pos.x;
    var y = this.pos.y;

    // did we die because of damage?
    if (this.health < 1) {
      ig.game.spawnEntity(EntityScore, x, y, {
        points: this.points
      });
      //ig.game.spawnEntity(EntityExplosion, x, y);
    }
    this.parent();
  }
});
  /*
EntityTank = EntityBounds.extend({
  size: {x: 256, y: 64},
  accelWalk: 10,
  maxVel: {x: 20, y: 20},
  animSheet: new ig.AnimationSheet('media/tank-damage.png', 128, 64),
  type: ig.Entity.TYPE.B,
  checkAgainst: ig.Entity.TYPE.A,
  shouldCheckBounds: true,
  points: 100,

  init: function(x, y, settings) {
    this.parent(x, y, settings);
    this.addAnim('idle', 1, [0]);
    this.addAnim('walkleft', 1, [0]);
    this.addAnim('walkright', 1, [0]);
    this.addAnim('damaged', 3, [1]);
    var accel = this.accelWalk;
    this.accel.x = settings.accel.x;
    this.anims.idle.flip.x = settings.flip;

    this.timer = new ig.Timer(this.getRandomInt(2,10));
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  update: function() {
    var accel = this.accelWalk,
      player = ig.player.pos.x,
      dist = this.distanceTo(ig.player),
      soldier = this.pos.x;

    if (this.timer.delta() > 0) {
      ig.game.spawnEntity(EntityBullet, (this.pos.x - 6), (this.pos.y - 6));
      this.timer.set(this.getRandomInt(2,10));
    }

    if (soldier > player) {
      var totDist = soldier - player;

      this.currentAnim = this.anims.walkright;
      this.accel.x = -accel;

      if (totDist < 150) {

        this.currentAnim = this.anims.idle;
        this.accel.x = 0;
        return;
      }
    } else if (soldier < player) {
      this.currentAnim = this.anims.walkleft;
      this.accel.x = accel;

      if (dist < 150) {
        this.currentAnim = this.anims.idle;
        this.accel.x = 0;
      }
    }

    this.parent();
  },

  check: function(other) {
    //this.kill();
  }
});
*/
});
