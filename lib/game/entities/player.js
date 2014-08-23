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
  , state: 'idle'

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', 1, [0]);
    this.addAnim('punch', 1, [0, 0], true);

    // global ref
    ig.player = this;
  }

  , update: function() {
    var accel = this.accelWalk;

    if (ig.input.state('left')) {
			this.accel.x = -accel;
      this.anims.idle.flip.x = false;
    }
    else if (ig.input.state('right')) {
		  this.accel.x = accel;
      this.anims.idle.flip.x = true;
	  }
    else {
			this.accel.x = 0;
		}

    if (this.standing) {
      if (ig.input.state('jump')) {
        this.vel.y = -this.jump;
      }
	    else if (ig.input.state('punch')) {
			  this.punch();
			}
    }

    this.parent();
  }

  , addInventory: function(item) {
    this.inventory.push(item);
  }

  , punch: function() {
    var state = this.state;
    var anim = this.anims.punch;
    var map = this.mapBuilding;
    var x = this.pos.x;
	  var y = this.pos.y;
    var tile;

    // if we are already punching, just exit
	  if (state === 'punch') {
      console.log('loopCount', anim.loopCount);
      if (anim.loopCount === 1) {
				this.state = 'idle';
				anim.rewind();
      }

			return;
		}

    // the map isn't ready on init, so get it on first issue
    if (!map) {
			this.mapBuilding = map = _.where(ig.game.backgroundMaps, {name: 'building'})[0];
    }

    // get the tile
    tile = map.getTile(x, y);
    console.log(tile);
  }
});
});