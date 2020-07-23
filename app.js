new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if(this.health <=0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    },
    punchSound: function() {
      let snd;
      if(this.health <= 0) {
        snd = new Audio('./sound/endPunch.mp3');
      }
      else {
        snd = new Audio('./sound/punch.mp3');
      }
      snd.play();
    },
  },
  computed: {

  }
})