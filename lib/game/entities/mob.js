ig.module(
  'game.entities.mob'
).requires(
  'impact.entity'
  , 'impact.entity-pool'
  , 'game.entities.score'
).defines(function() {
EntityMob = ig.Entity.extend({
  type: ig.Entity.TYPE.B
  , collides: ig.Entity.COLLIDES.PASSIVE
  , flip: true
  , speed: 10
  , points: 500
  , damage: 5
  , fireRate: 5

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.fireTimer = new ig.Timer(1);
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
    var isLoaded = this.isLoaded();

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

ig.EntityPool.enableFor(EntityMob);
});