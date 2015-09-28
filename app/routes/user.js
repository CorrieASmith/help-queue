import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('user', params);
      newQuestion.save();
    }
  }
});
