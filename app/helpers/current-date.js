import Ember from 'ember';

export function currentDate() {
  return moment().format('h:mm a');
}

export default Ember.Helper.helper(currentDate);
