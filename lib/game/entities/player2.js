ig.module(
  'game.entities.player2'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer2 = ig.Entity.extend({
  size: {x: 128, y: 128}
  , fistPos: {x: 5, y: 40}
  , animSheet: new ig.AnimationSheet('media/player.png', 128, 128)
  , accelWalk: 1200
  , maxVel: {x: 400, y: 800}
  , friction: {x: 800, y: 0}
  , jump: 500
  , type: ig.Entity.TYPE.A
  , inventory: []
  , state: 'idle'

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0, 1, 0]);
    this.addAnim('punch', .2, [2, 0], true);
    this.addAnim('duck', .2, [4]);
    this.addAnim('duckPunch', .2, [4, 5, 4], true);
    // global ref
    ig.player = this;
  }

  , update: function() {
    var accel = this.accelWalk;
    var state = this.state;
    var flip = false;

    if (ig.input.state('left')) {
      this.accel.x = -accel;
      this.anims.idle.flip.x = false;
      this.anims.punch.flip.x = false;
      flip = false;
    }
    else if (ig.input.state('right')) {
      this.accel.x = accel;
      this.anims.idle.flip.x = true;
      this.anims.punch.flip.x = true;
      flip = true;
    }
    else {
      this.accel.x = 0;
    }

    this.flip = flip;

    if (ig.input.state('drop')) {
      this.currentAnim = this.anims.duck;
      if (flip) {
        this.anims.duck.flip.x = true;
      }
    }

    if (this.standing) {
      if (ig.input.state('jump')) {
        this.vel.y = -this.jump;
      }
      else if (state === 'idle' && ig.input.pressed('punch')) {
        this.currentAnim = this.anims.punch.rewind();
        this.punch();
      }
    } else {
      if (ig.input.state('punch')) {
          this.currentAnim = this.anims.punch.rewind();
        }
    }

    this.parent();
  }

  , addInventory: function(item) {
    this.inventory.push(item);
  }

  , punch: function() {
    var flip = this.flip;
    var x = this.pos.x;
    var y = this.pos.y + this.fistPos.y;

	  if (flip) {
		  x += this.fistPos.x;
	  }

    console.log('punch', 0|x, 0|y);
    // Bam takes care of damage and such
    ig.game.spawnEntity(EntityBam, x, y);
  }
});
});