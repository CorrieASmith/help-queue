import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('instructor');
  this.route('success', {path: "/success/:user_id"});
});

export default Router;
