import Ember from 'ember';

export default Ember.Component.extend({
  condition1: false,
  condition2: false,
  condition3: false,

  actions: {
    changeit() {
      this.set('condition1', true);
    },

    changeit2() {
      this.set('condition2', true);
      this.set('condition1', false);
    },

    changeit3() {
      this.set('condition3', true);
      this.set('condition2', false);
    },

    newQuestion() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        time: this.get('time') ? this.get('time') : ""
      };
      this.set('condition3', false);
      this.sendAction("save2", params);
    },
  }
});
