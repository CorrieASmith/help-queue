import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(user) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyUser', user);
      }
    }
  }
});
