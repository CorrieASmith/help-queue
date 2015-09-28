import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(user) {
      if (confirm('Has this question been answered?')) {
        this.sendAction('destroyUser', user);
      }
    }
  }
});
