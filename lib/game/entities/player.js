ig.module(
  'game.entities.player'
).requires(
  'impact.entity'
).defines(function() {

EntityPlayer = ig.Entity.extend({
  size: {x: 128, y: 128}
  , fistPos: {x: 5, y: 40}
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
    this.addAnim('duck', .2, [5]);
    this.addAnim('duckPunch', .4, [4, 5, 4], true);
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
      this.anims.duckPunch.flip.x = false;
    }

    if (ig.input.state('right') || ig.input.pressed('right')) {
      this.flip = true;
      this.accel.x = accel;
      this.anims.duck.flip.x = true;
      this.anims.idle.flip.x = true;
      this.anims.punch.flip.x = true;
      this.anims.duckPunch.flip.x = true;
    }

    if (!ig.input.state('right') && !ig.input.state('left')) {
      this.accel.x = 0;
    }

    if (this.standing) {
      if (ig.input.state('jump')) {
        this.vel.y = -this.jump;
      }
    }

    if (ig.input.state('drop') && !ig.input.state('punch')) {
      this.currentAnim = this.anims.duck;
    } else if (ig.input.state('drop') && ig.input.pressed('punch')) {
      this.currentAnim = this.anims.duckPunch;
      this.punch('duckPunch');
    } else if (ig.input.pressed('punch') && !ig.input.state('drop')) {
        this.currentAnim = this.anims.punch.rewind();
        this.punch('punch');
    }

    this.parent();
  }

  , addInventory: function(item) {
    this.inventory.push(item);
  }

  , punch: function(typeStr) {
    // get the tile    var flip = this.flip;
    var x = this.pos.x;
    var y = this.pos.y + this.fistPos.y;

    if (this.flip) {
      x += this.fistPos.x;
    }

    console.log('punch', 0|x, 0|y);
    // Bam takes care of damage and such
    ig.game.spawnEntity(EntityBam, x, y);
  }
});
});