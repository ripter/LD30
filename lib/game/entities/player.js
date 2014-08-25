ig.module(
  'game.entities.player'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer = ig.Entity.extend({
  size: {x: 116, y: 136}
  , fistPos: {x: 5, y: 40}
  , animSheet: new ig.AnimationSheet('media/player.png', 136, 136)
  , accelWalk: 1200
  , maxVel: {x: 400, y: 800}
  , friction: {x: 800, y: 0}
  , jump: 500
  , type: ig.Entity.TYPE.A
  , bodiesNeeded: 5
  , health: 20

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0, 1, 0]);
    this.addAnim('punch', .5, [2, 3], true);
    this.addAnim('duck', .2, [5]);
    this.addAnim('duckPunch', .5, [4, 5, 4], true);

    // global ref
    ig.player = this;
  }
  , flipped: false
  , update: function() {
    var accel = this.accelWalk;

    if (ig.input.state('left') || ig.input.pressed('left')) {
      this.flip = false;
      this.accel.x = -accel;
    }

    if (ig.input.state('right') || ig.input.pressed('right')) {
      this.flip = true;
      this.accel.x = accel;
    }

    if (!ig.input.state('right') && !ig.input.state('left')) {
      this.accel.x = 0;
    }

    if (this.standing) {
      if (ig.input.state('jump')) {
        this.vel.y = -this.jump;
      }
    }

    if (ig.input.state('drop') && !ig.input.pressed('punch')) {
      this.currentAnim = this.anims.duck;
    } else if (ig.input.state('drop') && ig.input.pressed('punch')) {
      this.currentAnim = this.anims.duckPunch;
      this.punch('duckPunch');
    } else if (ig.input.pressed('punch') && !ig.input.state('drop')) {
      this.currentAnim = this.anims.punch.rewind();
      this.punch('punch');
    } else if (!ig.input.state('drop')) {
      this.currentAnim = this.anims.idle;
    }

    this.currentAnim.flip.x = this.flip;

    this.parent();
  }


  , addInventory: function(item) {
    ig.inventory.push(item);

    if (item === 'Human') {
      this.bodiesNeeded -= 1;
    }
  }

  , punch: function(type) {
    // get the tile    var flip = this.flip;
    var x = this.pos.x;
    var y = this.pos.y + this.fistPos.y;

    if (this.flip) {
      x += this.size.x - (this.fistPos.x * 2) + 50;
    } else {
      x += this.fistPos.x - 25;
    }

    // punching while ducked should punch low
    if (type === 'duckPunch') {
      y += 30;
    }

    // Bam takes care of damage and such
    ig.game.spawnEntity(EntityBam, 0|x, 0|y, {
			damage: 5
		});
  }

  , kill: function() {
    this.health = 0;

    this.parent();
  }
});
});