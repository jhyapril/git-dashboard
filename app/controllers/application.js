import Controller from '@ember/controller';

const { alias } = Ember.computed;

export default Controller.extend({
  tracker : Ember.inject.controller(),
  login: Ember.inject.controller(),
});
