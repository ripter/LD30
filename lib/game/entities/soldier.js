ig.module(
  'game.entities.soldier'
).requires(
  'game.entities.mob'
).defines(function() {
EntitySoldier = EntityMob.extend({
  size: {x: 64, y: 64}
  , animSheet: new ig.AnimationSheet('media/soldier_run.png', 64, 64)
  , speed: 800
  , points: 1
  , damage: 1
  , fireRate: 1
  , health: 1

  , init: function(x, y, settings) {
    this.parent(x, y, settings);

    this.addAnim('idle', .5, [0, 1, 0]);
  }

  , isLoaded: function() {
    return ig.game.rollDice('1d2') === 1;
  }
});
});
//   EntitySoldier = EntityBounds.extend({
//     size: {
//       x: 128,
//       y: 64
//     },
//     animSheet: new ig.AnimationSheet('media/soldier_run.png', 64, 64),
//     accelWalk: 800,
//     type: ig.Entity.TYPE.B,
//     checkAgainst: ig.Entity.TYPE.A,
//     shouldCheckBounds: true,
//     init: function(x, y, settings) {

//       this.parent(x, y, settings);

//       this.accel.x = 800;
//       this.addAnim('walkright', 1, [0, 1, 0]);
//       this.addAnim('walkleft', 1, [0, 1, 0]);
//       this.humanMove = Math.floor(Math.random() * 20) + 1;
//       this.timer = new ig.Timer(4);
//     },
//     getRandomInt: function(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
//     update: function() {
//       var width = 1024;
//       var myMarginLeft = (width/2) - this.pos.x;
//       var playerMarginLeft = (width/2) - ig.player.pos.x;

//       if (myMarginLeft > playerMarginLeft) {
//         this.currentAnim.flip.x = true;
//       } else {
//         this.currentAnim.flip.x = false;
//         this.accel.x = -800;
//       }
//       this.parent();
//     },
//     check: function(other) {
//       this.kill();
//     },
//     points: 75
//   });
// ig.EntityPool.enableFor(EntitySoldier);
// });
