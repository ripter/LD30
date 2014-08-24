ig.module(
  'game.entities.enemySpawner'
).requires(
  'impact.entity',
  'game.entities.bounds',
  'game.entities.helicopter',
  'game.entities.tank',
  'game.entities.soldier',
  'game.entities.man'
).defines(function() {

  EntityEnemySpawner = EntityBounds.extend({
    size: {
      x: 32,
      y: 32
    },
    _wmDrawBox: true,
    timerArr: [],
    shouldCheckBounds: false,
    difficulty: ig.levelCount,
    createTimer: function (type, limit) {
      var timerObj = {
        type: type,
        timer: new ig.Timer(),
        limit: limit
      };
      return timerObj;
    },

    setTimer: function (timerObj) {
      timerObj.timer.set(timerObj.limit);
    },

    init: function(x, y, settings) {
      var enemyArr = [{type: 'helicopter', limit: 10}, {type: 'soldier', limit: 6}, {type: 'man', limit: 6}, {type: 'tank', limit: 20}];
      var i = 0;
      var timer;

      for (i; i < enemyArr.length; i +=1) {
        timer = this.createTimer(enemyArr[i].type, enemyArr[i].limit);
        this.timerArr.push(timer);
      }

      this.parent(x, y, settings);
    },

    update: function() {
      var cb = null,
        i = 0,
        self = this,
        timeArrLen = self.timerArr.length;

      for (i; i < timeArrLen; i +=1) {

        if (self.timerArr[i].timer.delta() > 0) {
          self.timerArr[i].timer.set(self.getRandomInt(1, 2));

          switch (self.timerArr[i].type) {
            case 'helicopter':
            cb = self.spawnHelicopter;
            break;
            case 'man':
            cb = self.spawnMan;
            break;
            case 'soldier':
            cb = self.spawnSoldier;
            break;
            case 'tank':
            cb = self.spawnTank;
            break;
          }

          cb(self);

        }

        self.parent();
      }
    },

    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    spawnHelicopter: function(self) {

      var randomHeight = self.getRandomInt(85, 130);
      var bounds = self.getBounds();
      var helicopter = {
        type: EntityHelicopter,
        x: bounds.visibleRight,
        y: randomHeight
      };

      var settings = [{accel: { x:1000 }, direction: bounds.visibleLeft, flip: true}, {accel:{x:-1000}, direction: bounds.visibleRight, flip: false}];
      var picker = settings[self.getRandomInt(0,1)];

      ig.game.spawnEntity(helicopter.type, picker.direction, randomHeight, picker);
    },
    spawnTank: function(self) {

      var bounds = self.getBounds();
      var settings = [{accel: { x:400 }, direction: bounds.visibleLeft, flip: true}, {accel:{x:-400}, direction: bounds.visibleRight, flip: false}];
      var picker = settings[self.getRandomInt(0,1)];

      ig.game.spawnEntity(EntityTank, picker.direction, 700, picker);

    },
    spawnSoldier: function(self) {

      var bounds = self.getBounds();
      var settings = {};

      ig.game.spawnEntity(EntitySoldier, bounds.visibleRight, 700, settings);

    },

    spawnMan: function(self) {

      var bounds = self.getBounds();
      var settings = {};

      ig.game.spawnEntity(EntityMan, bounds.visibleLeft, 700, settings);
    }
  });
});
