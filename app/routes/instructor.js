import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('user');
  },

  actions: {
    destroyUser(user, completedTime) {
      user.set('complete', true);
      user.set('doneTime', completedTime);
      user.save();
    }
  }
});
