import Ember from 'ember';

var users = [{
  name: "Michael",
  question: "Why is my code not working?",
  time: "",
}];

export default Ember.Route.extend({
  model() {
    return users;
  },
});
