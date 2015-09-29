import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(user) {
      if (confirm('Has this question been answered?')) {
        var completedTime = moment().format("h:mm a");
        this.sendAction('destroyUser', user, completedTime);
      }
    }
  }
});
