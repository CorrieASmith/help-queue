import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  postTime: DS.attr(),
  doneTime: DS.attr(),
  complete: DS.attr(),
  isComplete: function(){
    return this.get('complete') ==true;
  }.property('complete')
});
