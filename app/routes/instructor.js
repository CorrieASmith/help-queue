import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    destroyUser(user) {
      user.destroyRecord();
      this.transitionTo('instructor');
    }
  }
});
