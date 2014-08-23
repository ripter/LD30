ig.module(
  'game.entities.player'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer = ig.Entity.extend({
  size: {x: 128, y: 128}
  , animSheet: new ig.AnimationSheet('media/player.png', 128, 128)
  , accelWalk: 1200
  , maxVel: {x: 400, y: 800}
  , friction: {x: 800, y: 0}
  , jump: 500
  , type: ig.Entity.TYPE.A
  , inventory: []

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0, 1, 0]);
    this.addAnim('punch', .2, [2, 0], true);
    this.addAnim('duck', .2, [4]);
    this.addAnim('duckPunch', .2, [4, 5, 4], true);
    // global ref
    ig.player = this;
  }
  , flipped: false
  , update: function() {
    var accel = this.accelWalk;

    if (ig.input.state('left') || ig.input.pressed('left')) {
      this.flip = false;
      this.accel.x = -accel;
      this.anims.duck.flip.x = false;
      this.anims.idle.flip.x = false;
      this.anims.punch.flip.x = false;
    }

    if (ig.input.state('right') || ig.input.pressed('right')) {
      this.flip = true;
      this.accel.x = accel;
      this.anims.duck.flip.x = true;
      this.anims.idle.flip.x = true;
      this.anims.punch.flip.x = true;
    }

    if (ig.input.pressed('drop')) {
      this.currentAnim = this.anims.duck;
    }

    if (!ig.input.state('right') && !ig.input.state('left')) {
      this.accel.x = 0;
    }

    if (this.standing) {
      if (ig.input.state('jump')) {
        this.vel.y = -this.jump;
      }
      else if (ig.input.state('punch')) {
        this.currentAnim = this.anims.punch.rewind();
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
    // get the tile

  }
});
});