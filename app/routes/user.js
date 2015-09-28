import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('user', params);
      newQuestion.save();
      this.transitionTo('success', newQuestion);
    },

    // cancelQuestion(user) {
    //   // var user = this.store.find()
    //   // user.destroyRecord();
    //   // this.transitionTo('index');
    //   if(confirm('Have you figured it out?')) {
    //     this.sendAction('deleteQuestion', user);
    //   }
    // }
  }
});
